import DesktopHeader from "@/components/DesktopHeader";
import BottomNav from "@/components/BottomNav";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const PrivacyPolicy = () => {
  return (
    <div className="bg-background min-h-screen flex flex-col">
      <SEO
        title="Privacy Policy – Arrowmind Service Center"
        description="Learn how Arrowmind Service Center collects, uses, and protects your personal information."
        canonical="/privacy"
      />
      <DesktopHeader />

      <div className="flex-1">
        <div className="max-w-3xl mx-auto px-5 md:px-8 py-10 md:py-16">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground mb-8">Last updated: February 10, 2026</p>

          <div className="prose prose-sm max-w-none space-y-6 text-muted-foreground">
            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-foreground">1. Introduction</h2>
              <p>Arrowmind Service Center ("Company", "we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you use our website, mobile application, and services (collectively, "Services"). By using our Services, you consent to the practices described in this Policy.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-foreground">2. Information We Collect</h2>
              <p><strong className="text-foreground">2.1. Information You Provide:</strong></p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Full name</li>
                <li>Phone number</li>
                <li>Email address (if provided)</li>
                <li>Service location / address</li>
                <li>Appliance details and issue description</li>
                <li>Warranty information</li>
              </ul>
              <p><strong className="text-foreground">2.2. Information Collected Automatically:</strong></p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Device type, browser type, and operating system</li>
                <li>IP address and approximate location</li>
                <li>Pages visited, time spent, and navigation patterns</li>
                <li>Referring website or source</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-foreground">3. How We Use Your Information</h2>
              <p>We use the information collected for the following purposes:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>To process and fulfill your service requests</li>
                <li>To communicate with you regarding bookings, confirmations, and updates</li>
                <li>To assign technicians and manage service logistics</li>
                <li>To improve our Services, website, and customer experience</li>
                <li>To send promotional communications (only with your consent; you may opt out at any time)</li>
                <li>To comply with legal obligations and resolve disputes</li>
                <li>To detect, prevent, and address technical issues, fraud, or security concerns</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-foreground">4. Data Sharing & Disclosure</h2>
              <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong className="text-foreground">Service Technicians:</strong> Your name, phone number, address, and appliance details are shared with assigned technicians solely for the purpose of completing the repair.</li>
                <li><strong className="text-foreground">Service Providers:</strong> We may use third-party service providers (hosting, analytics, communication tools) who process data on our behalf under strict confidentiality agreements.</li>
                <li><strong className="text-foreground">Legal Requirements:</strong> We may disclose information if required by law, court order, or governmental regulation, or to protect our rights, safety, or property.</li>
                <li><strong className="text-foreground">Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the business transaction.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-foreground">5. Data Retention</h2>
              <p>5.1. We retain your personal information for as long as necessary to fulfill the purposes outlined in this Policy, comply with our legal obligations, resolve disputes, and enforce our agreements.</p>
              <p>5.2. Service booking records are retained for a minimum of 3 years for warranty tracking and quality assurance purposes.</p>
              <p>5.3. You may request deletion of your personal data at any time by contacting us. We will process your request within 30 days, subject to legal and contractual obligations.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-foreground">6. Data Security</h2>
              <p>6.1. We implement industry-standard security measures to protect your personal information, including encryption of data in transit (TLS/SSL), secure database storage, and access controls.</p>
              <p>6.2. Access to personal data is restricted to authorized employees and technicians on a need-to-know basis.</p>
              <p>6.3. While we strive to protect your information, no method of electronic transmission or storage is 100% secure. We cannot guarantee absolute security.</p>
              <p>6.4. In the event of a data breach that poses a risk to your rights and freedoms, we will notify affected individuals and relevant authorities as required by applicable law.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-foreground">7. Cookies & Tracking</h2>
              <p>7.1. Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyze usage patterns, and deliver relevant content.</p>
              <p>7.2. <strong className="text-foreground">Essential Cookies:</strong> Required for the website to function properly (e.g., session management, security).</p>
              <p>7.3. <strong className="text-foreground">Analytics Cookies:</strong> Help us understand how visitors interact with our website to improve performance and content.</p>
              <p>7.4. You can manage cookie preferences through your browser settings. Disabling cookies may affect certain features of the website.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-foreground">8. Your Rights</h2>
              <p>Subject to applicable law, you have the following rights regarding your personal information:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong className="text-foreground">Access:</strong> Request a copy of your personal data we hold</li>
                <li><strong className="text-foreground">Correction:</strong> Request correction of inaccurate or incomplete data</li>
                <li><strong className="text-foreground">Deletion:</strong> Request deletion of your personal data</li>
                <li><strong className="text-foreground">Objection:</strong> Object to processing of your data for marketing purposes</li>
                <li><strong className="text-foreground">Portability:</strong> Request transfer of your data in a structured, commonly used format</li>
                <li><strong className="text-foreground">Withdraw Consent:</strong> Withdraw consent for data processing at any time</li>
              </ul>
              <p>To exercise any of these rights, contact us at <a href="mailto:arrowmind.in@gmail.com" className="text-primary hover:underline">arrowmind.in@gmail.com</a>. We will respond within 30 days.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-foreground">9. Children's Privacy</h2>
              <p>Our Services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child, we will take steps to delete it promptly.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-foreground">10. Third-Party Links</h2>
              <p>Our website may contain links to third-party websites or services. We are not responsible for the privacy practices or content of these third parties. We encourage you to review their privacy policies before providing any personal information.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-foreground">11. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last updated" date. Your continued use of the Services after changes are posted constitutes acceptance of the revised Policy. We encourage you to review this page periodically.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-foreground">12. Grievance Officer</h2>
              <p>In accordance with the Information Technology Act, 2000, and the rules made thereunder, the Grievance Officer for the purpose of this Privacy Policy is:</p>
              <p><strong className="text-foreground">Arrowmind Service Center</strong></p>
              <p>Email: <a href="mailto:arrowmind.in@gmail.com" className="text-primary hover:underline">arrowmind.in@gmail.com</a></p>
              <p>Phone: <a href="tel:+9109100038182" className="text-primary hover:underline">091 0003 8182</a></p>
              <p>Response time: Within 30 days of receiving a complaint.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-foreground">13. Governing Law</h2>
              <p>This Privacy Policy shall be governed by and construed in accordance with the laws of India, including the Information Technology Act, 2000, and the Digital Personal Data Protection Act, 2023 (as applicable). Any disputes shall be subject to the exclusive jurisdiction of the courts of Bangalore, Karnataka.</p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
      <BottomNav />
    </div>
  );
};

export default PrivacyPolicy;
