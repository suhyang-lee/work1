<template>
  <li>
    <img :src="require(`@/assets/images${url}`)" alt="vr이미지" />
  </li>
</template>

<script>
export default {
  name: 'MainGalleryItem',
  props: {
    url: String,
  },
};
</script>
