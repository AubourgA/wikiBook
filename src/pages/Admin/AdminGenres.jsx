import { columnsGenres, API_ENDPOINTS } from "../../Constants";
import { getData } from "../../store/genresSlice";
// import AdminEntity from "../../components/features/Admin/AdminEntityDisplay";
import AdminEntity from "../../components/features/Admin/EntityDisplay";

export default function AdminGenres() {



  return (
    <AdminEntity
        entityType="genres"
        sliceSelector={(state) => state.genres}
        columns={columnsGenres}
        apiEndpoint={API_ENDPOINTS.GENRES}
        createPath="/Dashboard/Genres/New"
        updatePath="/Dashboard/Genres/Update"
        entityName="genre"
        getFetchData={getData} 
  />
);
  
}
