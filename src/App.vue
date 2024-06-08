<template>
  <div class="name-input-container">
    <label for="name">Name:</label>
    <input id="name" v-model="name" type="text" placeholder="Enter your name" />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import utils from '@/utils/Utils.js';

const {
  debounce,
  throttle,
} = utils();

const name = ref('');

watch(name, throttle((newValue, oldValue) => {
  console.log('APPEL API', newValue);
}, 2000));
</script>

<style scoped>
.name-input-container {
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 20px auto;
}

label {
  margin-bottom: 8px;
  font-weight: bold;
}

input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}
</style>