<template>
  <section class="contents">
    <!-- 메인슬라이더 -->
    <MainCarousel />
    <!-- 전시관안내 -->
    <section class="main_contents">
      <Information />
      <article class="news_contents">
        <div class="movie_wrapper">
          <MainNewsMovie />
        </div>
        <div class="news_wrapper">
          <MainNews title="보도자료" />
          <MainNews title="공지사항" />
        </div>
      </article>
    </section>
    <!-- 갤러리 -->
    <MainGallery />
    <MainSponsor />
    <!-- 스폰서&파트너 -->
  </section>
</template>

<script>
import MainCarousel from '@/components/main/MainCarousel';
import Information from '@/components/main/MainInfo';
import MainNews from '@/components/main/MainNews';
import MainNewsMovie from '@/components/main/MainNewsMovie';
import MainGallery from '@/components/main/MainGallery';
import MainSponsor from '@/components/main/MainSponsor';

export default {
  name: 'MainContents',
  components: {
    MainCarousel,
    Information,
    MainNews,
    MainNewsMovie,
    MainGallery,
    MainSponsor,
  },
};
</script>
