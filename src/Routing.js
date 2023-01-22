import { Route, Routes } from "react-router-dom"
import NavIcon from "./NavIcon"
import Nothing from "./UseEffect01"
import HocMain from "./Hoc"

export default function Routing(){
    return(
        <>
        <h1>routing App</h1>
            <NavIcon path="/home" name="home"></NavIcon>
            <NavIcon path="/lost" name="lost"></NavIcon>
        <Routes>
            <Route path="/home" element={<Nothing/>}></Route>
            <Route path="/lost" element={<HocMain/>}></Route>
        </Routes>
        </>
    )
}