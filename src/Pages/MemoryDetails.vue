<template>
    <base-layout 
      :page-title="loadMemory ? loadMemory.title : 'Loading ...'"
      default-back-page-link="/memories"
    >
        <h2 style="color: red;" v-if="!loadMemory">
          Could not find this memory ...
        </h2>
        <memory-overview v-else :memory="loadMemory"></memory-overview>
    </base-layout>
</template>

<script>
import MemoryOverview from '../components/Memories/MemoryOverview.vue'
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MemoriesPage',
  components: {
    MemoryOverview
  },
  data() {
    return {
      memoryId: this.$route.params.id
    }
  },
  computed: {
    loadMemory() {
      return this.$store.getters.memory(this.memoryId)
    }
  }
})
</script>
