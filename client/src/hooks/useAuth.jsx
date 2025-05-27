



import React, { useContext } from 'react'
import { MycontextProvider } from '../context/Contextapi'

function useAuth() {

    const auth =  useContext(MycontextProvider);

  return auth;
}

export default useAuth