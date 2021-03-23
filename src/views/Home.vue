<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  head: {
    meta: [
      {
        name: "title",
        title: "Home",
      },
      {
        property: "og:title",
        content: "Facebook Title",
        id: "ogtitle",
      },
      {
        property: "og:image",
        content: "FacebookImage.jpg",
        id: "ogimg",
      },
      { property: "fb:app_id", content: "123456789", id: "ogfb" },
      {
        property: "og:description",
        content:
          "Facebook description",
        id: "ogdes",
      },
      {
        name: "twitter:card",
        content:
          "summary_large_image",
        id:"twcard",
      },
      {
        name: "twitter:title",
        content:"Twitter title",
        id:"twtitle",
      },
      {
        name: "twitter:image",
        content:"TwitterImage.jpg",
        id:"twimage",
      },  
    ],
  }
}
</script>
