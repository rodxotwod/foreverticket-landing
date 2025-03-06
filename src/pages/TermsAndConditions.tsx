import React from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function TermsAndConditions() {
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
          <h1 className="text-3xl font-bold mb-8">Terms & Conditions</h1>
          
          <div className="prose prose-gray max-w-none">
            <h2 className="text-2xl font-semibold mb-6">Terms and Conditions for ForeverTicket</h2>
            <p className="text-lg mb-6"><strong>Last updated:</strong> March, 1st 2025</p>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">1. Introduction</h3>
            <p>Welcome to <strong>ForeverTicket</strong>! These Terms and Conditions govern your use of the ForeverTicket app. By accessing or using our app, you agree to these terms, which comply with <strong>French consumer law</strong> and <strong>EU regulations</strong>.</p>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">2. Services Provided</h3>
            <p>ForeverTicket allows users to store tickets (concerts, travel, events, subscriptions, etc.) in one secure place. Users can:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Use a <strong>free plan</strong> (limit: 3 tickets and 3 categories).</li>
              <li>Upgrade to a <strong>premium plan</strong> (24€/year) for unlimited tickets and categories.</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">3. Subscription, Payment & Right of Withdrawal</h3>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Annual subscription:</strong> 24€/year, billed via App Store/Google Play.</li>
              <li><strong>No refunds after payment</strong>, except where required by law.</li>
              <li><strong>Right of Withdrawal</strong>: Under <strong>French consumer law</strong>, you have <strong>14 days</strong> from the purchase date to cancel your subscription and receive a full refund if you have not used the service.</li>
              <li><strong>Automatic Renewal:</strong> Subscription renews automatically unless canceled at least <strong>24 hours</strong> before renewal.</li>
              <li>Payments are processed by <strong>Apple App Store</strong> and <strong>Google Play</strong>, subject to their respective terms.</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">4. User Obligations</h3>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Illegal Content Prohibited</strong>: You must not upload any <strong>illegal content</strong>.</li>
              <li><strong>Sensitive Data Disclaimer</strong>: We are not intended to process documents containing <strong>sensitive data</strong> (such as judicial, health, or biometric data). If you choose to upload such documents, you do so at your own risk, and we disclaim any responsibility.</li>
              <li><strong>Account Security:</strong> You are responsible for maintaining the confidentiality of your account credentials.</li>
              <li><strong>Ticket Information & Live Updates:</strong> ForeverTicket allows users to upload and store tickets in the form of <strong>images, PDFs, and screenshots</strong> for convenience. However, ForeverTicket <strong>does not provide real-time updates</strong> regarding schedule changes, cancellations, delays, or venue modifications for transportation, events, or other services. Users are responsible for checking official sources, such as the ticket issuer's website or app, to stay informed of any updates. ForeverTicket is not liable for any missed events, transport delays, or other inconveniences resulting from failure to verify updated information.</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">5. Right to Use & Intellectual Property</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>ForeverTicket grants you a <strong>personal, non-transferable, non-exclusive license</strong> to use the app.</li>
              <li>All content, trademarks, and code related to ForeverTicket remain the property of ForeverTicket.</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">6. Limitation of Liability (Under French Law)</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>ForeverTicket is provided <strong>"as is"</strong>, with no absolute guarantee of availability.</li>
              <li>As per <strong>French consumer law</strong>, we are liable for service defects <strong>only if they make the app unusable for its intended purpose</strong>.</li>
              <li>Users are responsible for backing up their data.</li>
              <li><strong>Third-Party Services Liability:</strong> ForeverTicket relies on third-party services such as Apple App Store, Google Play, and Supabase for payments, authentication, and storage. We are not responsible for failures, errors, or issues caused by these external providers.</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">7. Termination & Account Deletion</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>You may delete your account at any time.</li>
              <li>We may suspend or terminate accounts that violate these terms.</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">8. Governing Law & Dispute Resolution</h3>
            <p>These terms are governed by <strong>French law</strong>. In case of disputes, users can:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Request mediation through an approved consumer mediator.</li>
              <li>Take legal action in <strong>French courts</strong>.</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">9. Changes to Terms</h3>
            <p>We may update these terms at any time. Continued use of the app after updates constitutes acceptance.</p>
            
            <div className="mt-8">
              <p>For any questions about these Terms, please contact us at:</p>
              <p><a href="mailto:teamforeverticket@gmail.com" className="text-primary hover:underline">teamforeverticket@gmail.com</a></p>
            </div>
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
