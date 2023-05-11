<script lang="js">
import VueNumberInput from "@/components/vue-number-input"
export default {
  name: 'Gestion-component',
  data(){
    return {
        label_button: "Pause",
        isRunning: true,
        value: "",
    }
  },
  methods: {
        button_action: function(){
            if(this.isRunning){
                /*appel async pause*/
                this.isRunning=false;
                this.label_button="Reprendre";
            }
            else{
                /*appel async run*/
                this.isRunning=true;
                this.label_button="Pause";
            }
        },
        onUpdate: function(newValue, oldValue) {
          if(isNaN(newValue))
          {
            this.value=oldValue
          }
        }
  },
  components:{
    VueNumberInput
  }
}

</script>

<template>
<div id="Gestion-container">
  <div class="title">Gestion du réseau :</div>
  <div id="buttons">
    <button style="--clr:#8dba8a"><span>Télécharger</span><i></i></button>
    <button style="--clr:#8d90eb" v-on:click="button_action"><span>{{ this.label_button }}</span><i></i></button>
    <button style="--clr:#cf6d71"><span>Arrêt</span><i></i></button>
  </div>
  <hr/>
  <div class="title">Paramètres du réseau :</div>
  <div id="container-freq">
    <div id="freq-input" >
    <vue-number-input id="vue-number-input" v-for="n in 10" :key="n" placeholder="Fréquence" v-model="value" :min="1" :max="Infinity" :size="large" :rounded="true" inline controls @update:model-value="onUpdate">
  </vue-number-input>
</div>
</div>
</div>

</template>

<style lang="scss" scoped>
#container-freq{
  height: 300px;
  width: auto;
  overflow-y: auto;  
}
#freq-input{
  display: flex;
  flex-direction: column;
  gap: 1rem;  
  justify-content: center;
  align-items: center;
  width: 100%;
}
#vue-number-input{

}
hr{
  margin-top: 50px;
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: 50px;
  height: 0.5px;
  border: none;
  background-color: black;
}
button {
  position: relative;
  background: #444;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  border: none;
  letter-spacing: 0.1rem;
  padding: 1rem 3rem;
  transition: 0.2s;
  width: 250px;
}

button:hover {
  letter-spacing: 0.2rem;
  padding: 1.1rem 3.1rem;
  background: var(--clr);
  color: var(--clr);
  animation: box 3s infinite;
}

button::before {
  content: "";
  position: absolute;
  inset: 2px;
  background: #272822;
}

button span {
  position: relative;
  z-index: 1;
}
button i {
  position: absolute;
  inset: 0;
  display: block;
}

button i::before {
  content: "";
  position: absolute;
  width: 10px;
  height: 2px;
  left: 80%;
  top: -2px;
  border: 2px solid var(--clr);
  background: #272822;
  transition: 0.2s;
}

button:hover i::before {
  width: 15px;
  left: 20%;
  animation: move 3s infinite;
}

button i::after {
  content: "";
  position: absolute;
  width: 10px;
  height: 2px;
  left: 20%;
  bottom: -2px;
  border: 2px solid var(--clr);
  background: #272822;
  transition: 0.2s;
}

button:hover i::after {
  width: 15px;
  left: 80%;
  animation: move 3s infinite;
}

@keyframes move {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(5px);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes box {
  0% {
    box-shadow: #27272c;
  }
  50% {
    box-shadow: 0 0 25px var(--clr);
  }
  100% {
    box-shadow: #27272c;
  }
}
    #buttons{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: center;
        justify-content: center;
        
    }
    .title{
        display: block;
        font-size: 1.5vw;
        justify-content: center;
        text-align: center;
        padding-bottom: 50px;
    }
</style>