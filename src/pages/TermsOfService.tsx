"use client";

import DesktopHeader from "@/components/DesktopHeader";
import BottomNav from "@/components/BottomNav";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const TermsOfService = () => {
  return (
    <div className="bg-background min-h-screen flex flex-col">
      <SEO
        title="Terms of Service – Doorifix"
        description="Read the terms and conditions for using Doorifix's appliance repair services."
        canonical="/terms"
      />
      <DesktopHeader />

      <div className="flex-1">
        <div className="max-w-3xl mx-auto px-5 md:px-8 py-10 md:py-16">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Terms of Service</h1>
          <p className="text-sm text-muted-foreground mb-8">Last updated: February 10, 2026</p>

          <div className="prose prose-sm max-w-none space-y-6 text-muted-foreground">
            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-foreground">1. Acceptance of Terms</h2>
              <p>By accessing or using the Doorifix website and services ("Services"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not access or use the Services. These Terms constitute a legally binding agreement between you ("User", "Customer", or "you") and Doorifix ("Company", "we", "us", or "our").</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-foreground">2. Description of Services</h2>
              <p>Doorifix provides home appliance repair and servicing, including but not limited to washing machines, refrigerators, air conditioners, microwaves, dryers, and dishwashers. Services are provided at the customer's premises ("Doorstep Service") by our trained and certified technicians.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-foreground">3. Service Booking & Confirmation</h2>
              <p>3.1. Service requests submitted through our website or application are subject to availability and confirmation by our team.</p>
              <p>3.2. A confirmed booking does not guarantee a specific time of arrival. Estimated arrival times are approximate and may vary due to unforeseen circumstances such as traffic, weather, or prior service engagements.</p>
              <p>3.3. You agree to provide accurate and complete information during the booking process, including your name, contact number, address, and a description of the appliance issue.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-foreground">4. Pricing & Payments</h2>
              <p>4.1. The Company provides a free diagnosis for all service requests. Repair costs, including parts and labor, will be communicated to the customer before any work begins.</p>
              <p>4.2. Prices are subject to change without prior notice. The price quoted at the time of service confirmation shall be the applicable price.</p>
              <p>4.3. Payment is due upon completion of the service unless otherwise agreed in writing. We accept cash, UPI, and digital payment methods.</p>
              <p>4.4. If a repair cannot be completed due to unavailability of parts, no charges will be levied for the diagnosis visit.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-foreground">5. Warranty on Repairs</h2>
              <p>5.1. All repairs performed by Doorifix technicians carry a warranty from the date of service completion.</p>
              <p>5.2. The warranty covers the same issue that was repaired. It does not cover new issues, physical damage, water damage, electrical surges, or misuse of the appliance after repair.</p>
              <p>5.3. Warranty claims must be reported within the warranty period by contacting our customer support. The Company reserves the right to inspect the appliance before honoring any warranty claim.</p>
              <p>5.4. Replaced parts carry the manufacturer's warranty, if any. Doorifix does not provide additional warranty on third-party parts beyond the service warranty.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-foreground">6. Customer Responsibilities</h2>
              <p>6.1. You must ensure safe and accessible conditions for our technicians to perform the service at your premises.</p>
              <p>6.2. You are responsible for backing up any data on smart appliances before service. The Company is not liable for data loss.</p>
              <p>6.3. You must be present (or an authorized representative) at the service location during the repair.</p>
              <p>6.4. Any misrepresentation of the appliance condition or issue may result in additional charges.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-foreground">7. Cancellation & Rescheduling</h2>
              <p>7.1. You may cancel or reschedule a service booking at no charge by contacting us at least 2 hours before the scheduled arrival time.</p>
              <p>7.2. Repeated no-shows or last-minute cancellations may result in a service fee or suspension of booking privileges.</p>
              <p>7.3. The Company reserves the right to cancel or reschedule a service due to unavailability, emergencies, or force majeure events.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-foreground">8. Limitation of Liability</h2>
              <p>8.1. To the maximum extent permitted by applicable law, the Company's total liability for any claim arising from the Services shall not exceed the amount paid by you for the specific service giving rise to the claim.</p>
              <p>8.2. The Company shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or use, arising from or related to the Services.</p>
              <p>8.3. The Company is not liable for pre-existing defects, wear and tear, or damage caused by power fluctuations, water damage, pest infestation, or any cause beyond our control.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-foreground">9. Intellectual Property</h2>
              <p>All content on the Doorifix website, including text, graphics, logos, images, and software, is the property of Doorifix and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our prior written consent.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-foreground">10. Indemnification</h2>
              <p>You agree to indemnify, defend, and hold harmless Doorifix, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from your use of the Services, violation of these Terms, or infringement of any third-party rights.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-foreground">11. Governing Law & Dispute Resolution</h2>
              <p>11.1. These Terms shall be governed by and construed in accordance with the laws of India.</p>
              <p>11.2. Any disputes arising from these Terms or the Services shall first be attempted to be resolved through good-faith negotiation. If unresolved within 30 days, either party may pursue resolution through arbitration in Bangalore, Karnataka, under the Arbitration and Conciliation Act, 1996.</p>
              <p>11.3. The courts of Bangalore, Karnataka shall have exclusive jurisdiction over any legal proceedings.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-foreground">12. Modifications to Terms</h2>
              <p>The Company reserves the right to modify these Terms at any time. Changes will be effective immediately upon posting to this page. Your continued use of the Services after changes are posted constitutes acceptance of the modified Terms. We encourage you to review this page periodically.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-foreground">13. Severability</h2>
              <p>If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that these Terms shall otherwise remain in full force and effect.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-foreground">14. Contact Information</h2>
              <p>For questions about these Terms, please contact us:</p>
              <p>Email: <a href="mailto:doorifix@gmail.com" className="text-primary hover:underline">doorifix@gmail.com</a></p>
              <p>Phone: <a href="tel:+919886579923" className="text-primary hover:underline">9886 579 923</a></p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
      <BottomNav />
    </div>
  );
};

export default TermsOfService;
