<template>
  <li v-show="visibleSlide === index">
    <img :src="require(`@/assets/images${url}`)" alt="#" />
  </li>
</template>

<script>
export default {
  name: 'MainCarouselItem',
  props: {
    url: String,
    index: Number,
  },
};
</script>
