import { useState ,useCallback} from 'react'
import './index.css'

function App() {
  const [length , setLength] = useState(8)
  const[numAllowed,setNumallowed] = useState(false);
  const[charAllowed,setCharAllowed] = useState(true);
  const[Password,setPassword] = useState("");

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

     if(numAllowed) str += "0123456789"
     if(charAllowed) str += "@#$%&^*(~){}[]`"

     for(let i = 1; i <= array.length;i++){
       let char = Math.floor(Math.random()*str.length+1)

       pass = str.charAt(char)
     }
     setPassword(pass);
  },
  [length,numAllowed,charAllowed,setPassword])
      
  
  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg
    px-4 my-8 text-orange-500 bg-gray-700'>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" 
        value={Password}
        className='outline-none w-full py-1 px-3'
        placeholder='password'
        />
      </div>
    </div>
    </>
  )
}

export default App
