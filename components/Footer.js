// components/Footer.js

const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-lg font-bold">My Meal- Your  #1 Food App</p>
              <p className="text-sm">Delicious food delivered to your doorstep!</p>
            </div>
            <nav className="space-x-4">
              <a href="/" className="text-sm hover:text-gray-300">Home</a>
              <a href="/about" className="text-sm hover:text-gray-300">About</a>
              <a href="/menu" className="text-sm hover:text-gray-300">Menu</a>
              <a href="/contact" className="text-sm hover:text-gray-300">Contact</a>
            </nav>
          </div>
          <div className="border-t border-gray-800 mt-4 pt-4 text-center">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Your Food App. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;