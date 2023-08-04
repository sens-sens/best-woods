<template>
    <AppBar></AppBar>
    <router-view/>
  <EndCard></EndCard>
  
</template>


<script>
import AppBar from "./components/common/AppBar.vue";
import EndCard from "./components/common/EndCard.vue";
export default {
  name: "App",
  components: {
    AppBar,
    EndCard,
  },
};
</script>



<style >
@import url("https://fonts.googleapis.com/css?family=Unbounded");
@import url("https://fonts.googleapis.com/css?family=Open+Sans");

* {
  padding: 0;
  margin: 0;
  font-family: "Unbounded";
}
</style>
