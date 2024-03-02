import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Abcde from './components/Abcde.js';
import Nac from './components/Nac.js';
import Newfile from './components/Newfile.js';
// import Gain from './components/Gain.js';
import My from './components/My.js';
// import My1 from './components/My1.html';
import Html from './components/Html';
// import My1 from './components/My1.html';
// import Hap from './components/Hap.css';
import Time from './components/Time.js';
import New from './components/New.js';
// import {Constantarr} from './components/Constant.js';
import Constant from './components/Constant.js';
import Rserver from './components/Rserver.js';
// import Login from './components/Login.js';
import Adds from './components/Adds.js';
import Event from './components/Event.js';
import Event1 from './components/Event1.js';
import Bt1 from './components/Bt1.js';
// import One from './components/One.js';

import ONE from './components/ONE.js';
import One1 from './components/One1.js';
import One2 from './components/One2.js';
import One3 from './components/One3.js';
import TWO from './components/TWO.js';

 
function createNew(Constantarr){
  return(
    <New name = {Constantarr.name}
    image = {Constantarr.img}
    phno = {Constantarr.phno}
    />
  )
}


function App() {
  
  return (
   <div>
    {/* <Abcde/>
    <Newfile/>
    <My/>
    <Html/> */}


    {/* <Nac/> */}
    {/* <Newfile/> */}
    {/* <Gain/> */}
    {/* <My/> */}
    {/* <My1/> */}
    {/* <Html/> */}
    {/* <Hap/> */}
    {/* <Time/> */}
    {/* <button className='btn btn-warning'>Done</button> */}

     {/* {Constantarr.map(createNew)} */}
    {/* <New name= "view" image="https://cdn.pixabay.com/photo/2023/10/12/14/41/town-8310950_1280.jpg" mail="view@gmail.com"/> */}
{/*     
   <New name = {Constantarr[0].name} image = {Constantarr[0].img} phno = {Constantarr[0].phno}/> 
   <New name = {Constantarr[1].name} image = {Constantarr[1].img} phno = {Constantarr[1].phno}/>  */}
  
   {/* <New name = {Constantarr[1].name} image = {Constantarr[1].img} phno = {Constantarr[1].phno}/>  */}
   
        {/* <New name = "abcde" phno = "98742749287"/> */}
    {/* <Constant/> */}
    {/* <Rserver/> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nac />}/>
          <Route path="/Rserver" element={<Rserver />} />
          <Route path="/Constant" element={<Constant />} />
          <Route path="/Time" element={<Time />} />
          <Route path="/Adds" element={<Adds />} />
          <Route path="/Event" element={<Event />} />
          <Route path="/Event1" element={<Event1 />} />
          <Route path="/Bt1" element={<Bt1 />} />
          <Route path="/ONE" element={<ONE />} />
          <Route path="/One1" element={<One1 />} />
          <Route path="/One2" element={<One2 />} />
          <Route path="/One3" element={<One3 />} />
          <Route path="/TWO" element={<TWO />} />

          
        
      </Routes>
    </BrowserRouter>
    {/* <Login/> */}
    

   </div>

  );
}

export default App;

