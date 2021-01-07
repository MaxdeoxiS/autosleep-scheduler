<template>
  <div class="container">
    <div v-if="!isActive" class="settings">
      <button class="btn btn-primary btn-lg" v-on:click="editDuration(-30)">--</button>
      <button class="btn btn-primary" v-on:click="editDuration(-5)">-</button>
      <h3 class="timer">{{ duration }}</h3>
      <button class="btn btn-primary" v-on:click="editDuration(5)">+</button>
      <button class="btn btn-primary btn-lg" v-on:click="editDuration(30)">++</button>
    </div>
    <button v-if="!isActive" class="btn btn-primary btn-lg schedule" v-on:click="scheduleSleep()">Programmer</button>
    <button v-if="isActive" class="btn btn-danger btn-lg" v-on:click="cancel">Annuler</button>
    <p v-if="isActive">{{ duration }} minute(s) restante(s)...</p>
  </div>
</template>


<script>
const { exec } = require("child_process");

export default {
  name: "Sleeper",
    components: {
  },
  data: () => {
    return {
      isActive: false,
      duration: 0,
      timer: null
    };
  },
  methods: {
    scheduleSleep: function() {
      exec("shutdown -f -s -t " + this.duration * 60);
      this.isActive = true;
      this.timer = setInterval(() => {
        this.duration = this.duration - 1;
        console.log(this.duration);
        },
      60 * 1000);
    },
    cancel: function() {
      clearInterval(this.timer);
      exec("shutdown -a");
      this.isActive = false;
    },
    editDuration: function(duration) {
      if (this.duration + duration >= 0) {
        this.duration += duration;
      } else {
        this.duration = 0;
      }
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}

.settings {
  display: flex;
  flex-direction: row;
  margin-bottom: 8px;
}

.timer {
  width: 100px;
  line-height: 2;
  margin-bottom: 0px;
}

.schedule {
  width: 33%;
  height: 120;
  font-size: 30px;
}
</style>
