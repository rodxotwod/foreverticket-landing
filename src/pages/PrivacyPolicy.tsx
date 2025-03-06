import React from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b py-4">
        <div className="container px-4 md:px-6">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>
      
      <main className="container px-4 md:px-6 py-12">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm p-8">
          <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-gray max-w-none">
            <h2 className="text-2xl font-semibold mb-6">Privacy Policy for ForeverTicket</h2>
            <p className="text-lg mb-6"><strong>Last updated:</strong> March, 1st 2025</p>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">1. Introduction</h3>
            <p>This Privacy Policy explains how <strong>ForeverTicket</strong> collects, uses, and protects your data in compliance with <strong>GDPR</strong> and <strong>French data protection laws (CNIL)</strong>.</p>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">2. Data Controller</h3>
            <p>ForeverTicket: <a href="mailto:teamforeverticket@gmail.com" className="text-primary hover:underline">teamforeverticket@gmail.com</a></p>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">3. Data Collected</h3>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Personal Data:</strong> Name, email address (for account creation).</li>
              <li><strong>Uploaded Data:</strong> Tickets, screenshots, PDFs.</li>
              <li><strong>Usage Data:</strong> App interactions, subscription status.</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">4. Purpose of Processing</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>To provide and improve our services.</li>
              <li>To authenticate users and manage subscriptions.</li>
              <li>To process payments (via third-party platforms).</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">5. Legal Basis for Processing</h3>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Contractual necessity:</strong> To provide the app's services.</li>
              <li><strong>Consent:</strong> For optional marketing communications.</li>
              <li><strong>Legitimate interest:</strong> To improve app performance.</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">6. User Rights (Under GDPR & French Law)</h3>
            <p>Under GDPR and <strong>CNIL regulations</strong>, you have the right to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Access, correct, or delete</strong> your personal data.</li>
              <li><strong>Withdraw consent</strong> at any time.</li>
              <li><strong>Request data portability.</strong></li>
              <li><strong>File a complaint</strong> with CNIL (<strong><a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.cnil.fr</a></strong>).</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">7. Data Retention & Account Deletion</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Personal data is stored <strong>as long as you have an active account</strong>.</li>
              <li>Upon account deletion, all personal data is <strong>permanently removed within 30 days</strong>.</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">8. Third-Party Services</h3>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Supabase</strong>: Storage & authentication provider.</li>
              <li><strong>Payment Processors</strong>: Apple App Store and Google Play (their privacy terms apply).</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">9. International Transfers</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Data is stored <strong>in the EU</strong>.</li>
              <li>If transferred outside the EU, we apply <strong>appropriate safeguards</strong>.</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">10. Security</h3>
            <p>We implement industry-standard measures to protect your data. However, no system is completely secure.</p>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">11. Cookies</h3>
            <p>ForeverTicket uses <strong>essential cookies</strong> for app functionality. By using the app, you consent to cookie usage.</p>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">12. Changes to This Policy</h3>
            <p>We may update this Privacy Policy. Continued use of the app after updates means you accept the new terms.</p>
            
            <hr className="my-8" />
            
            <p>If you have any questions about these terms or privacy practices, contact us at: <a href="mailto:teamforeverticket@gmail.com" className="text-primary hover:underline">teamforeverticket@gmail.com</a>.</p>
          </div>
        </div>
      </main>
      
      <footer className="bg-white border-t py-6">
        <div className="container px-4 md:px-6 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} ForeverTicket. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
