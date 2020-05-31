<template>
  <div class="container">
    <button class="btn btn-primary btn-lg" v-on:click="scheduleSleep(500)">15 min</button>
    <!-- <button class="btn btn-primary btn-lg" v-on:click="test">30 min</button>
    <button class="btn btn-primary btn-lg" v-on:click="test">45 min</button>-->
    <button class="btn btn-primary btn-lg" v-on:click="cancel">Annuler</button>
    <p v-if="isActive">Scheduler is active ! Sleeping set in ...</p>
  </div>
</template>


<script>
const { exec } = require("child_process");

export default {
  name: "HelloWorld",
  data: () => {
    return {
      isActive: false
    };
  },
  methods: {
    scheduleSleep: function(duration) {
      exec("shutdown -f -s -t " + duration);
      this.isActive = true;
    },
    cancel: function() {
      exec("shutdown -a");
      this.isActive = false;
    }
  }
};
</script>

<style scoped>
</style>
