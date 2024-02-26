<template>
  <div class="pin-code-container flex flex-col items-center gap-4 my-4">
    <div class="text-lg font-semibold text-gray-800 dark:text-gray-200">
      <span class="text-primary-500">Unlock the Mystery:</span> Enter the code
      to proceed
    </div>
    <div class="flex justify-center gap-2">
      <input v-for="index in answer.length" :key="index" class="
          input input-bordered input-primary
          w-16
          h-16
          text-2xl text-center
          rounded-lg
          shadow-md
        " type="text" maxlength="1" v-model="pin[index - 1]" @input="handleInput(index, $event)"
        @keydown="handleKeyDown(index, $event)" :ref="`pinInput${index}`" @paste.prevent />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    answer: {
      type: String,
      required: true,
    },
    destination: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      pin: [],
    };
  },
  created() {
    this.pin = Array(this.answer.length).fill('');
  },
  methods: {
    handleInput(index, event) {
      const value = event.target.value;
      this.pin[index - 1] = value; // Update the current input's value

      if (value) {
        if (index < this.answer.length) {
          this.$nextTick(() => {
            this.$refs[`pinInput${index + 1}`][0].focus();
          });
        }
      } else if (!value && index > 1) {
        this.$nextTick(() => {
          this.$refs[`pinInput${index - 1}`][0].focus();
        });
      }

      if (this.pin.every((digit) => digit !== '')) {
        this.checkPin();
      }
    },
    handleKeyDown(index, event) {
      if (event.key === 'Backspace' && index > 1) {
        setTimeout(() => {
          if (!this.pin[index - 1]) {
            this.$refs[`pinInput${index - 1}`][0].focus();
          }
        }, 0);
      }
    },

    checkPin() {
      const pinCode = this.pin.join('');
      // Perform your unlock action here
      console.log('Entered PIN:', pinCode, this.answer);
      // Reset PIN after checking
      if (pinCode.toLocaleLowerCase() === this.answer.toLowerCase()) {
        this.$router.push(this.destination);
      } else {
        this.resetPin();
      }
    },
    resetPin() {
      this.pin = Array(this.answer.length).fill('');
      this.$refs.pinInput1[0].focus();
    },
  },
  mounted() {
    this.$refs.pinInput1[0].focus();
  },
};
</script>

<style scoped>
.pin-code-container input::placeholder {
  color: transparent;
}
</style>
