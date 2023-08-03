<template>
  <div class="email-field">
    <input type="text" placeholder="Enter Email Address" />
    <div class="button">Submit</div>
  </div>
</template>
  
  <script>
export default {
  name: "EmailTextField",
};
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
.email-field {
  color: #e3e3e3;
  
  border: 1px solid #777777;
  padding: 10px;
  margin: 10px;
}

.email-field input {
    font-family: "Unbounded", sans-serif;
  font-size: 12px;
  background-color: transparent;
  border: none;
  width: 100%;
  outline: none;
  color: #fef9ef;
}

.button {
  background: #e3cd00;
  color: #2d264b;
  padding: 5px 15px;
}

.button:hover{
 cursor: pointer;

}
</style>
  