import BestSellersCards from '@/Components/UseableComponents/BestSellersCards'
import HeadingTitle from '@/Components/UseableComponents/HeadingTitle'
import Wrapper from '@/Components/UseableComponents/Wrapper'
import React from 'react'
import burger2 from '../../../../public/burger2.png'
import burger1 from '../../../../public/burger1.png'
import burger3 from '../../../../public/burger3.png'
import burger4 from '../../../../public/burger4.png'


const bestSellersItems = [
    {
        id: 1,
        title: "Beef",
        name: "Bacon+Cheese+Green Burger",
        imageSrc: burger1,
        price: "$6.00",
        weight: "220gr",
        calories: "600 cal"
    },
    {
        id: 2,
        title: "Chicken",
        name: "Spicy Chicken Burger",
        imageSrc: burger2,
        price: "$7.50",
        weight: "200gr",
        calories: "500 cal"
    },
    {
        id: 3,
        title: "Veggie",
        name: "Vegan Delight Burger",
        imageSrc: burger3,
        price: "$5.50",
        weight: "180gr",
        calories: "400 cal"
    },
    {
        id: 4,
        title: "Fish",
        name: "Grilled Fish Burger",
        imageSrc: burger4,
        price: "$8.00",
        weight: "230gr",
        calories: "550 cal"
    },
    {
        id: 5,
        title: "Pork",
        name: "BBQ Grilled Pork Burger",
        imageSrc: burger1,
        price: "$7.00",
        weight: "250gr",
        calories: "650 cal"
    },
    {
        id: 6,
        title: "Lamb",
        name: "Herbed Lamb Burger",
        imageSrc: burger1,
        price: "$9.00",
        weight: "210gr",
        calories: "600 cal"
    }
];



export default function BestSeller() {
    return (
        <Wrapper>
            <HeadingTitle headingTitle={"Bestsellers"} />

            <div className='grid  pt-16 xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-7 justify-center items-center  md:w-3/4 w-[90%] mx-auto'>
                {
                    bestSellersItems.map(item => <BestSellersCards key={item.id} {...item}></BestSellersCards>)
                }
            </div>
        </Wrapper>
    )
}            
