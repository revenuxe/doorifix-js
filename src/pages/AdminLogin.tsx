"use client";

import { imageSrc } from "@/lib/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Lock, Mail, Eye, EyeOff } from "lucide-react";
import doorifixLogo from "@/assets/doorifix-logo.webp";

const AdminLogin = () => {
  const router = useRouter();
  const navigate = (path: string | number, replace = false) => {
    if (typeof path === "number") router.back();
    else if (replace) router.replace(path);
    else router.push(path);
  };
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const redirectExistingAdmin = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) return;

      const { data: roles } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", session.user.id)
        .eq("role", "admin");

      if (roles && roles.length > 0) {
        navigate("/admin", true);
      }
    };

    redirectExistingAdmin();
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      toast({ title: "Login failed", description: error.message, variant: "destructive" });
      setLoading(false);
      return;
    }

    // Check admin role
    const { data: roles, error: roleError } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", data.user.id)
      .eq("role", "admin");

    if (roleError || !roles || roles.length === 0) {
      await supabase.auth.signOut();
      toast({ title: "Access denied", description: "You are not an admin.", variant: "destructive" });
      setLoading(false);
      return;
    }

    toast({ title: "Welcome back, Admin!" });
    navigate("/admin", true);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-5">
      <div className="w-full max-w-sm space-y-8">
        {/* Logo & header */}
        <div className="text-center space-y-3">
          <img src={imageSrc(doorifixLogo)} alt="Doorifix" className="h-12 mx-auto" />
          <div>
            <h1 className="text-2xl font-bold text-foreground">Admin Panel</h1>
            <p className="text-sm text-muted-foreground mt-1">Sign in to manage your leads</p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="relative">
            <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="email"
              placeholder="admin@doorifix.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10 rounded-xl h-12"
              required
            />
          </div>
          <div className="relative">
            <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pl-10 pr-10 rounded-xl h-12"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground"
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
          <Button type="submit" className="w-full h-12 rounded-xl text-sm font-semibold" disabled={loading}>
            {loading ? "Signing in..." : "Sign In"}
          </Button>
        </form>

        <p className="text-center text-xs text-muted-foreground">
          Secured admin access only
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
