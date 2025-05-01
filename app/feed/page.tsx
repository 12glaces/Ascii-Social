"use client"

import { useState } from "react"
import NavBar from "@/components/nav-bar"
import PostCard from "@/components/post-card"
import CreatePost from "@/components/create-post"
import { Button } from "@/components/ui/button"

// Sample data for posts
const SAMPLE_POSTS = [
  {
    id: 1,
    username: "ascii_artist",
    displayName: "ASCII Artist",
    timestamp: "2023-05-15T14:32:00Z",
    content: `Just finished this masterpiece:
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
    reposts: 3,
  },
  {
    id: 2,
    username: "creative_coder",
    displayName: "Creative Coder",
    content: `My new pet:
   __
 <(o )___
  ( ._> /
   \`---'
`,
    timestamp: "2023-05-15T12:15:00Z",
    likes: 28,
    comments: 5,
    reposts: 1,
  },
  {
    id: 3,
    username: "text_wizard",
    displayName: "Text Wizard",
    content: `Working on a new project:
  _______
 / _____ \\
/ /     \\ \\
| |     | |
\\ \\_____/ /
 \\_______/
`,
    timestamp: "2023-05-15T10:45:00Z",
    likes: 36,
    comments: 9,
    reposts: 4,
  },
  {
    id: 4,
    username: "pixel_poet",
    displayName: "Pixel Poet",
    content: `Feeling inspired today...
    ____
   / __/___  ___ _
  / _// __/ / _ \`/
 /___/\\__/  \\_, / 
           /___/  
`,
    timestamp: "2023-05-15T09:20:00Z",
    likes: 19,
    comments: 3,
    reposts: 0,
  },
]

export default function FeedPage() {
  const [posts, setPosts] = useState(SAMPLE_POSTS)

  const handleNewPost = (content: string) => {
    const newPost = {
      id: Date.now(),
      username: "current_user",
      displayName: "You",
      timestamp: new Date().toISOString(),
      content,
      likes: 0,
      comments: 0,
      reposts: 0,
    }

    setPosts([newPost, ...posts])
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />

      <main className="container mx-auto px-4 py-8 pt-24 max-w-2xl">
        {/* Create Post */}
        <CreatePost onSubmit={handleNewPost} />

        {/* Feed Tabs */}
        <div className="flex border-b border-gray-200 mb-6">
          <Button variant="ghost" className="text-violet-600 border-b-2 border-violet-600 rounded-none">
            For You
          </Button>
          <Button variant="ghost" className="text-gray-500 hover:text-violet-600 rounded-none">
            Following
          </Button>
          <Button variant="ghost" className="text-gray-500 hover:text-violet-600 rounded-none">
            Trending
          </Button>
        </div>

        {/* Posts Feed */}
        <div className="space-y-4">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </main>
    </div>
  )
}
