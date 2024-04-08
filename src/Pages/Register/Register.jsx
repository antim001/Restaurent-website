
import { Link } from 'react-router-dom';

import { useForm } from "react-hook-form"
import {useContext} from 'react'
import { AuthContext } from './../../AuthProvider/AuthProvider';

const Register = () => {
    const {createUser}=useContext(AuthContext)
    const {register,handleSubmit,formState: { errors },
      } = useForm()
      const onSubmit = (data) => {
         createUser(data.email,data.password)
         .then(result=>{
              const loggedUser=result.user;
              console.log(loggedUser);
         })

      }
              
     return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold"> Register now!</h1>
      
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" {...register("name",{ required: true })} placeholder="enter name" name='name' className="input input-bordered"  />
          {errors.name && <span className='text-red-600'>This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email"  {...register("email",{ required: true })} placeholder="email" name='email' className="input input-bordered"  />
          {errors.name && <span className='text-red-600'>This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password"  {...register("password",{ required: true,minLength:6,
             maxLength: 20,
             pattern:/(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/

              })} placeholder="password" name='password'className="input input-bordered" />
         {errors.password?.type==='pattern' && <span className='text-red-600'>password must have atleast 
         one upper case,one lower case,one special character,one digit</span>}
          {errors.password?.type==='required' && <span className='text-red-600'>This field is required</span>}
         
          {errors.password?.type === 'minlength' && <span className='text-red-600'>Password must be at least 6 characters</span>}

        </div>
        <div className="form-control mt-6">
        <input className='btn btn-primary' type="submit" value="Register" />
        </div>
        <h2>Already have account? <Link to='/login'><span className='font-medium'>Log In</span></Link></h2>
      </form>
    </div>
  </div>
</div>
    );
};

export default Register;