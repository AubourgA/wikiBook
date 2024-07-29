import {useState} from "react";
import SignUpForm from '../components/ui/SignUp.form';
import { createUser } from '../utils/apiRequest';
import { useNavigate } from 'react-router-dom';
import { isAlphabetic, isValidEmail, isValidFrenchPhoneNumber,isValidPassword } from '../utils/validation';

const INITIAL_VALUE = {
  name: "",
  firstname: "",
  numPortable:"",
  city:"",
  email:"",
  password:""
}

const INITIAL_VALIDATION = {
  name: false,
  firstname: false,
  numPortable:false,
  city: false,
  email:false,
  password:false
}

export default function Subscribe() {

 const [formData, setFormData] = useState( INITIAL_VALUE )
 const [showValidation, setShowValidation] = useState({...INITIAL_VALIDATION })
 const [error, setError] = useState(null);

 const navigate = useNavigate();

 const handleSubscribeValue = () => (e) => {
    const { name, value} = e.target
    setFormData( {...formData,
      [name] : value
    })
 }

 const validationCheck = () => {
  //permet de tester si chaque valeur est true or false
    const areValid = {
      ...INITIAL_VALIDATION
    }

    if(!isAlphabetic(formData.name)) {
      setShowValidation( state => ( {...state, name : true }) )
    } else {
      areValid.name = true
      setShowValidation( state => ( {...state, name : false }) )
    }

    if(!isAlphabetic(formData.firstname)) {
      setShowValidation( state => ( {...state, firstname : true }) )
    } else {
      areValid.firstname = true
      setShowValidation( state => ( {...state, firstname : false }) )
    }

    if(!isValidFrenchPhoneNumber(formData.numPortable)) {
      setShowValidation( state => ( {...state, numPortable : true }) )
    } else {
      areValid.numPortable = true
      setShowValidation( state => ( {...state, numPortable : false }) )
    }

    if(!isAlphabetic(formData.city)) {
      setShowValidation( state => ( {...state, city : true }) )
    } else {
      areValid.city = true
      setShowValidation( state => ( {...state, city : false }) )
    }

    if(!isValidEmail(formData.email)) {
      setShowValidation( state => ( {...state, email : true }) )
    } else {
      areValid.email = true
      setShowValidation( state => ( {...state, email : false }) )
    }

    if(!isValidPassword(formData.password)) {
      setShowValidation( state => ( {...state, password : true }) )
    } else {
      areValid.password = true
      setShowValidation( state => ( {...state, password : false }) )
    }

    //verifier l'object si toutes les valeurs sont true
    if(Object.values(areValid).every( value => value)) {
      return true
    } else {
      return false
  }
    
  

 }

 const handleSubmitSignUp = async (e) => {
      e.preventDefault()
   
      //si formulaire n'est pas valide
    if(!validationCheck()) {
        return;
    }

    //envoi data si formulaire est valide
     const response = await createUser(`${import.meta.env.VITE_API_CREATE_USER}`, formData)
     
    //traitement error
     if (response.success) {
      navigate('/Login');
    } else {
      if (response.error) {
        setError(`Erreur de connexion : ${response.error.title || response.error}`);
      } else {
        setError('Une erreur inconnue est survenue.');
      }
    }
 }





  return (
    <section className='flex justify-center  items-center bg-primary50/25 h-screen'>
        <div className='grid  grid-cols-1 grid-rows-1 max-w-sm md:max-w-5xl gap-2 shadow-xl bg-primary50 rounded  sm:grid-cols-2'>
          {/* {error && (<p>Une erreur est survenue</p>)} */}
          <SignUpForm  value={formData} 
                       onFormData={handleSubscribeValue}
                       onSubmit={(e)=>handleSubmitSignUp(e)}
                       validation={showValidation}
                       error={error} />
        </div>
      </section>
  )
}

