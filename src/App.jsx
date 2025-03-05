import React from "react";
import { RouterProvider } from "react-router-dom";
import Router from "./Routes/Router";
import Header from "./Header";



function App(){
  return(<div>
    <Header />
    <RouterProvider router={Router}/></div>
  )
}
 export default App; 
 