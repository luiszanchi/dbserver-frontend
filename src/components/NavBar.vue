<template>
  <div class="centerx">
    <vs-navbar
      v-model="$store.state.menuIndex"
      :color="colorx"
      text-color="rgba(255,255,255,.6)"
      active-text-color="rgba(255,255,255,1)"
      class="myNavbar"
    >
      <div slot="title">
        <vs-navbar-title>Projeto de Teste da DBServer</vs-navbar-title>
      </div>

      <vs-navbar-item index="1">
        <router-link :to="{ name: 'Home'}" >Home</router-link>
      </vs-navbar-item>
      <vs-navbar-item index="2">
        <router-link :to="{ name: 'Config' }"> Config </router-link>
      </vs-navbar-item>
      <vs-navbar-item index="3">
        <router-link :to="{ name: 'Person' }"> Pessoas </router-link>
      </vs-navbar-item>
      <vs-navbar-item index="4">
        <router-link :to="{ name: 'Restaurant' }"> Restaurantes </router-link>
      </vs-navbar-item>
      <vs-navbar-item index="5">
        <router-link :to="{ name: 'Vote' }"> Votar </router-link>
      </vs-navbar-item>

      <vs-spacer></vs-spacer>
    </vs-navbar>
  </div>
</template>

<style lang="stylus">
.input-color {
  margin-bottom: 10px;
  position: relative;
  display: block;
}

.myNavbar {
  color: rgb(255, 255, 255);
}
</style>

<script>
export default {
  name: "NavBar",
  // computed
  data: () => ({
    colorx: '#112C6B'
  }),
  created() {
  }
};
</script>