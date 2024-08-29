
import { FaUsers, FaHome , FaBook, FaPenNib, FaUserFriends } from "react-icons/fa";
import { BiCategoryAlt } from "react-icons/bi";
import { IoStatsChartSharp } from "react-icons/io5";
import { GrTransaction } from "react-icons/gr";
import { PiBooksLight } from "react-icons/pi";
import { ImBooks } from "react-icons/im";
import { GiWorld } from "react-icons/gi";
import { CiBookmarkMinus } from "react-icons/ci";
import { FaFlag } from "react-icons/fa";
import { PiBookOpenUserBold } from "react-icons/pi";

export const adminMenus = [
    {
        id:"1",
        title:"Home",
        url:"/Dashboard/Home",
        icon: FaHome  ,
    },
    {
        id:"2",
        title:"Livres",
        url:"/Dashboard/Books",
        icon: FaBook  ,
    },
    {
        id:"3",
        title:"Auteurs",
        url:"/Dashboard/Authors",
        icon: FaPenNib  ,
    },
    {
        id:"4",
        title:"Genres",
        url:"/Dashboard/Genres",
        icon: BiCategoryAlt   ,
    },
    {
        id:"5",
        title:"Editeurs",
        url:"/Dashboard/Editors",
        icon: ImBooks,
    },
    {
        id:"6",
        title:"Nationnalités",
        url:"/Dashboard/Nationnalities",
        icon: GiWorld ,
    },
    {
        id:"7",
        title:"Langues",
        url:"/Dashboard/Languages",
        icon: FaFlag ,
    },
    {
        id:"8",
        title:"Status",
        url:"/Dashboard/Status",
        icon: CiBookmarkMinus,
    },
]

export const adminParams = [
    {
        id:"1",
        title:"Utilisateurs",
        url:"/Dashboard/Users",
        icon: FaUserFriends,
    },
    {
        id:"2",
        title:"Statistiques",
        url:"/Dashboard/Stats",
        icon: IoStatsChartSharp,
    },
]

export const adminGestion = 
    {
        id:1,
        title :"Emprunts",
        url:"/Dashboard/Loans",
        icon : PiBookOpenUserBold 
    }


//pour exemple
export const statCards = (users, books, loans) => [
    {
        id:1,
        title: "Client Enregistrés",
        value: users !==null ? users : 'Loading...',
        icon : FaUsers,
        color : 'bg-green-400'
    },
    {
        id:2,
        title: "Ouvrages disponibles",
        value: books !== null ? books : 'Loading...',
        icon : PiBooksLight,
        color : 'bg-violet-400'
    },
    {
        id:3,
        title: "Transactions",
        value: loans !== null ? loans : 'Loading...',
        icon : GrTransaction,
        color : 'bg-cyan-400'
    },

]