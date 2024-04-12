import { FcGoogle } from "react-icons/fc";
import {useContext} from 'react'
import { AuthContext } from './../../AuthProvider/AuthProvider';
import useAxiosPublic from './../../hooks/useAxiosPublic';
import { useNavigate } from 'react-router-dom';
const SocialLogin = () => {
    const axiosPublic=useAxiosPublic()
    const navigate=useNavigate()
    const {googleSignIn}=useContext(AuthContext);
    const handleGoogleLogIn=()=>{
        googleSignIn()
        .then(res=>{
            const userInfo={
                email:res.user?.email,
                name:res.user?.displayName
            }
            axiosPublic.post('/users',userInfo)
            .then(res=>{
                console.log(res.data);
                navigate('/')
            })
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