<template>
  <div class="bg-gradient-to-br from-green-100 via-white to-lime-100 min-h-screen">
    <div class="container mx-auto px-6 py-12">
      <h1 class="text-4xl font-bold text-center text-green-700 mb-10">
        About GroceryHub
      </h1>
      <div class="card shadow-xl bg-white rounded-lg mb-8">
        <div class="card-body">
          <h2 class="text-3xl font-semibold text-green-600 mb-4">
            Developed by Garry Sangha
          </h2>
          <p class="text-gray-700 leading-relaxed">
            Hello! I am <strong>Garry Sangha</strong>, a 3rd-year Computer Science student at
            <strong>Dalhousie University</strong>. I developed GroceryHub as an academic project
            using modern technologies to predict grocery prices for Nova Scotia. Here's a brief overview:
          </p>
          <ul class="list-disc list-inside mt-4 space-y-2 text-gray-800">
            <li>
              <strong>Frontend:</strong> Nuxt 3 with TailwindCSS and DaisyUI.
            </li>
            <li>
              <strong>Backend:</strong> .NET 8 C# REST API in Docker containers.
            </li>
            <li>
              <strong>Data Source:</strong>
              <a
                  href="https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1810024501"
                  class="text-blue-600 underline hover:text-blue-800"
                  target="_blank"
              >
                Statistics Canada
              </a>.
            </li>
          </ul>
        </div>
      </div>

      <div class="card shadow-xl bg-white rounded-lg mb-8">
        <div class="card-body">
          <h2 class="text-3xl font-semibold text-green-600 mb-4">
            Mathematical Models
          </h2>
          <p class="text-gray-700 leading-relaxed">
            GroceryHub uses advanced mathematical models like EMA, Linear Regression, and Polynomial Regression
            to forecast future grocery prices accurately. These models analyze historical data provided by
            Statistics Canada for Nova Scotia.
          </p>
        </div>
      </div>

      <div class="card shadow-xl bg-white rounded-lg">
        <div class="card-body">
          <h2 class="text-3xl font-semibold text-green-600 mb-4">
            How It Works
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <p class="text-gray-700">
              <strong>Data Collection:</strong> Monthly grocery price data from Statistics Canada.
            </p>
            <p class="text-gray-700">
              <strong>Prediction Models:</strong> EMA, Linear Regression, and Polynomial Regression.
            </p>
            <p class="text-gray-700">
              <strong>REST API:</strong> Backend endpoints for storing and retrieving prices.
            </p>
            <p class="text-gray-700">
              <strong>Scalability:</strong> Docker ensures the system handles future needs seamlessly.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
