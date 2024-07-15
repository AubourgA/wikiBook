import imgHero from "../assets/images/header.jpg"
import art from "../assets/miniatures/art.png"
import literature from "../assets/miniatures/literature.png"
import science from "../assets/miniatures/science.png"
import humaine from "../assets/miniatures/humaine.png"
import hobby from "../assets/miniatures/hobby.png"
import young from "../assets/miniatures/young.png"

import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

export const itemNav = [
    {
        id : 1,
        title : "Acceuil",
        url : "/"
    },
    {
        id:2,
        title:"Catalogue",
        url:  "/Catalogs"
    },
    {
        id:3,
        title:"Actualité",
        url:  "/News"
    },
    {
        id:4,
        title:"Contact",
        url : "/Contact"
    }
]

export const HeroSection = 
    {
        title : "WikiBook",
        extraTitle: "votre librairie à portez de clics",
        surTitle : "Votre espace detente",
        buttonText : "Réserver un livre",
        urlImg : imgHero
    }



export const ChoiceTheme = [
    {
        id:1,
        title: "Litérature",
        icon : literature
    },
    {
        id:2,
        title: "Science Humaines",
        icon : humaine
    },
    {
        id:3,
        title: "Art",
        icon : art
    },
    {
        id:4,
        title: "Sciences-Savoir",
        icon : science
    },
    {
        id:5,
        title: "Loisirs",
        icon : hobby
    },
    {
        id:6,
        title: "Jeunesse",
        icon : young
    },

]

export const Infos = [
    { id:1,
        title : "Se connecter"
      },
      {
        id:2,
        title : "Créer un compte"
      },
      {
        id:3,
        title : "Mot de passe oublié"
      },
      {
        id:4,
        title : "Mes Réservations"
      },
]

export const About = [
    {
        id:1,
        title : "Conditions Générales de Ventes",
        url : "/cgu"
    },
    {
        id:3,
        title : "Politiques de Confidentialité",
        url : "/cgu"
    },
    {
        id:4,
        title : "Mentions Légales",
        url : "/cgu"
    },
    {
        id:5,
        title : "Nous contacter",
        url : "/Contact"
    },

]

export const Social = [

        {
            id:1,
            icon: FaFacebookF,
            url : "https://facebook.com"
        },
        {
            id:2,
            icon : FaTwitter,
            url: "https://twitter.com"
        },
        {
            id:3,
            icon : FaInstagram,
            url: "https://instagram.com"
        }
]

export const sideFilter = [
    {
        id:1,
        filter:"Titre",
        traduction:"title",
        icon: IoIosArrowForward,
    },
    {
        id:2,
        filter:"Auteur",
        traduction:"author",
        icon: IoIosArrowForward
    },
    {
        id:3,
        filter:"Année",
        traduction:"YearPublished",
        icon: IoIosArrowForward
    },
    {
        id:4,
        filter:"Genre",
        traduction:"genre",
        icon: IoIosArrowForward
    },

]