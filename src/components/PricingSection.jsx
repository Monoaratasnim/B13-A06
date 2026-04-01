const plans = [
  {
    name: "Starter",
    price: 0,
    desc: "Perfect for getting started",
    features: [
      "Access to 10 free tools",
      "Basic templates",
      "Community support",
      "1 project per month",
    ],
    button: "Get Started Free",
  },
  {
    name: "Pro",
    price: 29,
    desc: "Best for professionals",
    popular: true,
    features: [
      "Access to all premium tools",
      "Unlimited templates",
      "Priority support",
      "Unlimited projects",
      "Cloud sync",
      "Advanced analytics",
    ],
    button: "Start Pro Trial",
  },
  {
    name: "Enterprise",
    price: 99,
    desc: "For teams and businesses",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantee",
      "Custom branding",
    ],
    button: "Contact Sales",
  },
];

const PricingSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-500 mb-10">
          Choose the plan that fits your needs.
        </p>

        {/* ✅ Responsive Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`p-6 rounded-xl border transition-all duration-300 ${
                plan.popular
                  ? "bg-linear-to-r from-purple-600 to-pink-500 text-white shadow-lg scale-105"
                  : "bg-white border-gray-200 hover:shadow-md"
              }`}
            >
              {/* ✅ Gradient Highlight for Pro */}
              {plan.popular && (
                <span className="bg-white text-purple-600 text-xs px-3 py-1 rounded-full inline-block mb-3 font-semibold">
                  Most Popular
                </span>
              )}

              <h3 className="font-semibold text-lg">{plan.name}</h3>
              <p className="text-sm mt-1 opacity-80">{plan.desc}</p>

              <h2 className="text-3xl font-bold mt-4">
                ${plan.price}
                <span className="text-sm">/month</span>
              </h2>

              <ul className="text-sm mt-4 space-y-2 text-left">
                {plan.features.map((f, idx) => (
                  <li key={idx}>✔ {f}</li>
                ))}
              </ul>

              <button
                className={`mt-6 w-full py-2 rounded-full font-medium ${
                  plan.popular
                    ? "bg-white text-purple-600"
                    : "bg-purple-600 text-white hover:bg-purple-700"
                }`}
              >
                {plan.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;