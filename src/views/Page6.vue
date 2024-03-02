<script>
import Lock from '../components/Lock.vue';

export default {
  name: 'Page6',
  components: {
    Lock,
  },
  methods: {
    goToPreviousPage() {
      this.$router.push('/page5');
    },
  },
  mounted() {
    const audio = new Audio('/page6.mp3');
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
    <article class="prose max-w-none">
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
          <img src="/party.webp" class="rounded-lg shadow-lg" />
        </div>
        <div class="md:flex-1 text-center md:text-left ml-10">
          <h1>Happy Birthday Addison!</h1>
          <h2>The Animals are Free!</h2>
          <pre>
            Triumph resounds through the castle's hall,
            Brave hearts have answered the silent call.
            Happy Birthday, Addison, joyous and bright,
            For the animals are free, thanks to your light.

            Together, the girls achieved a noble feat,
            With courage and love, no challenge could beat.
            Now let the night in laughter be wrapped,
            A slumber party awaits, in dreamscape mapped.

            Celebrate, rejoice, under the moon's soft glow,
            For the tales of this night, through ages will flow.
          </pre>
        </div>
      </div>
      <div class="pb-20">
        <button class="btn" @click="goToPreviousPage">Go Back</button>
      </div>
    </article>
  </div>
</template>
