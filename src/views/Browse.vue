<template>
  <div id="app">
  <div class="map-responsive">
 <iframe src="https://www.google.com/maps/d/embed?mid=1LMt8faTipbwli79OXvEpeyX9e2sww7jM" width="100%" height="100%" allowfullscreen></iframe>
  </div>
    <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="grey darken-2 white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        This site contains a wealth of information on various branches of Armenian art. It will take you to a unique world of art, where you will tangibly feel a centuries-old breath of Armenian art. You will be with the artists who bridge the past and present, you will know all about their period of life and left inharitance. Here you will find information not only about spiritual treasures, but also monuments representing the flight of armenian architectural thought, such as Zvartnots Cathedral, Republic Square, Opera and so on. So here is armenian art in all its luxury.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text grey darken-3">
        {{ new Date().getFullYear() }} — <strong>TUMO WORKSHOP</strong>
      </v-card-text>
    </v-card>
  </v-footer>
  </div>
</template>

<script>
import GoogleMap from "../components/GoogleMap";

export default {
  name: "App",
  components: {
    GoogleMap
  },
  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-google-plus',
      'mdi-linkedin',
      'mdi-instagram'
    ]
  })
}
</script>

<style>
#app{
  height: 100vh;
  position: relative;
}
.map-responsive{
    overflow:hidden;
    padding: 0;
    padding-bottom:56.25%;
    position:relative;
    margin: 0;
    height:100%;
}
.map-responsive iframe{
    left:0;
    top:0;
    height:100%;
    width:100%;
    padding: 0;
    margin: 0;
    position:absolute;
}
</style>