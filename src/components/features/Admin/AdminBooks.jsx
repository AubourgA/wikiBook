
import { useState } from 'react'
import { useBooks } from '../../../hooks/useBooks'
import { useDebounce} from '../../../hooks/useDebounce'
import CustomTable from '../../ui/Table/CustomTable'
import { columnsBooks, createActionsBooks, PAGINATION_BUTTONS,  } from '../../../Constants'
import Title from '../../ui/Title'
import SearchBar from '../filters/SearchBar'
import Button from '../../ui/Button'
import { IoMdAddCircle } from "react-icons/io";
import Pagination from '../../ui/Pagination'
import Loader from "../../ui/Loader"
import Error from '../../ui/Error/Error'
import AddBookForm from './Forms/AddBookForm'
import { deleteBook, fetchBookById } from '../../../api'



export default function AdminBooks() {

  const [search, setSearch] = useState("")
  const debouncedSearchQuery = useDebounce(search, 500);
 const { books, loading, error, refetch} = useBooks(debouncedSearchQuery)
 const [isFormVisible, setIsFormVisible] = useState(false)

const handleChangeSearch = () => (e) => {
     setSearch(() => e.target.value)
}

const handleAddBook = () => {
  setIsFormVisible(true)
}

const handleEdit = async (e) => {
  try {
    const datas = await fetchBookById(e.id);
    console.log(datas);
    // Traitez les données ici
    // Par exemple, mettre à jour l'état avec les détails du livre
  } catch (error) {
    console.error('Failed to fetch book:', error);
    // Affichez un message d'erreur ou gérez l'erreur de manière appropriée
  }
};

const handleDelete = async (book) => {
  try {
    await deleteBook(book.id)
    refetch()
  } catch (err) {
    console.error("Failed to delete book :", err.message)
  }
}

const handlePaginationClick = async () => console.log("A DERTERMINER")

const handleFormClose = () => setIsFormVisible(false)

const actionsBooks = createActionsBooks(handleEdit, handleDelete);

if (loading) return <Loader />;

if (error) return <Error title="Oups..." message={error.message} />;

  return (
    <div>
      {isFormVisible ? <AddBookForm onClose={handleFormClose} /> 
       : (

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
                      onButtonClick={handleAddBook}
                      custom='items-center flex-row-reverse gap-2 mb-4' />
             

               {!loading && !error && (
          <CustomTable data={books['hydra:member']} columns={columnsBooks} actions={actionsBooks} />
        )}
         <Pagination
              paginationButtons={PAGINATION_BUTTONS.map(({ key, title }) => ({
                key,
                title,
                url: books["hydra:view"] && books["hydra:view"][key]
              }))}
              onPageChange={handlePaginationClick}
              page={books}
            />
        </section>
       )}
    </div>
  )
}
