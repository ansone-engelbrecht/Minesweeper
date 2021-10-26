import React from "react";
import Board from "./Board";

function Bomb({ Square, SquareLength }){

   const [bomb, setBomb] = useState(true);

   if (Square.maxLength <= SquareLength) {
    return (<span>{Square}</span>);
   };
 
   return (
    <span>
      {bomb ? `${Square.substr(0, SquareLength).trim()} ...` : Square}
      {bomb ? (
        <a onClick={() => setBomb(false)}>Click again</a>
      ) : (
        <a onClick={() => setBomb(true)}>Start again</a>
      )}
    </span>)

};

export default Bomb;