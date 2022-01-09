<template>
    <ion-item 
        :key="memory.id"
        :router-link="`/memories/${memory.id}`"
    >
        <ion-thumbnail slot="start">
        <img :src="memory.image" :alt="memory.title">
        </ion-thumbnail>
        <ion-label>{{ memory.title }}</ion-label>
    </ion-item>
</template>

<script>
import { defineComponent } from 'vue'
import {
    IonItem,
    IonLabel,
    IonThumbnail
} from '@ionic/vue'
export default defineComponent({
    name: "MemoriesListItem",
    props: ['memory'],
    components: {
        IonItem,
        IonLabel,
        IonThumbnail,
    }
})
</script>
