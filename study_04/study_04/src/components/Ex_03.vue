<script setup>
import { ref } from "vue";

// 탭목록 저장
const tabs = ref(["회사 소개", "서비스", "연락처", "예약 방법", "예약하기", "상담문의 내역"]);
const activeTab = ref(0);

// 예약하기 관련 데이터
const reservations = ref([]);
const newReservation = ref({
  service: "",
  date: "",
  contact: "",
});

// 예약 제출 함수
const submitReservation = () => {
  if (newReservation.value.service && newReservation.value.date && newReservation.value.contact) {
    reservations.value.push({ ...newReservation.value });
    newReservation.value = { service: "", date: "", contact: "" };
    alert("예약이 완료되었습니다.");
  }
};

// 상담 문의 관련 데이터
const inquiry = ref({
  name: "",
  email: "",
  message: "",
});
const inquiries = ref([]);

// 상담 문의 제출 기능
const submitInquiry = () => {
  if (inquiry.value.name && inquiry.value.email && inquiry.value.message) {
    inquiries.value.push({ ...inquiry.value });
    inquiry.value = { name: "", email: "", message: "" };
    alert("문의가 접수되었습니다.");
    toggleInquiry();
  }
};

// 상담문의 토글 버튼
const InquiryVisible = ref(false);
const toggleInquiry = () => {
  InquiryVisible.value = !InquiryVisible.value;
};
</script>

<template>
  <div class="company-container">
    <!-- 탭 버튼 -->
    <div class="tabs">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        @click="activeTab = index"
        :class="{ active: activeTab === index }">
        {{ tab }}
      </button>
    </div>

    <!-- 탭 내용 -->
    <div class="tab-content">
      <section v-if="activeTab === 0">
        <h2>회사 소개</h2>
        <p>제빙기 청소 및 짐 보관 서비스를 전문적으로 제공하는 회사입니다.</p>
      </section>

      <section v-if="activeTab === 1">
        <h2>서비스</h2>
        <ul>
          <li>✔ 제빙기 청소 서비스</li>
          <li>✔ 단기 및 장기 짐 보관</li>
        </ul>
      </section>

      <section v-if="activeTab === 2">
        <h2>연락처</h2>
        <p>📧 contact@company.com</p>
        <p>📞 010-1234-5678</p>
      </section>

      <section v-if="activeTab === 3">
        <h2>예약 방법</h2>
        <p>1. 원하는 서비스를 선택하세요.</p>
        <p>2. 예약 날짜 및 시간을 설정하세요.</p>
        <p>3. 연락처를 입력하고 예약을 완료하세요.</p>
      </section>

      <section v-if="activeTab === 4">
        <h2>예약하기</h2>
        <form @submit.prevent="submitReservation">
          <label>
            서비스 선택
            <select v-model="newReservation.service" required>
              <option value="대용량 제빙기 청소">대용량 제빙기 청소</option>
              <option value="가정용 제빙기 청소">가정용 제빙기 청소</option>
            </select>
          </label>
          <label>
            날짜 선택
            <input v-model="newReservation.date" type="date" required />
          </label>
          <label>
            연락처
            <input v-model="newReservation.contact" type="tel" required placeholder="010-1234-5678" />
          </label>
          <button type="submit" class="primary-btn">예약하기</button>
        </form>

        <h3>예약 내역</h3>
        <ul v-if="reservations.length">
          <li v-for="(res, index) in reservations" :key="index">
            <strong>{{ res.service }}</strong> - <strong>{{ res.date }}</strong> <br />
            (😍{{ res.contact }})
          </li>
        </ul>
        <p v-else>예약 내역이 없습니다.</p>
      </section>

      <section v-if="activeTab === 5">
        <h2>상담문의 내역</h2>
        <ul v-if="inquiries.length">
          <li v-for="(inq, index) in inquiries" :key="index">
            <strong>{{ inq.name }}</strong> - <strong>{{ inq.email }}</strong> - <strong>{{ inq.message }}</strong>
          </li>
        </ul>
       
        <!-- 상담 문의 폼 -->
        <div v-if="InquiryVisible" class="inquiry-form">
          <h3>상담 문의</h3>
          <form @submit.prevent="submitInquiry">
            <label>이름</label>
            <input v-model="inquiry.name" type="text" required placeholder="홍길동" />
            <label>이메일</label>
            <input v-model="inquiry.email" type="email" required placeholder="example@example.com" />
            <label>문의 내용</label>
            <textarea v-model="inquiry.message" required></textarea>
            <button type="submit" class="primary-btn">문의하기</button>
          </form>
        </div>
      </section>
       <!-- 상담문의 버튼 -->
       <button class="primary-btn fixed-btn" @click="toggleInquiry">상담 문의</button>
        <!-- 상담 문의 폼 (입력창) -->
        <div class="inquiry-modal" v-if="InquiryVisible" @click.self="toggleInquiry">
          <div class="modal-content">
            <h3>상담 문의</h3>
            <input type="text" required placeholder="이름" v-model="inquiry.name" />
            <br />
            <input type="email" required placeholder="이메일" v-model="inquiry.email" />
            <br />
            <textarea placeholder="문의 내용을 입력하세요" required v-model="inquiry.message"></textarea>
            <button class="primary-btn" @click="submitInquiry">보내기</button>
            <button class="secondary-btn" @click="toggleInquiry">닫기</button>
          </div>
        </div>

    </div>
  </div>
</template>

<style scoped>
.company-container {
  margin-bottom: 100px;
}
input,
select,
textarea {
  width: 100%;
  padding: 10px;
  margin: 8px 0;
  border: 1px solid var(--primary-color);
  border-radius: 5px;
  font-size: 16px;
  box-shadow: var(--shadow);
  transition: all 0.3s ease;
}
input:focus,
select:focus,
textarea:focus {
  border-color: var(--secondary-color);
  outline: none;
  box-shadow: 0 0 8px rgba(66, 185, 131, 0.1);
}
textarea {
  height: 100px;
  resize: none;
}
label {
  display: block;
  font-size: 14px;
  font-weight: bold;
  margin-top: 10px;
  color: var(--text-color);
}

.tabs {
  display: flex;
  justify-content: space-around;
  background: var(--primary-color);
  padding: 10px;
}

.tabs button {
  flex: 1;
  padding: 12px;
  background: var(--primary-color);
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s, color 0.3s;
}

.tabs button.active {
  background-color: var(--secondary-color);
}
.primary-btn {
  display: block;
  width: 100%;
  padding: 12px;
  margin-top: 20px;
  background: var(--accent-color);
  color: var(--white);
  border: none;
  border-radius: var(--border-radius);
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;
}
.primary-btn:hover {
  background: var(--secondary-color);
}
.secondary-btn {
  padding: 10px;
  background: var(--white);
  border: 1px solid var(--accent-color);
  color: var(--accent-color);
  border-radius: var(--border-radius);
  cursor: pointer;
  margin-top: 5px;
}
.fixed-btn {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: auto;
  padding: 12px 20px;
  background: var(--primary-color);
}
.inquiry-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-content {
  background: var(--white);
  padding: var(--padding);
  box-shadow: var(--shadow);
  border-radius: var(--border-radius);
  width: 90%;
  max-width: 400px;
}

.inquiry-form {
  margin-top: 20px;
  padding: 15px;
  background: #f9f9f9;
  border-radius: 5px;
}
</style>
