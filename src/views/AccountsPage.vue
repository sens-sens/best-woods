<template>
  
  <AppBar></AppBar>
  <AccountInfo></AccountInfo>
  <EndCard></EndCard>

</template>
  


<script>
import AppBar from "../components/common/AppBar.vue";
import AccountInfo from "../components/account/AccountInfo.vue";
import EndCard from "../components/common/EndCard.vue";

export default {
  name: "AccountsPage",
  components: {
    AppBar,
    AccountInfo,
    EndCard,
  },
};
</script>
  
  