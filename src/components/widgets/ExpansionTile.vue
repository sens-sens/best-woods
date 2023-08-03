<template>

    <div v-if="enabled">
      <div class="enabled expansion-tile">
        <div class="title">{{title}}</div>
        <div class="icon">
            <svg v-if="!expanded" width="10" height="10" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.5 8.99805H8.5V13.998C8.5 14.2633 8.39464 14.5176 8.20711 14.7052C8.01957 14.8927 7.76522 14.998 7.5 14.998C7.23478 14.998 6.98043 14.8927 6.79289 14.7052C6.60536 14.5176 6.5 14.2633 6.5 13.998V8.99805H1.5C1.23478 8.99805 0.98043 8.89269 0.792893 8.70515C0.605357 8.51762 0.5 8.26326 0.5 7.99805C0.5 7.73283 0.605357 7.47848 0.792893 7.29094C0.98043 7.1034 1.23478 6.99805 1.5 6.99805H6.5V1.99805C6.5 1.73283 6.60536 1.47848 6.79289 1.29094C6.98043 1.1034 7.23478 0.998047 7.5 0.998047C7.76522 0.998047 8.01957 1.1034 8.20711 1.29094C8.39464 1.47848 8.5 1.73283 8.5 1.99805V6.99805H13.5C13.7652 6.99805 14.0196 7.1034 14.2071 7.29094C14.3946 7.47848 14.5 7.73283 14.5 7.99805C14.5 8.26326 14.3946 8.51762 14.2071 8.70515C14.0196 8.89269 13.7652 8.99805 13.5 8.99805Z" fill="#FEF9EF"/>
</svg>
<svg v-else width="10" height="10" enable-background="new 0 0 32 32" id="Layer_1" version="1.1" viewBox="0 0 32 32"  xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M18.221,7.206l9.585,9.585c0.879,0.879,0.879,2.317,0,3.195l-0.8,0.801c-0.877,0.878-2.316,0.878-3.194,0  l-7.315-7.315l-7.315,7.315c-0.878,0.878-2.317,0.878-3.194,0l-0.8-0.801c-0.879-0.878-0.879-2.316,0-3.195l9.587-9.585  c0.471-0.472,1.103-0.682,1.723-0.647C17.115,6.524,17.748,6.734,18.221,7.206z" fill="#FEF9EF"/></svg>


        </div>
    </div>
    <div class="expanded-contents" v-if="expanded">
        <div v-for="n in options" :key="n" class="expanded-content">
        --{{n}}
        </div>
    </div>
    </div>
  <div v-else>
    <div class="disabled ">
        <div class="title">{{title}}</div>
        <div class="expanded-contents">
        <div v-for="n in options" :key="n" class="expanded-content">
        --{{n}}
        </div>
    </div>
    </div>
  </div>
  </template>
  
  <script>
  export default {
    name: 'ExpansionTile',
    props: {
      title: String,
      options: Array,
      expanded:Boolean,
      enabled:Boolean
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>

.expansion-tile{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.expanded-contents{
    padding-top: 20px;
    padding-left: 20px;
    
}
.expanded-content{
    padding:10px;
    font-weight: 400;
    font-family: "Open Sans" , sans-serif;
    font-size: 14px;
    color:#E3E3E3;
}

.title{
color:#E3E3E3;
font-family: "Unbounded", sans-serif;
font-size: 12px;
}
.icon{
    
    color:white
}
  </style>
  