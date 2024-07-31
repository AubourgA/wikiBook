import { Link } from "react-router-dom";
import { heroSection } from "../../../Constants/banner.content";
import Image from "../../ui/Image";

export default function HeroBannner() {
  return (
    <section className="h-screen flex items-center bg-primary50">
      <div className="container mx-auto  flex justify-center ">
        <div className="grid grid-cols-1 p-10 sm:grid-cols-2  md:p-0  place-items-center min-h-[600px]">
        
          <div>
            <p className="font-secondary text-xl italic">
              {heroSection.surTitle}
            </p>
            <h1 className="font-primary leading-10 text-4xl md:text-6xl py-4 text-dark">
           
              <span className="text-primary75 font-bold">
                {heroSection.title}
              </span>
              , {heroSection.extraTitle}
            </h1>
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
          </div>
          <div>
            <Image img={heroSection.urlImg}
                  text="image biblio"
                  className="w-50 md:w-30"/>
          </div>
        </div>
      </div>
    </section>
  );
}
