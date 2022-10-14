import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
  } from "react-router-dom";
import Main from '../routes/Main';
import {createBrowserHistory} from "history";
import NotFound from '../routes/NotFound';

export const history = createBrowserHistory();

const AppRouter = () => {
  return (
    <BrowserRouter>
        <div>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="*" element={<NotFound />} />                
            </Routes>
        </div>
  </BrowserRouter>
  )
}

export default AppRouter