
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is ForeverTicket and how does it work?",
    answer: "ForeverTicket is an app that allows you to store all your tickets (concerts, travel, events, subscriptions, etc.) in one secure place. Simply upload a screenshot or PDF of your ticket, organize them into categories, and access them anytime."
  },
  {
    question: "How do I get started with ForeverTicket?",
    answer: "Simply download the app from your device's app store, create an account, and start adding your tickets! You can begin with the free plan that includes storage for 3 tickets and 3 categories."
  },
  {
    question: "Can I access my tickets without internet?",
    answer: "Yes! Once your tickets are saved in ForeverTicket, they're available offline. You can access them anytime, anywhere, even without an internet connection."
  },
  {
    question: "Is ForeverTicket free to use?",
    answer: "Yes! ForeverTicket offers a free plan that allows you to store up to 3 upcoming tickets in 3 different categories. If you need unlimited storage, you can upgrade to the premium plan for 24€/year."
  },
  {
    question: "How does the premium subscription work?",
    answer: "The premium subscription costs 24€/year and gives you unlimited tickets and categories. Cancel anytime."
  },
  {
    question: "What type of documents can I add to ForeverTicket?",
    answer: "You can upload any digital ticket, including PDFs, screenshots, or pictures of tickets for concerts, transports, events, memberships, or subscriptions."
  }
];

export function FAQ() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Got questions? We've got answers.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
