import { columnsBooks, API_ENDPOINTS } from "../../Constants";
import { getData } from "../../store/booksSlice";
import AdminEntity from "../../components/features/Admin/AdminEntityDisplay";


export default function AdminBooks() {



  return (
    <AdminEntity
    
        entityType="Books" 
        sliceSelector={(state) => state.books}
        columns={columnsBooks}
        apiEndpoint={API_ENDPOINTS.BOOKS}
        createPath="/Dashboard/Books/New"
        updatePath="/Dashboard/Books/Update"
        entityName="ouvrage"
        getFetchData={getData} 
  />
);
  
}
