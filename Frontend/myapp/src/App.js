import React from "react";
import { publicRoutes, privateRoutes } from "./Routes/routes";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import {useSelector} from 'react-redux'
const App = () => {
  const auth=useSelector((state)=>state.authentication.isAuth);
  return (
    <BrowserRouter>
    <Routes>
      {privateRoutes.map((item, idx) => {
        return(
          <React.Fragment key={idx}>
          { auth && <Route path={item.path} element={item.element}/>}
          </React.Fragment>
        )
      })}
      {publicRoutes.map((item, idx) => {
         return(
          <React.Fragment key={idx}>
            <Route path={item.path} element={item.element}/>
          </React.Fragment>
        )
      })}
    </Routes>
    </BrowserRouter>
  );
};

export default App;
