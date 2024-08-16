import { useState ,useCallback  } from 'react';

import './App.css';

function App() {
  const [length, setlength] = useState(8);
  const [numberAllowed,setNumberAllowed] =useState(false)
  const [charAllowed,setCharAllowed] =useState(false)
  const [Password,setPassword] =useState("")

const passwordGenerator =  useCallback(
  () => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrustuvwxyz"

    if(numberAllowed){
      str+= "0123456789"

     
    }

    if(charAllowed){
      str+= "!@#$%^&*()_+~`[]{}"

     
    }

for(let i = 0 ; i<= array.length;i++){
const char = Math.floor( Math.random()*str.length + 1);  


pass = str.charAt(char)
}

setPassword(pass)
},
  [length,numberAllowed,charAllowed,setPassword],
)


  return (
 
<div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800">
    veet
     </div>
  );
}

export default App;
