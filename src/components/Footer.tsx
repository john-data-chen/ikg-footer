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
        <form className="flex h-[100px] w-[688px] items-center gap-2.5 rounded-[70px] border border-black bg-white px-6 py-2 shadow-md">
          <Input
            type="email"
            placeholder="your email address"
            className="flex-1 border-none bg-transparent px-0 py-0 text-xl font-bold placeholder:text-gray-400 focus:ring-0 focus:outline-none"
          />
          <Button
            type="submit"
            className="relative h-[80px] min-w-[180px] rounded-[60px] border-none bg-white font-bold text-black shadow ring-2 ring-transparent ring-offset-2 ring-offset-white transition before:absolute before:inset-0 before:-z-10 before:rounded-[60px] before:bg-gradient-to-r before:from-[#FFF] before:via-[#FFF86A] before:to-[#FFD600] before:opacity-60 hover:ring-2 hover:ring-[#e0c3fc]"
            style={{
              boxShadow: '0 0 0 3px #e0c3fc, 0 0 8px #fff0'
            }}
          >
            SUBSCRIBE
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
