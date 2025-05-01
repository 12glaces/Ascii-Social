export default function HowItWorks() {
  const steps = [
    {
      title: "Create",
      description: "Express yourself through ASCII art and text. No images needed, just your creativity.",
      icon: "✏️",
      color: "bg-violet-100 text-violet-600",
    },
    {
      title: "Share",
      description: "Post your creations to your feed and connect with other ASCII artists.",
      icon: "🔄",
      color: "bg-pink-100 text-pink-600",
    },
    {
      title: "Engage",
      description: "Like, comment, and repost content from your favorite creators.",
      icon: "❤️",
      color: "bg-cyan-100 text-cyan-600",
    },
    {
      title: "Grow",
      description: "Build your following and become part of a vibrant creative community.",
      icon: "🚀",
      color: "bg-amber-100 text-amber-600",
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-violet-100 to-cyan-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-violet-900 mb-12">How ASCII Social Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 text-center">
              <div
                className={`${step.color} h-16 w-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-4`}
              >
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-violet-900 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
