<template>
   <div class="top-bar-container w-full">
    <div class="menu">
      <div class="menu-icon" @click="$emit('toggleSideBar')">
        <div class="h-screen"></div>
        <div></div>
        <div></div>
      </div>
      <p>Sistema</p>
    </div>
    <div class="user-identifier">
      <p>Olá, usuário!</p>
      <p>Cartorio</p>
    </div>
  </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.top-bar-container {
  background-color: #ffd60a;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.menu {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 36px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.menu-icon {
  display: flex;
  flex-direction: column;
  width: 60px;
  height: 40px;
  margin-right: 15px;
  justify-content: space-evenly;
  align-items: center;
}
.menu-icon > div {
  width: 100%;
  height: 7px;
  background-color: #333533ff;
}
.user-identifier {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
</style>