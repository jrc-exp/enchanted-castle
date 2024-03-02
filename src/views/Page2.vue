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
          <img src="/searching.webp" class="rounded-lg shadow-lg" />
        </div>
        <div class="md:flex-1 text-center md:text-left ml-10">
          <pre>
            In a room where secrets linger and echoes hide,
            A silent guardian awaits
            inside. Encased within layers unseen,
            A tale untold, a mystery keen.

            Floating whispers hold a clue,
            Their silent song leads you through.
            Seek their silence, break their seal,
            In their heart, the path will reveal.

            Gather the fragments, hidden well,
            Their story, only time will tell.
            Guided by the arc of light,
            Arrange the whispers, end the night.

            In this quest of shade and hue,
            A silent plea, a rescue true.
            Let the spectrum be your key,
            To unlock the whispers, set the guardian free.
          </pre>
        </div>
      </div>
      <Lock answer="9723" destination="page3" />
      <div class="pb-20">
        <button class="btn" @click="goToPreviousPage">Go Back</button>
      </div>
    </article>
  </div>
</template>

<script>
import Lock from '../components/Lock.vue';

export default {
  name: 'Page2',
  data() {
    return {
      audio: null,
    };
  },
  components: {
    Lock,
  },
  methods: {
    goToPreviousPage() {
      this.$router.push('/');
    },
  },
  mounted() {
    const audio = new Audio('/page2.mp3');
    this.audio = audio;
    this.audio.play();
  },
  unmounted() {
    this.audio.pause();
  },
};
</script>