import { Button } from './ui/button'
import { Input } from './ui/input'

const Footer: React.FC = () => {
  return (
    <footer className="relative mt-[101px] flex min-h-[562px] w-[1920px] flex-col items-center overflow-hidden border-t border-[#EBEBEB] bg-white py-16 pl-[54px]">
      <div className="left-0 w-full rotate-360 transform">
        <img src="/wave.svg" alt="wave" className="w-full" />
      </div>
      <div className="mx-auto flex w-full flex-col items-center bg-[#FAF338] px-4">
        <h2 className="mb-4 text-center font-[Outfit] text-[48px] font-bold tracking-tight text-[#000000] uppercase">
          Don’t Miss Out
        </h2>
        <p className="mb-8 max-w-2xl text-center font-[Outfit] text-[24px] leading-none font-normal tracking-[-0.02em] text-[#494706]">
          Get the latest news and updates delivered straight to your inbox.
        </p>
        <form className="flex h-[100px] w-[688px] items-center gap-2.5 rounded-[70px] border border-black bg-white px-6 py-2 shadow-md">
          <Input
            type="email"
            placeholder="your email address"
            className="flex-1 border-0 bg-transparent px-0 py-0 font-[Outfit] text-[24px] leading-none font-extrabold tracking-[-0.02em] placeholder:font-extrabold placeholder:text-black/50 focus:border-0 focus:ring-0 focus:outline-none"
          />
          <Button
            type="submit"
            className="group focus-visible:ring-ring relative z-0 flex h-[68px] w-[152px] items-center justify-center rounded-[66px] bg-transparent p-[2px] text-[#03010B] transition-all duration-300 ease-in-out focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
          >
            <div className="absolute inset-0 -z-10 rounded-[inherit] bg-[conic-gradient(from_245.4deg_at_50%_50%,_#3958FC_18.85%,_#CCFF00_48.99%,_#BD00FF_81.15%)] group-hover:bg-[conic-gradient(from_110.51deg_at_50%_50%,_#3958FC_22.55%,_#CCFF00_49.11%,_#BD00FF_77.45%)]"></div>
            <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-[64px] bg-gradient-to-b from-white to-[#E7E7E7] shadow-[inset_0_0_0_2px_rgba(255,255,255,0.75)] group-hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.9)]">
              <span className="font-[Outfit] text-[16px] leading-[16px] font-bold tracking-[-0.02em] uppercase transition-all duration-300 ease-in-out group-hover:translate-y-3 group-hover:opacity-0">
                SUBSCRIBE
              </span>
            </div>
          </Button>
        </form>
      </div>
      <div className="left-0 w-full rotate-180 transform">
        <img src="/wave.svg" alt="wave" className="w-full" />
      </div>
    </footer>
  )
}

export default Footer
