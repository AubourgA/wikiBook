import BookLatest from "../../../swiper/BookLatest";
import { FaArrowRight } from "react-icons/fa6";
import Title from '../../ui/Title';

function NewsBanner() {
  return (
    <section className="bg-primary50 py-20">
      <div className="container mx-auto py-4">
        <div className="flex justify-left items-center gap-3">
          <Title  level={3} text1="Nos Nouveautés"/>
          <FaArrowRight />
        </div>
        <BookLatest />
      </div>
    </section>
  );
}

export default NewsBanner;
