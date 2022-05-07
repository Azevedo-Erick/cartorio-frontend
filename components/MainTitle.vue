<template>
  <h1 class="title">{{ title }}</h1>
</template>

<script>
export default {
  name:"MainTitle",
    props:{
        title:String
    }
}
</script>

<style scoped>
.title {
  font-family:  'Roboto',"Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 36px;
  color: #3f3f3f;
}
</style>