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
        Before you can proceed.
        A Clue you will need.
        Amongst the games,
        You will find the key.

        With this you can proceed.
        Look high and look low,
        Keep yourselves clean,
        the animals must be freed!
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
