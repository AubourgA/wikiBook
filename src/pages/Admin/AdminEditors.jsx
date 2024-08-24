import { columnsEditors, API_ENDPOINTS } from "../../Constants";
import { getData } from "../../store/editorsSlice";
import AdminEntity from "../../components/features/Admin/AdminEntityDisplay";

export default function AdminEditors() {
  return (
    <AdminEntity
    entityType="Editors"
    sliceSelector={(state) => state.editors}
    columns={columnsEditors}
    apiEndpoint={API_ENDPOINTS.EDITORS}
    createPath="/Dashboard/Editors/New"
    updatePath="/Dashboard/Editors/Update"
    entityName="editeur"
    getFetchData={getData} 
/>
  )
}

