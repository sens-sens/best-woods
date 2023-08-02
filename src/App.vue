<template>
  <AppBar></AppBar>
  <AccountInfo></AccountInfo>
  <EndCard></EndCard>
</template>

<script>
import AppBar from './components/AppBar.vue'
import AccountInfo from './components/AccountInfo.vue'
import EndCard from './components/EndCard.vue';

export default {
  name: 'App',
  components: {
    AppBar,
    AccountInfo,
    EndCard
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Unbounded");
@import url('https://fonts.googleapis.com/css?family=Open+Sans');
*{
  padding: 0;
  margin:0
}
</style>
