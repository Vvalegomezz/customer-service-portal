import { Home, Knowledge, MySupport, Cases, Profile, LoginForm, RegisterForm} from '@/pages';
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
        <Route path="/LoginForm" element={<LoginForm onSubmit={function (username: string, password: string): void {
          throw new Error('Function not implemented.');
        } } />} />
        <Route path="/RegisterForm" element={<RegisterForm onSubmit={function (email: string, username: string, password: string): void {
          throw new Error('Function not implemented.');
        } } />} />
      </Routes>

     
    </>
  );
}

export default Routess;