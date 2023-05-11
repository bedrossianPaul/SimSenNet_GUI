<script lang="js">

export default {
  name: 'Header-component',
}

</script>

<template>
<div id="header-container">
  <img src="@/assets/LogoINRS.png" id="logo-inrs"/>
  <div id="title">Réseau de capteurs</div>
  <img src="@/assets/LogoLORIA.png" id="logo-loria">
</div>

</template>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css2?family=Barlow:ital@1&display=swap');

#header-container{
  align-items: center;
  height: 100%;
  display: grid;
  grid-template-columns: 15% 70% 15%;
  grid-template-rows: auto;
  grid-template-areas: 
    "logo1 title logo2";

}

#title{
    font-family: 'Barlow', sans-serif;
    font-size: 3.5vw;
    grid-area: title;
    color: black;
    text-align: center;
    align-self: center;
  justify-self: center;
}
#logo-loria{
    grid-area:logo2;
    align-self: center;
  justify-self: center;
 
}
#logo-inrs{
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