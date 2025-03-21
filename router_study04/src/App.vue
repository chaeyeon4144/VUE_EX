<script setup></script>

<template>
  <div>
    <nav>
      <router-link to="/">홈</router-link>| <router-link to="/about">소개</router-link>|
      <router-link to="/payment">결제하기</router-link>| <router-link to="/login">로그인</router-link>|
      <router-link to="/signup">회원가입</router-link>|
      <router-link to="/review">리뷰</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style scoped>
/* 전체 페이지 스타일 */
div {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: "Arial", sans-serif;
}

/* 네비게이션 바 스타일 */
nav {
  background-color: #333;
  padding: 15px;
  display: flex;
  justify-content: center;
  gap: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* 네비게이션 링크 스타일 */
nav a {
  color: white;
  text-decoration: none;
  font-weight: bold;
  padding: 8px 12px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

/* 현재 활성화된 라우트 강조 */
nav a.router-link-active {
  background-color: #ff6b6b;
  color: white;
}

/* 링크 hover 효과 */
nav a:hover {
  background-color: #555;
}

/* 반응형: 화면이 작을 때 네비게이션 정렬 */
@media (max-width: 600px) {
  nav {
    flex-direction: column;
    align-items: center;
  }
}
</style>
