<template>
  <header class="bg-gradient-to-r from-green-500 to-lime-600 text-white shadow-lg fixed top-0 left-0 w-full z-50">
    <div class="navbar container mx-auto">
      <!-- Logo -->
      <div class="flex-1">
        <a href="/" class="text-3xl font-bold tracking-widest">GroceryHub</a>
      </div>

      <!-- Links for larger screens -->
      <div class="hidden lg:flex items-center gap-6">
        <a href="/" class="hover:text-lime-300 transition text-lg font-medium">Home</a>
        <a href="/about" class="hover:text-lime-300 transition text-lg font-medium">About</a>
        <a href="/contact" class="hover:text-lime-300 transition text-lg font-medium">Contact</a>
        <a href="/records" class="hover:text-lime-300 transition text-lg font-medium">Data Records</a>
      </div>

      <!-- Dropdown for smaller screens -->
      <div class="dropdown dropdown-end lg:hidden">
        <label tabindex="0" class="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </label>
        <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white text-gray-800 rounded-box w-52"
        >
          <li>
            <a href="/" class="hover:bg-lime-100">Home</a>
          </li>
          <li>
            <a href="/about" class="hover:bg-lime-100">About</a>
          </li>
          <li>
            <a href="/contact" class="hover:bg-lime-100">Contact</a>
          </li>
          <li>
            <a href="/records" class="hover:bg-lime-100">Data Records</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>
