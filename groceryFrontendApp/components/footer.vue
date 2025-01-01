<template>
  <footer class="bg-gray-900 text-gray-300">
    <div class="container mx-auto py-10 px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <h2 class="text-lg font-semibold mb-4 text-white">About GroceryHub</h2>
        <p>
          GroceryHub is your ultimate tool for accurate grocery price predictions and seamless shopping. Make smarter decisions with us!
        </p>
      </div>
      <div>
        <h2 class="text-lg font-semibold mb-4 text-white">Quick Links</h2>
        <ul class="space-y-2">
          <li><a href="/" class="hover:text-lime-500 transition">Home</a></li>
          <li><a href="/pricing" class="hover:text-lime-500 transition">Pricing</a></li>
          <li><a href="/features" class="hover:text-lime-500 transition">Features</a></li>
          <li><a href="/contact" class="hover:text-lime-500 transition">Contact Us</a></li>
        </ul>
      </div>
      <div>
        <h2 class="text-lg font-semibold mb-4 text-white">Legal</h2>
        <ul class="space-y-2">
          <li><a href="/terms" class="hover:text-lime-500 transition">Terms of Use</a></li>
          <li><a href="/privacy" class="hover:text-lime-500 transition">Privacy Policy</a></li>
          <li><a href="/cookies" class="hover:text-lime-500 transition">Cookie Policy</a></li>
        </ul>
      </div>
      <div>
        <h2 class="text-lg font-semibold mb-4 text-white">Stay Connected</h2>
        <p>Subscribe to our newsletter for the latest updates:</p>
        <div class="mt-4">
          <div class="form-control">
            <div class="relative">
              <input
                  type="text"
                  placeholder="Enter your email"
                  class="input input-bordered w-full pr-16 text-gray-800 bg-white"
              />
              <button class="btn bg-lime-500 border-none hover:bg-lime-600 absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div class="flex gap-4 mt-6 text-white">
          <a href="#" class="hover:text-lime-500"><i class="fab fa-facebook fa-lg"></i></a>
          <a href="#" class="hover:text-lime-500"><i class="fab fa-twitter fa-lg"></i></a>
          <a href="#" class="hover:text-lime-500"><i class="fab fa-instagram fa-lg"></i></a>
          <a href="#" class="hover:text-lime-500"><i class="fab fa-linkedin fa-lg"></i></a>
        </div>
      </div>
    </div>
    <div class="border-t border-gray-700 pt-6 mt-8 text-center text-gray-400">
      <p>© 2024 GroceryHub. All rights reserved.</p>
    </div>
  </footer>
</template>
