import React, { Component } from "react";
import '../css/loader.css'

class Loader extends Component{
    
    render(){
        return(
            <div className='loading'>
                <span className='dot dot-1'></span>
                <span className='dot dot-2'></span>
                <span className='dot dot-3'></span>
                <span className='dot dot-4'></span>
            </div>
        )
    }
}
export default Loader;