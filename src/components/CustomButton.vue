<template>

  <div v-if="isSelected">
    <div class="selected custom-button">
      {{text}}
  </div>
  </div>
<div v-else>
  <div class="unselected custom-button">
    {{text}}
  </div>
</div>
</template>

<script>
export default {
  name: 'CustomButton',
  props: {
    text: String,
    isSelected: Boolean
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.custom-button{
  text-align: center;
  padding: 10px 0px;
  font-size: 16px;
  font-weight: 400;
  color: #2D264B;
  width: auto;
  height: fit-content;
}
.selected{
  border: 1px solid #2d264b;
  background: #E3CD00;
  box-shadow: 3px 3px #2d264b;
}
.unselected{
  border: 1px solid #2d264b;
}
</style>
