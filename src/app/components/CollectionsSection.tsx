import Image from "next/image";
import Link from "next/link";

export default function CollectionsSection() {
    return (
        <div className=" mt-5">
            <div className="sm:text md:text-5xl font-semibold m-1 p-5">
                Our Collections
            </div>
            <div className="flex flex-row  m-3">
                <div className=" w-6/12  p-3">
                    <div>
                        <Link href="#">
                            <Image src="/collection1.webp" alt="picture" height={300} width={300} className="h-12/12 w-full rounded-md shadow-lg " ></Image>
                        </Link>
                    </div>
                    <div>

                    </div>
                </div>
                <div className=" w-6/12 p-3">
                    <Link href="#">
                        <Image src="/collection2.webp" alt="picture" height={300} width={300} className="h-12/12 w-full rounded-md shadow-lg" ></Image>
                    </Link>
                </div>


            </div>
        </div>
    )
}