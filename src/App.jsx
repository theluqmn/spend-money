import githubIcon from "./assets/icons/github.svg"
import xIcon from "./assets/icons/x.svg"
import instagramIcon from "./assets/icons/instagram.svg"

export default function App(props) {
  return (
    <div class="w-full">
      <header
      class="p-4 text-xl flex items-center justify-between fixed z-10 bg-[rgba(25,25,25,0.5)] w-full backdrop-blur-sm">
        <div class="w-full md:w-5/12 mx-auto flex items-center justify-between">
          <h1>Spend Money</h1>

          <button className="p-2 bg-[rgb(255,255,255)] text-[rgb(0,0,0)] text-sm rounded-md hover:scale-110 duration-200">
            Get started
          </button>
        </div>
      </header>

      <div class="p-4 w-full pt-28">
        {props.children}
      </div>

      <footer class="p-4 text-xl flex items-center justify-between z-10 bg-[rgba(0,0,0)] w-full backdrop-blur-sm bottom-0">
        <div class="w-full md:w-5/12 mx-auto flex items-center justify-between">
          <a href="https://theluqmn.github.io" target="_blank">
            <p class="text-sm">Made by luq</p>
          </a>

          <div class="flex items-center space-x-4">
            <a href="https://x.com/theluqmn" target="_blank">
              <img class="w-5 h-5 invert" src={xIcon} />
            </a>
            
            <a href="https://github.com/theluqmn/spend-money" target="_blank">
              <img class="w-5 h-5 invert" src={githubIcon} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}