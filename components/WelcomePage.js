'use client'

// import React, { useEffect, useState } from 'react';
// import Link from 'next/link';
// import { getUserByUsername } from '@/sanityClient';
// import { useRouter } from 'next/navigation';

// const WelcomePage = (userData) => {
//     // console.log(userData.userData, 'use deets')
//     const [displayName, setDisplayName]= useState('')
//     useEffect(()=>{
        
//             setDisplayName(userData.userData.displayName)
        
//     }, [])
//   return (
//     <div>
//     {
//         userData ? (
// <div className="flex flex-col items-center justify-center h-screen">
//       <div className="text-center">
//         <h1 className="text-3xl font-semibold mb-4">Welcome, {displayName}</h1>
//         <p className="mb-4">
//           You are now logged in. You can start shopping and adding items to your cart.
//         </p>
//         <Link href="/shop" legacyBehavior>
//           <a className="btn">Explore Now</a>
//         </Link>
//         <Link href="/restaurants" legacyBehavior>
//           <a className="btn">Rate and Review</a>
//         </Link>
//         <Link href="/order-history" legacyBehavior>
//           <a className="btn">Order History</a>
//         </Link>
//         <Link href="/special-offers" legacyBehavior>
//           <a className="btn">Special Offers and Promotions</a>
//         </Link>
//       </div>
//     </div>
//         ) : (
//             <p className="mb-4">
//           loading ....
//         </p>
//         )
//     }
//     </div>
    
//   );
// };

// export default WelcomePage;


// // WelcomePage.js
// "use client"
// import React, { useEffect, useState } from 'react';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import { getUserByUsername } from '@/sanityClient';


// const WelcomePage = () => {
//   const router = useRouter();
//   const [username, setUsername] = useState('');

//   useEffect(() => {
//     const fetchUserData = async () => {
//       // Replace 'currentUsername' with the logged-in user's username
//       const user = await getUserByUsername('currentUsername');
//       if (user) {
//         setUsername(user.username);
//       } else {
//         // Redirect to login page if user is not logged in
//         router.push('/LoginRegister');
//       }
//     };

//     fetchUserData();
//   }, []);

//   return (
//     <div className="flex flex-col items-center justify-center h-screen">
//       <div className="text-center">
//         <h1 className="text-3xl font-semibold mb-4">Welcome, {username}!</h1>
//         <p className="mb-4">
//           You are now logged in. You can start shopping and adding items to your cart.
//         </p>
//         <Link href="/shop" legacyBehavior>
//           <a className="btn">Explore Now</a>
//         </Link>
//         {/* Other links */}
//       </div>
//     </div>
//   );
// };

// export default WelcomePage;

// import React, { useEffect, useState } from 'react';
// import Link from 'next/link';
// import { getUserByUsername } from '@/sanityClient';
// import { useRouter } from 'next/router'; // Use 'next/router' instead of 'next/navigation'
// import { Auth } from '@firebase/auth';

// const WelcomePage = () => {
//   const [userData, setUserData] = useState(null);
//   const { user } = Auth(); // Use your authentication context's user state
//   const router = useRouter();

//   useEffect(() => {
//     // Redirect to login page if not logged in
//     if (!user) {
//       router.replace('/login');
//     } else {
//       // Fetch user data based on their username (replace 'getLoggedInUserByUsername' with your actual function)
//       getUserByUsername(user.username)
//         .then((data) => {
//           setUserData(data);
//         })
//         .catch((error) => {
//           console.error('Error fetching user data:', error);
//         });
//     }
//   }, [user]);

//   return (
//     <div>
//       {userData ? (
//         <div className="flex flex-col items-center justify-center h-screen">
//           <div className="text-center">
//             <h1 className="text-3xl font-semibold mb-4">Welcome, {userData.displayName}</h1>
//             <p className="mb-4">
//               You are now logged in. You can start shopping and adding items to your cart.
//             </p>
//             <Link href="/shop" legacyBehavior>
//               <a className="btn">Explore Now</a>
//             </Link>
//             <Link href="/restaurants" legacyBehavior>
//               <a className="btn">Rate and Review</a>
//             </Link>
//             <Link href="/order-history" legacyBehavior>
//               <a className="btn">Order History</a>
//             </Link>
//             <Link href="/special-offers" legacyBehavior>
//               <a className="btn">Special Offers and Promotions</a>
//             </Link>
//           </div>
//         </div>
//       ) : (
//         <p className="mb-4">Loading...</p>
//       )}
//     </div>
//   );
// };

// export default WelcomePage;

// import React, { useEffect, useState } from 'react';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import { getUserByUsername } from '@/sanityClient';

// const WelcomePage = () => {
//   const router = useRouter();
//   const [username, setUsername] = useState('');

//   useEffect(() => {
//     const fetchUserData = async () => {
//       // Replace 'currentUsername' with the logged-in user's username
//       const user = await getUserByUsername('currentUsername');
//       if (user) {
//         setUsername(user.username);
//       } else {
//         // Redirect to login page if user is not logged in
//         router.push('/LoginRegister');
//       }
//     };

//     fetchUserData();
//   }, []);

//   return (
//     <div className="flex flex-col items-center justify-center h-screen">
//       <div className="text-center">
//         <h1 className="text-3xl font-semibold mb-4">Welcome, {username}!</h1>
//         <p className="mb-4">
//           You are now logged in. You can start shopping and adding items to your cart.
//         </p>
//         <Link href="/shop" legacyBehavior>
//           <a className="btn">Explore Now</a>
//         </Link>
//         <Link href="/restaurants" legacyBehavior>
//           <a className="btn">Rate and Review</a>
//         </Link>
//         <Link href="/order-history" legacyBehavior>
//           <a className="btn">Order History</a>
//         </Link>
//         <Link href="/special-offers" legacyBehavior>
//           <a className="btn">Special Offers and Promotions</a>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default WelcomePage;

// import React, { useEffect, useState } from 'react';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';

// import { AuthCredential } from '@firebase/auth';

// const WelcomePage = () => {
//   const router = useRouter();
//   const { user } = AuthCredential(); // Assuming useAuth provides the user object

//   useEffect(() => {
//     if (!user) {
//       router.push('/LoginRegister');
//     }
//   }, [user]);

//   return (
//     <div className="flex flex-col items-center justify-center h-screen">
//       <div className="text-center">
//         <h1 className="text-3xl font-semibold mb-4">Welcome, {user.displayName}!</h1>
//         <p className="mb-4">
//           You are now logged in. You can start shopping and adding items to your cart.
//         </p>
//         <Link href="/shop">
//           <a className="btn">Explore Now</a>
//         </Link>
//         {/* Other links */}
//       </div>
//     </div>
//   );
// };

// export default WelcomePage;


import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getUserByUsername } from '@/sanityClient';
import { useRouter } from 'next/navigation';
import { getAuth } from 'firebase/auth'; 


const WelcomePage = () => {
  const [userData, setUserData] = useState(null);
  const auth = getAuth(); // Initialize Firebase Auth
  const router = useRouter();

  useEffect(() => {
    // Get the current user from Firebase Auth
    const user = auth.currentUser;

    if (!user) {
      // Redirect to login page if not logged in
      router.replace('/LoginRegister');
    } else {
      
      getUserByUsername(user.displayName) 
        .then((data) => {
          setUserData(data);
        })
        .catch((error) => {
          console.error('Error fetching user data:', error);
        });
    }
  }, [auth.currentUser]);

  return (
    <div>
      {userData ? (
        <div className="flex flex-col items-center justify-center h-screen">
          <div className="text-center">
            <h1 className="text-3xl font-semibold mb-4">Welcome, {getUserByUsername.currentUser}</h1>
            <p className="mb-4">
              You are now logged in. You can start shopping and adding items to your cart.
            </p>
            <Link href="/shop" legacyBehavior>
              <a className="btn">Explore Now</a>
            </Link>
            <Link href="/restaurants" legacyBehavior>
              <a className="btn">Rate and Review</a>
            </Link>
            <Link href="/order-history" legacyBehavior>
              <a className="btn">Order History</a>
            </Link>
            <Link href="/special-offers" legacyBehavior>
              <a className="btn">Special Offers and Promotions</a>
            </Link>
          </div>
        </div>
      ) : (
        <p className="mb-4">Loading...</p>
      )}
    </div>
  );
};

export default WelcomePage;
