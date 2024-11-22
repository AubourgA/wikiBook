import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export const Adresse = [
    {
        id:1,
        text: "Adresse :"
    },
    {
        id:2,
        text: "25 route du fleuve",
    },
    {
        id:3,
        text:"47000 MOUVART"
    }

]

export const Horaires = [
    {
        id:1,
        text: "Horaires :"
    },
    {
        id:2,
        text: "Tous les jours sauf le dimanche",
    },
    {
        id:3,
        text:"8h30 à 12h"
    },
    {
        id:4,
        text:"14h00 à 19h00"
    },


]


export const Infos = [
    { id:1,
        title : "Se connecter",
        url :"/Login"
      },
      {
        id:2,
        title : "Créer un compte",
        url : "/Subscribe"
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
        title : "Politiques de Confidentialité",
        url : "/privacy"
    },
    {
        id:2,
        title : "Mentions Légales",
        url : "/mentions-legales"
    },
    {
        id:3,
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