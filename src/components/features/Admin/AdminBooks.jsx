import { useSelector, useDispatch } from 'react-redux'
import { getData } from '../../../store/bookSlice'
import { useEffect, useState } from 'react'

import CustomTable from '../../ui/Table/CustomTable'
import { columnsBooks, createActionsBooks,   } from '../../../Constants'
import Title from '../../ui/Title'
import SearchBar from '../filters/SearchBar'
import Button from '../../ui/Button'
import { IoMdAddCircle } from "react-icons/io";
// import Pagination from '../../ui/Pagination'
import Loader from "../../ui/Loader"
import Error from '../../ui/Error/Error'
// import BookForm from './Forms/BookForm'
// import { deleteBook, fetchBookById } from '../../../api'



export default function AdminBooks() {

  const [search, setSearch] = useState("")
  const dispatch = useDispatch()
  const { datas, loading, error }= useSelector( state => state.books)


 useEffect(() => {
  dispatch(getData());
}, [dispatch]);

if (loading) return <Loader />;

if (error) return <Error title="Oups..." message={error.message} />;

if (!datas || !datas['hydra:member']) return <Error title="Données manquantes" message="Impossible de récupérer la liste des livres." />;

//  const [isFormVisible, setIsFormVisible] = useState(false)
//  const [selectedBook, setSelectedBook] = useState(null);

const handleChangeSearch = () => (e) => {
     setSearch(e.target.value)
}

 // Filtrage par titre ou ISBN
 const filteredBooks = datas['hydra:member'].filter(book =>
  book.title.toLowerCase().includes(search.toLowerCase()) || 
  book.ISBN.toLowerCase().includes(search.toLowerCase())
);

console.log(datas)

// const handleAddBook = () => {
//   setSelectedBook(null);
//   setIsFormVisible(true)
// }

// const handleEdit = async ({id}) => {
//   try {
//     const bookDetails = await fetchBookById(id);
//     setSelectedBook(bookDetails);
//     setIsFormVisible(true);
//   } catch (error) {
//     console.error('Failed to fetch book details:', error.message);
//   }
// };

// const handleDelete = async (book) => {
//   try {
//     await deleteBook(book.id)
//     refetch()
//   } catch (err) {
//     console.error("Failed to delete book :", err.message)
//   }
// }

// const handlePaginationClick = async () => console.log("A DERTERMINER")

// const handleFormClose = () => setIsFormVisible(false)

const handleEdit = (e) => console.log(e)
const handleDelete = (e) => console.log(e)
const actionsBooks = createActionsBooks(handleEdit, handleDelete);



  return (
    <div>
    
      

        <section className='bg-blue-100 p-4 rounded my-2'>
              <div className='flex justify-between items-center border-light border-b-2'>
                   <Title level={2} text1="Liste des ouvrages" />
                   <SearchBar id="searchBar" 
                              type="text"
                              value={search}
                              name="searchBar"
                              placeholder="Votre recherche..."
                              pattern={""}
                              onChange={ handleChangeSearch}/>
              </div>
              <Button type="button" 
                      title="Ajouter un ouvrage"
                      category='forms'
                      icon= {IoMdAddCircle}
                      onButtonClick={()=>{}}
                      custom='items-center flex-row-reverse gap-2 mb-4' />
             

             
          <CustomTable data={filteredBooks} columns={columnsBooks} actions={actionsBooks} />
        
         {/* <Pagination
              paginationButtons={PAGINATION_BUTTONS.map(({ key, title }) => ({
                key,
                title,
                url: books["hydra:view"] && books["hydra:view"][key]
              }))}
              onPageChange={()=>{}}
              page={books}
            /> */}
        </section>
       
    </div>
  )
}
