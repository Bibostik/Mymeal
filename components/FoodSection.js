"use client"
// import React from 'react';
// import client from '@/sanityClient';

// const FoodSection = () => {
//   const [foodItems, setFoodItems] = React.useState([]);

//   React.useEffect(() => {
//     client
//       .fetch(
//         `*[_type == "foodItem"]{
//           _id,
//           name,
//           price,
//           "image": image.asset->url
//         }`
//       )
//       .then((data) => setFoodItems(data))
//       .catch((error) => console.error('Error fetching food items:', error));
//   }, []);

//   return (
//     <div className="container mx-auto mt-10 px-8">
//       <h2 className="text-3xl font-bold mb-4">Featured meal</h2>
//       <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
//         {foodItems.map((food) => (
//           <div
//             key={food._id} 
//             className="bg-white p-4 shadow-md rounded-lg hover:shadow-lg hover:shadow-xl transition-shadow"
//           >
//             <img
//               src={`${food.image}`}
//               alt={food.name}
//               className="w-full h-40 object-cover mb-4 rounded-lg"
//             />
//             <h3 className="text-xl font-bold mb-2">{food.name}</h3>
//             <p className="text-gray-600 mb-2">£{food.price}</p>
//             <button className="bg-blue-500 text-white font-bold px-4 py-2 rounded-md focus:outline-none">
//               Buy
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FoodSection;

// import React from 'react';
// import Link from 'next/link';
// import client from '@/sanityClient';

// const FoodSection = () => {
//   const [foodItems, setFoodItems] = React.useState([]);

//   React.useEffect(() => {
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

//   return (
//     <div className="container mx-auto mt-10 px-8">
//       <h2 className="text-3xl font-bold mb-4">Featured meal</h2>
//       <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
//         {foodItems.map((food) => (
//           <Link key={food._id} href={`/foodSinglePage/${food.slug?.current}`}  passHref legacyBehavior>
//             <a className="block">
//               <div
//                 className="bg-white p-4 shadow-md rounded-lg hover:shadow-lg hover:shadow-xl transition-shadow"
//               >
//                 <img
//                   src={`${food.image}`}
//                   alt={food.name}
//                   className="w-full h-40 object-cover mb-4 rounded-lg"
//                 />
//                 <h3 className="text-xl font-bold mb-2">{food.name}</h3>
//                 <p className="text-gray-600 mb-2">£{food.price}</p>
//                 <button className="bg-blue-500 text-white font-bold px-4 py-2 rounded-md focus:outline-none">
//                   Buy
//                 </button>
//               </div>
//             </a>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FoodSection;


import React from 'react';
import Link from 'next/link';
import client from '@/sanityClient';

const FoodSection = () => {
  const [foodItems, setFoodItems] = React.useState([]);

  React.useEffect(() => {
    client
      .fetch(
        `*[_type == "foodItem"]{
          _id,
          name,
          price,
          slug {
            current
          },
          "image": image.asset->url
        }`
      )
      .then((data) => setFoodItems(data))
      .catch((error) => console.error('Error fetching food items:', error));
  }, []);

  return (
    <div className="container mx-auto mt-10 px-8">
      <h2 className="text-3xl font-bold mb-4">Featured meal</h2>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
        {foodItems.map((food) => (
          <Link key={food._id} href={`/foodSinglePage/${food.slug?.current}`} passHref legacyBehavior>
            <a className="block">
              <div
                key={food._id} 
                className="bg-white p-4 shadow-md rounded-lg hover:shadow-lg hover:shadow-xl transition-shadow"
              >
                <img
                  src={`${food.image}`}
                  alt={food.name}
                  className="w-full h-40 object-cover mb-4 rounded-lg"
                />
                <h3 className="text-xl font-bold mb-2">{food.name}</h3>
                <p className="text-gray-600 mb-2">£{food.price}</p>
                <button className="bg-blue-500 text-white font-bold px-4 py-2 rounded-md focus:outline-none">
                  Buy
                </button>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FoodSection;
