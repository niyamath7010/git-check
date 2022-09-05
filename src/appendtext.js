import { useState } from "react"
import Appended from "./appended"

function Append(){

    const [inputvalue,setInputvalue]=useState("")
    const [itemsval,setitemsval]=useState([])

    function itemEvent(event){
        setInputvalue(event.target.value)
    }

    function itemsList(){
        setitemsval((olditems)=>{
            return[ ...olditems,inputvalue]
        })
        setInputvalue("")
    }

    return(
        <>
            <input className="" type="text" placeholder="enter your name" value={inputvalue} onChange={itemEvent} />
            <button onClick={itemsList}>enter</button>
            <br/>
            <br/>
            <br/>

            {
                itemsval.map((interval)=>{
                    return <Appended text={interval} />
                })
            }
        </>
    )
}

export default Append