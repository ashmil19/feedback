import TextField from '@mui/material/TextField';
import Rating from '../components/Rating';

const Feedback = () => {
  return (
    <div className='w-screen h-screen bg-[#d5e4f1]'>
        <div className='w-1/3 bg-white px-10'>
            <div>Please Provide your Feedback</div>
            <div>
                <div>
                    <div className='flex gap-20'>
                        <div className='flex flex-col'>
                            <label>Name</label>
                            <TextField id="outlined-size-small" className='rounded-md' size="small" placeholder='John Doe'/>
                        </div>
                        <div className='flex flex-col'>
                            <label>Contact Number</label>
                            <TextField id="outlined-size-small" size="small" placeholder='John Doe'/>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='flex flex-col'>
                            <label>Email Address</label>
                            <TextField id="outlined-size-small" size="small" placeholder='John Doe'/>
                        </div>
                    </div>
                </div>
                <div>
                    <div>Share your experience in scaling</div>
                    <Rating />
                </div>
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
  )
}

export default Feedback