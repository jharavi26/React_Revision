import React, { useState } from 'react';

const data =  {
firstName: '',
lastName: '',
email: '',
password: ''
};

function Form3(){
  const [formData, setFormData] = useState(data)
   

  // Handle input change dynamically
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value, // Update the specific input field dynamically
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Log all form data
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
      <br />
      <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
      <br />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
      <br />
      <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form3;