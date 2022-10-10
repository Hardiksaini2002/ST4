import React, { useState } from 'react';

import LeftBox from "./Components/LeftBox";
//import 'index.css'

const App = () => {

    let [feedBack,setfeedBack]=useState([]);
    
    return (
        <>
        <div className="section">
            <LeftBox setfeedBack={setfeedBack}/>
            
            </div>
        </>
    )

};
export default App;