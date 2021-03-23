<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
export default {
  name: 'Home',
  head: {
    meta: [
      {
        name: "title",
        title: "About",
      },
      {
        property: "og:title",
        content: "Facebook Title",
        id: "ogtitle",
      },
      {
        property: "og:image",
        content: "Facebook.jpg",
        id: "ogimg",
      },
      { property: "fb:app_id", content: "123456789", id: "ogfb" },
      {
        property: "og:description",
        content:
          "Facebook Description",
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
        content:"Twitter image",
        id:"twimage",
      },  
    ]
  }
}
</script>