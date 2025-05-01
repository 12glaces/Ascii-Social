"use client"

import type { InputHTMLAttributes } from "react"

interface TerminalInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export default function TerminalInput({ label, ...props }: TerminalInputProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center">
        <span className="text-green-400 mr-2">$</span>
        <label htmlFor={props.name} className="text-green-400">
          {label}:
        </label>
      </div>
      <input
        className="w-full bg-black text-green-400 border border-green-800 p-2 font-mono focus:outline-none focus:border-green-400"
        id={props.name}
        {...props}
      />
    </div>
  )
}
