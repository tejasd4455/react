import { useState } from "react"


function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
    <div className="w-full  h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex  flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">

          <button
          onClick={() => setColor("red")}
          className="outline-none px-4 py-1 rounded-full   text-white shadow-lg"
          style={{backgroundColor: "red"}}
          >Red</button>

          <button
          onClick={() => setColor("green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "green"}}
          >Green</button>

          <button
          onClick={() => setColor("blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "blue"}}
          >Blue</button>

           <button
          onClick={() => setColor("pink")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "pink"}}
          >Pink</button>

           <button
          onClick={() => setColor("white")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor: "white"}}
          >White</button>

           <button
          onClick={() => setColor("yellow")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "yellow"}}
          >Yellow</button>

           <button
          onClick={() => setColor("black")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "black"}}
          >Black</button>
          
           <button
          onClick={() => setColor("purple")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "purple"}}
          >Purple</button>

           <button
          onClick={() => setColor("skyblue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "skyblue"}}
          >SkyBlue</button>


<button
onClick={() => setColor("maroon")}
className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"maroon"}}
>maroon

</button>
        </div>
      </div>
  

<h2 className="text-black text-3xl ml-3 px-2  font-bold bg-cyan-500 display: inline rounded-full absolute top-4  left-2 size-16  shadow-xl/30 ">COMERCIO</h2>



    </div>




    
</>
  )
}

export default App































































