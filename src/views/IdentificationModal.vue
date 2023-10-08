<template>
  <div class="identification-modal">
    <div class="identification-modal__overlay" @click="onCloseModal"></div>
    <div class="identification-modal__dialog">
      <h2 class="identification-modal__title">Подтверждение удаленной идентификации</h2>
      <span class="identification-modal__text">Мы отправили SMS с кодом на ваш номер телефона</span>
      <form action="" class="identification-modal__form" @submit.prevent="onSubmitForm">
        <div class="identification-modal__code">
          <label for="code">Код</label>
          <input v-model="code" id="code" name="code" v-mask="'# # # #'" required placeholder="Введите код из смс"/>
        </div>
        <Button type="submit" :nameButton="this.nameButton"/>
      </form>
    </div>
  </div>
</template>
<script>
import Header from '@/components/Header'
import Button from '@/components/Button'
import { postCode } from '@/api/api'

export default {
  name: 'IdentificationModal',
  components: {
    Header,
    Button
  },
  data: function () {
    return {
      nameButton: 'Продолжить',
      code: ''
    }
  },
  computed: {
    cleanCode() {
      return this.code.replace(/\s/g, '')
    }
  },
  methods: {
    async onSubmitForm () {
      if (this.cleanCode.length < 4) {
        alert('Введите корректный код')
      }
      const success = await postCode(this.cleanCode)
      if (!success) {
        alert('Некорректный код')
        return
      }

      this.$router.push({ name: 'Conditions' })
    },
    onCloseModal () {
      this.$emit('onCloseModal')
    }
  }
}
</script>
<style scoped>
.identification-modal__overlay {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(3, 20, 20, 0.7);
  z-index: 100;
  visibility: visible;
  opacity: 1;
  transition: opacity 0.2s;
}

.identification-modal__dialog {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 420px;
  max-height: 100%;
  transform: translate(-50%, -50%);
  padding: 24px 24px 16px 24px;
  background-color: #fff;
  border-radius: 6px;
  z-index: 101;
  visibility: visible;
  opacity: 1;
  transition: opacity 0.2s;
  overflow: auto;
}

.identification-modal__title {
  line-height: 30px;
}

.identification-modal__text {
  color: #666;
}

.identification-modal__code {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  margin-top: 40px;
}

.identification-modal__code input {
  height: 40px;
  border-radius: 4px;
  border: 1px solid #d5d5d5;
  padding: 4px 10px;
  width: 100%;
}

@media (max-width: 767px) {
  .identification-modal__dialog {
    width: 300px;
    padding: 16px;
  }

  .identification-modal__title {
    font-size: 24px;
  }
}
</style>
