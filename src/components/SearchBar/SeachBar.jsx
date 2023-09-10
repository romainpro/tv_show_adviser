import s from "./style.module.css"
import {Search as SeachIcon}from "react-bootstrap-icons"
export function SearchBar({onSubmit}){
    function submit(e){
        if(e.key=="Enter" && e.target.value.trim() !=="")
        console.log("***",e.target.value)
           onSubmit(e.target.value);
    }
    return (
   <>
   <SeachIcon size={27} className={s.icon}/>
   <input 
   onKeyUp={submit}
   type="text" placeholder="Search TV show you may like"
   className={s.input}/>
   </>
    )
}