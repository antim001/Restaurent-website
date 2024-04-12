import { FcGoogle } from "react-icons/fc";
import {useContext} from 'react'
import { AuthContext } from './../../AuthProvider/AuthProvider';
const SocialLogin = () => {
    const {googleSignIn}=useContext(AuthContext);
    const handleGoogleLogIn=()=>{
        googleSignIn()
        .then(res=>{
             console.log(res.user);
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <div>
           <button onClick={handleGoogleLogIn} className='btn'>
            <span>Google </span> <FcGoogle></FcGoogle>
            </button> 
        </div>
    );
};

export default SocialLogin;