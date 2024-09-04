import { FaCalendarAlt } from "react-icons/fa";
import DisplayDate from "../../displayDate/DisplayDate";
import useCurrentUser from '../../../../hooks/useCurrentUser';
import Loader from '../../../ui/Loader'

export default function UserBar() {

  const { currentUser, loading, error } = useCurrentUser();

  console.log(currentUser)
  if (loading) return <Loader />;
  if (error) return <div>Error: {error}</div>;

  return (
    <section className="flex justify-between items-center bg-primary50 rounded-lg p-3 ">
      <p>
        Bonjour <span className="font-bold">{currentUser?.name} {currentUser?.firstname}</span>
      </p>
      <p className="flex items-center gap-2">
        <FaCalendarAlt className="text-secondary/50" /> <DisplayDate />
      </p>
    </section>
  );
}
