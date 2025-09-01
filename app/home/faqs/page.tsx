import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQs(){

    const faqs = [
    {
      question: "How do I book a cycle through MJOLLNIR?",
      answer: "You can book a cycle through our mobile app by selecting your preferred pickup location, choosing the duration, and completing the booking. The app will guide you to the nearest available cycle and provide unlock instructions."
    },
    {
      question: "What are the charges for using MJOLLNIR cycles?",
      answer: "Our pricing is transparent and competitive. We offer hourly rates, daily passes, and monthly subscriptions. Corporate partnerships include special rates for employees. Check our app for current pricing in your location."
    },
    {
      question: "Are helmets provided with the cycles?",
      answer: "Yes, we provide sanitized helmets with every cycle rental. Safety is our top priority, and we ensure all safety equipment is regularly cleaned and maintained according to health standards."
    },
    {
      question: "What happens if the cycle breaks down during my ride?",
      answer: "If you experience any technical issues during your ride, contact our support team immediately through the app. We provide 24/7 assistance and will arrange for immediate replacement or roadside assistance."
    },
    {
      question: "Can I use MJOLLNIR cycles for long-distance rides?",
      answer: "Our cycles are designed for urban commuting and short to medium-distance rides within campus and city limits. For longer rides, we recommend our premium cycle options which are better suited for extended journeys."
    },
    {
      question: "How does the corporate partnership program work?",
      answer: "We work with companies to provide customized cycling solutions for their employees. This includes on-campus cycle stations, preferential pricing, branded cycles, and dedicated support. Contact our corporate team for a tailored proposal."
    },
    {
      question: "Is there a mobile app for iOS and Android?",
      answer: "Yes, MJOLLNIR app is available on both iOS and Android platforms. The app provides real-time cycle availability, booking management, ride tracking, payment processing, and customer support."
    },
    {
      question: "What safety measures are in place?",
      answer: "We conduct daily safety checks on all cycles, provide mandatory helmets, have GPS tracking on all bikes, offer 24/7 customer support, and maintain comprehensive insurance coverage for all users."
    },
    {
      question: "Can I return the cycle to any location?",
      answer: "Cycles must be returned to designated MJOLLNIR stations within your campus or authorized return points. The app will show you the nearest return locations and guide you there."
    },
    {
      question: "How do you track carbon savings?",
      answer: "Our app automatically calculates carbon savings based on the distance traveled by cycle versus equivalent car travel. We use standard emission factors and provide detailed impact reports to users and corporate partners."
    },
    {
      question: "What if I lose or damage a cycle?",
      answer: "In case of loss or damage, please report it immediately through the app. Depending on the situation, standard repair charges or replacement costs may apply. We offer insurance options to minimize user liability."
    },
    {
      question: "Are group bookings available?",
      answer: "Yes, we support group bookings for corporate events, team outings, or group rides. Contact our support team to arrange multiple cycle bookings and get group discounts."
    }
  ];

    return(
        <>
        <section className="py-20 bg-gray-50 font-codec-pro">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Find answers to common questions about MJOLLNIR services
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Still have questions? We are here to help!
            </p>
            <div className="space-y-2">
              <p className="text-sm text-gray-500">Email: support@mjollnir.com</p>
              <p className="text-sm text-gray-500">Phone: +91 40 1234 5678</p>
              <p className="text-sm text-gray-500">Available 24/7 for assistance</p>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}

