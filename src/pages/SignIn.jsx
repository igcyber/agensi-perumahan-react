import React, { useState } from 'react'

export default function SignIn() {
  //create hook value for form login
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const {email, password } = formData;
  function onChange(e){
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value
    })) 
  }

  //create hook for showPassword
  const [showPassword, setShowPassword] = useState(false);
  return (
    <section className='px-3 max-w-3xl mx-auto'>
      <h1 className='text-2xl mt-6 font-bold text-gray-500'> Sign In or Create An Account 
      </h1>
      <div>
        <div className='mt-6'>
          <form action="">

            <input 
            type="email" 
            id="email" 
            value={email} 
            onChange={onChange} 
            placeholder='Your email address' 
            className='w-full rounded text-gray-500 border-gray-300 p-2 mb-3' />

            <div>
              <input 
              type={ showPassword ? "text" : "password"} 
              id="password" 
              value={password} 
              onChange={onChange}
              placeholder='Your password' 
              className='w-full rounded text-gray-500 border-gray-300 p-2' />
            </div>

          </form>
        </div>
      </div>
    </section>
  )
}
