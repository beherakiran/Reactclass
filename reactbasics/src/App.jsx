import { useState } from "react"

function App() {
  const[allValues,setAllvalues] = useState({firstName:"supriya",lastname:"Behera",
    address:{city:"berhumpur",country:"India"}})
  const[task,setTask] = useState(["Learn React","Build Project"])

  let handleClick = ()=>{
      setAllvalues({...allValues,firstName:"Guddy",address:{...allValues.address,city:"banglore"}})
  }
  let handletask =()=>{
      setTask([...task,"practice react"])
  }

   function expensive(){
    return 10;
  }
  const[count,setCount] = useState(()=>expensive());  //lazy initialize
  return (
    <>
   <div className="object" style={{ border: "2px solid black" }}>
     <h2 className="font-bolder">My Firstname is {allValues.firstName} 
      and my Lastname is {allValues.lastname} and city is {allValues.address.city} 
       and country is {allValues.address.country}</h2>
    <button onClick={handleClick}>Update</button>
   </div>
   <hr />

   <div className="array" style={{ border: "2px solid black"  }}>
     {task.map((val,index)=>{
       return(
        <li key={index}>{val}</li>
       )
     })}
     <button onClick={handletask}>Add Task</button>
   </div>
     <hr />
   <div className="function" style={{ border: "2px solid black" }}>
    {count}
    <button onClick={() =>setCount((prev)=>prev+1)}>click</button>
   </div>
    </>
  )
}

export default App