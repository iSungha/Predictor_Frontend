<template>
  <div class="bg-base-200 min-h-screen pt-20">
    <div class="container mx-auto px-6 py-12">
      <h1 class="text-4xl font-bold text-center text-primary mb-8">
        Data Records
      </h1>

      <!-- Filter Dropdown -->
      <div class="mb-6 flex justify-end">
        <select
            v-model="selectedItem"
            @change="fetchRecords"
            class="select select-bordered w-64"
        >
          <option value="">All Items</option>
          <option v-for="item in itemNames" :key="item" :value="item">
            {{ item }}
          </option>
        </select>
      </div>

      <!-- Data Table -->
      <div class="overflow-x-auto">
        <table class="table table-zebra w-full rounded-lg shadow border">
          <thead class="bg-neutral text-neutral-content text-sm">
          <tr>
            <th class="px-4 py-2">ID</th>
            <th class="px-4 py-2">Product Name</th>
            <th class="px-4 py-2">Month</th>
            <th class="px-4 py-2">Year</th>
            <th class="px-4 py-2">Price</th>
          </tr>
          </thead>
          <tbody>
          <tr
              v-for="(record, index) in records"
              :key="index"
              class="hover:bg-base-300 transition-colors"
          >
            <td class="px-4 py-2 text-center">{{ index + 1 }}</td>
            <td class="px-4 py-2 text-center">{{ record.productName }}</td>
            <td class="px-4 py-2 text-center">{{ getMonth(record.month) }}</td>
            <td class="px-4 py-2 text-center">{{ getYear(record.month) }}</td>
            <td class="px-4 py-2 text-center">
              ${{ record.price.toFixed(2) }}
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// Reactive variables
const records = ref([]);
const itemNames = ref(["Chicken breasts", "Eggs", "Cereal", "Yogurt", "Bananas"]);
const selectedItem = ref("");

// Fetch records from API
const fetchRecords = async () => {
  try {
    const url = selectedItem.value
        ? `https://localhost:7075/api/RecordTable/itemname/${selectedItem.value}`
        : `https://localhost:7075/api/RecordTable`;

    const res = await fetch(url);
    records.value = await res.json();
  } catch (err) {
    console.error("Failed to fetch records:", err);
  }
};

// Extract the month from the "month" field
const getMonth = (dateString) => {
  const options = { month: "long" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

// Extract the year from the "month" field
const getYear = (dateString) => {
  return new Date(dateString).getFullYear();
};

// Fetch data on mount
onMounted(fetchRecords);
</script>
