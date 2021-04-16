<template>
  <div class="footer_wrapper">
    <footer class="footer">
      <a href="#"><img src="@/assets/images/logo.png" alt="디지몽"/></a>
      <div class="footer_contents">
        <ul class="footer_list">
          <li><a href="#">이용약관</a></li>
          <li><a href="#">개인정보취급방침</a></li>
          <li><a href="#">이메일 무단수집거부</a></li>
          <li>개인정보 보호책임자: 가나다</li>
          <li>
            사업자등록번호 : 117-XX-XXXXX [사업자정보확인]
          </li>
        </ul>

        <ul class="footer_list">
          <li>통신판매업 신고번호 : 영등포구청 제 2002-XXXX</li>
          <li>통신판매업 신고번호 : 영등포구청 제 2002-XXXX</li>
        </ul>

        <ul class="footer_list">
          <li>
            문의전화 : 1899-XXXX / 02-XXXX-XXXX / 팩스 : 02-XXX-XXXX /
            이메일문의 : mong@dgmong.com
          </li>
        </ul>

        <ul class="footer_list">
          <address>Copyright © DGMONG. All Rights Reserved.</address>
        </ul>

        <ul class="sns_list">
          <li>
            <a href="#"
              ><img src="@/assets/images/icon/i1.png" alt="트위터"
            /></a>
          </li>
          <li>
            <a href="#"
              ><img src="@/assets/images/icon/i2.png" alt="페이스북"
            /></a>
          </li>
          <li>
            <a href="#"
              ><img src="@/assets/images/icon/i3.png" alt="핀터레스트"
            /></a>
          </li>
          <li>
            <a href="#"
              ><img src="@/assets/images/icon/i4.png" alt="인스타그램"
            /></a>
          </li>
          <li>
            <a href="#"
              ><img src="@/assets/images/icon/i5.png" alt="핀터레스트"
            /></a>
          </li>
          <li>
            <a href="#"
              ><img src="@/assets/images/icon/i6.png" alt="트위터"
            /></a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    msg: String,
  },
};
</script>
