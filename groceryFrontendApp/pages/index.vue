<template>
  <div class="bg-gradient-to-br from-green-100 via-white to-lime-100 min-h-screen">
    <div class="container mx-auto px-6 py-12">
      <h1 class="text-4xl font-bold text-center text-green-700 mb-10">
        Grocery Price Predictions
      </h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card v-for="item in items" :key="item.id" :data="item" />
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue';
import Card from '../components/Card.vue';

const items = ref([]);

onMounted(async () => {
  try {
    const res = await fetch('https://localhost:7075/api/GroceryItem/all');
    const data = await res.json();
    items.value = data;
    console.log(data);
  } catch (err) {
    console.error(err);
  }
});
</script>
