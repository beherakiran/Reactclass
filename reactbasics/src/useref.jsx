import { useRef, useEffect } from "react";

function Useref() {
  const currentRef = useRef(0);

  useEffect(() => {
    console.log(currentRef);
  }, []);

  return (
    <>
      <center><h1><u>useRef</u></h1></center>
    </>
  );
}

export default Useref;