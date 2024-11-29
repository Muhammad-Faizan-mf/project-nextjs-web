import Image from "next/image"

export default function About() {
    return (
        <div className=" m-1 flex flex-col lg:flex-row justify-between">
            <div className="w-full lg:w-6/12">
                <div className="h-[624] w-[521] m-1 p-10">
                    <h1 className="font-semibold text-3xl lg:text-5xl">About</h1>
                    <p className="p-10 text-base ">Welcome to my T-shirt store, where creativity meets comfort! As a passionate entrepreneur and a developer with a flair for design, I’ve curated a collection of T-shirts that blend style, quality, and individuality. Whether you're looking for trendy graphics, minimalist designs, or bold statements, my store offers something for everyone. Each piece reflects a commitment to excellence, ensuring that you not only look great but feel great too. Join me on this journey of self-expression through fashion, and discover T-shirts that are as unique as you are!
                    </p>
                    <p className="p-10 text-base">Welcome to my T-shirt store, where creativity meets comfort! As a passionate entrepreneur and a developer with a flair for design, I’ve curated a collection of T-shirts that blend style, quality, and individuality. Whether you're looking for trendy graphics, minimalist designs, or bold statements, my store offers something for everyone. Each piece reflects a commitment to excellence, ensuring that you not only look great but feel great too. Join me on this journey of self-expression through fashion, and discover T-shirts that are as unique as you are!
                    </p>
                    <p className="p-10 text-base">Welcome to my T-shirt store, where creativity meets comfort! As a passionate entrepreneur and a developer with a flair for design, I’ve curated a collection of T-shirts that blend style, quality, and individuality. Whether you're looking for trendy graphics, minimalist designs, or bold statements, my store offers something for everyone. Each piece reflects a commitment to excellence, ensuring that you not only look great but feel great too.
                    </p>
                </div>
            </div>
            <div className="w-full lg:w-5/12 m-1 p-10">
                <Image src="/about.png" alt="image" height={657} width={508} className=""></Image>

            </div>
        </div>
    )
}