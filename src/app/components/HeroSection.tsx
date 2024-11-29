import Image from "next/image";
export default function HeroSection(){
    return(
        <div className="">
            <Image src="/banner.jpg" alt="banner" height={900} width={1000} className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh] object-cover"
></Image>
        </div>
    )
}