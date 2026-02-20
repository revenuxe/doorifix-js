import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Eye, Trash2, LogOut, Phone, MapPin, Wrench, Shield, Calendar, Search, Users, Mail, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import arrowmindLogo from "@/assets/arrowmind-logo.webp";

interface Booking {
  id: string;
  name: string;
  phone: string;
  location: string;
  appliance: string;
  warranty: string;
  case_number: string;
  created_at: string;
}

interface ContactLead {
  id: string;
  name: string;
  email: string | null;
  phone: string;
  message: string;
  created_at: string;
}

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [contactLeads, setContactLeads] = useState<ContactLead[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const [selectedContact, setSelectedContact] = useState<ContactLead | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"bookings" | "contacts">("bookings");

  useEffect(() => {
    checkAdminAndFetch();
  }, []);

  const checkAdminAndFetch = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      navigate("/admin/login");
      return;
    }

    const { data: roles } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", session.user.id)
      .eq("role", "admin");

    if (!roles || roles.length === 0) {
      await supabase.auth.signOut();
      navigate("/admin/login");
      return;
    }

    fetchData();
  };

  const fetchData = async () => {
    const [bookingsRes, contactsRes] = await Promise.all([
      supabase.from("bookings").select("*").order("created_at", { ascending: false }),
      supabase.from("contact_leads").select("*").order("created_at", { ascending: false }),
    ]);

    if (bookingsRes.error) {
      toast({ title: "Error fetching bookings", variant: "destructive" });
    } else {
      setBookings(bookingsRes.data || []);
    }

    if (contactsRes.error) {
      toast({ title: "Error fetching contact leads", variant: "destructive" });
    } else {
      setContactLeads(contactsRes.data || []);
    }

    setLoading(false);
  };

  const deleteBooking = async (id: string) => {
    const { error } = await supabase.from("bookings").delete().eq("id", id);
    if (error) {
      toast({ title: "Delete failed", variant: "destructive" });
    } else {
      setBookings((prev) => prev.filter((b) => b.id !== id));
      setSelectedBooking(null);
      toast({ title: "Lead deleted" });
    }
  };

  const deleteContact = async (id: string) => {
    const { error } = await supabase.from("contact_leads").delete().eq("id", id);
    if (error) {
      toast({ title: "Delete failed", variant: "destructive" });
    } else {
      setContactLeads((prev) => prev.filter((c) => c.id !== id));
      setSelectedContact(null);
      toast({ title: "Contact deleted" });
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin/login");
  };

  const filteredBookings = bookings.filter(
    (b) =>
      b.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.phone.includes(searchQuery) ||
      b.appliance.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (b.case_number && b.case_number.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const filteredContacts = contactLeads.filter(
    (c) =>
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.phone.includes(searchQuery) ||
      c.message.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (c.email && c.email.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const formatDate = (d: string) => {
    const date = new Date(d);
    return date.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const totalLeads = bookings.length + contactLeads.length;
  const todayLeads = [...bookings, ...contactLeads].filter((b) => new Date(b.created_at).toDateString() === new Date().toDateString()).length;
  const weekLeads = [...bookings, ...contactLeads].filter((b) => { const diff = (Date.now() - new Date(b.created_at).getTime()) / (1000 * 60 * 60 * 24); return diff <= 7; }).length;
  const monthLeads = [...bookings, ...contactLeads].filter((b) => { const d = new Date(b.created_at); const now = new Date(); return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear(); }).length;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-card border-b border-border px-5 py-3">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={arrowmindLogo} alt="Arrowmind" className="h-8" />
            <div className="hidden sm:block">
              <h1 className="text-sm font-bold text-foreground leading-none">Admin Panel</h1>
              <p className="text-[11px] text-muted-foreground">Lead Management</p>
            </div>
          </div>
          <Button variant="ghost" size="sm" onClick={handleLogout} className="text-muted-foreground gap-1.5">
            <LogOut size={15} />
            <span className="hidden sm:inline">Logout</span>
          </Button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-5 py-6 space-y-5">
        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: "Total Leads", value: totalLeads, icon: Users, color: "bg-primary/10 text-primary" },
            { label: "Today", value: todayLeads, icon: Calendar, color: "bg-green-500/10 text-green-600" },
            { label: "This Week", value: weekLeads, icon: Wrench, color: "bg-amber-500/10 text-amber-600" },
            { label: "This Month", value: monthLeads, icon: Shield, color: "bg-purple-500/10 text-purple-600" },
          ].map((stat) => (
            <div key={stat.label} className="bg-card rounded-2xl border border-border p-4">
              <div className={`w-8 h-8 rounded-lg ${stat.color} flex items-center justify-center mb-2`}>
                <stat.icon size={16} />
              </div>
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-[11px] text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab("bookings")}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
              activeTab === "bookings"
                ? "bg-primary text-primary-foreground"
                : "bg-card border border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            <Wrench size={14} /> Bookings ({bookings.length})
          </button>
          <button
            onClick={() => setActiveTab("contacts")}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
              activeTab === "contacts"
                ? "bg-primary text-primary-foreground"
                : "bg-card border border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            <MessageSquare size={14} /> Contacts ({contactLeads.length})
          </button>
        </div>

        {/* Search */}
        <div className="relative">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder={activeTab === "bookings" ? "Search by name, phone, appliance..." : "Search by name, phone, message..."}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 rounded-xl h-11"
          />
        </div>

        {/* Leads List */}
        {loading ? (
          <div className="text-center py-16 text-muted-foreground text-sm">Loading leads...</div>
        ) : activeTab === "bookings" ? (
          filteredBookings.length === 0 ? (
            <div className="text-center py-16">
              <Users size={40} className="mx-auto text-muted-foreground/30 mb-3" />
              <p className="text-muted-foreground text-sm">No bookings found</p>
            </div>
          ) : (
            <div className="space-y-2.5">
              {filteredBookings.map((booking) => (
                <div
                  key={booking.id}
                  className="bg-card rounded-2xl border border-border p-4 flex items-center gap-3 hover:border-primary/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-sm font-bold text-primary">
                      {booking.name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="font-semibold text-sm text-foreground truncate">{booking.name}</p>
                      <span className="text-[10px] font-mono bg-primary/10 text-primary px-1.5 py-0.5 rounded-md shrink-0">{booking.case_number}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-[11px] text-muted-foreground">{booking.appliance}</span>
                      <span className="text-[11px] text-muted-foreground/40">•</span>
                      <span className="text-[11px] text-muted-foreground">{formatDate(booking.created_at)}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      onClick={() => setSelectedBooking(booking)}
                      className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
                      title="View details"
                    >
                      <Eye size={15} />
                    </button>
                    <button
                      onClick={() => deleteBooking(booking.id)}
                      className="w-8 h-8 rounded-lg bg-destructive/10 flex items-center justify-center text-destructive hover:bg-destructive/20 transition-colors"
                      title="Delete lead"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )
        ) : (
          filteredContacts.length === 0 ? (
            <div className="text-center py-16">
              <MessageSquare size={40} className="mx-auto text-muted-foreground/30 mb-3" />
              <p className="text-muted-foreground text-sm">No contact enquiries found</p>
            </div>
          ) : (
            <div className="space-y-2.5">
              {filteredContacts.map((contact) => (
                <div
                  key={contact.id}
                  className="bg-card rounded-2xl border border-border p-4 flex items-center gap-3 hover:border-primary/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0">
                    <span className="text-sm font-bold text-amber-600">
                      {contact.name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm text-foreground truncate">{contact.name}</p>
                    <p className="text-[11px] text-muted-foreground truncate mt-0.5">{contact.message}</p>
                    <span className="text-[11px] text-muted-foreground/60">{formatDate(contact.created_at)}</span>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      onClick={() => setSelectedContact(contact)}
                      className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
                      title="View details"
                    >
                      <Eye size={15} />
                    </button>
                    <button
                      onClick={() => deleteContact(contact.id)}
                      className="w-8 h-8 rounded-lg bg-destructive/10 flex items-center justify-center text-destructive hover:bg-destructive/20 transition-colors"
                      title="Delete"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )
        )}
      </main>

      {/* Booking Detail Dialog */}
      <Dialog open={!!selectedBooking} onOpenChange={(open) => !open && setSelectedBooking(null)}>
        <DialogContent className="max-w-sm rounded-2xl mx-4">
          <DialogHeader>
            <DialogTitle className="text-lg">Booking Details</DialogTitle>
            <DialogDescription className="text-xs text-muted-foreground">
              Submitted {selectedBooking && formatDate(selectedBooking.created_at)}
            </DialogDescription>
          </DialogHeader>

          {selectedBooking && (
            <div className="space-y-3 pt-1">
              {[
                { icon: Users, label: "Name", value: selectedBooking.name },
                { icon: Shield, label: "Case No.", value: selectedBooking.case_number },
                { icon: Phone, label: "Phone", value: selectedBooking.phone },
                { icon: MapPin, label: "Location", value: selectedBooking.location },
                { icon: Wrench, label: "Appliance", value: selectedBooking.appliance },
                { icon: Shield, label: "Warranty", value: selectedBooking.warranty },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3 bg-muted/50 rounded-xl px-3.5 py-2.5">
                  <item.icon size={15} className="text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">{item.label}</p>
                    <p className="text-sm font-medium text-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
              <div className="flex gap-2 pt-2">
                <Button variant="outline" size="sm" className="flex-1 rounded-xl" onClick={() => window.open(`tel:${selectedBooking.phone}`)}>
                  <Phone size={14} className="mr-1.5" /> Call
                </Button>
                <Button variant="destructive" size="sm" className="rounded-xl" onClick={() => deleteBooking(selectedBooking.id)}>
                  <Trash2 size={14} className="mr-1.5" /> Delete
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Contact Detail Dialog */}
      <Dialog open={!!selectedContact} onOpenChange={(open) => !open && setSelectedContact(null)}>
        <DialogContent className="max-w-sm rounded-2xl mx-4">
          <DialogHeader>
            <DialogTitle className="text-lg">Contact Enquiry</DialogTitle>
            <DialogDescription className="text-xs text-muted-foreground">
              Submitted {selectedContact && formatDate(selectedContact.created_at)}
            </DialogDescription>
          </DialogHeader>

          {selectedContact && (
            <div className="space-y-3 pt-1">
              {[
                { icon: Users, label: "Name", value: selectedContact.name },
                { icon: Phone, label: "Phone", value: selectedContact.phone },
                ...(selectedContact.email ? [{ icon: Mail, label: "Email", value: selectedContact.email }] : []),
                { icon: MessageSquare, label: "Message", value: selectedContact.message },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3 bg-muted/50 rounded-xl px-3.5 py-2.5">
                  <item.icon size={15} className="text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">{item.label}</p>
                    <p className="text-sm font-medium text-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
              <div className="flex gap-2 pt-2">
                <Button variant="outline" size="sm" className="flex-1 rounded-xl" onClick={() => window.open(`tel:${selectedContact.phone}`)}>
                  <Phone size={14} className="mr-1.5" /> Call
                </Button>
                <Button variant="destructive" size="sm" className="rounded-xl" onClick={() => deleteContact(selectedContact.id)}>
                  <Trash2 size={14} className="mr-1.5" /> Delete
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminDashboard;
