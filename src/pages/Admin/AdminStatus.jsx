import { columnsStatus, API_ENDPOINTS } from "../../Constants";
import { getData } from "../../store/statusSlice";
import AdminEntity from "../../components/features/Admin/AdminEntityDisplay";

export default function AdminStatus() {
  return (
    <AdminEntity
    entityType="Status"
    sliceSelector={(state) => state.status}
    columns={columnsStatus}
    apiEndpoint={API_ENDPOINTS.STATUS}
    createPath="/Dashboard/Status/New"
    updatePath="/Dashboard/Status/Update"
    entityName="status"
    getFetchData={getData} 
/>
  )
}
