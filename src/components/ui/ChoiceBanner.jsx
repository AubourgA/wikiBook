import { ChoiceTheme } from "../../lib/constants";

export default function ChoiceBanner() {
  return (
    <section className="flex items-center bg-light py-8">
      <div className="container mx-auto">
        <h2 className="font-primary text-primary100 text-3xl text-center pt-10 ">
          Un large choix thématique pour tous
        </h2>
        <ul className="grid grid-cols-1 place-items-center text-2xl md:text-lg md:grid-cols-3 lg:grid-cols-6 py-10 gap-10 md:gap-5 lg:gap-0">
          {ChoiceTheme.map(({ id, title, icon }) => (
            <li key={id} className="flex flex-col gap-4 items-center group">
              <img
                src={icon}
                alt={title}
                className="bg-dark/80 rounded-full p-7 group-hover:scale-125 transition-transform duration-100"
              />
              <p>{title}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
