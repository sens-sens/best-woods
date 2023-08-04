<template>
  <div id="account-info-header">
    <div class="account-label">
      <div class="back-button">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.528 7.5327C14.8222 7.24111 14.8243 6.76624 14.5327 6.47205C14.2411 6.17785 13.7662 6.17573 13.472 6.46732L11.6773 8.24609C11.0013 8.91604 10.4489 9.46359 10.0571 9.95146C9.64963 10.4588 9.3547 10.9737 9.27591 11.5918C9.24137 11.8629 9.24137 12.1371 9.27591 12.4082C9.3547 13.0263 9.64963 13.5412 10.0571 14.0485C10.4489 14.5364 11.0013 15.0839 11.6773 15.7539L13.472 17.5327C13.7662 17.8243 14.2411 17.8222 14.5327 17.528C14.8243 17.2338 14.8222 16.7589 14.528 16.4673L12.765 14.72C12.0495 14.0109 11.5587 13.5228 11.2266 13.1093C10.904 12.7076 10.7933 12.4496 10.7639 12.2185C10.7454 12.0734 10.7454 11.9266 10.7639 11.7815C10.7933 11.5504 10.904 11.2924 11.2266 10.8907C11.5587 10.4772 12.0495 9.98914 12.765 9.28001L14.528 7.5327Z"
            fill="#2D264B"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12Z"
            fill="#2D264B"
          />
        </svg>
      </div>

      <div class="lable">Account</div>
    </div>

    <div class="logout-btn">
      Logout
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.33333 17.5V16.75V17.5ZM7.5 17.5V18.25V17.5ZM2.5 12.5H3.25H2.5ZM2.5 7.5H1.75H2.5ZM7.5 2.5V1.75V2.5ZM8.33333 2.5V3.25V2.5ZM2.5513 6.01486L1.81053 5.89753L1.81053 5.89753L2.5513 6.01486ZM6.01486 2.5513L6.13218 3.29206L6.01486 2.5513ZM6.01486 17.4487L5.89753 18.1895H5.89753L6.01486 17.4487ZM2.5513 13.9851L1.81053 14.1025L1.81053 14.1025L2.5513 13.9851ZM11.2838 17.2666C11.615 17.0179 11.6818 16.5477 11.433 16.2165C11.1842 15.8853 10.7141 15.8185 10.3829 16.0673L11.2838 17.2666ZM10.3829 3.9327C10.7141 4.18147 11.1842 4.11465 11.433 3.78346C11.6818 3.45227 11.615 2.98212 11.2838 2.73335L10.3829 3.9327ZM5.83333 9.25C5.41912 9.25 5.08333 9.58579 5.08333 10C5.08333 10.4142 5.41912 10.75 5.83333 10.75V9.25ZM16.6667 10V10.75V10ZM14.6326 6.07898C14.3081 5.82164 13.8363 5.87613 13.579 6.2007C13.3216 6.52526 13.3761 6.997 13.7007 7.25435L14.6326 6.07898ZM15.6358 7.83154L16.1018 7.24385L15.6358 7.83154ZM15.6358 12.1685L16.1018 12.7561V12.7561L15.6358 12.1685ZM13.7007 12.7456C13.3761 13.003 13.3216 13.4747 13.579 13.7993C13.8363 14.1239 14.3081 14.1784 14.6326 13.921L13.7007 12.7456ZM17.4834 9.79111L18.2241 9.67311V9.6731L17.4834 9.79111ZM17.4834 10.2089L18.2241 10.3269V10.3269L17.4834 10.2089ZM17.5 10L18.25 10L17.5 10ZM8.33333 16.75H7.5V18.25H8.33333V16.75ZM3.25 12.5L3.25 7.5H1.75L1.75 12.5H3.25ZM7.5 3.25L8.33333 3.25V1.75L7.5 1.75V3.25ZM3.25 7.5C3.25 6.69717 3.25233 6.38307 3.29206 6.13218L1.81053 5.89753C1.74767 6.29441 1.75 6.75449 1.75 7.5H3.25ZM7.5 1.75C6.75449 1.75 6.29441 1.74767 5.89753 1.81053L6.13218 3.29206C6.38307 3.25233 6.69717 3.25 7.5 3.25V1.75ZM3.29206 6.13218C3.52362 4.67022 4.67022 3.52362 6.13218 3.29206L5.89753 1.81053C3.79373 2.14374 2.14374 3.79373 1.81053 5.89753L3.29206 6.13218ZM7.5 16.75C6.69717 16.75 6.38307 16.7477 6.13218 16.7079L5.89753 18.1895C6.29441 18.2523 6.75449 18.25 7.5 18.25V16.75ZM1.75 12.5C1.75 13.2455 1.74767 13.7056 1.81053 14.1025L3.29206 13.8678C3.25233 13.6169 3.25 13.3028 3.25 12.5H1.75ZM6.13218 16.7079C4.67022 16.4764 3.52362 15.3298 3.29206 13.8678L1.81053 14.1025C2.14374 16.2063 3.79373 17.8563 5.89753 18.1895L6.13218 16.7079ZM8.33333 18.25C9.43932 18.25 10.462 17.8839 11.2838 17.2666L10.3829 16.0673C9.81194 16.4962 9.10336 16.75 8.33333 16.75L8.33333 18.25ZM8.33333 3.25C9.10336 3.25 9.81194 3.50384 10.3829 3.9327L11.2838 2.73335C10.462 2.11607 9.43932 1.75 8.33333 1.75V3.25ZM5.83333 10.75L16.6667 10.75V9.25L5.83333 9.25V10.75ZM13.7007 7.25435L15.1698 8.41922L16.1018 7.24385L14.6326 6.07898L13.7007 7.25435ZM15.1698 11.5808L13.7007 12.7456L14.6326 13.921L16.1018 12.7561L15.1698 11.5808ZM15.1698 8.41922C15.77 8.89509 16.169 9.21289 16.4358 9.47874C16.6994 9.74124 16.7349 9.85955 16.7428 9.90912L18.2241 9.6731C18.1418 9.15655 17.8393 8.75955 17.4945 8.41604C17.153 8.07587 16.6732 7.69695 16.1018 7.24385L15.1698 8.41922ZM16.1018 12.7561C16.6732 12.303 17.153 11.9241 17.4945 11.584C17.8393 11.2405 18.1418 10.8435 18.2241 10.3269L16.7428 10.0909C16.7349 10.1405 16.6994 10.2588 16.4358 10.5213C16.169 10.7871 15.77 11.1049 15.1698 11.5808L16.1018 12.7561ZM16.7428 9.90912C16.7476 9.93959 16.75 9.9699 16.75 10L18.25 10C18.25 9.89057 18.2413 9.78134 18.2241 9.67311L16.7428 9.90912ZM16.75 10C16.75 10.0301 16.7476 10.0604 16.7428 10.0909L18.2241 10.3269C18.2413 10.2187 18.25 10.1094 18.25 10L16.75 10ZM16.6667 10.75H17.5V9.25H16.6667V10.75Z"
          fill="#2D264B"
        />
      </svg>
    </div>
  </div>
  <div class="wrapper">
    <div id="account-info">
      <div class="photo-card">
        <img :src="image" />
        <div class="greeting">
          <p style="margin: 0; color: #6f698b; font-weight: 400">Hello,</p>
          <p
            style="
              margin: 0;
              font-size: 18px;
              color: #2d264b;
              font-weight: 600;
              line-height: 32px;
            "
          >
            {{ username }}
          </p>
        </div>
      </div>
      <div class="details">
        <div class="arg">Email</div>
        <div class="value">{{ email }}</div>
      </div>
      <div class="details">
        <div class="arg">Phone</div>
        <div class="value">{{ phone }}</div>
      </div>
      <div class="details">
        <div class="arg">Default Address</div>
        <div class="value">{{ address }}</div>
      </div>
    </div>
    <div class="button-section">
      <CustomButton v-on:click="changeSelection(0)" :isSelected="selectionStatus(0)" :text="'Personal Info'"></CustomButton>

      <CustomButton v-on:click="changeSelection(1)" :isSelected="selectionStatus(1)" :text="'My Uploads'"></CustomButton>

      <CustomButton v-on:click="changeSelection(2)" :isSelected="selectionStatus(2)" :text="'Favorites'"></CustomButton>

      <CustomButton v-on:click="changeSelection(3)" :isSelected="selectionStatus(3)" :text="'Addresses'"></CustomButton>
    </div>
    <div class="current-selection">
      <div v-if="selectionStatus(3)">
        <AddressSection></AddressSection>
    </div>
    <div v-if="selectionStatus(0)">
        <PersonalInfoSection></PersonalInfoSection>
    </div>
    <div v-if="selectionStatus(1)">
        <UploadsSection></UploadsSection>
    </div>
    <div v-if="selectionStatus(2)">
        <FavoritesSection></FavoritesSection>
    </div>
  </div>

<img class="whatsapp" :src="whatsapp">
  </div>
<div class="end-card">
</div>
</template>
  
  <script>


import image from "./../../assets/photo.jpg";
import whatsapp from "./../../assets/whatsapp.png";
import CustomButton from "../widgets/CustomButton.vue";
import AddressSection from '../account/sections/AddressSection.vue';
import FavoritesSection from '../account/sections/FavoritesSection.vue';
import PersonalInfoSection from '../account/sections/PersonalInfoSection.vue';
import UploadsSection from '../account/sections/UploadsSection.vue';




export default {
  name: "AccountInfo",
  data: function () {
    return {
      image: image,
      whatsapp:whatsapp,
      username: "Senthil Raja",
      email: "senthilraja1919@gmail.com",
      phone: "+91 9360013915",
      address: "Somewhere in the world",

      currentSelection:"Addresses",
      selections : ["Personal Info","My Uploads","Favorites","Addresses"]
    };
  },
  methods: {
    selectionStatus(index) {
      return this.currentSelection == this.selections[index]
    },
    changeSelection(index){
      this.currentSelection=this.selections[index]
    }
  },
  components: { CustomButton , AddressSection, UploadsSection,FavoritesSection,PersonalInfoSection },
};
</script>
  
  
  
  <style scoped>
  #account-info-header {
  padding: 30px 20px;
  
  margin: 0;
  align-items: center;
  font-family: "Unbounded", sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #2d264b;
  display: flex;
  justify-content: space-between;
  flex-direction: row;

}

.whatsapp{
  width:48px;
  height:48px;
  object-fit: contain;
  float: right;
  padding: 10px;
  margin-top: 10px;
}
.wrapper {
  margin-left: 10px;
  margin-right: 10px;
  font-family: "Unbounded", sans-serif;
  font-size: 16px;
}
#account-info {
  padding: 20px 20px;
margin: 0px 10px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  font-weight: 600;
  border: 1px solid #2d264b;
  box-shadow: 3px 3px #2d264b;
  align-items: center;
}
.account-label {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.button-section {

  margin:0px 10px;
  margin-top: 40px;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(4, 1fr);
}

.logout-btn {
  display: flex;
  height: fit-content;
  flex-direction: row;
  align-items: center;

  border: 1px solid #6f698b;
}

.details {
  margin: 16px 0px;
}

.logout-btn:hover {
  fill: white;
  color: white;
  cursor: pointer;
  background: #2D264B;
}
.logout-btn:hover *{
 fill:white;
  color: white;
 
}
.logout-btn:active{
  scale: 90%;
}

.logout-btn *{
  transition-duration: 0.5s;
}
.logout-btn {
  transition-duration: 0.5s;
  padding-top: 10px;
  padding-bottom: 10px;
  font-weight: 400;
  padding-left: 10px;
}
.logout-btn svg {
  
  padding-left: 10px;
  padding-right: 10px;
}

.photo-card img {
  width: 96px;
  height: 96px;
  padding-bottom: 20px;
  padding-right: 10px;
  object-fit: cover;
  object-position: top;
  margin-right: 10px;
}

.arg {
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  color: #2d264b;
  font-size: 18px;
}

.value {
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  color: #6f698b;
  line-height: 20px;
  font-size: 16px;
}

.photo-card {
  display: flex;
  flex-direction: row;
  align-items: end;
  border-right: 1px solid #eaeaea;
  margin-right: 20px;
}

.greeting {
  padding-bottom: 20px;
}
.back-button {
  visibility: hidden;
}

@media only screen and (max-width: 450px) {

  .whatsapp{
    display: none;
  }
  .back-button {
    visibility: visible;
    padding-right: 10px;
  }
  .arg {
    color: #6f698b;
  }
  #app-bar {
    border-bottom: 1px solid #eaeaea;
  }
}

@media only screen and (max-width: 840px) {
  #account-info {
    grid-template-columns: repeat(1, 1fr);
  }
  .greeting {
    padding-bottom: 0px;
  }

  .photo-card {
    align-items: center;
    padding-bottom: 10px;
    border-bottom: 1px solid #eaeaea;
    border-right: none;
  }

  .button-section {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
  