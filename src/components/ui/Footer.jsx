import {Infos, Social, About} from '../../lib/constants'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'

export default function Footer() {
  return (
    <footer className='text-center bg-dark text-light py-20 text-sm'>
        <section className="container mx-auto grid grid-cols-1 md:grid-cols-4">
              <article className='grid grid-cols-1 grid-rows-2 gap-y-2 -mt-20 py-4 md:py-0'>
                  <div className='flex flex-col justify-center items-center'>
                    <img src={logo} alt="logo" className="w-[100px]" />
                    <p className='text-2xl font-primary -mt-5'>WikiBook</p>
                  </div>
                  <div>
                    <p>Adresse :</p>
                    <p>25 route du fleuve</p>
                    <p>47000 MOUVART</p>

                    <p className='pt-4'> Horaires :</p>
                    <p>Tous les jours sauf le dimanche</p>
                     <p>8h30 à 12h</p>
                     <p>14h00 à 19h00</p>
                  </div>
                  <div>
                  </div>
              </article>
              <article className='py-4 md:py-0'>
              <h2 className='pb-4 font-bold'>VOTRE ESPACE</h2>
                <ul>
                 {
                  Infos.map( ({id,title}) => (
                    <li key={id} className='py-1'>{title}</li>
                  ))
                 }
                </ul>


              </article>
              <article className='py-4 md:py-0'>
                  <h2 className='pb-4 font-bold'>A PROPOS</h2>
                  <ul>
                  {
                  About.map( ({id,title, url}) => (
                    <li key={id} className='py-1' >
                      <Link to={url} >{title} </Link></li>
                  ))
                 }
                  </ul>
                     
              </article>
              <article className='py-4 md:py-0'>
                <h2 className='pb-4 font-bold'>SUIVEZ NOUS</h2>
                  <ul className='flex justify-center gap-4 my-2'>
                 {
                  Social.map( ({id,icon : Icon, url}) => (
                    <li key={id} className='md:text-2xl  hover:bg-light rounded-full hover:text-dark transition duration-300 p-2'>
                      <Link to={url} ><Icon /> </Link></li>
                  ))
                 }
                

                  </ul>
              </article>
        </section>
    </footer>
  )
}
