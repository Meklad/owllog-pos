<template>
    <ion-list>
        <memories-list-item
            v-for="memory in memories"
            :key="memory.id"
            :memory="memory"
        ></memories-list-item>
    </ion-list>    
</template>

<script>
import {
    IonList
} from '@ionic/vue'
import { defineComponent } from 'vue'
import MemoriesListItem from './MemoriesListItem.vue'

export default defineComponent({
  name: 'MemoriesList',
  computed: {
    memories() {
      return this.$store.getters.memories
    }
  },
  components: {
    IonList,
    MemoriesListItem
  }
})
</script>
