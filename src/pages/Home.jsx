import ChoiceBanner from "../components/features/banners/ChoiceBanner";
import HeroBanner from "../components/features/banners/HeroBannner";

import NewsBanner from "../components/features/banners/NewsBanner";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <ChoiceBanner />
      <NewsBanner />
    </>
  );
}
