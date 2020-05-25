<template>
  <div class="container">
    <button class="btn btn-primary" v-on:click="test">Test</button>
  </div>
</template>


<script>

const { exec } = require("child_process");
function execute(command, callback) {
  exec(command, (error, stdout) => {
    callback(stdout);
  });
}

export default {
  name: "HelloWorld",
  methods: {
    test: function() {
      execute("ping -c 4 0.0.0.0", output => {
        console.log(output);
      });
    }
  }
};
</script>

<style scoped>
</style>
