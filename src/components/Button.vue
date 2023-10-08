<template>
  <div>
    <button @click="onButtonClick" class="button">{{ nameButton }}</button>
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    nameButton: {
      type: String,
      required: true
    }
  },
  methods: {
    onButtonClick () {
      this.$emit('onButtonClick')
    }
  }
}
</script>

<style scoped>
.button {
  background: red;
  border: none;
  border-radius: 40px;
  padding: 12px;
  min-width: 350px;
  font-size: 16px;
  color: #fff;
  margin-top: 30px;
  cursor: pointer;
}

.button[disabled] {
  background: #e0e0e0;
  cursor: default;
}

@media (max-width: 767px) {
  .button {
    min-width: 260px;
    max-width: 260px;
  }
}
</style>
