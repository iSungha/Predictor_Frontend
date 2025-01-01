<template>
  <div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
    <div class="card-body">
      <h2 class="card-title text-xl font-bold text-green-600">{{ data.itemName }}</h2>
      <p><strong>Year:</strong> {{ data.year }}</p>
      <p><strong>Month:</strong> {{ getMonthName(data.month) }}</p>
      <p><strong>Price:</strong> ${{ data.price.toFixed(2) }} <span class="text-gray-600">({{ getUnit(data.itemName) }})</span></p>
      <p><strong>Model Used:</strong> {{ data.model_Used }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  data: {
    type: Object,
    required: true
  }
});

// Function to convert month number to English name
const getMonthName = (month) => {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  return months[month - 1];
};

// Function to get the unit based on the item name
const getUnit = (itemName) => {
  const units = {
    "Chicken breasts": "per kilogram",
    Eggs: "1 dozen",
    Cereal: "400 grams",
    Yogurt: "500 grams",
    Bananas: "per kilogram"
  };
  return units[itemName] || "";
};
</script>
