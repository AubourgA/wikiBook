import { useState } from "react"
import { sendEmail } from '../api';
import { INITIAL_CONTACT_VALUE } from '../Constants/initialize.state';
import { validateContactForm } from '../utils/checkDataForms';
import ContactForm from '../components/features/forms/Contact.form';
import Image from '../components/ui/Image'
import contact from '../assets/images/contact.webp'
import MessageForm from '../components/ui/Forms/MessageForm';

export default function Contact() {

  const [formData, setFormData] = useState(INITIAL_CONTACT_VALUE);
  const [errors, setErrors] = useState({});
  
  const [statusSendEmail, setStatusSendEmail] = useState('')

  const handleChange = () => (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmitContact = () => async (e) => {
    e.preventDefault();
    const validationErrors = validateContactForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try{

        await sendEmail(formData.lastname, formData.firstname, formData.email, formData.message)
        setFormData(INITIAL_CONTACT_VALUE)
        setStatusSendEmail('success')
      } catch (error) {
        setStatusSendEmail('error')
      }
    }
    setTimeout( ()=> {setStatusSendEmail("")},3000)
  };

  return (
    <section className='flex justify-center  items-center bg-primary50/25 h-screen'>
        <div className='grid  grid-cols-1 grid-rows-1 max-w-sm md:grid-cols-2 md:max-w-5xl gap-2 shadow-xl bg-primary50 rounded  '>
            <div>
              {statusSendEmail === 'success' && <MessageForm message="Email envoyé avec succes" type="SUCCESS" styleType='success bg-green-300' styleMessage='text-green-500 pt-2' /> }
              {statusSendEmail === 'error' && <MessageForm message="Une erreur s'est produite. Veuillez réessayer ultérieurement." type="ERROR" /> }
              
              <ContactForm onSubmit={handleSubmitContact}
                          datas={formData}
                          onChange={handleChange}
                          errors={errors} />
               
            </div>
            <Image img={contact} alt="contact"/>
        </div>
    </section>


  )
}
