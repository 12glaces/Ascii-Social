export default function FeaturedPosts() {
  const posts = [
    {
      username: "ascii_artist",
      displayName: "ASCII Artist",
      content: `
  .--.
 |o_o |
 |:_/ |
//   \\ \\
(|     | )
/'\\_   _/\`\\
\\___)=(___/
`,
      likes: 42,
      comments: 7,
      color: "bg-violet-50 border-violet-200",
    },
    {
      username: "creative_coder",
      displayName: "Creative Coder",
      content: `
   __
 <(o )___
  ( ._> /
   \`---'
`,
      likes: 28,
      comments: 5,
      color: "bg-pink-50 border-pink-200",
    },
    {
      username: "text_wizard",
      displayName: "Text Wizard",
      content: `
  _______
 / _____ \\
/ /     \\ \\
| |     | |
\\ \\_____/ /
 \\_______/
`,
      likes: 36,
      comments: 9,
      color: "bg-cyan-50 border-cyan-200",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-violet-900 mb-12">See What's Trending</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {posts.map((post, index) => (
            <div key={index} className={`rounded-xl shadow-md p-5 ${post.color}`}>
              <div className="flex items-center mb-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-violet-400 to-purple-600 flex items-center justify-center text-white font-bold">
                  {post.displayName.charAt(0)}
                </div>
                <div className="ml-3">
                  <div className="font-bold text-gray-900">{post.displayName}</div>
                  <div className="text-gray-500 text-sm">@{post.username}</div>
                </div>
              </div>
              <pre className="font-mono text-gray-800 whitespace-pre-wrap overflow-x-auto text-sm bg-white bg-opacity-50 p-3 rounded-lg">
                {post.content}
              </pre>
              <div className="mt-4 flex items-center text-gray-500 text-sm">
                <div className="flex items-center mr-4">
                  <span className="mr-1">♥</span> {post.likes}
                </div>
                <div className="flex items-center">
                  <span className="mr-1">✎</span> {post.comments}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
