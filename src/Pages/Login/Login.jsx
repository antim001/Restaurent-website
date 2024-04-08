import { useEffect,  useState,useContext } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from './../../AuthProvider/AuthProvider';
import { Link ,useNavigate,useLocation} from 'react-router-dom';
import Swal from 'sweetalert2'
const Login = () => {
    const {signIn}=useContext(AuthContext)
    const navigate=useNavigate();
    const location=useLocation();
   const from = location.state?.from?.pathname || "/";
   
    const[disable,setDisable]=useState(true)
    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])
    const handleLogin=(e)=>{
         e.preventDefault()
         const form=e.target;
         const email=form.email.value;
         const password=form.password.value;
        signIn(email,password)
        .then(result=>{
             const user=result.user;
             console.log(user);
             Swal.fire({
                title: "user login Successful",
                showClass: {
                  popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `
                },
                hideClass: {
                  popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `
                }
              });
              navigate(from, { replace: true });
        })
        .catch(error=>{
            console.log(error);
            Swal.fire("Invalid email /password");
        })
    }
    const handleValidate=(e)=>{
         const user_captcha_value=e.target.value;
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
                <input type="text" onBlur={handleValidate}  placeholder="Type the captcha" name='captcha' className="input input-bordered" required />
               
              </div>
              <div className="form-control mt-6">
                <input disabled={disable} className='btn btn-primary ' type="submit" value="Log In" />
              </div>
              <h2>New here? <Link to='/register'><span className='font-medium'>Register</span></Link></h2>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;