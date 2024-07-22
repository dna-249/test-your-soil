import React,{useState,useEffect} from "react";
function Header(){
    const [task, setTask] = useState("");

    function HandleTask(){
        setTask()
    }
        return(
        < >
    <div className="header">
        <h1> SoilTest </h1><div className="header-dot">...</div>
    </div>
        <div>
        <ul>
            <li>
                <a href="">Home</a> 
                <a href="">Login</a>
                <a href="">Login</a>
                <a href="">Login</a>
                <a href="">Login</a>
             </li>
        </ul>
    </div>
    </>
    )
}
export default Header;