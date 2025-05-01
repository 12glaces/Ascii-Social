"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Home, Search, PlusSquare, User, LogOut, Bell } from "lucide-react"

export default function NavBar() {
  const [activeTab, setActiveTab] = useState("home")

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-10">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="flex items-center justify-between h-16">
          <Link href="/feed" className="text-violet-600 font-bold text-xl">
            ASCII Social
          </Link>

          <div className="flex items-center space-x-1">
            <NavItem
              icon={<Home size={20} />}
              label="Home"
              href="/feed"
              active={activeTab === "home"}
              onClick={() => setActiveTab("home")}
            />
            <NavItem
              icon={<Search size={20} />}
              label="Explore"
              href="/explore"
              active={activeTab === "explore"}
              onClick={() => setActiveTab("explore")}
            />
            <NavItem
              icon={<PlusSquare size={20} />}
              label="Post"
              href="/create"
              active={activeTab === "post"}
              onClick={() => setActiveTab("post")}
            />
            <NavItem
              icon={<Bell size={20} />}
              label="Notifications"
              href="/notifications"
              active={activeTab === "notifications"}
              onClick={() => setActiveTab("notifications")}
            />
            <NavItem
              icon={<User size={20} />}
              label="Profile"
              href="/profile"
              active={activeTab === "profile"}
              onClick={() => setActiveTab("profile")}
            />
            <NavItem
              icon={<LogOut size={20} />}
              label="Logout"
              href="/"
              active={activeTab === "logout"}
              onClick={() => setActiveTab("logout")}
            />
          </div>
        </div>
      </div>
    </nav>
  )
}

interface NavItemProps {
  icon: React.ReactNode
  label: string
  href: string
  active: boolean
  onClick: () => void
}

function NavItem({ icon, label, href, active, onClick }: NavItemProps) {
  return (
    <Link
      href={href}
      className={`p-2 rounded-full flex items-center justify-center ${
        active ? "text-violet-600 bg-violet-100" : "text-gray-500 hover:text-violet-600 hover:bg-violet-50"
      }`}
      onClick={onClick}
      title={label}
    >
      {icon}
      <span className="sr-only">{label}</span>
    </Link>
  )
}
