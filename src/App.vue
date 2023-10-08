<template>
  <div id="app">
    <div class="app__card">
      <router-view/>
    </div>
  </div>
</template>

<style scope>
* {
  box-sizing: border-box;
}

html, body {
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  margin: 0;
  padding: 0;
  color: #333;
  box-sizing: border-box;
  background: #e9edf4;
  min-height: 100vh;
  width: 100%;
  position: relative;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  align-items: center;
  justify-content: center;
}

.app__card {
  position: absolute;
  top: 15%;
  background: #fff;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  max-width: 768px;
  min-width: 768px;
  padding: 40px;
  max-height: fit-content;
  min-height: 350px;
}
@media (max-width: 767px) {
  .app__card{
    max-width: 100%;
    min-width: 100%;
    padding: 20px;
    height: 100%;
    top: 50%;
    transform: translateY(-50%);

  }
}


#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
