
import Subjects from '../features/Subjects';

export default function ChoiceBanner() {
  return (
    <section className="flex items-center bg-light py-8">
      <div className="container mx-auto">
        <h2 className="font-primary text-primary100 text-3xl text-center pt-10 ">
          Un large choix thématique pour tous
        </h2>
        <Subjects />
      </div>
    </section>
  );
}
