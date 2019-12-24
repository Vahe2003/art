<template>
  <div>
      <v-carousel height = "700" show-arrows-on-hover  hide-delimiters continuous cycle dark interval = "5000">
    <v-carousel-item v-for="(item,i) in items"
      :key="i"
      transition="fade-transition"
      :src="item.src">
    </v-carousel-item>
  </v-carousel>

  </div>
</template>

<script>
export default {
  name: 'Home',

  data: () => ({
    items: [
      {
        src: require('../assets/img/architecture.jpg')
      },
      {
        src: require('../assets/img/literature.jpg')
      },
      {
        src: require('../assets/img/music.jpg')
      },
      {
        src: require('../assets/img/carpet.png')
      }
    ]
  }),
  methods: {
  }
}
</script>
