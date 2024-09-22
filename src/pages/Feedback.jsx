import Rating from '../components/Rating';
import { useMemo, useState } from 'react';
import Good from '../assets/Good.svg'
import Loveit from '../assets/Loveit.svg'
import Neutral from '../assets/Neutral.svg'
import Worst from '../assets/Worst.svg'
import NotGood from "../assets/It's just fine'.svg"
import styles from './Scrollbar.module.css'
import ToastHelper from '../helper/ToastHelper';
import { Toaster } from 'react-hot-toast';


const Feedback = () => {

    const emojies = useMemo(() => ({
        1: {emoji: Worst,text: "Worst"},
        2: {emoji: NotGood,text: "Not Good"},
        3: {emoji: Neutral,text: "Fine"},
        4: {emoji: Good,text: "Look Good"},
        5: {emoji: Loveit,text: "Very Good"}
    }),[])

    const toastHelper = useMemo(()=> new ToastHelper(),[])

    const [feedbacks, setFeedbacks] = useState([])
    const [values, setValues] = useState({
        name: "",
        number: "",
        email: "",
        comment: "",
        rating: 1
    })

    const handleChange = (e) => {
        setValues((prev)=> ({...prev,[e.target.name]: e.target.value}))
    }

    const validateFields = () =>{
        if(!values.name.trim()){
            toastHelper.showToast("name is required")
            return false
        }

        if(!values.number.trim()){
            toastHelper.showToast("number is required")
            return false
        }else if(!(/^(?:\+91|91)?[6789]\d{9}$/.test(values.number.trim()))){
            toastHelper.showToast("contact number should be a 10-digit Indian number")
            return false
        }
        
        if(!values.email.trim()){
            toastHelper.showToast("email is required")
            return false
        }else if(!(/\S+@\S+\.\S+/.test(values.email))){
            toastHelper.showToast("Invalid email")
            return false
        }

        if(values.rating <= 0){
            toastHelper.showToast("rating is required")
            return false
        }

        if(!values.comment.trim()){
            toastHelper.showToast("comment is required")
            return false
        }


        return true
    }

    const handleSubmit = () =>{
        if(validateFields()){
            const submitValues = {
                name: values.name.trim(),
                number: values.number.trim(),
                email: values.email.trim(),
                rating: values.rating,
                comment: values.comment.trim()
            }

            setFeedbacks((prev)=> [...prev,submitValues])

            setValues({
                name: "",
                number: "",
                email: "",
                rating: 1,
                comment: ""
            })
        }
    }

  return (
    <div className='w-screen md:h-screen h-auto bg-[#d5e4f1] md:py-16 py-6 md:px-16 px-4'>
        <div className='flex w-full md:flex-row flex-col'>
            <div className='md:w-[450px] w-full bg-white md:px-8 px-4 py-6 flex flex-col gap-6 rounded-xl shadow-md'>
                <div className='text-[#2071b2]'>Please Provide your Feedback</div>
                <div className='flex flex-col gap-10'>
                    <div className='flex flex-col gap-6'>
                        <div className='flex justify-between'>
                            <div className='flex flex-col w-[180px]'>
                                <label className='font-semibold text-[#2071b2]'>Name</label>
                                <input type="text" name='name' value={values.name} onChange={(e)=> handleChange(e)} className='border-[1px] border-gray-500 outline-1 outline-none focus:border-gray-900 rounded-xl p-2 text-sm' placeholder='John Doe' />
                            </div>
                            <div className='flex flex-col w-[180px]'>
                                <label className='font-semibold text-[#2071b2]'>Contact Number</label>
                                <input type="text" name='number' value={values.number} onChange={(e)=> handleChange(e)} className='border-[1px] border-gray-500 outline-1 outline-none focus:border-gray-900 rounded-xl p-2 text-sm' placeholder='+91 00000 00000' />
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='flex flex-col w-[180px]'>
                                <label className='font-semibold text-[#2071b2]'>Email Address</label>
                                <input type="text" name='email' value={values.email} onChange={(e)=> handleChange(e)} className='border-[1px] border-gray-500 outline-1 outline-none focus:border-gray-900 rounded-xl p-2 text-sm' placeholder='xyz123@gmail.com'/>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <div className='font-semibold text-[#2071b2]'>Share your experience in scaling</div>
                        <Rating values={values} setValues={setValues} />
                    </div>
                    <div className='flex w-full'>
                        <textarea name="comment" rows={4} value={values.comment} onChange={(e)=> handleChange(e)} className='w-full border-[1px] border-gray-500 outline-none focus:border-gray-900 rounded-xl p-2 text-sm' placeholder='Add your comments...'></textarea>
                    </div>
                    <div >
                        <button className='w-full p-3 bg-[#20b2aa] font-semibold text-white rounded-lg' onClick={handleSubmit} >SUBMIT</button>
                    </div>
                </div>
            </div>

            <div className='md:w-[550px] w-full bg-[#d5e4f1] px-8 py-4 flex flex-col gap-6 rounded-2xl justify-start h-[700px]'>
                <div className='font-extrabold text-2xl text-[#2071b2]'>Submitted Feedbacks</div>
                <div className={`flex flex-col gap-3 overflow-y-scroll ${styles.customScrollbar}`}>
                    {feedbacks && [...feedbacks].reverse().map((feedback,index)=>(
                        <div key={index} className='bg-white h-[112px] rounded-lg flex-none flex shadow-md'>
                            <div className='w-3/4 flex flex-col justify-center pl-5 gap-2'>
                                <div className='font-semibold text-[#2071b2] truncate'>{feedback.comment && feedback.comment}</div>
                                <div className='text-[#2071b2]'>{feedback.name && feedback.name}</div>
                            </div>
                            <div className='w-1/4 flex flex-col justify-center items-center gap-2'>
                                <img src={feedback.rating && emojies[feedback.rating].emoji} alt="" className='h-[50px] w-[50px]' />
                                <div className='text-xs text-center text-green-600 font-semibold'>{feedback.rating && emojies[feedback.rating].text}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <Toaster />
    </div>
  )
}

export default Feedback