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
            className="relative flex h-[84px] min-w-[168px] items-center justify-center gap-2 rounded-[66px] border-2 bg-gradient-to-b from-[#FFFFFE] to-[#E8E8E8] p-2 font-bold text-black shadow-[0_0_0_4px_#FFFFFF26]"
            style={{
              borderImage:
                'linear-gradient(245.4deg, #3958FC 18.85%, #CCFF00 48.99%, #BD00FF 81.15%) 1',
              borderWidth: 2
            }}
            onMouseOver={(e) => {
              ;(e.currentTarget as HTMLElement).style.borderImage =
                'linear-gradient(110.51deg, #3958FC 22.55%, #CCFF00 49.11%, #BD00FF 77.45%) 1'
            }}
            onMouseOut={(e) => {
              ;(e.currentTarget as HTMLElement).style.borderImage =
                'linear-gradient(245.4deg, #3958FC 18.85%, #CCFF00 48.99%, #BD00FF 81.15%) 1'
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
