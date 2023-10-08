<template>
  <div class="header">
    <div class="header__back" @click="goBack">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 477.175 477.175">
        <path
          d="M360.731 229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1 0s-5.3 13.8 0 19.1l215.5 215.5-215.5 215.5c-5.3 5.3-5.3 13.8 0 19.1 2.6 2.6 6.1 4 9.5 4 3.4 0 6.9-1.3 9.5-4l225.1-225.1c5.3-5.2 5.3-13.8.1-19z"/>
      </svg>
    </div>
    <h1 class="header__title">{{ title }}</h1>
    <div class="progress-bar">
      <div class="progress" :style="{ width: widthValue + '%' }"></div>
      <div v-for="index in 5"  :key="index" :class="'step-' + index" class="step"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      required: true
    },
    widthValue: {
      required: true
    }
  },
  methods: {
    goBack () {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.header {
  text-align: center;
  width: 100%;
}

.header__back {
  width: 30px;
  transform: rotate(180deg);
  fill: red;
  height: 30px;
  padding: 5px;
  float: left;
}

.header__title {
  line-height: 30px;
}

.progress-bar {
  width: 100%;
  background-color: #ccc;
  border-radius: 4px;
  height: 10px;
  margin: 20px 0;
  position: relative;
}

.progress-bar .progress {
  background-color: #4caf50;
  height: 100%;
  width: 20%;
  border-radius: 4px;
  position: relative;
  z-index: 1;
}
.step {
  width: 20%;
  height: 100%;
  background-color: #ccc;
  position: absolute;
  top: 0;
  text-align: center;
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  line-height: 1.6;
}

.step-0 {
  left: 0;
}

.step-1 {
  left: 20%;
}

.step-2 {
  left: 40%;
}

.step-3 {
  left: 60%;
}

.step-4 {
  left: 80%;
}
</style>
