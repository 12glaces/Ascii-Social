"use client"

import type { ButtonHTMLAttributes, ReactNode } from "react"
import { cn } from "@/lib/utils"

interface TerminalButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: "default" | "outline"
  blinking?: boolean
}

export default function TerminalButton({
  children,
  className,
  variant = "default",
  blinking = false,
  ...props
}: TerminalButtonProps) {
  const baseStyles = "px-6 py-2 font-mono text-lg transition-colors"

  const variantStyles = {
    default: "bg-green-600 hover:bg-green-700 text-black border border-green-400",
    outline: "bg-transparent hover:bg-green-900/30 text-green-400 border border-green-400",
  }

  return (
    <button className={cn(baseStyles, variantStyles[variant], blinking && "relative", className)} {...props}>
      {children}
      {blinking && (
        <span className="absolute -right-4 top-1/2 -translate-y-1/2 h-5 w-2 bg-green-400 animate-[blink_1s_infinite]"></span>
      )}
    </button>
  )
}
