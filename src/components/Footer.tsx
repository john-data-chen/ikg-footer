import { Button } from './ui/button'
import { Input } from './ui/input'

const Footer: React.FC = () => {
  return (
    <footer className="relative flex w-full flex-col items-center overflow-hidden bg-[#FAF338] py-16">
      {/* 上波浪 */}
      <div className="pointer-events-none absolute top-0 left-0 h-8 w-full -translate-y-full select-none">
        <svg
          viewBox="0 0 1200 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
        >
          <path
            d="M0 16C100 32 200 0 300 16C400 32 500 0 600 16C700 32 800 0 900 16C1000 32 1100 0 1200 16V32H0V16Z"
            fill="#fff"
          />
        </svg>
      </div>
      {/* 內容 */}
      <div className="mx-auto flex w-full max-w-screen-xl flex-col items-center px-4">
        <h2 className="mb-4 text-center text-[48px] font-bold tracking-tight text-[#000000] uppercase">
          Don’t Miss Out
        </h2>
        <p className="mb-8 max-w-2xl text-center text-[24px] font-normal tracking-tight text-[#494706]">
          Get the latest news and updates delivered straight to your inbox.
        </p>
        <form className="flex w-full max-w-md items-center rounded-full border border-black bg-white px-2 py-2 shadow-md">
          <Input
            type="email"
            placeholder="Enter your email"
            className="flex-1 border-none bg-transparent px-6 py-2 text-lg placeholder:text-gray-500 focus:ring-0"
          />
          <Button
            type="submit"
            className="ml-2 rounded-full border border-black bg-gradient-to-r from-[#FFF] via-[#FFF86A] to-[#FFD600] px-8 py-2 font-bold text-black shadow transition hover:from-[#FFFDE4] hover:to-[#FFD600]"
          >
            Subscribe
          </Button>
        </form>
      </div>
      {/* 下波浪 */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-8 w-full translate-y-full select-none">
        <svg
          viewBox="0 0 1200 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
        >
          <path
            d="M0 16C100 32 200 0 300 16C400 32 500 0 600 16C700 32 800 0 900 16C1000 32 1100 0 1200 16V32H0V16Z"
            fill="#fff"
          />
        </svg>
      </div>
    </footer>
  )
}

export default Footer
