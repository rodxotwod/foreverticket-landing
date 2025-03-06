
import { Ticket, Upload, WifiOff, Bell, Infinity, Tag } from "lucide-react";

const features = [
  {
    icon: <Ticket className="w-6 h-6" />,
    title: "All Tickets in One Place",
    description: "Concerts, train tickets, festivals, theater, subscriptions, and more."
  },
  {
    icon: <Upload className="w-6 h-6" />,
    title: "Easy Imports",
    description: "Add tickets from PDFs, photos, or screenshots in seconds."
  },
  {
    icon: <WifiOff className="w-6 h-6" />,
    title: "Offline Access",
    description: "Your tickets, available anytime—even without an internet connection."
  },
  {
    icon: <Bell className="w-6 h-6" />,
    title: "Smart Reminders",
    description: "Get notified 3 days and 1 hour before your event."
  },
  {
    icon: <Tag className="w-6 h-6" />,
    title: "Custom Categories",
    description: "Personalize your experience with custom categories tailored to your needs."
  },
  {
    icon: <Infinity className="w-6 h-6" />,
    title: "Unlimited Storage",
    description: "Upgrade to add unlimited tickets and categories with Premium."
  }
];

export function Features() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Everything You Need</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            ForeverTicket brings all your tickets together in one secure, easy-to-use app.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
