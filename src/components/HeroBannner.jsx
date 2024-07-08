import {Link} from "react-router-dom"
import { HeroSection } from '../lib/constants'

export default function HeroBannner() {
  return (
    <section className="h-screen flex items-center" >


        <div className='container mx-auto  flex justify-center '>
              <div className="grid grid-cols-1 p-10 md:grid-cols-2 md:p-0  place-items-center min-h-[600px]">

                  {/* content */}
                  <div >
                    <p className='text-xl italic'>{HeroSection.surTitle}</p>
                    <h1 className='text-3xl pb-2'> <span className="text-primary75 font-bold">{HeroSection.title}</span>,{HeroSection.extraTitle}</h1>
                    <p className='mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti veniam exercitationem labore!</p>
                    <Link to="/Catalogs" className="border-1 bg-primary75 p-2 rounded-lg mt-10 inline-block text-white hover:translate-y-1 transition-transform">Réserver un livre</Link>
                  </div>

                  {/* image */}
                  <div>
                    <img src={HeroSection.urlImg} alt="image bibio" />
                  </div>
              </div>

        </div>


    </section>
  )
}

