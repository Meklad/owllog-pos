<template>
    <base-layout page-title="Memories">
      <memories-list></memories-list>
    </base-layout>
</template>

<script>
import MemoriesList from '../components/Memories/MemoriesList.vue'
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MemoriesPage',
  components: {
    MemoriesList
  }
})
</script>
