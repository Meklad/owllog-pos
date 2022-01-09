import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            memories: [
                {
                  id: "1",
                  title: "Amet nostrud pariatur.",
                  image: "https://picsum.photos/200/300?random=1",
                  description: "Nostrud laborum voluptate anim labore officia anim amet labore aliqua. Fugiat adipisicing ullamco pariatur do irure Lorem minim reprehenderit dolore veniam. Do incididunt anim excepteur eiusmod mollit enim ipsum nulla ea."
                },
                {
                  id: "2",
                  title: "Non duis excepteur aliquip.",
                  image: "https://picsum.photos/200/300?random=2",
                  description: "Eiusmod id amet occaecat laboris. Nostrud ad enim proident ea aute irure duis ad qui occaecat incididunt occaecat. Velit pariatur ea ipsum consequat sit eiusmod fugiat reprehenderit enim reprehenderit consequat velit consectetur."
                },
                {
                  id: "3",
                  title: "Nulla tempor ea labore.",
                  image: "https://picsum.photos/200/300?random=3",
                  description: "Ex duis nulla est consequat non pariatur ut est commodo. Lorem officia culpa do laboris ipsum deserunt culpa exercitation elit. Mollit qui sit cillum non ad in id."
                }
            ]
        }
    },
    getters: {
        memories(state) {
            return state.memories
        },
        memory(state) {
            return (memoryId) => {
                return state.memories.find(memory => {
                    return memory.id === memoryId
                })
            }
        }
    }
})

export default store