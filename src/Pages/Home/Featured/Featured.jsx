import React from 'react';
import SectionTitle from './../../../components/SectionTitle/SectionTitle';
import featureImg from '../../../assets/home/featured.jpg'
import './Feature.css'

const Featured = () => {
    return (
        <div className='feature-img mb-10 mt-10 pt-10'>
            <SectionTitle
                 subHeading='-------check-it-out--------'
                 heading='Featured items'
            >


            </SectionTitle>
            <div className='md:flex justify-center items-center py-16 px-32'>
                <div>
                    <img src={featureImg} alt="" />
                </div>
                <div className='md:ml-11'>
                    <p className='font-semibold text-white'>Jan 22,2025</p>
                    <h2 className='text-2xl text-white mb-4'>Where can I get some</h2>
                    <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Doloremque eos repudiandae sunt ut. Officia impedit delectus dolores totam incidunt repellendus. Esse accusantium, aperiam deleniti sit mollitia a nam nisi rerum modi maiores magnam temporibus quia maxime nihil architecto, labore sapiente doloribus reprehenderit. 
                        Quod beatae delectus reiciendis, provident temporibus iste molestias.</p>
                </div>
            </div>
        </div>
    );
};

export default Featured;