import React, {Component} from "react";
import Loader from "./Loader";
import '../css/panda.css'

function Panda ({posts}){

        return(
            <div className="panda">
                {
                    posts.length ? posts.map((val,idx)=>{
                        return(
                            <div className="contents" key={val.id}>
                                <div className="box1">
                                    <img src={val.Poster} alt="rasm" />
                                </div>
                                <div>
                                    <h3>{val.Title}</h3>
                                </div>
                            </div>
                        )
                    }):<Loader/>
                }
            </div>
        )
}
export default Panda;