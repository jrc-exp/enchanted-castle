<script>
import Lock from '../components/Lock.vue';

export default {
  name: 'Page3',
  components: {
    Lock,
  },
  methods: {
    goToPreviousPage() {
      this.$router.push('/page2');
    },
  },
  mounted() {
    const audio = new Audio('/page3.mp3');
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
          <img src="/bathroom.webp" class="rounded-lg shadow-lg" />
        </div>
        <div class="md:flex-1 text-center md:text-left">
          <pre>
            To advance on this quest, a key is in reach,
            Within the realm of games, lies the Clue you seek.
            Search amidst the play, where strategies entwine,
            There the path unlocks, and fortunes align.

            With key in hand, explore both high and low,
            Purity's essence, the next step will show.
            In the chamber of water, where cleansing flows free,
            Beneath suds and bubbles, your next clue shall be.

            So heed this advice, with care and with speed,
            For the animals await, their freedom decreed.
          </pre>
        </div>
      </div>
      <Lock answer="rescue" destination="page4" />
      <div class="pb-20">
        <button class="btn" @click="goToPreviousPage">Go Back</button>
      </div>
    </article>
  </div>
</template>
