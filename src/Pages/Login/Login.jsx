import { useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
const Login = () => {
    const captcaRef=useRef(null);
    const[disable,setDisable]=useState(true)
    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])
    const handleLogin=(e)=>{
         e.preventDefault()
         const form=e.target;
         const email=form.email.value;
         const password=form.password.value;
         console.log(email,password);
    }
    const handleValidate=()=>{
         const user_captcha_value=captcaRef.current.value;
         if (validateCaptcha(user_captcha_value)==true) {
           setDisable(false)
        }
   
        
        
    }
    return (
        <div className="hero min-h-screen bg-base-200 ">
        <div className="hero-content flex-col lg:flex-row-reverse mt-14">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            
          </div>
          <div className="card shrink-0 md:w-3/4 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                <LoadCanvasTemplate />
                </label>
                <input type="text" ref={captcaRef} placeholder="Type the captcha" name='captcha' className="input input-bordered" required />
                <button onClick={handleValidate} className="btn btn-outline btn-accent mt-2">Validate</button>
              </div>
              <div className="form-control mt-6">
                <input disabled={disable} className='btn btn-primary ' type="submit" value="Log In" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;