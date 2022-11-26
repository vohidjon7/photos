import React, {Component} from "react";
import Panda from "./Panda";
import '../css/main.css'

function Main({posts}){
        return(
            <div className="main">
                <Panda
                posts={posts}
                />
            </div>
        )
}
export default Main;