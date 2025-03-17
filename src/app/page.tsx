"use client";
import Banner from "@/components/banner/page";
import Cards from "@/components/cards/page";
import MoreInfoSection from "@/components/info/page";
import Advantage from "@/components/advantage/page";
import ConvinceToBuyPage from "@/components/buy/page";
import ImageGallerySection from "@/components/gallery/page";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen px-6 bg-gray-900 text-white">
        <Banner />
        <Cards />
        <MoreInfoSection />
        <Advantage />
        <ImageGallerySection />
        <ConvinceToBuyPage />
      </div>
    </>
  );
}
