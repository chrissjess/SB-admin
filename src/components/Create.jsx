import React, { useState,useEffect,useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { UserDataContext } from "./Context/UseContext";
import axios from "axios";
import { toast } from 'react-toastify'


function Create() {
  
  // let [name,setName] = useState("")
  // let [username,setUserName] = useState("")
  // let [email,setEmail] = useState("")
  // let [mobile,setMobile] = useState("")
  // let [batch,setBatch] = useState("")

  let navigate = useNavigate()

  let {API_URL} = useContext(UserDataContext)

  // let {data,setData} = useContext(UserDataContext)
  // console.log(data)

  const handleAddUser = async(values)=>{

    try {
      let res = await axios.post(API_URL,values)
      if(res===201){

        navigate('/dashboard')
      }
      
    } catch (error) {
      toast.error('Error Occurred')
    }

  }

  useEffect(()=>{
    console.log('useEffect Triggered')
    
  },[])

  const UserSchema = Yup.object().shape({
    name:Yup.string().required('* Required'),
    username:Yup.string().required('* Required').min(3,'* User Name should be atlest 3 characters'),
    email:Yup.string().email('* Invalid Email').required('* Required'),
    mobile:Yup.string().matches(/^\d{10}$/,'* Invalid Mobile Number').required('* Required'),
    batch:Yup.string()
  })


 
  
  // let handleSave = ()=>{
  //   let newArray = [...data]//immutable deep copy
  //   newArray.push({
  //     name,
  //     email,
  //     username,
  //     mobile,
  //     batch
  //   })
  //   setData(newArray)//state update
  //   console.log(newArray)
  //   navigate('/dashboard')
  // }
  return (
    <>
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Create User</h1>
        </div>
        <div className="row">
         <Formik 
         initialValues={{
          name:"",
          email:"",
          password:'',
          username:"",
          mobile:"",
          batch:""
        }}
        validationSchema={UserSchema}
        onSubmit={(values)=>{handleAddUser(values) }}
         >
          {({ errors,touched,handleBlur,handleSubmit,handleChange})=>(
            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name='name' placeholder="Enter Name" onBlur={handleBlur} onChange={handleChange}/>
                {errors.name && touched.name ? <div style={{color:"red"}}>{errors.name}</div>:null}
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>User Name</Form.Label>
                <Form.Control type="text" name='username' placeholder="Enter User Name" onBlur={handleBlur} onChange={handleChange}/>
                {errors.username && touched.username ? <div style={{color:"red"}}>{errors.username}</div>:null}
              </Form.Group>


              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email"  onBlur={handleBlur} onChange={handleChange}/>
                {errors.email && touched.email ? <div style={{color:"red"}}>{errors.email}</div>:null}
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Enter password"  onBlur={handleBlur} onChange={handleChange}/>
                {errors.password && touched.password ? <div style={{color:"red"}}>{errors.password}</div>:null}
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Mobile</Form.Label>
                <Form.Control type="text" name='mobile' placeholder="Enter Mobile" onBlur={handleBlur} onChange={handleChange}/>
                {errors.mobile && touched.mobile ? <div style={{color:"red"}}>{errors.mobile}</div>:null}
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Batch</Form.Label>
                <Form.Control type="text" name='batch' placeholder="Enter Batch" onBlur={handleBlur} onChange={handleChange}/>
                {errors.batch && touched.batch ? <div style={{color:"red"}}>{errors.batch}</div>:null}
              </Form.Group>

              <Button variant="primary" type='submit' onClick={(values)=>{handleAddUser(values)}}>
                Submit
              </Button>
            </Form>
          )}
        </Formik>
        </div>
      </div>
    </>
  );
}

export default Create;
