<template>
  <div id="app">
  <div class="map-responsive">
 <iframe src="https://www.google.com/maps/d/embed?mid=1LMt8faTipbwli79OXvEpeyX9e2sww7jM" width="1920px" height="1080px" allowfullscreen="true"></iframe>
  </div>
  </div>
</template>

<script>
import GoogleMap from "../components/GoogleMap";

export default {
  name: "App",
  components: {
    GoogleMap
  },
  data: () => ({})
}
</script>

<style>
.map-responsive{
    overflow:hidden;
    padding: 0;
    padding-bottom:56.25%;
    position:relative;
    margin: 0;
    height:0;
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