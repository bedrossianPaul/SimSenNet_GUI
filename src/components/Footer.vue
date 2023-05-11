<script lang="js">

export default {
  name: 'Footer-component',
}

</script>

<template>
<div id="footer-container">
  <img src="@/assets/LogoSIMBIOT.png" id="logo-simbiot"/>
  <img src="@/assets/LogoUnivLorraine.png" id="logo-univ">
</div>

</template>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css2?family=Barlow:ital@1&display=swap');

#footer-container{
  align-items: center;
  height: 100%;
  display: grid;
  grid-template-columns: 15% 70% 15%;
  grid-template-rows: auto;
  grid-template-areas: 
    "logo1 title logo2";

}


#logo-simbiot{
    grid-area:logo2;
    align-self: center;
  justify-self: center;
 
}
#logo-univ{
    align-self: center;
  justify-self: center;
    grid-area: logo1;
}
img{
    
    height: 95%;
    width: auto;
    object-fit: cover;
}
</style>