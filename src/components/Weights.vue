<template>
    <div class="puzzle">
        <div v-for="(item, index) in items" :key="item.id" :class="`rectangle ${item.size}`" draggable="true"
            @dragstart="dragStart(index)" @dragover.prevent @drop="drop(index)">
            {{ item.label }}
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';


export default {
    props: {
        destination: {
            type: String,
            required: true,
        },
    },
    setup() {
        const items = ref([
            { id: 1, label: '10', size: 'w-[250px] h-[20px]' },
            { id: 2, label: '15', size: 'w-[250px] h-[30px]' },
            { id: 3, label: '25', size: 'w-[250px] h-[50px]' },
            { id: 4, label: '35', size: 'w-[250px] h-[70px]' },
            { id: 5, label: '45', size: 'w-[250px] h-[90px]' },
        ]);
        const dragging = ref(null);

        const answer = [5, 3, 4, 2, 1];
        // The answer to the weights would be:
        // 45=A, 25=B, 35=C, 15=D, 10=E

        const router = useRouter();

        const dragStart = (index) => {
            dragging.value = index;
        };

        const drop = (index) => {
            const draggedItem = items.value.splice(dragging.value, 1)[0];
            items.value.splice(index, 0, draggedItem);
            dragging.value = null; // Reset dragging state
            // Check if the puzzle is solved after each drop
            checkSolved();
        };

        const checkSolved = () => {
            // Compare the current order of items with the answer
            const isSolved = answer.every((ans, index) => items.value[index].id === ans);
            if (isSolved) {
                alert("Correct! The puzzle is solved!");
                router.push('/page5');
            }
        };

        return { items, dragStart, drop };
    }
};
</script>


<style scoped>
.rectangle {
    display: flex;
    /* Enable Flexbox */
    align-items: center;
    /* Center vertically */
    justify-content: center;
    /* Center horizontally */
    margin-bottom: 4px;
    background-color: #ddd;
    cursor: grab;
    color: #000;
    font-weight: bold;
}
</style>
