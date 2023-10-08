<template>
  <div class="app-loader">
    <svg class="app-loader__icon" viewbox="0 0 100 100">
      <path fill="none"
            stroke-linecap="round"
            stroke-width="5"
            stroke="#dfe8ed"
            stroke-dasharray="251.2,0"
            d="M50 10 a 40 40 0 0 1 0 80 a 40 40 0 0 1 0 -80"
      />
      <path fill="none"
            stroke-linecap="round"
            stroke-width="8"
            stroke="red"
            stroke-dasharray="251.2,0"
            d="M50 10 a 40 40 0 0 1 0 80 a 40 40 0 0 1 0 -80"
      >
        <animate attributeName="stroke-dasharray" from="0,251.2" to="251.2,0" dur="5s"/>
      </path>
      <text id="count" x="50" y="50" text-anchor="middle" dy="7" font-size="20" font-family="arial">
        100%
      </text>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'Loader',
  mounted () {
    const numb = document.getElementById('count')
    let counter = 0
    let interval = setInterval(() => {
      if (counter === 100) {
        clearInterval(interval)
        interval = null
        this.$emit('completed')
      } else {
        counter += 1
        numb.textContent = counter + '%'
      }
    }, 50)
  }
}
</script>

<style scoped>
.app-loader__icon {
  width: 100px;
}
</style>
