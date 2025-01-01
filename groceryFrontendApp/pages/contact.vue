<template>
  <div class="bg-gradient-to-br from-green-100 via-white to-lime-100 min-h-[75vh] flex items-center">
    <div class="container mx-auto px-6 py-12">
      <!-- Page Title -->
      <h1 class="text-4xl font-bold text-center text-green-700 mb-10">
        Contact Garry Sangha
      </h1>

      <!-- Contact Section -->
      <div class="card shadow-lg bg-white rounded-lg p-6 max-w-3xl mx-auto">
        <div class="card-body">
          <h2 class="text-3xl font-semibold text-green-600 mb-4 text-center">
            Get in Touch
          </h2>
          <p class="text-gray-700 text-center mb-8">
            If you have any questions or feedback about GroceryHub, feel free to reach out!
            I’m happy to discuss the project, technical details, or academic topics.
          </p>

          <!-- Contact Details -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="flex items-center space-x-4">
              <div class="avatar placeholder">
                <div class="bg-green-100 text-green-600 rounded-full w-10 h-10 flex items-center justify-center">
                  <i class="fas fa-envelope"></i>
                </div>
              </div>
              <p class="text-gray-700">
                <strong>Email:</strong>
                <a
                    href="mailto:garrySangha@dal.ca"
                    class="text-blue-600 underline hover:text-blue-800"
                >
                  garrySangha@dal.ca
                </a>
              </p>
            </div>
            <div class="flex items-center space-x-4">
              <div class="avatar placeholder">
                <div class="bg-green-100 text-green-600 rounded-full w-10 h-10 flex items-center justify-center">
                  <i class="fas fa-university"></i>
                </div>
              </div>
              <p class="text-gray-700">
                <strong>University:</strong> Dalhousie University
              </p>
            </div>
            <div class="flex items-center space-x-4">
              <div class="avatar placeholder">
                <div class="bg-green-100 text-green-600 rounded-full w-10 h-10 flex items-center justify-center">
                  <i class="fas fa-map-marker-alt"></i>
                </div>
              </div>
              <p class="text-gray-700">
                <strong>Location:</strong> Halifax, Nova Scotia
              </p>
            </div>
            <div class="flex items-center space-x-4">
              <div class="avatar placeholder">
                <div class="bg-green-100 text-green-600 rounded-full w-10 h-10 flex items-center justify-center">
                  <i class="fas fa-project-diagram"></i>
                </div>
              </div>
              <p class="text-gray-700">
                <strong>Project:</strong> GroceryHub (Non-Commercial)
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- FAQ Section -->
      <div class="mt-12 max-w-3xl mx-auto">
        <div class="card shadow-lg bg-white rounded-lg p-6">
          <h2 class="text-2xl font-bold text-green-600 mb-4">
            Frequently Asked Questions
          </h2>
          <ul class="list-disc list-inside text-gray-700 space-y-4">
            <li>
              <strong>What is GroceryHub?</strong> It’s an academic project designed to predict grocery prices using advanced machine learning models.
            </li>
            <li>
              <strong>Who can use GroceryHub?</strong> This project is non-commercial and primarily designed for Nova Scotia users as an academic demonstration.
            </li>
            <li>
              <strong>What technology powers GroceryHub?</strong> GroceryHub is built with a modern tech stack, including Nuxt 3, .NET 8 C# REST API, and Docker.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
