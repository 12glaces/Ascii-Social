export default function AboutSection() {
  return (
    <section className="py-12 border border-green-800 p-6 my-8">
      <div className="terminal-header flex items-center mb-4">
        <div className="text-green-400 mr-2">$</div>
        <div className="text-green-400">cat about.txt</div>
      </div>
      <div className="terminal-content">
        <p className="text-gray-300 leading-relaxed">
          A creative space for sharing, chatting, and posting — all in ASCII. No images. Just pure characters. ASCII
          Social is a community where creativity is measured in keystrokes, not pixels. Express yourself through the art
          of text and connect with fellow ASCII enthusiasts in a digital world that celebrates the beauty of simplicity.
        </p>
      </div>
    </section>
  )
}
