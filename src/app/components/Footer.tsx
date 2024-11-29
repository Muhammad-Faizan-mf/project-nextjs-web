import Image from "next/image"
import Link from "next/link"

export default function Footer() {
    return (
        <div className="flex flex-col lg:flex-row m-0 p-10 bg-black text-white">

            <div className="w-full lg:w-5/12 mb-5 lg:mb-0">
                <h1 className="text-3xl md:text-4xl lg:text-5xl text-center p-5">T-Shirt Store</h1>
                <div className="flex justify-center space-x-4 mt-5">
                    <Image
                        src="/fbIcon.png"
                        alt="Facebook icon"
                        height={50}
                        width={50}
                        className="rounded-full"
                    />
                    <Image
                        src="/igIcon.png"
                        alt="Instagram icon"
                        height={50}
                        width={50}
                        className="rounded-full"
                    />
                    <Image
                        src="/lnIcon.png"
                        alt="LinkedIn icon"
                        height={50}
                        width={50}
                        className="rounded-full"
                    />
                    <Image
                        src="/ytIcon.png"
                        alt="YouTube icon"
                        height={50}
                        width={50}
                        className="rounded-full"
                    />
                </div>
            </div>


            <div className="flex flex-col lg:flex-row w-full lg:w-7/12 space-y-5 lg:space-y-0">

                <div className="w-full lg:w-6/12">
                    <p className="p-3">
                        <Link href="/" className="hover:underline">
                            Home
                        </Link>
                    </p>
                    <p className="p-3">
                        <Link href="/About" className="hover:underline">
                            About
                        </Link>
                    </p>
                    <p className="p-3">
                        <Link href="/Contact" className="hover:underline">
                            Contact
                        </Link>
                    </p>
                    <p className="p-3">
                        <Link href="#" className="hover:underline">
                            Shop Now
                        </Link>
                    </p>
                </div>


                <div className="w-full lg:w-6/12">
                    <p className="p-3">
                        <Link href="#" className="hover:underline">
                            T-Shirt
                        </Link>
                    </p>
                    <p className="p-3">
                        <Link href="#" className="hover:underline">
                            Jeans
                        </Link>
                    </p>
                    <p className="p-3">
                        <Link href="#" className="hover:underline">
                            New Arrival
                        </Link>
                    </p>
                </div>
            </div>
        </div>


    )
}