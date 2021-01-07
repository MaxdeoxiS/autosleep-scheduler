<template>
    <button class="btn btn-primary btn-lg" v-on:click="action(duration * 60)">{{duration}} min</button>
</template>

<script>
export default {
  name: "SleepButton",
  props: {
      duration: Number,
      action: Function
  }
};
</script>