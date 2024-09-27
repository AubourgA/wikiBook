import UserInfo from '../../components/features/UserAccount/Profil/UserInfo';
import UserSettings from '../../components/features/UserAccount/Profil/UserSettings';


export default function AccountProfil() {
  return (
    <div className='flex-col justify-between bg-blue-300 sm:flex-row'>
        <UserInfo />
        <UserSettings />
    </div>
  )
}

