import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Pricing() {
  return (
    <section className="py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Start with our free plan and upgrade whenever you're ready.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Free Plan */}
          <div className="relative bg-[#F7F7FF] rounded-2xl shadow-lg p-8 flex flex-col transform transition-all duration-200 hover:scale-105">
            <div className="mb-8">
              <h3 className="text-3xl font-semibold mb-2 text-[#000057]">Free</h3>
              <p className="text-3xl font-bold text-[#000057]">$0</p>
              <p className="text-[#000057]/80">Forever free</p>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-center">
                <Check className="text-[#FF5500] w-5 h-5 mr-2" />
                <span className="text-[#000057]">3 tickets storage</span>
              </li>
              <li className="flex items-center">
                <Check className="text-[#FF5500] w-5 h-5 mr-2" />
                <span className="text-[#000057]">3 categories</span>
              </li>
              <li className="flex items-center">
                <Check className="text-[#FF5500] w-5 h-5 mr-2" />
                <span className="text-[#000057]">Reminders</span>
              </li>
            </ul>
          </div>

          {/* Premium Plan */}
          <div className="relative bg-[#F7F7FF] rounded-2xl shadow-lg p-8 flex flex-col transform transition-all duration-200 hover:scale-105">
            <div className="absolute -top-4 right-4">
              <span className="bg-[#000057] text-white text-sm font-semibold px-3 py-1 rounded-full">
                Popular
              </span>
            </div>
            <div className="mb-8">
              <h3 className="text-3xl font-semibold mb-2 text-[#000057]">Premium</h3>
              <p className="text-3xl font-bold text-[#000057]">$24</p>
              <p className="text-[#000057]/80">Per year ($2 per month)</p>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-center">
                <Check className="text-[#FF5500] w-5 h-5 mr-2" />
                <span className="text-[#000057]">Unlimited tickets</span>
              </li>
              <li className="flex items-center">
                <Check className="text-[#FF5500] w-5 h-5 mr-2" />
                <span className="text-[#000057]">Unlimited categories</span>
              </li>
              <li className="flex items-center">
                <Check className="text-[#FF5500] w-5 h-5 mr-2" />
                <span className="text-[#000057]">Reminders</span>
              </li>
              <li className="flex items-center">
                <Check className="text-[#FF5500] w-5 h-5 mr-2" />
                <span className="text-[#000057]">Priority support</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
