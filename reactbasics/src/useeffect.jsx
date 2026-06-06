import { useState, useEffect } from "react";

function Useeffect() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(10);
  const [searchTerm,setSearchterm] = useState("");
  const [debounce,setDebounce]  = useState("")
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    return () => {              //cleanup function
      clearInterval(interval);
    }; 
  }, []);

  const [data, setData] = useState();
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((err)=>console.log(err));
  }, []);
  console.log(data);
      
  useEffect(()=>{
       //api call
      const timeout = setTimeout(()=>{
        setDebounce(searchTerm)
      },500)
      return () => clearTimeout(timeout)
  },[searchTerm]);
  return (
    <>
      <div>
        <center>
          <h1>
            <u>useffect</u>
          </h1>
        </center>
        <div>timer:{count}</div>

        <div>{number}</div>
        <button onClick={() => setNumber(number - 1)}>decrement</button>
      </div>
      <hr />
      <div>{data ? <div>{data[6].title}</div> : <p>No data found</p>}</div>
       <hr />
       <div>
        <input type="text"
        value={searchTerm}
        onChange={(e)=>setSearchterm(e.target.value)}
        placeholder="Search..."
         />
         <p>{searchTerm}</p>
         <p>{debounce}</p>
       </div>
    </>
  );
}

export default Useeffect;

// In react sideeffect is anything that happens after the
// component renders but is not part of ui return.
// fetching data from an api ,updating the DOM,Running timers
//listening to user actions(scrolling or resizing the window)
