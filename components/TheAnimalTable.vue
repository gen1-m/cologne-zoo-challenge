<script lang="ts" setup>
import { computed } from 'vue'
import type { PropType } from 'vue'
import type { Animal } from '../types'

const props = defineProps({
  animals: {
    type: Array as PropType<Array<Animal>>,
    required: true,
  },
})

const animalsSortedByName = computed(() => props.animals.slice().sort((animalA, animalB) => (animalA.name > animalB.name) ? 1 : -1))
</script>

<template>
  <table class=" table-auto border-collapse ">
    <thead>
      <tr class=" bg-gray-200 border-b-2 border-t-2 border-gray-500 ">
        <th>Index</th>
        <th>Species</th>
        <th>Name</th>
        <th>Gender</th>
        <th>Age (yrs)</th>
        <th>Birthdate</th>
        <th>Favourite Fruit</th>
        <th>Weight (kg)</th>
        <th>Height (m)</th>
        <th>Food/Day (kg)</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="({ id, species, name, gender, birthdate, age, weight, height, favouriteFruit, foodPerDay }, animalIndex) in animalsSortedByName" :key="id" class=" hover:bg-amber-200 border-b-2 border-amber-900 ">
        <td>{{ animalIndex + 1 }}</td>
        <td>{{ species }}</td>
        <td>{{ name }}</td>
        <td>{{ gender }}</td>
        <td>{{ age }}</td>
        <td>{{ birthdate }}</td>
        <td>{{ favouriteFruit }}</td>
        <td>{{ weight }}</td>
        <td>{{ height }}</td>
        <td>{{ foodPerDay.toFixed(2) }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
table {
  @apply text-left
}

td {
  @apply w-40
}

tr {
  @apply border-b-2
}
</style>
