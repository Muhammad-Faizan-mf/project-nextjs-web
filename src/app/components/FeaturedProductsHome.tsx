import Image from "next/image"
import FeaturedProducts from "./FeaturedProducts"
import React from "react"

export default function FeaturedProductsHome(props:any){
    console.log(` start ${props} ..`);
    return(
        <div className="w-full sm:w-6/12 md:w-full lg:w-full p-5">
  <Image
    src={props.featuredProduct.image}
    alt="product"
    height={300}
    width={300}
    className="rounded-md shadow-xl w-full transition-transform duration-300 hover:scale-110"
  />
  <div className="mt-4">
    <h1 className="text-xl md:text-2xl font-semibold">{props.featuredProduct.name}</h1>
    <p className="mt-2 text-sm md:text-base">
      {props.featuredProduct.details} <b>Rs.{props.featuredProduct.price}</b>
    </p>
    <button className="rounded-md bg-black text-white p-3 w-full mt-4 transition-transform duration-300 hover:scale-110">
      Add to cart
    </button>
  </div>
</div>

    )
}