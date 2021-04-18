<template>
  <div class="header_wrapper">
    <header class="header">
      <h1>
        <a href="#"
          ><img src="@/assets/images/m_logo.png" alt="VR미래기술박람회"
        /></a>
      </h1>
      <nav class="lnb" @mouseover="openSlideMenu">
        <ul>
          <li>
            <a href="#">
              <img src="@/assets/images/icon/menu1.png" alt="박람회소개" />
              <h2>박람회소개</h2>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="@/assets/images/icon/menu2.png" alt="전시프로그램" />
              <h2>전시프로그램</h2></a
            >
          </li>
          <li>
            <a href="#">
              <img src="@/assets/images/icon/menu3.png" alt="참가안내" />
              <h2>참가안내</h2></a
            >
          </li>
          <li>
            <a href="#">
              <img src="@/assets/images/icon/menu4.png" alt="온라인사전등록" />
              <h2>온라인사전등록</h2></a
            >
          </li>
          <li>
            <a href="#">
              <img src="@/assets/images/icon/menu5.png" alt="정보센터" />
              <h2>정보센터</h2></a
            >
          </li>
        </ul>
      </nav>
    </header>

    <div class="lnb_slide_menu" v-if="visible">
      <div class="slide_menu" @mouseleave="closeSlideMenu">
        <span class="empty"></span>
        <ul>
          <li>소개</li>
          <li>찾아오시는 길</li>
        </ul>
        <ul>
          <li>전시 안내</li>
          <li>체험 프로그램</li>
        </ul>
        <ul>
          <li>신청하기</li>
          <li>확인하기</li>
          <li>문의하기</li>
        </ul>
        <ul>
          <li>사전등록안내</li>
          <li>사전등록</li>
          <li>사전등록확인</li>
        </ul>
        <ul>
          <li>공지사항</li>
          <li>보도자료</li>
          <li>FAQ</li>
          <li>Q&A</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String,
  },

  data: function() {
    return {
      visible: false,
    };
  },

  methods: {
    openSlideMenu: function() {
      this.visible = true;
    },
    closeSlideMenu: function() {
      this.visible = false;
    },
  },
};
</script>
