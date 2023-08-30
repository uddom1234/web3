import * as React from 'react';
import "../style/header.css";
export default function Header() {
  
  return (
  <div class="p-5 headPosition z-50">
  <header class="bg-gradient-to-r from-blue-900 to-indigo-700 py-4 px-6 shadow-md rounded-xl z-50">
      <nav class="flex items-center justify-between">
        <div class="text-white text-xl font-semibold">
          <a href="/">
            <img src="/crypto.png" alt="Logo" border="0" width="50" height="50"/>
          </a>
        </div>
        <ul class="flex space-x-4">
          <li><a href="/" class="text-white hover:text-blue-300 font-bold transition-colors duration-300 ease-in-out">Home</a></li>
          <li><a href="/browse" class="text-white hover:text-blue-300 font-bold transition-colors duration-300 ease-in-out">Browse</a></li>
          <li><a href="/history" class="text-white hover:text-blue-300 font-bold transition-colors duration-300 ease-in-out">History</a></li>
        </ul>
      </nav>
    </header>
    </div>



  );
}