// pages/categories/[category].js
import React from 'react';
import client from '@/sanityClient';
import { useRouter } from 'next/navigation';




const CategorySinglePage = ({ foodItems, category }) => {
 
  
  return (
    <div className="container mx-auto mt-10 px-8">
      <h2 className="text-3xl font-bold mb-4">Food Items in {category}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {foodItems && foodItems.map((food) => (
          <div key={food._id} className="bg-white p-4 shadow-md rounded-lg hover:shadow-lg hover:shadow-xl transition-shadow">
            <img
              src={food.image}
              alt={food.name}
              className="w-full h-40 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-xl font-bold mb-2">{food.name}</h3>
            <p className="text-gray-600 mb-2">£{food.price}</p>
            {/* Add other food details here */}
          </div>
        ))}
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const categories = await client.fetch('*[_type == "category"]{ name }');
  
  const paths = categories.map((category) => ({
    params: { category: category.name },
  }));

  return { paths, fallback: false };
}
export async function getStaticProps({ params }) {
  const { category } = params;
  console.log('Fetching data for category:', category);

  try {
    const foodItems = await client.fetch(
      `*[_type == "foodItem" && category == $category]{
        _id,
        name,
        price,
        rating,
        "image": image.asset->url
      }`,
      { category }
    );
    console.log('Fetched food items:', foodItems);

    return { props: { foodItems, category } };
  } catch (error) {
    console.error('Error fetching data:', error);
    return { props: { foodItems: [], category } };
  }
}

export default CategorySinglePage;
