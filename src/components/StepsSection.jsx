import userIcon from "../assets/user.png";
import packageIcon from "../assets/package.png";
import rocketIcon from "../assets/rocket.png";

const steps = [
  {
    id: "01",
    title: "Create Account",
    desc: "Sign up for free in seconds. No credit card required to get started.",
    icon: userIcon,
  },
  {
    id: "02",
    title: "Choose Products",
    desc: "Browse our catalog and select the tools that fit your needs.",
    icon: packageIcon,
  },
  {
    id: "03",
    title: "Start Creating",
    desc: "Download and start using your premium tools immediately.",
    icon: rocketIcon,
  },
];

const StepsSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Get Started In 3 Steps
        </h2>
        <p className="text-gray-500 mb-10">
          Start using premium digital tools in minutes, not hours.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white p-6 rounded-xl border border-gray-200 relative shadow-sm hover:shadow-md transition"
            >
              {/* Number Badge */}
              <span className="absolute top-4 right-4 bg-purple-600 text-white text-xs px-2 py-1 rounded-full">
                {step.id}
              </span>

              {/*  Image Icon */}
              <img
                src={step.icon}
                alt={step.title}
                className="w-12 h-12 mx-auto mb-4"
              />

              <h3 className="font-semibold text-lg">{step.title}</h3>
              <p className="text-sm text-gray-500 mt-2">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;