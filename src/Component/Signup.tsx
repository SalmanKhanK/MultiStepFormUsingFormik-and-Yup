import React,{useContext} from 'react'
import {Formik,Form,ErrorMessage,Field} from 'formik'
import * as yup from 'yup';
import {TextField,Paper,Button} from '@material-ui/core/';
import { Link } from 'react-router-dom';
import swal from 'sweetalert'
import {signuptype} from '../Types/Types'
import './signup.css'
import {AddUsersContext} from '../Context/Usecontext'
export const Signup = () => {
    const {Add,addUsersfunc} = useContext(AddUsersContext)
    console.log(Add);
    // interface loginformvalues {
    //     name:string,
    //     email:string,
    //     password:string,

    // }
const initialValues:signuptype={
    name:"",
    email:"",
    password:""
}


    return (
        <div>
         <Formik
                initialValues={initialValues}
    validationSchema={yup.object({
       name:yup.string().min(4,"Minimum 4 characters").max(10,"Maximum 10 characters").required(),
       email:yup.string().email().required("Email is Required "),
       password:yup.string().min(4,"Minimum 4 characters or more").max(10,"Maximum 10 characters")
       .required("Password is Required"),
    })}
    onSubmit={(values:signuptype) => {
          //alert(JSON.stringify(values, null, 2));
          console.log(values)
          addUsersfunc(values)
          console.log(Add)
          swal("Sign Up Successfully!","You clicked the button!", "success");
      
      }}
    >
        <Paper elevation={3} className="loginHeader">
        <h1 className="titleLog">SignUp Account</h1>
        <Form>
         <Field type="text" as={TextField}variant="outlined" label="name" className="textfield" name="name" id="name"/>
         <ErrorMessage name="name">{msg => <p className="errormsg"> {msg}</p>}</ErrorMessage>
         
         <Field type="text" as={TextField}variant="outlined" label="email" className="textfield" name="email" id="name"/>
         <ErrorMessage name="email">{msg => <p className="errormsg"> {msg}</p>}</ErrorMessage>
         
         <Field type="text" as={TextField}variant="outlined" label="password" className="textfield"  name="password" id="password"/>
         <ErrorMessage name="password">{msg => <p className="errormsg"> {msg}</p>}</ErrorMessage>
         <Button variant="contained" color="primary" type="submit" className="loginBtn"
          
         >
           
            Create Account
         </Button>
         <Button  color="primary" className="createAccBtn">
         <Link to="/">Login Account
         </Link></Button>
       </Form>
       </Paper>
    </Formik>
        </div>
    )
}
