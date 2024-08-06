
import { FaHome , FaBook, FaPenNib, FaUserFriends } from "react-icons/fa";
import { BiCategoryAlt } from "react-icons/bi";
import { IoStatsChartSharp } from "react-icons/io5";

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