interface AsciiLogoProps {
  small?: boolean
}

export default function AsciiLogo({ small = false }: AsciiLogoProps) {
  const logoClass = small
    ? "font-mono text-center text-violet-600 text-sm md:text-base overflow-visible"
    : "font-mono text-center text-violet-600 text-lg md:text-xl lg:text-2xl overflow-visible"


  return (
    <pre className={logoClass}>
      {`
 █████╗ ███████╗ ██████╗██╗██╗    ███████╗ ██████╗  ██████╗██╗ █████╗ ██╗     
██╔══██╗██╔════╝██╔════╝██║██║    ██╔════╝██╔═══██╗██╔════╝██║██╔══██╗██║     
███████║███████╗██║     ██║██║    ███████╗██║   ██║██║     ██║███████║██║     
██╔══██║╚════██║██║     ██║██║    ╚════██║██║   ██║██║     ██║██╔══██║██║     
██║  ██║███████║╚██████╗██║██║    ███████║╚██████╔╝╚██████╗██║██║  ██║███████╗
╚═╝  ╚═╝╚══════╝ ╚═════╝╚═╝╚═╝    ╚══════╝ ╚═════╝  ╚═════╝╚═╝╚═╝  ╚═╝╚══════╝
`}
    </pre>
  )
}
