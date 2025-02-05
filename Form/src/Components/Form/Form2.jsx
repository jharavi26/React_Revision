
import React, { useState } from 'react';
import "./formStyle.css"


function Form2() {
  const defaultValues = {
    firstName : {
    id : "firstName",
    label : "first Name",
    type : "text",
    placeholder : "name",
    value : "",
    isError : false,
    errorMessage : "First message can not be empty."
    },
    lastName : {
      id : "lastName",
      label : "last Name",
      type : "text",
      placeholder : "lastname",
      value : "",
      isError : false,
      errorMessage : "last message can not be empty."
      },
      email : {
        id : "email",
        label : "Email",
        type : "email",
        placeholder : "Enter Your Email",
        value : "",
        isError : false,
        errorMessage : "Email can not be empty."
        },
        password : {
          id : "password",
          label : "Password",
          type : "password",
          placeholder : "Password",
          value : "",
          isError : false,
          errorMessage : "Password can not be empty."
          },
          confirmPassword : {
            id : "confirmpassword",
            label : "Confirm Password",
            type : "password",
            placeholder : "Confirm Password",
            value : "",
            isError : false,
            errorMessage : "Password can not be Match."
            },
  }

  const [formData , setFormData] = useState(defaultValues);
  const [password , setPassword] = useState(true)

  const handleInput = (e)=>{
    const key = e.target.id;
    const value = e.target.value;
    const copyFormData = {...formData}
    copyFormData[key].value = value;
    setFormData(copyFormData);
    isValidForm();

  }

  const passwordValidation = ()=>{
    const copyFormData = {...formData}
    const pass = copyFormData['password'].value;
    const cpass = copyFormData['confirmPassword'].value;
    if(pass !== cpass)
    {
      setPassword(false)
    }
    else{
      setPassword(true)
    }
  }

  const isValidForm = ()=>{
    const copyFormData = {...formData}
    Object.keys(copyFormData)
    .forEach(key => {
      const obj = copyFormData[key];
      obj.isError = !obj.value ? true : false;
    });
    passwordValidation();
    setFormData(copyFormData)
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    isValidForm();

    }
  

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        {
          Object.keys(formData).map((key)=>{
            const {id , label , type , placeholder , value , isError , errorMessage } = formData[key];
            return <div className='item' key ={id}>
              <label>{label}</label>
              <input onChange={handleInput} id={id} type={type} placeholder={placeholder} value={value}  className={isError && "error-border"} />
              {
                isError && <span className='error'>{errorMessage}</span>
              }
                

            </div>
              
            
            
          })
        }
          <button>Submit</button>
    
      </form>
      
    </div>
  )
}

export default Form2
