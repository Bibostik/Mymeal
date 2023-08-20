"use client"

// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import client from '@/sanityClient';
// import { useCart } from '@/app/CartContext'; // Adjust the path

// const FoodSection = () => {
//   const [foodItems, setFoodItems] = useState([]);
//   const { selectedItems, setSelectedItems } = useCart();

//   useEffect(() => {
//     client
//       .fetch(
//         `*[_type == "foodItem"]{
//           _id,
//           name,
//           price,
//           slug {
//             current
//           },
//           "image": image.asset->url
//         }`
//       )
//       .then((data) => setFoodItems(data))
//       .catch((error) => console.error('Error fetching food items:', error));
//   }, []);

//   const addToCart = (food) => {
//     setSelectedItems([...selectedItems, food]);
//   };


//   return (
//     <div className="container mx-auto mt-10 px-8">
//       <h2 className="text-3xl font-bold mb-4">Featured meal</h2>
//       <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
//         {foodItems.map((food) => (
//           <div key={food._id} className="bg-white p-4 shadow-md rounded-lg hover:shadow-lg hover:shadow-xl transition-shadow">
//             <img
//               src={food.image}
//               alt={food.name}
//               className="w-full h-40 object-cover mb-4 rounded-lg"
//             />
//             <h3 className="text-xl font-bold mb-2">{food.name}</h3>
//             <p className="text-gray-600 mb-2">£{food.price}</p>
//             {/* Display rating */}
//             <div className="flex items-center mb-2">
//               {Array.from({ length: food.rating || 0 }).map((_, index) => (
//                 <svg
//                   key={index}
//                   className="w-5 h-5 text-yellow-400 fill-current"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M12 2c1.3 0 2.4 1.1 2.4 2.4 0 1.3-1.1 2.4-2.4 2.4S9.6 5.7 9.6 4.4C9.6 3.1 10.7 2 12 2zm0-2c-2.6 0-4.9 1.3-6.3 3.4C4.6 5.6 4 7 4 8.4c0 2.8 2.2 5 5 5 1.7 0 3.5-1.3 4.7-2.5.4-.4 1-.4 1.4 0 .5.4.5 1 0 1.4C16.3 13.5 14.4 15 12 15c-3.3 0-6-2.7-6-6 0-1.6.6-3.2 1.7-4.3C7.1 1.3 9.4 0 12 0z" />
//                 </svg>
//               ))}
//             </div>
//             <button
//               className="bg-blue-500 text-white font-bold px-4 py-2 rounded-md focus:outline-none"
//               onClick={() => addToCart(food)}
//             >
//               Buy
//             </button>
//           </div>
//         ))}
//       </div>
//       <div className="fixed bottom-4 right-4 bg-white p-4 rounded-full shadow-md">
//         <Link href="/cart" passHref legacyBehavior>
//           <a className="cursor-pointer">
//             <p className="font-semibold">Cart ({selectedItems.length})</p>
//             <p className="text-gray-600">
//               Total: £{selectedItems.reduce((total, item) => total + item.price, 0)}
//             </p>
//           </a>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default FoodSection;



// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import client from '@/sanityClient';
// import { useCart } from '@/app/CartContext';

// const FoodSection = () => {
//   const [foodItems, setFoodItems] = useState([]);
//   const { selectedItems, setSelectedItems } = useCart();

//   useEffect(() => {
//     client
//       .fetch(
//         `*[_type == "foodItem"]{
//           _id,
//           name,
//           price,
//           rating,
//           slug {
//             current
//           },
//           "image": image.asset->url
//         }`
//       )
//       .then((data) => setFoodItems(data))
//       .catch((error) => console.error('Error fetching food items:', error));
//   }, []);

//   const addToCart = (food) => {
//     setSelectedItems([...selectedItems, food]);
//   };

//   return (
//     <div className="container mx-auto mt-10 px-8">
//       <h2 className="text-3xl font-bold mb-4">Featured meal</h2>
//       <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
//         {foodItems.map((food) => (
//           <div key={food._id} className="bg-white p-4 shadow-md rounded-lg hover:shadow-lg hover:shadow-xl transition-shadow">
//             <img
//               src={food.image}
//               alt={food.name}
//               className="w-full h-40 object-cover mb-4 rounded-lg"
//             />
//             <h3 className="text-xl font-bold mb-2">{food.name}</h3>
//             <p className="text-gray-600 mb-2">£{food.price}</p>
//             {/* Display rating */}
//             <div className="flex items-center mb-2">
//               {Array.from({ length: Math.round(food.rating) || 0 }).map((_, index) => (
//                 <svg
//                   key={index}
//                   className="w-5 h-5 text-yellow-400 fill-current"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M12 2c1.3 0 2.4 1.1 2.4 2.4 0 1.3-1.1 2.4-2.4 2.4S9.6 5.7 9.6 4.4C9.6 3.1 10.7 2 12 2zm0-2c-2.6 0-4.9 1.3-6.3 3.4C4.6 5.6 4 7 4 8.4c0 2.8 2.2 5 5 5 1.7 0 3.5-1.3 4.7-2.5.4-.4 1-.4 1.4 0 .5.4.5 1 0 1.4C16.3 13.5 14.4 15 12 15c-3.3 0-6-2.7-6-6 0-1.6.6-3.2 1.7-4.3C7.1 1.3 9.4 0 12 0z" />
//                 </svg>
//               ))}
//             </div>
//             <button
//               className="bg-blue-500 text-white font-bold px-4 py-2 rounded-md focus:outline-none"
//               onClick={() => addToCart(food)}
//             >
//               Buy
//             </button>
//           </div>
//         ))}
//       </div>
//       <div className="fixed bottom-4 right-4 bg-white p-4 rounded-full shadow-md">
//         <Link href="/cart" passHref legacyBehavior>
//           <a className="cursor-pointer">
//             <p className="font-semibold">Cart ({selectedItems.length})</p>
//             <p className="text-gray-600">
//               Total: £{selectedItems.reduce((total, item) => total + item.price, 0)}
//             </p>
//           </a>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default FoodSection;


// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { HiStar, HiOutlineShare } from 'react-icons/hi'; 
// import client from '@/sanityClient';
// import { useCart } from '@/app/CartContext'; 

// import Image from 'next/image';

// const FoodSection = () => {
//   const [foodItems, setFoodItems] = useState([]);
//   const { selectedItems, setSelectedItems } = useCart();

//   useEffect(() => {
//     client
//       .fetch(
//         `*[_type == "foodItem"]{
//           _id,
//           name,
//           price,
//           rating, 
//           slug {
//             current
//           },
//           "image": image.asset->url
//         }`
//       )
//       .then((data) => setFoodItems(data))
//       .catch((error) => console.error('Error fetching food items:', error));
//   }, []);

//   const addToCart = (food) => {
//     setSelectedItems([...selectedItems, food]);
//   };

//   return (
//     <div className="container mx-auto mt-10 px-8">
//       <h2 className="text-3xl font-bold mb-4">Featured meal</h2>
//       <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
//         {foodItems.map((food) => (
//           <div key={food._id} className="bg-white p-4 shadow-md rounded-lg hover:shadow-lg hover:shadow-xl transition-shadow">
//             <img
//               src={food.image}
//               alt={food.name}
//               className="w-full h-40 object-cover mb-4 rounded-lg"
//             />
//           <h3 className="text-xl font-bold mb-2">{food.name}</h3>
//             <p className="text-gray-600 mb-2">£{food.price}</p>
//             {/* Display rating */}
//             <div className="flex items-center mb-2">
//               {Array.from({ length: food.rating || 0 }).map((_, index) => (
//                 <HiStar key={index} className="w-5 h-5 text-yellow-400 mr-1" />
//               ))}
//             </div>
//             <div className="flex items-center space-x-2">
//               <button
//                 className="bg-blue-500 text-white font-bold px-4 py-2 rounded-md focus:outline-none"
//                 onClick={() => addToCart(food)}
//               >
//                 Buy
//               </button>
//               <button className="text-blue-500 focus:outline-none">
//                 <HiOutlineShare className="w-5 h-5" />
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="fixed bottom-4 right-4 bg-white p-4 rounded-full shadow-md">
//         <Link href="/cart" passHref legacyBehavior>
//           <a className="cursor-pointer">
//             <p className="font-semibold">Cart ({selectedItems.length})</p>
//             <p className="text-gray-600">
//               Total: £{selectedItems.reduce((total, item) => total + item.price, 0)}
//             </p>
//           </a>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default FoodSection;


// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { HiStar, HiOutlineShare } from 'react-icons/hi'; 
// import client from '@/sanityClient';
// import { useCart } from '@/app/CartContext'; 
// import { Image } from 'next/image';

// const FoodSection = () => {
//   const [foodItems, setFoodItems] = useState([]);
//   const { selectedItems, setSelectedItems } = useCart();

//   useEffect(() => {
//     client
//       .fetch(
//         `*[_type == "foodItem"]{
//           _id,
//           name,
//           price,
//           rating,
//           slug {
//             current
//           },
//           "image": image.asset->url
//         }`
//       )
//       .then((data) => setFoodItems(data))
//       .catch((error) => console.error('Error fetching food items:', error));
//   }, []);

//   const addToCart = (food) => {
//     setSelectedItems([...selectedItems, food]);
//   };

//   return (
//     <div className="container mx-auto mt-10 px-8">
//       <h2 className="text-3xl font-bold mb-4">Featured meal</h2>
//       <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
//         {foodItems.map((food) => (
//           <Link key={food._id} href={`/food/${food.slug.current}`} passHref legacyBehavior>
//             <a className="hover:no-underline">
//               <div className="bg-white p-4 shadow-md rounded-lg hover:shadow-lg hover:shadow-xl transition-shadow">
//                 <img
//                   src={food.image}
//                   alt={food.name}
                 
//                   className="w-full h-40 object-cover mb-4 rounded-lg"
//                 />
//                 <h3 className="text-xl font-bold mb-2">{food.name}</h3>
//                 <p className="text-gray-600 mb-2">£{food.price}</p>
//                 <div className="flex items-center mb-2">
//                   {Array.from({ length: food.rating || 0 }).map((_, index) => (
//                     <HiStar key={index} className="w-5 h-5 text-yellow-400 mr-1" />
//                   ))}
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <button
//                     className="bg-blue-500 text-white font-bold px-4 py-2 rounded-md focus:outline-none"
//                     onClick={() => addToCart(food)}
//                   >
//                     Buy
//                   </button>
//                   <button className="text-blue-500 focus:outline-none">
//                     <HiOutlineShare className="w-5 h-5" />
//                   </button>
//                 </div>
//               </div>
//             </a>
//           </Link>
//         ))}
//       </div>
//       <div className="fixed bottom-4 right-4 bg-white p-4 rounded-full shadow-md">
//         <Link href="/cart" passHref legacyBehavior>
//           <a className="cursor-pointer">
//             <p className="font-semibold">Cart ({selectedItems.length})</p>
//             <p className="text-gray-600">
//               Total: £{selectedItems.reduce((total, item) => total + item.price, 0)}
//             </p>
//           </a>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default FoodSection;


import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { HiStar, HiOutlineShare } from 'react-icons/hi'; 
import client from '@/sanityClient';
import { useCart } from '@/app/CartContext'; 
import { Image } from 'next/image';
import { FaFacebook, FaTwitter } from 'react-icons/fa';


const FoodSection = () => {
  const [foodItems, setFoodItems] = useState([]);
  const { selectedItems, setSelectedItems } = useCart();

  useEffect(() => {
    client
      .fetch(
        `*[_type == "foodItem"]{
          _id,
          name,
          price,
          rating,
          slug {
            current
          },
          "image": image.asset->url
        }`
      )
      .then((data) => setFoodItems(data))
      .catch((error) => console.error('Error fetching food items:', error));
  }, []);

  const addToCart = (food) => {
    setSelectedItems([...selectedItems, food]);
  };

  return (
    <div className="container mx-auto mt-10 px-8">
      <h2 className="text-3xl font-bold mb-4">Featured meal</h2>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
        {foodItems.map((food) => (
          <div key={food._id} className="bg-white p-4 shadow-md rounded-lg hover:shadow-lg hover:shadow-xl transition-shadow">
            {food.slug && (
            
                <div className="hover:no-underline">
                  <img
                    src={food.image}
                    alt={food.name}
                   
                    className="w-full h-40 object-cover mb-4 rounded-lg"
                  />
                  <h3 className="text-xl font-bold mb-2">{food.name}</h3>
                  <p className="text-gray-600 mb-2">£{food.price}</p>
                  <div className="flex items-center mb-2">
                    {Array.from({ length: food.rating || 0 }).map((_, index) => (
                      <HiStar key={index} className="w-5 h-5 text-yellow-400 mr-1" />
                    ))}
                  </div>
                  <div className="flex items-center space-x-2">
                        <button
                          className="bg-blue-500 text-white font-bold px-4 py-2 rounded-md focus:outline-none"
                          onClick={() => addToCart(food)}
                        >
                          Buy
                        </button>
                        <button className="text-blue-500 focus:outline-none">
                          <HiOutlineShare className="w-5 h-5" />
                        </button>
                        <a
                          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                            `${window.location.origin}/foodSinglePage/${food.slug.current}`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 focus:outline-none"
                        >
                          <FaFacebook className="w-5 h-5" />
                        </a>
                        <a
                          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                            `${window.location.origin}/foodSinglePage/${food.slug.current}`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 focus:outline-none"
                        >
                          <FaTwitter className="w-5 h-5" />
                        </a>
                      </div>

                </div>
              
            )}
          </div>
        ))}
      </div>
      <div className="fixed bottom-4 right-4 bg-white p-4 rounded-full shadow-md">
        <Link href="/cart" passHref legacyBehavior>
          <a className="cursor-pointer">
            <p className="font-semibold">Cart ({selectedItems.length})</p>
            <p className="text-gray-600">
              Total: £{selectedItems.reduce((total, item) => total + item.price, 0)}
            </p>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default FoodSection;





 


