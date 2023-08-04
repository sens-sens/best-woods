<template>
  <div class="wrapper">Favorites Contents</div>
</template>
  
<script>
export default {
  name: "FavoritesSection",
};
</script>
  

<style scoped>
.wrapper {
  font-family: "Open Sans";
  color: grey;
  text-align: center;
  margin-top: 48px;
  padding: 40px;
  border: 1px solid #2d264b;
}

@media only screen and (max-width: 450px) {
  .wrapper {
    padding: 0;
    border: none;
  }
}
</style>
  