
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
        url:"/Dashboard/Author",
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
export const statCards = [
    {
        id:1,
        title: "Client Enregistrés",
        value:40,
        icon : FaUsers
    },
    {
        id:2,
        title: "Ouvrages disponibles",
        value:20,
        icon : PiBooksLight
    },
    {
        id:3,
        title: "Transaction du mois",
        value:40,
        icon : GrTransaction
    },

]