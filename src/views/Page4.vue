<script>
import Lock from '../components/Lock.vue';

export default {
  name: 'Page4',
  components: {
    Lock,
  },
  methods: {
    goToPreviousPage() {
      this.$router.push('/page3');
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
          <img src="training.webp" class="rounded-lg shadow-lg" />
        </div>
        <div class="md:flex-1 text-center md:text-left">
          <pre>
            Training Room Puzzle!
          </pre>
        </div>
      </div>
      <Lock answer="123456" destination="page5" />
      <div class="pb-20">
        <button class="btn" @click="goToPreviousPage">Go Back</button>
      </div>
    </article>
  </div>
</template>
