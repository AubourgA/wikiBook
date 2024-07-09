import BookLatest from "../../swiper/BookLatest";
import { FaArrowRight } from "react-icons/fa6";

function NewsBanner() {
  return (
    <section className="bg-primary50 py-20">
      <div className="container mx-auto py-4">
        <div className="flex justify-left items-center gap-3">
          <h2 className="text-dark font-primary text-2xl py-4">
            Nos Nouveautés{" "}
          </h2>
          <FaArrowRight />
        </div>
        <BookLatest />
      </div>
    </section>
  );
}

export default NewsBanner;
