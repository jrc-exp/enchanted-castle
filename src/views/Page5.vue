<script>
import Lock from '../components/Lock.vue';

export default {
  name: 'Page5',
  components: {
    Lock,
  },
  methods: {
    goToPreviousPage() {
      this.$router.push('/page4');
    },
  },
  mounted() {
    const audio = new Audio('/page5.mp3');
    this.audio = audio;
    this.audio.play();
  },
  unmounted() {
    this.audio.pause();
  },
};
</script>

<template>
  <div class="container mx-auto py-20">
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
          <img src="/door.webp" class="rounded-lg shadow-lg" />
        </div>
        <div class="md:flex-1 text-center md:text-left ml-10">
          <pre>
            Through corridors and chambers, your journey led,
            Where silent guardians once softly tread.
            Each encounter, a whisper, a memory ensnared,
            In ornaments worn, their secrets bared.

            Not just a trinket, nor a simple band,
            But a sequence unveiled, by a careful hand.
            Look not for loud clamors or a glaring sign,
            But the silent order, in a line divine.

            As the path unwinds, so must you weave,
            A tapestry of numbers, in what you believe.
            The key lies not in a singular place,
            But in the journey taken, a quiet embrace.
          </pre>
        </div>
      </div>
      <Lock answer="PANDAS" destination="page6" />
      <div class="pb-20">
        <button class="btn" @click="goToPreviousPage">Go Back</button>
      </div>
    </article>
  </div>
</template>
