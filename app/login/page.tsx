"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import AsciiLogo from "@/components/ascii-logo"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginPage() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Login attempted:", formData)
    // Handle login logic here
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-violet-50 to-cyan-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/">
            <AsciiLogo small />
          </Link>
          <h1 className="text-2xl font-bold text-violet-900 mt-4">Welcome Back!</h1>
          <p className="text-gray-600 mt-2">Log in to continue your ASCII journey</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="username" className="text-violet-900">
                Username
              </Label>
              <Input
                id="username"
                name="username"
                placeholder="Your username"
                value={formData.username}
                onChange={handleChange}
                required
                className="border-violet-200 focus:border-violet-400 focus:ring-violet-400"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-violet-900">
                Password
              </Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Your password"
                value={formData.password}
                onChange={handleChange}
                required
                className="border-violet-200 focus:border-violet-400 focus:ring-violet-400"
              />
              <div className="text-right">
                <Link href="#" className="text-sm text-violet-600 hover:underline">
                  Forgot password?
                </Link>
              </div>
            </div>

            <Button type="submit" className="w-full bg-violet-600 hover:bg-violet-700 text-lg py-6">
              Log In
            </Button>
          </form>

          <div className="mt-6 text-center text-gray-600">
            <p>
              Don't have an account?{" "}
              <Link href="/signup" className="text-violet-600 hover:underline font-medium">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
