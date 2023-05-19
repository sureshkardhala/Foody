import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const Notification = () => {
  return (
    <div>
    <button onClick={notify}>Make me a toast</button>
    <Toaster />
  </div>
  )
}

export default Notification