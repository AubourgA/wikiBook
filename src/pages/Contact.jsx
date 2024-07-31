import { useState } from "react"
import { sendEmail } from '../utils/apiRequest';
import { INITIAL_CONTACT_VALUE } from '../Constants/initialize.state';
import { validateContactForm } from '../utils/checkDataForms';
import ContactForm from '../components/features/forms/Contact.form';


export default function Contact() {

  const [formData, setFormData] = useState(INITIAL_CONTACT_VALUE);
  const [errors, setErrors] = useState({});

  const handleChange = () => (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmitContact = () => (e) => {
    e.preventDefault();
    const validationErrors = validateContactForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      sendEmail(`${import.meta.env.VITE_API_MAILER}`,formData.lastname, formData.firstname, formData.email, formData.message)
      setFormData(INITIAL_CONTACT_VALUE)
    }
  };

  return (
    <section className='flex justify-center  items-center bg-primary50/25 h-screen'>
        <div className='grid  grid-cols-1 grid-rows-1 max-w-sm md:max-w-5xl gap-2 shadow-xl bg-primary50 rounded  sm:grid-cols-2'>
            <ContactForm onSubmit={handleSubmitContact}
                         datas={formData}
                         onChange={handleChange}
                         errors={errors} />
        </div>
    </section>


  )
}
