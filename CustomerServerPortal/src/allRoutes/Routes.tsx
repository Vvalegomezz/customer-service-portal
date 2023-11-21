import { Home, Knowledge, MySupport, Cases, Profile } from '@/pages';
import {  Route, Routes } from 'react-router-dom';


function Routess() {
  return (
    <>
     

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Knowledge" element={<Knowledge />} />
        <Route path="/MySupport" element={<MySupport />} />
        <Route path="/Cases" element={<Cases />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>

     
    </>
  );
}

export default Routess;