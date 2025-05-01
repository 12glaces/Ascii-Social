export default function Footer() {
  return (
    <footer className="py-8 mt-12 border-t border-green-800 text-gray-500 text-sm">
      <div className="terminal-prompt mb-4">
        <span className="text-green-400">{">"} _</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <p>© {new Date().getFullYear()} ASCII Social</p>
          <p>All rights reserved</p>
        </div>
        <div>
          <p>{">"} help</p>
          <p>{">"} about</p>
          <p>{">"} contact</p>
        </div>
        <div>
          <p>{">"} privacy</p>
          <p>{">"} terms</p>
          <p>{">"} guidelines</p>
        </div>
      </div>
    </footer>
  )
}
