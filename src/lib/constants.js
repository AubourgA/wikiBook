import imgHero from "../assets/images/bookshop.jpg"
import art from "../assets/miniatures/art.png"
import literature from "../assets/miniatures/literature.png"
import science from "../assets/miniatures/science.png"
import humaine from "../assets/miniatures/humaine.png"
import hobby from "../assets/miniatures/hobby.png"
import young from "../assets/miniatures/young.png"
export const itemNav = [
    {
        id : 1,
        title : "Home",
        url : "/"
    },
    {
        id:2,
        title:"Catalogs",
        url:  "/Catalogs"
    },
    {
        id:3,
        title:"News",
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
        surTitle : "UN MOMENT DE PLAISIR",
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

