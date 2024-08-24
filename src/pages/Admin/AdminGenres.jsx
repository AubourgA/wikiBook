import { columnsGenres, API_ENDPOINTS } from "../../Constants";
import { getData } from "../../store/genresSlice";
import AdminEntity from "../../components/features/Admin/AdminEntityDisplay";


export default function AdminGenres() {



  return (
    <AdminEntity
        entityType="Genres"
        sliceSelector={(state) => state.genres}
        columns={columnsGenres}
        apiEndpoint={API_ENDPOINTS.GENRES}
        createPath="/Dashboard/Genres/New"
        updatePath="/Dashboard/Genres/Update"
        entityName="genres"
        getFetchData={getData} 
  />
);
  
}
