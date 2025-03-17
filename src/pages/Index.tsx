import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Features } from "@/components/Features";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Index() {
  useEffect(() => {
    // Add smooth scrolling behavior for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(id || '');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Add event listeners to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick as EventListener);
    });

    // Cleanup event listeners on component unmount
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick as EventListener);
      });
    };
  }, []);
  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b py-2">
        <div className="container flex items-center justify-between h-16 px-4 md:px-6">
          <a href="#" className="flex items-center gap-2">
            <img src="/ForeverTicket.svg" alt="Forever Ticket" className="h-5" />
          </a>

          <div className="flex items-center gap-12">
            <nav className="hidden md:flex items-center gap-7">
              <a href="#features" className="text-md font-medium hover:text-primary transition-colors">Features</a>
              <a href="#pricing" className="text-md font-medium hover:text-primary transition-colors">Pricing</a>
            </nav>

            <Button variant="default" className="rounded-full">
              Download Now
            </Button>
          </div>

        </div>
      </header>
      {/* Hero Section */}
      <section className="relative py-48 overflow-hidden">
        <div className="absolute inset-0 hero-pattern"></div>
        <div className="relative container px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-12">
            <div className="flex flex-col items-start text-left space-y-8 md:w-1/2">
              <div className="font-semibold text-sm inline-block px-3 py-1 bg-primary/10 text-primary rounded-full animate-fade-in">
                All your tickets in one place
              </div>
              <h1 className="text-4xl md:text-6xl font-bold animate-fade-up">
                Never Lose Another Ticket
                <span className="gradient-text"> Again</span>
              </h1>
              <p className="text-gray-600 text-lg md:text-xl animate-fade-up" style={{ animationDelay: "200ms" }}>
                Store all your tickets—concerts, train tickets, festivals, theater, and more—in one secure and accessible place, even offline.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "400ms" }}>
                <Button size="lg" variant="default" className="rounded-full">
                  Download Now <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center animate-fade-in" style={{ animationDelay: "300ms" }}>
              <img
                src="/Mockupforeverticket.png"
                alt="Person using ForeverTicket app"
                className="rounded-lg max-w-full h-auto mix-blend-multiply"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features">
        <Features />
      </section>

      {/* Pricing Section */}
      <section id="pricing">
        <Pricing />
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="container px-4 md:px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex items-start">
              <img src="/ForeverTicket.svg" alt="ForeverTicket Logo" className="h-5" />
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <p className="text-gray-600">
                <a href="mailto:teamforeverticket@gmail.com" className="hover:text-primary">
                  teamforeverticket@gmail.com
                </a>
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Social</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-primary">Instagram</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary">TikTok</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary">LinkedIn</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Download</h3>
              <div className="space-y-3">
                <a href="https://apps.apple.com/fr/app/foreverticket-event-wallet/id6742692231?l=en-GB" className="block">
                  <img src="/Download_on_the_App_Store_Badge 1.png" alt="Download on the App Store" className="h-10" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center text-gray-600">
            <div className="flex justify-center space-x-4 mb-4">
              <Link to="/TermsAndConditions" className="hover:text-primary">Terms & Conditions</Link>
              <span>•</span>
              <Link to="/PrivacyPolicy" className="hover:text-primary">Privacy Policy</Link>
            </div>
            <p>&copy; {new Date().getFullYear()} ForeverTicket. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
