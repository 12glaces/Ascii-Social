import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="py-16 text-center">
      <pre className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold mb-8 inline-block text-left">
        {`
   _    ____   ____ ___ ___    ____   ___   ____ ___    _    _     
  / \\  / ___| / ___|_ _|_ _|  / ___| / _ \\ / ___|_ _|  / \\  | |    
 / _ \\ \\___ \\| |    | | | |   \\___ \\| | | | |    | |  / _ \\ | |    
/ ___ \\ ___) | |___ | | | |    ___) | |_| | |___ | | / ___ \\| |___ 
/_/   \\_\\____/ \\____|___|___|  |____/ \\___/ \\____|___/_/   \\_\\_____|
                                                                   
`}
      </pre>
      <h2 className="text-xl md:text-2xl mb-8 text-gray-300">Where Text is the Only Art</h2>
      <Button className="bg-green-600 hover:bg-green-700 text-black border border-green-400 px-8 py-2 text-lg">
        {">"} JOIN_NOW
      </Button>
    </section>
  )
}
