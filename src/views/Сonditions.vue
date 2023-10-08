<template>
  <div class="conditions">
    <Header :title="this.title" :widthValue="parentWidth"/>
    <div class="conditions__table">
      <div class="conditions__str">
        <div class="conditions__title">Сумма займа:</div>
        <div class="conditions__price">23 000 ₽</div>
      </div>
      <div class="conditions__str">
        <div class="conditions__title">Дата возврата:</div>
        <div class="conditions__price">25 500 ₽</div>
      </div>
      <div class="conditions__str">
        <div class="conditions__title">Плата за займа:</div>
        <div class="conditions__price">300 ₽</div>
      </div>
      <div class="conditions__str">
        <div class="conditions__title">Ставка:</div>
        <div class="conditions__price">0.9%</div>
      </div>
      <div class="conditions__str">
        <div class="conditions__title">ПСК:</div>
        <div class="conditions__price">30.04.2020</div>
      </div>
    </div>
    <a class="conditions__link" href="#">Проект сертификата дистанционный "Помошник Ц"</a>
    <a class="conditions__link" href="#">Памятка использования "Помошника Ц"</a>
    <a class="conditions__link" href="#">Согласие на подключение рекуррентного платежа</a>
    <Button :nameButton="this.nameButton" @onButtonClick="onButtonClick"/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Button from '@/components/Button'
import { postApprove } from '@/api/api'

export default {
  name: 'Conditions',
  components: {
    Header,
    Button
  },
  data: function () {
    return {
      title: 'Условия',
      nameButton: 'Подписать договор',
      parentWidth: 100
    }
  },
  methods: {
    async onButtonClick () {
      const success = await postApprove()
      if (!success) {
        return
      }
      this.$router.push({ name: 'Result' })
    }
  }
}
</script>

<style scoped>
.conditions__table {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  margin-bottom: 30px;
}

.conditions__str {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0;
  border-bottom: 1px solid #d5d5d5;
}

.conditions__link {
  text-align: left;
  display: block;
}
</style>
