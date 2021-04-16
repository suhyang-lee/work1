<template>
  <li class="news_item">
    <a href="#">
      <span>[공지] {{ title | subString }}</span>
    </a>
    <span>{{ date }}</span>
  </li>
</template>

<script>
export default {
  name: 'MainNewsItem',
  props: {
    title: String,
    date: String,
  },
  filters: {
    subString: function(str) {
      const maxLength = 32;
      if (str.length < maxLength) return str;

      return str.substring(0, maxLength) + ' ...';
    },
  },
};
</script>
