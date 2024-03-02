<script>
import Weights from '../components/Weights.vue';

export default {
  name: 'Page4',
  components: {
    Weights,
  },
  methods: {
    goToPreviousPage() {
      this.$router.push('/page3');
    },
  },
  mounted() {
    const audio = new Audio('/page4.mp3');
    this.audio = audio;
    this.audio.play();
  },
  unmounted() {
    this.audio.pause();
  },
};
</script>

<template>
  <div class="container mx-auto py-10">
    <article>
      <div class="
          container
          mx-auto
          flex flex-col
          md:flex-row
          items-center
          justify-between
          py-0
          px-4
        ">
        <div class="md:flex-1 mb-8 md:mb-0">
          <img src="/training.webp" class="rounded-lg shadow-lg" />
        </div>
        <div class="md:flex-1 text-center md:text-left ml-10">
          <pre>
            Within the castle's might, where knights of old prepare,
            Lies the training grounds, a challenge if you dare.
            Strength and wit must merge, in harmony they play,
            Numbers etched in iron, secrets to convey.

            Seek the weights that whisper tales of old,
            Their numbers hold the truth, in iron cold.
            Each to its own shadow must you align,
            A silent accord of balance and design.

            This task before you, not merely of might,
            But a dance of wisdom, in the ancient light.
            Solve the enigma set, let the path unfold,
            Advance with heart and courage, bold and bold.
          </pre>
        </div>
      </div>
      <div class="p-10 flex justify-center items-center h-full">
        <!-- pass the javascript array [1, 2, 3, 5, 4] into the answer field, not a string-->
        <Weights destination="page5" />
      </div>
      <div class="">
        <button class="btn" @click="goToPreviousPage">Go Back</button>
      </div>
    </article>
  </div>
</template>
