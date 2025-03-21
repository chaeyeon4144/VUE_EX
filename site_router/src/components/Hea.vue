<script setup></script>
<template>
  <header class="header">
    <h1>쇼핑몰</h1>
    <nav>
      <router-link to="/">홈</router-link>
      <router-link to="/about">소개</router-link>
      <router-link to="/event">이벤트</router-link>
      <router-link to="/review">이용후기</router-link>
      <router-link to="/fq">F&Q</router-link>
      <router-link to="reservation">예약하기</router-link>
    </nav>
  </header>
</template>
<style scoped>
/* 전체 레이아웃 */
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #633bad;
  color: white;
  padding: 20px 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* 제목 스타일 */
.header h1 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

/* 네비게이션 바 */
nav {
  display: flex;
  gap: 20px;
  font-size: 18px;
  background-color: #ad5a5b;
}

/* 네비게이션 링크 */
nav a {
  color: white;
  text-decoration: none;
  padding: 8px 12px;
  border-radius: 5px;
  transition: background 0.3s;
}

nav a:hover {
  background: rgba(255, 255, 255, 0.2);
}

/* 활성화된 링크 스타일 */
.router-link-active {
  background: #ad5a5b;
  border-radius: 5px;
  padding: 8px 12px;
}
</style>
