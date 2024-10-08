import {motion} from "framer-motion";
import { Link } from "react-router-dom";
import { heroSection } from "../../../Constants";
import Image from "../../ui/Image";
import Title from '../../ui/Title';

export default function HeroBannner() {
  return (
    <section className="h-screen flex items-center bg-primary50">
      <div className="container mx-auto  flex justify-center ">
        <motion.div className="grid grid-cols-1 px-10 sm:grid-cols-2  md:p-0  place-items-center min-h-[600px]">
        
          <motion.div initial={{ x:-100, opacity:0}}
                      animate={{x:0, opacity:1}}
                      transition={ {duration: 0.5}}>
            <p className="font-secondary text-xl italic">
              {heroSection.surTitle}
            </p>
            <Title  level={1}
                    text1={`${heroSection.title}, `}
                    text2={`${heroSection.extraTitle}`}
                    custom1="font-bold"
                    custom2='font-light'/>
            
            <p className="mt-2 text-primary100">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
              veniam exercitationem labore!
            </p>
            <Link
              to="/Catalogs"
              className="inline-block mt-4 py-2 px-4 rounded-xl bg-secondary text-light btn-pressed"
            >
              Réserver un livre
            </Link>
          </motion.div>
          <motion.div initial={{ x:100, opacity:0}}
                      animate={{x:0, opacity:1}}
                      transition={ {duration: 0.5, delay:0.25}} >
            <Image img={heroSection.urlImg}
                  text="image biblio"
                  className="w-50 md:w-30"/>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
