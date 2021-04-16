<template>
  <article class="notice">
    <div class="main_title">
      <h3>─ {{ title }}</h3>
      <button>more ▶</button>
    </div>
    <NewsItem
      v-for="news in newsList"
      :key="news.id"
      v-bind:title="news.title"
      v-bind:date="news.date"
    />
  </article>
</template>

<script>
import NewsItem from '@/components/main/MainNewsItem';
import Data from '@/assets/mock/data';

export default {
  name: 'MainNews',
  components: { NewsItem },
  data: function() {
    return {
      newsList: Data.news,
    };
  },
  props: {
    title: String,
  },
};
</script>
