
import React from 'react'
import {signuptype} from '../Types/Types'
type Action =|{type:"AddUsers",payload:signuptype} 
const CreateReducer=((state:{Add:signuptype[]},action:Action)=>{
    switch (action.type) {
        case "AddUsers":
            return  {
                Add:[action.payload,...state.Add]
           };
    }
});
export default CreateReducer;