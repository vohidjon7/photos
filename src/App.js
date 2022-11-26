import React, { useEffect, useState } from "react";
import './App.css'
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Xatolik from "./components/Xatolik";

function App (){

  const [posts,setPosts] = useState('')
  const [isFalse,setFalse] = useState(false)
  useEffect(()=>{
    fetch('https://www.omdbapi.com/?apikey=b5a308d7&s=panda')
    .then(data => data.json())
    .then(data1 => {
      setPosts(data1.Search)
      console.log(data1);
    })
  },[])
  const getProps=(search)=>{
    fetch('https://www.omdbapi.com/?apikey=b5a308d7&s='+search)
    .then(data => data.json())
    .then(data1 => {
      if(!data1.Search){
        setFalse(true)
      }else{
        setPosts(data1.Search)
        console.log(data1);
      }
    })
  }
  const getProps1=(search,page)=>{
    fetch(`https://www.omdbapi.com/?apikey=b5a308d7&s=${search}&page=${page}`)
    .then(data => data.json())
    .then(data1 => {
      if(!data1.Search){
        setFalse(true)
      }else{
        setPosts(data1.Search)
      }
    })
  }

    return(
      <div className="box">
        <Navbar/>
        <Search
          getProps={getProps}
          getProps1={getProps1}
        />
        {
          isFalse === true ? <Xatolik/>
          :
          <>
          <Main 
          posts={posts}
          />
          </>
        }
        <Footer/>
      </div>
    )
  }
export default App;