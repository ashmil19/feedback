import Rating from '../components/Rating';
import Neutral from '../assets/Neutral.svg'
import { useState } from 'react';

const Feedback = () => {
    const [values, setValues] = useState({
        name: "",
        number: "",
        email: "",
        comment: "",
        rating: 1
    })

  return (
    <div className='w-screen h-screen bg-[#d5e4f1] flex items-center px-16 gap-10'>
        <div className='flex '>
            <div className='w-[450px] bg-white px-8 py-6 flex flex-col gap-6 rounded-xl'>
                <div className='text-[#2071b2]'>Please Provide your Feedback</div>
                <div className='flex flex-col gap-10'>
                    <div className='flex flex-col gap-6'>
                        <div className='flex justify-between'>
                            <div className='flex flex-col w-[180px]'>
                                <label className='font-semibold text-[#2071b2]'>Name</label>
                                <input type="text" name='name' className='border-[1px] border-gray-500 outline-1 outline-none focus:border-gray-900 rounded-xl p-2 text-sm' placeholder='John Doe' />
                            </div>
                            <div className='flex flex-col w-[180px]'>
                                <label className='font-semibold text-[#2071b2]'>Contact Number</label>
                                <input type="text" name='number' className='border-[1px] border-gray-500 outline-1 outline-none focus:border-gray-900 rounded-xl p-2 text-sm' placeholder='+91 00000 00000' />
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='flex flex-col w-[180px]'>
                                <label className='font-semibold text-[#2071b2]'>Email Address</label>
                                <input type="text" name='email' className='border-[1px] border-gray-500 outline-1 outline-none focus:border-gray-900 rounded-xl p-2 text-sm' placeholder='xyz123@gmail.com'/>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <div className='font-semibold text-[#2071b2]'>Share your experience in scaling</div>
                        <Rating values={values} setValues={setValues} />
                    </div>
                    <div className='flex w-full'>
                        <textarea name="comment" rows={4} className='w-full border-[1px] border-gray-500 outline-none focus:border-gray-900 rounded-xl p-2 text-sm' placeholder='Add your comments...'></textarea>
                    </div>
                    <div >
                        <button className='w-full p-3 bg-[#20b2aa] font-semibold text-white rounded-lg'>SUBMIT</button>
                    </div>
                </div>
            </div>

            <div className='w-[550px] bg-[#d5e4f1] px-8 py-4 flex flex-col gap-6 rounded-2xl justify-start '>
                <div className='font-extrabold text-2xl text-[#2071b2]'>Submitted Feedbacks</div>
                <div className='flex flex-col gap-3'>
                    {[1,2,4].map((items)=>(
                        <div className='bg-white h-28 rounded-lg flex'>
                            <div className='w-3/4 flex flex-col justify-center pl-5 gap-2'>
                                <div className='font-semibold text-[#2071b2]'>Comment from the user</div>
                                <div className='text-[#2071b2]'>User Name</div>
                            </div>
                            <div className='w-1/4 flex flex-col justify-center items-center gap-2'>
                                <img src={Neutral} alt="" className='h-[50px] w-[50px]' />
                                <div className='text-xs text-center text-green-600 font-semibold'>Very Good</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Feedback