import Image from "next/image"

export default function Reviews(){
    return(

        <div className=" m-1 p-10">
            <div className="text-3xl md:text-5xl font-semibold">
                Reviews
            </div>
            <div className="flex flex-col lg:flex-row mt-10">
                <div className="w-full lg:w-4/12 m-3 p-5 border rounded-md ">
                    <h1 className="text-center mb-5">"They are amazing"</h1>
                    <div className="flex flex-row ">
                    <div className=" w-2/12  ">
                        <Image src="/review1.jpeg" alt="review" height={50} width={50} className="rounded-md "></Image>
                    
                    </div>
                       <div className="w-6/12 "><b>Joseph</b> <br /> 
                       <small>CEO at Techo   </small></div>
                       
                    </div>
                    
                </div>
                <div className="w-full lg:w-4/12 m-3 p-5 border rounded-md ">
                    <h1 className="text-center mb-5">"They are damn good at work!"</h1>
                    <div className="flex flex-row ">
                    <div className=" w-2/12  ">
                        <Image src="/review3.jpeg" alt="review" height={50} width={50} className="rounded-md "></Image>
                    
                    </div>
                       <div className="w-6/12 "><b>Helina</b> <br /> 
                       <small>Marketing Manager   </small></div>
                       
                    </div>
                    
                </div>
                <div className="w-full lg:w-4/12 m-3 p-5 border rounded-md ">
                    <h1 className="text-center mb-5">"They are amazing"</h1>
                    <div className="flex flex-row ">
                    <div className=" w-2/12  ">
                        <Image src="/review2.jpeg" alt="review" height={50} width={50} className="rounded-md "></Image>
                    
                    </div>
                       <div className="w-6/12 "><b>John</b> <br /> 
                       <small>CFO at GIAIC   </small></div>
                       
                    </div>
                    
                </div>


            </div>
        </div>
    )
}