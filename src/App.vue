<template>
  <div class="parent">
    <div class="group">
      <img alt="Header" src="./assets/path.gif" class="header" />
      <img alt="icon" src="./assets/pika.gif" class="top" />
      <a href="https://twitter.com/_waipen" class="x"
        ><img alt="xMain" src="./assets/waipen.png" class="x"
      /></a>
      <a href="https://twitter.com/5zuzz" class="sub"
        ><img alt="xSub" src="./assets/5zuuz.png" class="sub"
      /></a>
      <div class="name">わいぺん</div>
      <a href="https://twitter.com/5zuzz" class="x"></a>
      <HelloWorld />
    </div>
    <div class="contents">
      <div class="mb-3">
        <a>
          <img alt="ApexLegends" src="./assets/aLogo.jpg" class="apex" />
        </a>
      </div>
      <a>
        <img alt="ApexLegends" src="./assets/apex.gif" class="Info" />
      </a>
      <div class="mb-3">
        <a>
          <img alt="SuddenAttack" src="./assets/sLogo.png" class="sa" />
        </a>
      </div>
      <a>
        <img alt="ApexLegends" src="./assets/SuddenAttack.png" class="Info" />
      </a>
      <div class="mb-3">
        <a>
          <img alt="Valorant" src="./assets/vLogoW.png" class="valo" />
        </a>
      </div>
      <a>
        <img alt="ApexLegends" src="./assets/Valorant.png" class="Info" />
      </a>
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style>
html {
  background: rgb(47, 47, 49);
  /* background: linear-gradient(#3a3a3a, #1a1a1a); */
}
.group {
  position: relative;
  top: -15vw;
  right: 2vw;
}
.header {
  width: 102vw;
  height: 80vw;
}
.top {
  left: 34.2vw;
  position: absolute;
  width: 35vw;
  height: 35vw;
  border-radius: 100%;
  top: 20vw;
  border: 1vw solid rgb(184, 241, 255);
}
.name {
  position: absolute;
  color: white;
  font-size: 6vw;
  top: 56vw;
  left: 40vw;
}
.x {
  position: absolute;
  top: 32vw;
  width: 25vw;
  left: 19.8vw;
}
.sub {
  position: absolute;
  top: 35vw;
  width: 25vw;
  left: 19.8vw;
}
.contents {
  position: absolute;
  left: 17vw;
}
.apex {
  width: 63vw;
  height: 20vw;
  padding: 1vw;
}
.sa {
  width: 63vw;
  padding: 1vw;
  margin-top: 2vw;
  top: 75vw;
}
.valo {
  width: 63vw;
  padding: 1vw;
  margin-top: 2vw;
  top: 90vw;
}
.Info {
  width: 63vw;
  border-radius: 5%;
}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
