import React,{createContext, useReducer} from 'react'
import {Addusers,signuptype} from '../Types/Types'
import CreateReducer from './Usereducer'
const usersAccounts:Addusers={
    Add:[{name:"salman",email:"salman@gmail.com",password:"salman123"}],
    addUsersfunc:()=>{}
}
export const AddUsersContext=createContext(usersAccounts);
export const UsecontextProvider:React.FC = ({children}) => {
           const [state, dispatch] = useReducer(CreateReducer,usersAccounts)
               
           function addUsersfunc(users:signuptype){
                    dispatch({
                        type:"AddUsers",
                        payload:users
                    })
           }
    return (
       <AddUsersContext.Provider value={{
           Add:state.Add,
           addUsersfunc
       }}>
          {children}
       </AddUsersContext.Provider>
    )
}
