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
    </div>
  )
}