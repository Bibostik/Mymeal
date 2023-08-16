import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-gray-100 py-16 h-screen">
      <div className="container mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <img
              src="/images/jollof-rice.jpg" 
              alt="About Us"
              className="rounded-lg shadow-md"
            />
          </div>
          <div>
            <h1 className="text-3xl font-semibold mb-8">About Us</h1>
            <p className="text-gray-600 mb-4">
              Welcome to My Meal, your ultimate destination for delicious and healthy meals.
            </p>
            <p className="text-gray-600 mb-4">
              Our mission is to provide you with a wide variety of mouth-watering dishes that cater to your taste and dietary preferences.
            </p>
            <p className="text-gray-600 mb-4">
              Whether you&apos;re a food enthusiast or someone who&apos;s conscious about their health, My Meal is here to satisfy your cravings with our delectable offerings.
            </p>
            <p className="text-gray-600 mb-4">
              Our team of talented chefs and nutritionists work diligently to ensure that every meal is prepared with the highest quality ingredients and attention to detail.
            </p>
            <p className="text-gray-600">
              Thank you for choosing My Meal. We look forward to serving you and making your dining experience exceptional.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
