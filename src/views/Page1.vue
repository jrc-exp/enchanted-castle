<script>
export default {
  name: 'Page1',
  methods: {
    goToNextPage() {
      this.$router.push('/page2');
    },
  },
};
</script>

<template>
  <div class="container mx-auto py-10" id="app">
    <article class="prose prose-lg max-w-none">
      <div
        class="
          container
          mx-auto
          flex flex-col
          md:flex-row
          items-center
          justify-between
          py-0
          px-4
        "
      >
        <div class="md:flex-1 mb-8 md:mb-0">
          <img src="girls_looking_castle.jpeg" class="rounded-lg shadow-lg" />
        </div>
        <div class="md:flex-1 text-center md:text-left">
          <h1>Mystery of the Enchanted Castle</h1>
          <h2>Animal Rescue</h2>
        </div>
      </div>

      <p>
        In the heart of a lush, whispering forest, on a day filled with the joy
        of celebration, six brave friends gathered to honor the 10th birthday of
        their dear friend, Addison. Laughter and excitement filled the air as
        they envisioned the fun that awaited them. Yet, as they journeyed
        together, a curious sight caught their eyes—a mysterious castle, veiled
        in mist and magic, stood solemnly in the distance.
      </p>

      <p>
        Compelled by a sense of adventure, Addison and her friends, each with
        hearts as bold as the other, decided to explore this unexpected
        discovery. As they drew closer, the castle's enchanting allure grew, but
        so did a sense of unease. For within its ancient walls, they glimpsed
        shadows of endangered animals—pandas, red pandas, and more—peering back
        at them, their eyes filled with silent pleas for help.
      </p>
      <p>
        Before the grand entrance, a note hung, its message clear and
        foreboding: "The owner shall return under the cloak of night." Time was
        of the essence. The girls knew what they must do. The celebration turned
        into a mission; they would not rest until every animal was free. Their
        journey into the castle would be one of courage, wit, and friendship.
      </p>
      <p>
        So begins the "Mystery of the Enchanted Castle: Animal Rescue." Will
        Addison and her friends solve the puzzles, unlock the secrets, and save
        the animals before time runs out? The adventure is in their hands.
      </p>
      <div class="">
        <button class="btn" @click="goToNextPage">Let the quest begin!</button>
      </div>
    </article>
  </div>
</template>
