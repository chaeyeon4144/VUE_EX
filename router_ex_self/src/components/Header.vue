<script setup>

</script>

<template>
  <header>
    <nav>
      <ul class="nav-list">
        <li><router-link to="/" class="nav-link">홈</router-link></li>
        <li><router-link to="/about" class="nav-link">소개</router-link></li>
        <li><router-link to="/cash" class="nav-link">결제하기</router-link></li>
        <li><router-link to="/reservation" class="nav-link">예약하기</router-link></li>
        <li><router-link to="/login" class="nav-link">로그인</router-link></li>
        <li><router-link to="/register" class="nav-link">회원가입</router-link></li>
        <li><router-link to="/review" class="nav-link">리뷰</router-link></li>
      </ul>
    </nav>
  </header>
  <router-view></router-view>
</template>

<style scoped>
header {
  background-color: #8c93b2;
  padding: 10px 0;
  color: #fff;
}

nav {
  display: flex;
  justify-content: center;
}

.nav-list {
  display: flex;
  gap: 20px;
  list-style-type: none;
  padding: 0;
}

.nav-link {
  color: #fff;
  text-decoration: none;
  font-size: 18px;
}

.nav-link:hover {
  color: #00aaff;
  text-decoration: underline;
}
</style>
