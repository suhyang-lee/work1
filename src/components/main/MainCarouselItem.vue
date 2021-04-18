<template>
  <li :class="{ showing: idx === currentIdx }">
    <div class="item_contents">
      <div class="event">
        <p>2017 VR/AR 국제 박람회</p>
        <span
          >미래 신기술 체험 프로그램 신청 안내 <br />
          (초, 중,고 단체 및 개인)</span
        >
        <button class="event_btn">프로모션 바로가기</button>
      </div>
    </div>
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
