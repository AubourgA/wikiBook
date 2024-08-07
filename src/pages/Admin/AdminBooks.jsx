
import { useEffect, useState } from 'react'
import {axiosInstance} from '../../api'
import CustomTable from '../../components/ui/Table/CustomTable'
import { columnsBooks, createActionsBooks } from '../../Constants'


export default function AdminBooks() {

  const [books, setBooks] = useState({ 'hydra:member': [] })
 useEffect( ()=> {
  const fetchBooks = async ()=> {

    
      const response = await axiosInstance.get('/api/books');
      setBooks(response.data)
     return response.data
    

 }
fetchBooks()
},[])

const handleEdit = (e) => {
  // Implémentez la logique de l'édition ici
  console.log(e)
};


const handleDelete = () => console.log('hi')

const actionsBooks = createActionsBooks(handleEdit, handleDelete);

  return (
    <div>
   
        <section className=''>
              <h2> Liste des Ouvrages</h2>

              <CustomTable data={books['hydra:member']} columns={columnsBooks} actions={actionsBooks} />
        </section>
    </div>
  )
}
