<script setup></script>
<template>
  <header>
    <nav>
      <router-link to="/">홈</router-link>
      <router-link to="/about">소개</router-link>
      <router-link to="/reservation">예약하기</router-link>
    </nav>
  </header>
  <router-view></router-view>
</template>
<style scoped></style>
