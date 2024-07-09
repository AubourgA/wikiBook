import {Infos, Social, About} from '../../lib/constants'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className='text-center bg-dark text-light py-20 text-sm'>
        <section className="container mx-auto grid grid-cols-1 md:grid-cols-4">
              <article className='py-4 md:py-0'>
                  <img src="" alt="logo" />
                  <p>WikiBook</p>
                 
              </article>
              <article className='py-4 md:py-0'>
              <h2 className='pb-4'>VOTRE ESPACE</h2>
                <ul>
                 {
                  Infos.map( ({id,title}) => (
                    <li key={id} className='py-1'>{title}</li>
                  ))
                 }
                </ul>


              </article>
              <article className='py-4 md:py-0'>
                  <h2 className='pb-4'>A PROPOS</h2>
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
                <h2 className='pb-4'>SUIVEZ NOUS</h2>
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
