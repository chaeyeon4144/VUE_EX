<script setup>
import { ref, computed, reactive } from "vue";
{
}
//예약 카운트 증가 및 두배 표시
const reservation = ref(0);
const Doublereservation = computed(() => reservation.value * 2);
const increaseReservation = () => {
  reservation.value++;
};
// 짐 보관 상태
const storage = reactive({
  isStored: false,
});
// 토글 버튼
const toggleStorage = () => {
  storage.isStored = !storage.isStored;
};
// 3. 제빙기 청소 옵션 선택 및 요금 계산
const selectedOption = ref("basic");
const totalPrice = computed(() => (selectedOption.value === "basic" ? 50000 : 100000));
//4. 고객 정보 관리 및 업데이트
const customer = reactive({
  name: "오도라",
  phone: "010- 4444 -1234",
});
const updateCustomer = () => {
  customer.name = "오해피";
  customer.phone = "010-1234-5555";
};
//<!-- 5.남은 예약 가능 수 계산 -->
//최대 예약 가능 수
const maxReservation = ref(10);
// 현재 예약수
const currentResrvation = ref(0);
// 남은 예약 가능 수
const remainResrvation = computed(() => maxReservation.value - currentResrvation.value);
const addReservation = () => {
  if (currentResrvation.value < maxReservation.value) {
    currentResrvation.value++;
  }
};
</script>
<template>
  <div class="wrap">
    <!-- 예약 카운트 증가 및 두배 표시 -->
    <div class="ex">
      <h2>예약 관리</h2>
      <p>예약 수: {{ reservation }}</p>
      <p>두배 예약 수 : {{ Doublereservation }}</p>
      <button @click="increaseReservation">예약 추가</button>
    </div>

    <hr />
    <div class="ex">
      <!--  2.짐 보관 상태-->
      <h2>짐 보관 상태</h2>
      <p>짐보관 상태 : {{ storage.isStored ? "보관중" : "미보관" }}</p>
      <button @click="toggleStorage">짐보관 토글</button>
    </div>

    <hr />
    <!-- 3. 제빙기 청소 옵션 선택 및 요금 계산 -->
    <div class="ex">
      <h2>제빙기 청소 예약</h2>
      <label>
        청소 옵션:
        <select v-model="selectedOption">
          <option value="basic">기본 청소 ($50,000원)</option>
          <option value="deep">심층 청소 ($100,000원)</option>
        </select>
      </label>
      <p>선택한 요금 : {{ totalPrice }}원</p>
    </div>
    <hr />

    <div class="ex">
      <!-- 4.고객 정보 관리  및 업데이트 -->
      <h2>고객 정보</h2>
      <p>고객 이름 : {{ customer.name }}</p>
      <p>전화 번호 : {{ customer.phone }}</p>
      <button @click="updateCustomer">정보 변경</button>
    </div>
    <hr />
    <div class="ex">
      <!-- 5.남은 예약 가능 수 계산 -->
      <h2>예약 가능 여부</h2>
      <p>최대 예약 가능 수: {{ maxReservation }}</p>
      <p>현재 예약 수 : {{ currentResrvation }}</p>
      <p>남은 예약 가능 수: {{ remainResrvation }}</p>
      <button @click="addReservation" :disabled="currentResrvation >= maxReservation">예약 추가</button>
    </div>
  </div>
</template>
<style scoped>
.wrap {
  display: flex;
  gap: 20px;
}
.ex {
  flex: 1;
}
button {
  margin: 5px;
  padding: 8px 12px;
  border: none;
  background-color: #42b983;
  color: white;
  cursor: pointer;
  border-radius: 5px;
}
button:disabled {
  background-color: gray;
  cursor: not-allowed;
}
</style>
