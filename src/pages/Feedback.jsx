import TextField from '@mui/material/TextField';
import Rating from '../components/Rating';

const Feedback = () => {
  return (
    <div className='w-screen h-screen bg-[#d5e4f1] flex items-center px-16'>
        <div className='w-[450px] bg-white px-8 py-6 flex flex-col gap-6 rounded-lg'>
            <div className='text-[#2071b2]'>Please Provide your Feedback</div>
            <div className='flex flex-col gap-10'>
                <div className='flex flex-col gap-6'>
                    <div className='flex justify-between'>
                        <div className='flex flex-col w-[180px]'>
                            <label className='font-semibold text-[#2071b2]'>Name</label>
                            {/* <TextField id="outlined-size-small" className='' size="small" placeholder='John Doe'/> */}
                            <input type="text" className='border-[1px] border-gray-500 outline-1 outline-none focus:border-gray-900 rounded-xl p-2 text-sm' placeholder='John Doe' />
                        </div>
                        <div className='flex flex-col w-[180px]'>
                            <label className='font-semibold text-[#2071b2]'>Contact Number</label>
                            <input type="text" className='border-[1px] border-gray-500 outline-1 outline-none focus:border-gray-900 rounded-xl p-2 text-sm' placeholder='+91 00000 00000' />
                            {/* <TextField id="outlined-size-small" size="small" placeholder='John Doe'/> */}
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='flex flex-col w-[180px]'>
                            <label className='font-semibold text-[#2071b2]'>Email Address</label>
                            <input type="text" className='border-[1px] border-gray-500 outline-1 outline-none focus:border-gray-900 rounded-xl p-2 text-sm' placeholder='xyz123@gmail.com'/>
                            {/* <TextField id="outlined-size-small" size="small" placeholder='John Doe'/> */}
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-5'>
                    <div className='font-semibold text-[#2071b2]'>Share your experience in scaling</div>
                    <Rating />
                </div>
                <div className='flex w-full'>
                    <textarea name="" id="" rows={4} className='w-full border-[1px] border-gray-500 outline-none focus:border-gray-900 rounded-xl p-2 text-sm' placeholder='Add your comments...'></textarea>
                </div>
                <div >
                    <button className='w-full p-3 bg-[#20b2aa] font-semibold text-white rounded-lg'>SUBMIT</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Feedback