import Image from "next/image"
import FeaturedProductsHome from "./FeaturedProductsHome"

export default function FeaturedProducts() {
    let featuredProducts = [{
        id:1,
        image: "/tshirt1.webp",
        name: "T-Shirt",
        price: 999,
        details: "This is a custom designed T-Shirt for mens."
    },
    {
        id:2,
        image: "/tshirt2.webp",
        name: "T-Shirt Black",
        price: 899,
        details: "Men's shirt in black limited stock available."
    },
    {
        id:3,
        image: "/tshirt3.webp",
        name: "Drop ShoulderT-Shirt",
        price: 1299,
        details: "New Drop Shoulders T-Shirt for mens."
    },
    {
        id:4,
        image: "/tshirt4.webp",
        name: "Jeans",
        price: 2999,
        details: "This is summer collection."
    }];
    return (


        <div className="p-5">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-5 text-left shadow-sm font-semibold">
                Featured Products
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
                {featuredProducts.map((featuredProduct) => (
                    <FeaturedProductsHome key={featuredProduct.id} featuredProduct={featuredProduct} />
                ))}
            </div>
        </div>


    )
}