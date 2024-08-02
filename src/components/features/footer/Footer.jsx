import { Adresse, Horaires, Infos, Social, About } from "../../../Constants";

import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.svg";
import Article from "../../ui/Footer/Article";
import Image from "../../ui/Image";
import List from "../../ui/Footer/List";

export default function Footer({ text }) {
  return (
    <footer className="text-center bg-dark text-light py-20 text-sm">
      <section className="container mx-auto grid grid-cols-1 md:grid-cols-4">
        <article className="grid grid-cols-1 grid-rows-2 gap-y-2 -mt-20 py-4 md:py-0">
          <div className="flex flex-col justify-center items-center">
            <Image img={logo} text={logo} className="w-[100px]" />
            <p className="text-2xl font-primary -mt-5">{text}</p>
          </div>

          <List datas={Adresse} />
          <List datas={Horaires} />
        </article>

        <Article datas={Infos} title="VOTRE ESPACE" />

        <Article datas={About} title="A PROPOS" />

        <Article
          datas={Social}
          title="SUIVEZ NOUS"
          className="flex justify-center gap-4 my-2"
          classNameLi="md:text-2xl hover:bg-light rounded-full hover:text-dark transition duration-300 p-2"
          renderItem={({ icon: Icon, url }) => (
            <Link to={url}>
              <Icon />
            </Link>
          )}
        />
      </section>
    </footer>
  );
}
