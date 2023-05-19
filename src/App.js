import React from 'react'
import toast, { Toaster } from 'react-hot-toast';

// import Navigation from './components/Navigation'
import Home from './components/Home';
// import MyScreen from './components/Myscreen'
// import {useSelector} from 'react-redux';
// import Login from './components/Login';
// import Layout from './components/Layout';
// import Signup from './components/Signup';
// const notify = () => {const toastId = toast.loading('Loading...');

// toast.success('This worked', {
//   id: toastId,
// });
// }
const App = () => {
  // const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  // const newUser = useSelector(state => state.auth.newUser);
  
  return (
    <div>
      {/* {isLoggedIn && <Layout />}
      {!isLoggedIn && !newUser && <Login />}
      {!isLoggedIn && newUser && <Signup />} */}
      <Home />
      {/* <button onClick={notify}>Make me a toast</button> */}
      <Toaster />
    </div>
  )
}

export default App