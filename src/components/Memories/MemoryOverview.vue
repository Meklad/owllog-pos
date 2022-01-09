<template>
    <ion-img :src="memory.image" :alt="memory.title"></ion-img>
    <h2 class="ion-text-center">{{ memory.title }}</h2>
    <p class="ion-text-center">
        <b>
            {{ memory.description }}
        </b>
    </p>
</template>

<script>
import {IonImg} from '@ionic/vue'
import { defineComponent } from 'vue'

export default defineComponent({
    name: "MemoryOverview",
    props: ['memory'],
    components: {
        IonImg
    }
})
</script>
