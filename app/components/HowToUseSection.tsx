// app/components/HowToUseSection.tsx
export default function HowToUseSection() {
  const cards = [
    {
      title: "Upload Image",
      description: "Capture or upload a clear photo of the plant you want to identify. Ensure the entire plant is visible and well-lit.",
      icon: "📸"
    },
    {
      title: "Instant Identification",
      description: "Our AI analyzes the image and provides detailed information about the plant, including its name, scientific classification, and description.",
      icon: "🌿"
    },
    {
      title: "Comprehensive Information",
      description: "Discover the plant's scientific name, family, habitat, and unique characteristics all in one place.",
      icon: "📚"
    },
    {
      title: "Learn & Explore",
      description: "Expand your botanical knowledge with accurate, AI-powered plant identification and detailed insights.",
      icon: "🔍"
    }
  ]

  return (
    <section className="py-12 bg-green-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-8">
          How to Use Plant Identifier
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-shadow"
            >
              <div className="text-5xl mb-4">{card.icon}</div>
              <h3 className="text-xl font-semibold text-green-700 mb-3">{card.title}</h3>
              <p className="text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}