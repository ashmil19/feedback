import Slider from '@mui/material/Slider';
import Good from '../assets/Good.svg'
import Loveit from '../assets/Loveit.svg'
import Neutral from '../assets/Neutral.svg'
import Worst from '../assets/Worst.svg'
import NotGood from "../assets/It's just fine'.svg"

const Rating = ({values, setValues}) => {

  return (
    <div className='flex flex-col gap-3'>
        <div className='flex justify-between'>
            <div className={`flex flex-col items-center w-[75px] h-[80px] ${values.rating !== 1 && 'grayscale opacity-30'}`}>
                <img src={Worst} alt="" className='h-[40px] w-[40px]' />
                <div className='font-semibold text-sm text-[#105955]'>Worst</div>
            </div>
            <div className={`flex flex-col items-center w-[75px] h-[80px] ${values.rating !== 2 && 'grayscale opacity-30'}`}>
                <img src={NotGood} alt="" className='h-[40px] w-[40px]' />
                <div className='font-semibold text-center text-sm text-[#105955]'>Not<br/>Good</div>
            </div>
            <div className={`flex flex-col items-center w-[75px] h-[80px] ${values.rating !== 3 && 'grayscale opacity-30'}`}>
                <img src={Neutral} alt="" className='h-[40px] w-[40px]' />
                <div className='font-semibold text-sm text-[#105955]'>Fine</div>
            </div>
            <div className={`flex flex-col items-center w-[75px] h-[80px] ${values.rating !== 4 && 'grayscale opacity-30'}`}>
                <img src={Good} alt="" className='h-[40px] w-[40px]' />
                <div className='font-semibold text-center text-sm text-[#105955]'>Look<br/>Good</div>
            </div>
            <div className={`flex flex-col items-center w-[75px] h-[80px] ${values.rating !== 5 && 'grayscale opacity-30'}`}>
                <img src={Loveit} alt="" className='h-[40px] w-[40px]' />
                <div className='font-semibold text-center text-sm text-[#105955]'>Very<br/>Good</div>
            </div>
        </div>
    <Slider min={0} max={5} className="!h-2 !text-[#105955]" value={values.rating} onChange={(e)=> setValues((prev)=> ({...prev,rating: e.target.value}))} />
    </div>
  )
}

export default Rating