import {Link} from "react-router-dom"
import { HeroSection } from '../lib/constants'

export default function HeroBannner() {
  return (
    <section className="bg-primary25 h-lvh text-slate-900">
        <div className='container mx-auto  flex items-center justify-center h-full'>
            <div>

                <p className="text-gray-400 ">{HeroSection.surTitle} </p>
                <h1 className="text-[3rem] text-gray-700 font-bold"><span className="text-blue-600">{HeroSection.title}</span>,{HeroSection.extraTitle}</h1>
                <Link to="/Catalogs" className="bg-primary75 rounded-lg p-2 inline-block mt-2 text-slate-50 font-semibold text-xl hover:translate-y-1 transition-transform">Réserver un livre</Link>
            </div>
            <div>
                <img src={HeroSection.urlImg} alt="" />
            </div>

        </div>

    </section>
  )
}

