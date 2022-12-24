import {  createHashRouter, RouterProvider } from "react-router-dom";
import MasterLayout from "./Components/MasterLayout/MasterLayout";
import NotFound from "./Components/NotFound/NotFound";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Register from "./Pages/Register";
import Shop from "./Pages/Shop";


function App() {
  let routes = createHashRouter([
    {path:"/",element:<MasterLayout/>,errorElement:<NotFound/>,children:[
      {index:true,element:<Home/>},
      {path:"shop",element:<Shop/>},
      {path:"cart",element:<Cart/>},
      {path:"login",element:<Login/>},
      {path:"register",element:<Register/>},
      {path:"profile",element:<Profile/>},
    ]}
  ])
  return (

    <RouterProvider router={routes}/>

  );
}

export default App;
