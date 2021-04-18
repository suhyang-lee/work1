<template>
  <li :class="{ showing: idx === currentIdx }">
    <img :src="require(`@/assets/images${url}`)" alt="#" />
  </li>
</template>

<script>
export default {
  name: 'MainCarouselItem',
  props: {
    url: String,
    idx: Number,
    currentIdx: Number,
  },
};
</script>
