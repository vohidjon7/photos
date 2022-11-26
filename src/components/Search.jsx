import React, {Component, useState} from "react";
import '../css/search.css'

function Search ({getProps,getProps1}){
    const [text,setText] = useState('')
    const [page,setPage] = useState(1)
    const getValue=(e)=>{
        setText(e.target.value)
    }
    const sendData=()=>{
        if(text){
            getProps(text)
        }
    }
    const sendDouble=(e)=>{
        getProps1(text,e.target.value)
    }

        return(
            <div className="search">
                <div className="mini-search">
                    <input type="text" placeholder="Search" value={text} onChange={(e)=>getValue(e)} className="input form-control" />
                    <button className="btn btn-primary" onClick={sendData}>Click</button>
                </div>
                <div className="snd">
                    <button value='1' className="btn btn-warning" onClick={sendDouble}>1</button>
                    <button value='2' className="btn btn-warning" onClick={sendDouble}>2</button>
                    <button value='3' className="btn btn-warning" onClick={sendDouble}>3</button>
                    <button value='4' className="btn btn-warning" onClick={sendDouble}>4</button>
                    <button value='5' className="btn btn-warning" onClick={sendDouble}>5</button>
                    <button value='6' className="btn btn-warning" onClick={sendDouble}>6</button>
                </div>
            </div>
        )
}
export default Search;