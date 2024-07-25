import {useState} from "react";
import SignUpForm from '../components/ui/SignUp.form';
import { createUser } from '../utils/apiRequest';
import { useNavigate } from 'react-router-dom';

const INITIAL_VALUE = {
  name: "",
  firstname: "",
  numPortable:"",
  city:"",
  email:"",
  password:""

}
export default function Subscribe() {

 const [formData, setFormData] = useState( INITIAL_VALUE )

 const navigate = useNavigate();
 
 const handleSubscribeValue = (e) => {
    const { name, value} = e.target
    setFormData( {...formData,
      [name] : value
    })
 }

 const handleSubmitSignUp = async (e) => {
      e.preventDefault()
     const response = await createUser(`${import.meta.env.VITE_API_CREATE_USER}`, formData)
     if(response) {
      navigate('/Login')
     }
 }

  return (
    <section className='flex justify-center  items-center bg-primary50/25 h-screen'>
        <div className='grid  grid-cols-1 grid-rows-1 max-w-sm md:max-w-5xl gap-2 shadow-xl bg-primary50 rounded  sm:grid-cols-2'>

          <SignUpForm  value={formData} onFormData={handleSubscribeValue} onSubmit={(e)=>handleSubmitSignUp(e)}/>
        </div>
      </section>
  )
}

