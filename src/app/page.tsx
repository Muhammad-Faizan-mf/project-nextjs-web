import Image from "next/image";
import HeroSection from "./components/HeroSection";
import FeaturedProducts from "./components/FeaturedProducts";
import DetailsSection from "./components/DetailsSection";
import CollectionsSection from "./components/CollectionsSection";
import Reviews from "./components/Reviews";
import ShopNowSection from "./components/ShopNowSection";

export default function Home() {
  return (
    <div className="">
      <HeroSection/>
      <FeaturedProducts/>
      <DetailsSection/>
      <CollectionsSection/>
      <Reviews/>
      <ShopNowSection/>
    </div>
  );
}
