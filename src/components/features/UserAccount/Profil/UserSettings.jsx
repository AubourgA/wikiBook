import Cookies from 'js-cookie';
import { useState } from 'react';
import InputForm from '../../../ui/Forms/InputForm';
import Title from "../../../ui/Title";

import Button from '../../../ui/Forms/Button';




export default function UserSettings() {

  const [filters, setFilters] = useState({})
  const [save, setIsSave] = useState(false)




  const handleInputFilter = () => (e) => {
    setIsSave(false)
    const {name, value} = e.target
    setFilters((prevFilters) => ({ ...prevFilters,[name]: value }));
  }

  
  const onSubmitChoice = (e) => {
    e.preventDefault()
    const filtersJSON = JSON.stringify(filters);
    setIsSave(true)
     Cookies.set('filters', filtersJSON, {expires : 7})
     setIsSave(true)
  }

  console.log(filters)
  
  return (
    <section className='flex-1 bg-primary50/50 rounded p-6 text-dark  shadow-lg'>
            <Title level={3} text1='Mes Préférences' />
          
            <Title level={4} text1="Indiquer vos préférences de recherche"/>

            <form className='w-[100%] sm:w-[50%]'  onSubmit={onSubmitChoice}>
                <div className='flex flex-col'>
                  <InputForm id='author' 
                              type="text"
                                label="Auteur" 
                                name="author.name" 
                                value={filters.author}
                                onChange={ handleInputFilter} />
                </div>

                <div className='flex flex-col'>
                  <InputForm id='genre' 

                                label="Genres" 
                                name="genre.name" 
                                value={filters.genre}
                                onChange={ handleInputFilter}
                                className='' />

                </div>
                <Button category='validate' 
                        title={save ? "OK ✅" : "Enregistrer"}
                        custom='my-2 text-white' />

            </form>
      
     
    </section>
  )
}


