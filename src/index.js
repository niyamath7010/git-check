import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Append from './appendtext';
// import Binding from './binding';
// import { ComA } from './comA';
// import { TextA } from './TextA';
// import { UseRef } from './UseRef';
// import { UseEffected } from './UseEffect';
// import FirstCompo from './classbased';
// import { Propscheck } from './propscheck';
// import Nothing from './UseEffect01';
// import { Delete1 } from './delete1';
// import Niyamath from './usecontext1';
// import { UseContextparent } from './UseContextparent';
// import HocMain from './Hoc';
// import Context from './ContextApi';
// import Affu from './AffuGuu';
import Routing from './Routing';
import { BrowserRouter } from 'react-router-dom';
import App2 from './Interview';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
    {/* <App /> */}
    {/* <Append/> */}
    {/* <Binding/> */}
    {/* <ComA/> */}
    {/* <Nothing/> */}
    {/* <TextA/> */}
    {/* <UseRef/> */}
    {/* <UseEffected/> */}
    {/* <FirstCompo/> */}
    {/* <Propscheck/> */}
    {/* <Delete1/> */}
    {/* <Niyamath/> */}
    {/* <UseContextparent/> */}
    {/* <HocMain /> */}
    {/* <Context /> */}
    {/* <Affu /> */}
    {/* <Routing/> */}
    <App2 />
  </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
