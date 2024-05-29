import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";
import { Fragment, Layout } from "react";
import DefaultLayout from "./pages/Layout/DefaultLayout";

function App() {
   return (
      <Router>
         <div className="App">
            <Routes>
               {
                  publicRoutes.map((route, index)=> {
                     const Page = route.component;
                     
                     let Layout = DefaultLayout;

                     if(route.layout){
                        Layout=route.layout
                     }else if(route.layout===null){ 
                        Layout=Fragment
                     }
                     return <Route key={index} path={route.path} element={<Page />} />
                  })
               }
            </Routes>
         </div>
      </Router>
   );
}

export default App;
