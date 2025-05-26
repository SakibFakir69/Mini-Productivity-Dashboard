


import React, { createContext } from 'react'

import { auth } from '../firebase/config';
export const MycontextProvider = createContext();
// context created

function Contextapi({children}) {


    



  return (
    <div>
        <MycontextProvider.Provider>
            {children}
        </MycontextProvider.Provider>


    </div>
  )
}

export default Contextapi