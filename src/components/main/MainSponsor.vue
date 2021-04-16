<template>
  <section class="sponsor">
    <div class="title_wrapper">
      <span><img src="@/assets/images/icon/camera.png" alt=""/></span>
      <h3>sponsor & partners</h3>
    </div>

    <ul class="sponsor_list">
      <li v-for="sponsor in sponsorList" v-bind:key="sponsor.id">
        <img :src="require(`@/assets/images${sponsor.url}`)" alt="" />
      </li>
    </ul>
  </section>
</template>

<script>
import Data from '@/assets/mock/data';

export default {
  name: 'MainSponsor',
  data: function() {
    return {
      sponsorList: Data.sponsor,
    };
  },
};
</script>
