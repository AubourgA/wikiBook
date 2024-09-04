import {  FaHome , FaBook } from "react-icons/fa";
import { GrConfigure } from "react-icons/gr";

export const userMenus = [
    {
        id:1,
        title:"Home",
        url:'/Account/Home',
        icon: FaHome,
    },
    {
        id:2,
        title:"Emprunts",
        url:'/Account/Emprunt',
        icon: FaBook,
    },
    {
        id:3,
        title:"Parametres",
        url:'/Account/parameters',
        icon: GrConfigure,
    },

]