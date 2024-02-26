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
          <img src="party.webp" class="rounded-lg shadow-lg" />
        </div>
        <div class="md:flex-1 text-center md:text-left">
          <h1>Happy Birthday Addison!</h1>
          <h2>The Animals are Free!</h2>
        </div>
      </div>
      <div class="pb-20">
        <button class="btn" @click="goToPreviousPage">Go Back</button>
      </div>
    </article>
  </div>
</template>
