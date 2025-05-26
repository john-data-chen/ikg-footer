import { Button } from './ui/button'
import { Input } from './ui/input'

const Footer: React.FC = () => {
  return (
    <footer className="relative flex w-full flex-col items-center overflow-hidden py-16">
      <div className="left-0 w-full rotate-360 transform">
        <img src="/wave.svg" alt="wave" className="w-full" />
      </div>
      <div className="mx-auto flex w-full flex-col items-center bg-[#FAF338] px-4">
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
            className="relative z-0 flex h-[84px] w-[203px] items-center justify-center gap-2 rounded-[66px] bg-white font-bold text-black shadow-md transition before:absolute before:inset-0 before:-z-10 before:rounded-[66px] before:bg-[conic-gradient(at_top_right,_#3958FC,_#CCFF00,_#BD00FF,_#3958FC)] before:p-[2px] before:content-[''] after:absolute after:inset-[2px] after:-z-10 after:rounded-[64px] after:bg-white after:content-[''] hover:before:bg-[conic-gradient(at_top_right,_#3958FC,_#CCFF00,_#BD00FF,_#3958FC,_#3958FC)]"
          >
            SUBSCRIBE
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
