export default function FeaturesSection() {
  const features = [
    {
      title: "Create ASCII Posts",
      description: "Express yourself through the art of ASCII. Share your creations with the community.",
    },
    {
      title: "Follow ASCII Artists",
      description: "Connect with talented ASCII creators and get inspired by their work.",
    },
    {
      title: "Join ASCII Challenges",
      description: "Participate in weekly ASCII art challenges to test and improve your skills.",
    },
    {
      title: "Collaborate on ASCII Stories",
      description: "Work together with other artists on complex ASCII narratives and projects.",
    },
  ]

  return (
    <section className="py-12">
      <h2 className="text-xl mb-6 border-b border-green-700 pb-2">$ cat features.txt</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="border border-green-800 p-4">
            <div className="terminal-header flex items-center mb-2">
              <div className="text-green-400 mr-2">[{index + 1}]</div>
              <div className="text-green-400 font-bold">{feature.title}</div>
            </div>
            <p className="text-gray-300 ml-6">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
