export default function ShopNowSection(){
    return(
        <div className=" flex flex-col md:flex-row col-span-5 p-10 m-0 bg-gray-200 mb-10">
            <div className="w-full md:w-6/12">
                <h1 className="text-2xl md:text-5xl font-semibold">Shop now before it&apos;s too late!</h1>
            </div>
            <div className="w-full md:w-6/12">
                <button className="rounded-md bg-black text-white w-full p-3">Shop Now</button>
            </div>

        </div>
    )
}