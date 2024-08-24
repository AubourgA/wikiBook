import { API_ENDPOINTS, columnsAuthors } from "../../Constants";
import { getData } from "../../store/authorsSlice";
import AdminEntity from "../../components/features/Admin/AdminEntityDisplay";


export default function AdminAuthors() {



  return (
    <AdminEntity
        entityType="Authors"
        sliceSelector={(state) => state.authors}
        columns={columnsAuthors}
        apiEndpoint={API_ENDPOINTS.AUTHORS}
        createPath="/Dashboard/Authors/New"
        updatePath="/Dashboard/Authors/Update"
        entityName="auteur"
        getFetchData={getData} 
  />
);
  
}