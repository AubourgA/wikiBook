import { useSelector, useDispatch } from 'react-redux'
import { getData } from '../../../store/bookSlice'
import { useEffect, useState } from 'react'
import {useDebounce} from '../../../hooks/useDebounce'
import CustomTable from '../../ui/Table/CustomTable'
import { columnsBooks, createActionsBooks, PAGINATION_BUTTONS,   } from '../../../Constants'
import Title from '../../ui/Title'
import SearchBar from '../filters/SearchBar'
import Button from '../../ui/Button'
import { IoMdAddCircle } from "react-icons/io";
import Pagination from '../../ui/Pagination'
import Loader from "../../ui/Loader"
import Error from '../../ui/Error/Error'
import { API_ENDPOINTS } from '../../../Constants'
// import BookForm from './Forms/BookForm'
// import { deleteBook, fetchBookById } from '../../../api'



export default function AdminBooks() {

  const [search, setSearch] = useState("")
  const dispatch = useDispatch()
  const { datas, loading, error, pagination }= useSelector( state => state.books)
  const debouncedSearch = useDebounce(search, 500);



useEffect(() => {
  dispatch(getData({ endpoint: API_ENDPOINTS.BOOKS, search: debouncedSearch }));
}, [dispatch, debouncedSearch]);

if (loading) return <Loader />;

if (error) return <Error title="Oups..." message={error} />;

if (!datas || !datas['hydra:member']) return <Error title="Données manquantes" message="Impossible de récupérer la liste des livres." />;



const handleChangeSearch = () => (e) => setSearch(e.target.value)

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

const handlePaginationClick = async (url) =>    {
  dispatch(getData({endpoint : url, search : debouncedSearch}))};

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
             

             
          <CustomTable data={datas["hydra:member"]} columns={columnsBooks} actions={actionsBooks} />
        
         <Pagination
              paginationButtons={PAGINATION_BUTTONS.map(({ key, title }) => ({key,title }))}
              onPageChange={handlePaginationClick}
              page={pagination}/>
        </section>
       
    </div>
  )
}
