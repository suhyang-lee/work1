<template>
  <section class="main_carousel" @mouseover="onStop" @mouseout="onPlay">
    <ul class="carousel">
      <MainCarouselItem
        v-for="(event, idx) in eventList"
        v-bind:key="event.id"
        v-bind:url="event.url"
        v-bind:idx="idx"
        v-bind:currentIdx="currentIdx"
      />
    </ul>
    <div class="carousel_control">
      <button class="prev" @click="onPrevSlide">&#60;</button>
      <button class="next" @click="onNextSlide">&#62;</button>
    </div>
  </section>
</template>

<script>
import Data from '@/assets/mock/data';
import MainCarouselItem from '@/components/main/MainCarouselItem';

export default {
  name: 'MainCarousel',
  components: { MainCarouselItem },

  data: function() {
    return {
      eventList: Data.event,
      currentIdx: 0,
      timer: null,
    };
  },

  mounted: function() {
    this.onPlay();
  },

  methods: {
    onPlay: function() {
      this.timer = setInterval(this.onNextSlide, 2000);
    },
    onStop: function() {
      clearTimeout(this.timer);
      this.timer = null;
    },
    onPrevSlide: function() {
      this.currentIdx -= 1;
      if (this.currentIdx < -1) this.currentIdx = this.eventList.length - 1;
    },
    onNextSlide: function() {
      this.currentIdx += 1;
      if (this.currentIdx > this.eventList.length - 1) this.currentIdx = 0;
    },
  },
};
</script>
