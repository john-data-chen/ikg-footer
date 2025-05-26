import { Button } from './ui/button'
import { Input } from './ui/input'

const Footer: React.FC = () => {
  return (
    <footer className="relative flex w-full flex-col items-center overflow-hidden py-16">
      <div className="left-0 w-full rotate-360 transform">
        <img src="/src/assets/wave.svg" alt="wave" />
      </div>
      <div className="mx-auto flex w-full max-w-screen-xl flex-col items-center bg-[#FAF338] px-4">
        <h2
          className="mb-4 text-center text-[48px] font-bold tracking-tight text-[#000000] uppercase"
          style={{ fontFamily: 'Outfit, sans-serif' }}
        >
          Don’t Miss Out
        </h2>
        <p
          className="mb-8 max-w-2xl text-center text-[24px] font-normal tracking-tight text-[#494706]"
          style={{ fontFamily: 'Outfit, sans-serif' }}
        >
          Get the latest news and updates delivered straight to your inbox.
        </p>
        <form className="flex h-[100px] w-[688px] items-center gap-2.5 rounded-[70px] border border-black bg-white px-6 py-2 shadow-md">
          <Input
            type="email"
            placeholder="your email address"
            className="flex-1 border-none bg-transparent px-0 py-0 text-xl font-bold placeholder:text-gray-400 focus:ring-0 focus:outline-none"
          />
          <Button
            type="submit"
            className="border-image-[linear-gradient(245.4deg,_#3958FC_18.85%,_#CCFF00_48.99%,_#BD00FF_81.15%)_1] relative flex h-[84px] w-[203px] items-center justify-center gap-2 rounded-[66px] border-2 bg-gradient-to-b from-[#FFFFFE] to-[#E8E8E8] p-2 font-bold text-black shadow-[0_0_0_4px_#FFFFFF26]"
          >
            SUBSCRIBE
          </Button>
        </form>
      </div>
      <div className="left-0 w-full rotate-180 transform">
        <img src="/src/assets/wave.svg" alt="wave" />
      </div>
    </footer>
  )
}

export default Footer
