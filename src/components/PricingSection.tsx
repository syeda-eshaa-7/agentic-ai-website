// components/sections/PricingSection.tsx

const pricingPlans = [
    {
      name: "Basic",
      price: "$10/month",
      features: ["10GB Storage", "Basic Support", "Single User", "Community Access", "Weekly Updates"],
      isBestseller: false,
      strikethrough: 3,
    },
    {
      name: "Standard",
      price: "$20/month",
      features: ["50GB Storage", "Priority Support", "Up to 5 Users", "Community Access", "Daily Updates"],
      isBestseller: true,
      strikethrough: 0,
    },
    {
      name: "Premium",
      price: "$30/month",
      features: ["200GB Storage", "24/7 Support", "Unlimited Users", "Community Access", "Real-time Updates"],
      isBestseller: false,
      strikethrough: 0,
    },
  ];
  
  export default function PricingSection() {
    return (
      <section className="py-12 bg-transparent">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white dark:text-gray-200">Pricing Plans</h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">Choose the plan that suits you best</p>
          </div>
          <div className="flex flex-wrap justify-center">
            {pricingPlans.map((plan, index) => (
              <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4">
                <div
                  className={`p-6 bg-white/10 backdrop-blur-lg rounded-lg shadow-lg dark:bg-gray-800/50 transform transition duration-500 hover:scale-105 text-center ${
                    plan.isBestseller
                      ? "border-2 border-transparent bg-gradient-to-r from-purple-500 to-pink-500"
                      : "border border-gray-200 dark:border-gray-700"
                  }`}
                >
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">{plan.name}</h3>
                  <p className="mt-4 text-white dark:text-gray-300">{plan.price}</p>
                  {plan.isBestseller && (
                    <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-purple-500 rounded-full">
                      Bestseller
                    </span>
                  )}
                  <ul className="mt-6 mb-6 space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-600 dark:text-gray-400">
                        {featureIndex < plan.strikethrough ? <s>{feature}</s> : feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full px-6 py-3 mt-4 font-semibold text-white rounded-lg transition-all duration-300 ${
                      plan.isBestseller
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                        : "bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600"
                    }`}
                  >
                    Choose Plan
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }