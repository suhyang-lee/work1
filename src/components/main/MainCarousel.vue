<template>
  <section class="main_carousel">
    <Hooper :settings="hooperSettings" style="height: 700px">
      <Slide
        v-for="(event, index) in eventList"
        v-bind:key="index"
        :index="index"
      >
        <div class="slide_image">
          <img :src="require(`@/assets/images${event.url}`)" alt="#" />
        </div>
      </Slide>
      <hooper-navigation slot="hooper-addons"></hooper-navigation>
    </Hooper>
  </section>
</template>

<script>
import Data from '@/assets/mock/data';

import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper';
import 'hooper/dist/hooper.css';

export default {
  name: 'MainCarousel',
  components: { Hooper, Slide, HooperNavigation },

  data: function() {
    return {
      eventList: Data.event,
      hooperSettings: {
        progress: true,
        centerMode: false,
        itemsToSlide: 1,
        autoPlay: true,
        playSpeed: 3000,
        transition: 300,
      },
    };
  },
};
</script>
