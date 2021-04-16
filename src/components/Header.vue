<template>
  <div class="header_wrapper">
    <header class="header">
      <h1>
        <a href="#"
          ><img src="@/assets/images/m_logo.png" alt="VR미래기술박람회"
        /></a>
      </h1>
      <nav class="lnb">
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
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String,
  },
};
</script>
