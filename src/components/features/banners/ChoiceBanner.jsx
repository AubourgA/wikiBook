
import Title from '../../ui/Title';
import Subjects from '../Subjects';

export default function ChoiceBanner() {
  return (
    <section className="flex items-center bg-light py-8">
      <div className="container mx-auto">
        <Title  level={2} text1="Un large choix thématique pour tous"/>
        <Subjects />
      </div>
    </section>
  );
}
