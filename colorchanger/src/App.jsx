import { useState } from "react";
import "./index.css";
import "./App.css";

function App() {
  const [color, setcolor] = useState("olive");
  return (
    <>
      <div
        className="h-screen w-screen duration=200"
        style={{ backgroundColor: color }}
      >
        <div
          className="fixed flex flex-wrap 
        justify-center bottom-12 inset-x-0 px-2"
        >
          <div
            className="flex flex-wrap justify-center 
          gap-3 shadow-lg bg-white px-3 py-3 rounded-3xl"
          >
            <button onClick={()=>setcolor("red")}
             className="outline-none px-4 py-1 
            rounded-full text-white shadow-lg"style={{backgroundColor:"red"}}
            >Red</button>
            <button  onClick={()=>setcolor("yellow")}
            className="outline-none px-4 py-1 
            rounded-full text-white shadow-lg"style={{backgroundColor:"yellow"}}
            >yellow</button>
            <button  onClick={()=>setcolor("green")}
            className="outline-none px-4 py-1 
            rounded-full text-white shadow-lg"style={{backgroundColor:"green"}}
            >green</button>
            <button  onClick={()=>setcolor("orange")}
            className="outline-none px-4 py-1 
            rounded-full text-white shadow-lg"style={{backgroundColor:"orange"}}
            >orange</button>
            <button  onClick={()=>setcolor("purple")}
            className="outline-none px-4 py-1 
            rounded-full text-white shadow-lg"style={{backgroundColor:"purple"}}
            >purple</button>
            <button  onClick={()=>setcolor("blue")}
            className="outline-none px-4 py-1 
            rounded-full text-white shadow-lg"style={{backgroundColor:"blue"}}
            >blue</button>
            <button  onClick={()=>setcolor("olive")}
            className="outline-none px-4 py-1 
            rounded-full text-white shadow-lg"style={{backgroundColor:"olive"}}
            >olive</button>
            <button  onClick={()=>setcolor("brown")}
            className="outline-none px-4 py-1 
            rounded-full text-white shadow-lg"style={{backgroundColor:"brown"}}
            >brown</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
