import {  FaHome , FaBook, FaUser } from "react-icons/fa";


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
        title:"Profil",
        url:'/Account/Profil',
        icon: FaUser ,
    },

]