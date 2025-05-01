"use client"

import { useState } from "react"
import Link from "next/link"
import { Heart, MessageCircle, Repeat2 } from "lucide-react"

interface Post {
  id: number
  username: string
  displayName: string
  timestamp: string
  content: string
  likes: number
  comments: number
  reposts: number
}

interface PostCardProps {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
  const [liked, setLiked] = useState(false)
  const [likes, setLikes] = useState(post.likes)
  const [reposted, setReposted] = useState(false)
  const [reposts, setReposts] = useState(post.reposts)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
    })
  }

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1)
    } else {
      setLikes(likes + 1)
    }
    setLiked(!liked)
  }

  const handleRepost = () => {
    if (reposted) {
      setReposts(reposts - 1)
    } else {
      setReposts(reposts + 1)
    }
    setReposted(!reposted)
  }

  // Generate a random pastel background color for the post
  const getRandomPastelColor = () => {
    const colors = ["bg-violet-50", "bg-pink-50", "bg-blue-50", "bg-teal-50", "bg-green-50", "bg-yellow-50"]
    return colors[post.id % colors.length]
  }

  return (
    <div className={`rounded-xl shadow-sm border border-gray-100 overflow-hidden ${getRandomPastelColor()}`}>
      <div className="p-4">
        {/* Post Header */}
        <div className="flex items-center mb-2">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-violet-400 to-purple-600 flex items-center justify-center text-white font-bold">
            {post.displayName.charAt(0)}
          </div>
          <div className="ml-3">
            <Link href={`/profile/${post.username}`} className="font-bold text-gray-900 hover:underline">
              {post.displayName}
            </Link>
            <div className="text-gray-500 text-sm">
              @{post.username} · {formatDate(post.timestamp)}
            </div>
          </div>
        </div>

        {/* Post Content */}
        <div className="mt-3">
          <pre className="font-mono text-gray-800 whitespace-pre-wrap overflow-x-auto text-sm md:text-base bg-white bg-opacity-50 p-3 rounded-lg">
            {post.content}
          </pre>
        </div>

        {/* Post Actions */}
        <div className="mt-4 flex items-center justify-between text-gray-500">
          <button
            onClick={handleLike}
            className={`flex items-center space-x-1 p-2 rounded-full hover:bg-pink-100 ${liked ? "text-pink-500" : ""}`}
          >
            <Heart size={18} className={liked ? "fill-pink-500" : ""} />
            <span>{likes > 0 ? likes : ""}</span>
          </button>

          <button className="flex items-center space-x-1 p-2 rounded-full hover:bg-blue-100">
            <MessageCircle size={18} />
            <span>{post.comments > 0 ? post.comments : ""}</span>
          </button>

          <button
            onClick={handleRepost}
            className={`flex items-center space-x-1 p-2 rounded-full hover:bg-green-100 ${
              reposted ? "text-green-500" : ""
            }`}
          >
            <Repeat2 size={18} />
            <span>{reposts > 0 ? reposts : ""}</span>
          </button>
        </div>
      </div>
    </div>
  )
}
