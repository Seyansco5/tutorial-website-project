import {React, useEffect, useState} from "react";
import { Switch } from "@headlessui/react";


function DarkModeToggler() {
const [dark, setDark] = useState(false);
useEffect(() => {
    document.body.classList.toggle("dark", dark);
}, [dark]);
const darkModeHandler =()=> {
    setDark((dark) => !dark); 
}

return (
<Switch 
checked={dark}
onChange={darkModeHandler}
className="bg-blue-600 group relative flex h-7 w-14 cursor-pointer rounded-full bg-blue/10 p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-blue/10">
<span aria-hidden="true"
      className="pointer-events-none inline-block size-5 translate-x-0 rounded-full bg-white ring-0 shadow-lg transition duration-200 ease-in-out group-data-[checked]:translate-x-7"
/>
</Switch>
)


}

export default DarkModeToggler