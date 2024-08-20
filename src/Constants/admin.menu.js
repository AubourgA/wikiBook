
import { FaUsers, FaHome , FaBook, FaPenNib, FaUserFriends } from "react-icons/fa";
import { BiCategoryAlt } from "react-icons/bi";
import { IoStatsChartSharp } from "react-icons/io5";
import { GrTransaction } from "react-icons/gr";
import { PiBooksLight } from "react-icons/pi";

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
        title:"Genre",
        url:"/Dashboard/Genres",
        icon: BiCategoryAlt   ,
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