"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"

interface CreatePostProps {
  onSubmit: (content: string) => void
}

export default function CreatePost({ onSubmit }: CreatePostProps) {
  const [content, setContent] = useState("")
  const [charCount, setCharCount] = useState(0)
  const maxChars = 500

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newContent = e.target.value
    if (newContent.length <= maxChars) {
      setContent(newContent)
      setCharCount(newContent.length)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (content.trim()) {
      onSubmit(content)
      setContent("")
      setCharCount(0)
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-6">
      <form onSubmit={handleSubmit}>
        <textarea
          className="w-full border border-gray-200 rounded-lg p-3 font-mono text-gray-800 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent resize-y min-h-[100px]"
          placeholder="Create your ASCII masterpiece..."
          value={content}
          onChange={handleChange}
        ></textarea>
        <div className="flex items-center justify-between mt-3">
          <div className="text-sm text-gray-500">
            {charCount}/{maxChars} characters
          </div>
          <Button
            type="submit"
            disabled={!content.trim()}
            className="bg-violet-600 hover:bg-violet-700 disabled:bg-gray-300"
          >
            Post
          </Button>
        </div>
      </form>
    </div>
  )
}
