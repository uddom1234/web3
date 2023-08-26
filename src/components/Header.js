import * as React from 'react';

export default function Header() {
  
  return (
<header class="bg-gradient-to-r from-blue-900 to-indigo-700 py-4 px-6 shadow-md">
      <nav class="flex items-center justify-between">
        <div class="text-white text-xl font-semibold">
          <a href="#">Web3</a>
        </div>
        <ul class="flex space-x-4">
          <li><a href="#" class="text-white hover:text-blue-300 font-bold transition-colors duration-300 ease-in-out">Home</a></li>
          <li><a href="/history" class="text-white hover:text-blue-300 font-bold transition-colors duration-300 ease-in-out">History</a></li>
          <li><a href="#" class="text-white hover:text-blue-300 font-bold transition-colors duration-300 ease-in-out">About Us</a></li>
          <li><a href="#" class="text-white hover:text-blue-300 font-bold transition-colors duration-300 ease-in-out">Contact</a></li>
        </ul>
      </nav>
    </header>



  );
}