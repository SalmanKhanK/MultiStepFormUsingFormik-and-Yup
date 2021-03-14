import React,{useContext} from 'react'
import {Formik,Form,ErrorMessage,Field} from 'formik'
import * as yup from 'yup';
import {TextField,Paper,Button} from '@material-ui/core/';
import { Link } from 'react-router-dom';
import swal from 'sweetalert'
import './login.css'
import {AddUsersContext} from '../Context/Usecontext'
export const Login = () => {
    const {Add} = useContext(AddUsersContext)
    interface loginformvalues {
        email:string,
        password:string
    }
const initialValues:loginformvalues={
    email:"",
    password:""
}
    return (
        <div>
             <Formik
                initialValues={initialValues}
    validationSchema={yup.object({
           email:yup.string().email().required("Email is Required "),
       password:yup.string().min(4,"Minimum 4 characters or more").max(10,"Maximum 10 characters")
       .required("Password is Required"),
    })}
    onSubmit={(values:any) => {
       
          //alert(JSON.stringify(values, null, 2));
    for(var i=0;i<Add.length;i++){
          if(values.email===Add[i].email && values.password===Add[i].password){
                return  swal("Login Successfully!","You clicked the button!", "success");
          }
          else{
            return  swal("Error","Incorrect Email or Password", "error");   
          }
}
       
         console.log(values)          
      
      }}
    >
        <Paper elevation={3} className="loginHeader">
        <h1 className="titleLog">Log in Account</h1>
        <Form>
         <Field type="text" as={TextField}variant="outlined" label="email" className="textfield" name="email" id="name"/>
         <ErrorMessage name="email">{msg => <p className="errormsg"> {msg}</p>}</ErrorMessage>
         <Field type="text" as={TextField}variant="outlined" label="password" className="textfield"  name="password" id="password"/>
         <ErrorMessage name="password">{msg => <p className="errormsg"> {msg}</p>}</ErrorMessage>
         <Button variant="contained" color="primary" type="submit" className="loginBtn">
            Login
         </Button>
         <Button  color="primary" className="createAccBtn">
         <Link to="/signup">Create Account
         </Link></Button>
       </Form>
       </Paper>
    </Formik>
        </div>
    )
}
