// 404.js (or whatever your filename is for the 404 page)

import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white rounded-lg p-8 shadow-lg flex flex-col items-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">
          Oops! Page not found.
        </p>
        <Link href="/">
          <a className="text-blue-500 hover:underline">Go back home</a>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
