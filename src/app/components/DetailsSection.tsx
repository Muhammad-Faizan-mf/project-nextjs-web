import Image from "next/image"


export default function DetailsSection(){
    return(
        <div className="flex flex-col lg:flex-row w-full h-full mt-10">
            <div className="lg:w-6/12 w-6/12 m-1">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold m-1 p-5">New Arrival</h1>
                <div className="w-full lg:w-10/12 m-5 p-1">
                    <h2 className="text-lg md:text-xl">Limited Stock!</h2>
                    <p>Limited stock is available so secure your order. </p>
                </div>
                <div className="w-full lg:w-10/12 m-5 p-1">
                    <h2 className="text-xl md:text-xl">Buy Now!</h2>
                    <p className="text-sm md:text-base">Just click on add to card what is Stopping you. </p>
                </div>
                <div className="w-full lg:w-10/12 m-5 p-1">
                    <h2 className="text-lg md:text-xl">Get Discounts!</h2>
                    <p className="text-sm md:text-base">Apply discount vouchers on orders and get upto 50% off on your order. </p>
                </div>
            <button className="rounded-md bg-black text-white p-3 content-center w-full lg:w-10/12 items-center justify-center m-5  mt-10">Add to cart.</button>

            </div>
            <div className="lg:w-6/12  m-5">
                <Image src="/newArrival.webp" alt="image" height={100} width={200} className="w-full h-fit rounded-md"></Image>
            </div>
        </div>
    )
}