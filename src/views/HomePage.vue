<template>
  <div class="image-container one">
    <div class="content-one">
      <div class="title">
        From concept to creation, we bring your furniture dreams to life
      </div>
      <div class="subtitle">
        We specialize in creating unique, one-of-a-kind pieces tailored furniture
      </div>
      1
    </div>
  </div>
</template>
  


<script>

export default {
  name: "HomePage",

  components: {

  },
};
</script>
  
<style >

@import url("https://fonts.googleapis.com/css?family=Unbounded");
@import url("https://fonts.googleapis.com/css?family=Open+Sans");

:root {
  --primary:#2D264B;
  --secondary: #6F698B;
  --app-yellow:#E3CD00;
}


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Unbounded" sans-serif;
}

.image-container{
height:90vh;
width: 100%;
max-height: 800px;
background-position: top;
background-size: cover;
background-repeat: no-repeat;
}

.one{
  background-image: url('~@/assets/home/one.png')
}
.two{
  background-image: url('~@/assets/home/one.png')
}
.three{
  background-image: url('~@/assets/home/three.png')
}
.four{
  background-image: url('~@/assets/home/four.png')
}
.five{
  background-image: url('~@/assets/home/five.png')
}
.six{
  background-image: url('~@/assets/home/six.png')
}
.seven{
  background-image: url('~@/assets/home/seven.png')
}
.eight{
  background-image: url('~@/assets/home/eight.png')
}

.content-one {
  height: 100%;
  display: flex;
  margin: 0px 20%;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
}

.content-one .title{
  color: white;
  font-size: 36px;
  font-weight: 600;
}

@media only screen and (max-width: 500px) {
  .image-container{
    height:60vh;
  }

  .content-one{
    overflow: auto;
    align-items: start;
    margin: 0 10%;
    text-align: start;
  }
  .content-one .title{
  
  font-size: 24px;
  
}
}
</style>
  