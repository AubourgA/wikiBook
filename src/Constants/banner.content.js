import imgHero from "../assets/images/header.webp"

import art from "../assets/miniatures/art.png"
import literature from "../assets/miniatures/literature.png"
import science from "../assets/miniatures/science.png"
import humaine from "../assets/miniatures/humaine.png"
import hobby from "../assets/miniatures/hobby.png"
import young from "../assets/miniatures/young.png"

export const heroSection = 
    {
        title : "WikiBook",
        extraTitle: "votre librairie à portez de clics",
        surTitle : "Votre espace detente",
        buttonText : "Réserver un livre",
        urlImg : imgHero
    }

export const subjects = [
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