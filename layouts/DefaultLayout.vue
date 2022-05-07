<template>
<div class="grid main-wrapper  ">

      <TopBar @toggleSideBar="toggleSideBar()"/>
    <div id="layoutGrid" class="grid main" >
          <SideBar/>
        <div class="h-1/2 overflow-y-auto p-6">
        <Nuxt />
        </div>
    </div>
</div>
</template>

<script>
import SideBar from '~/components/SideBar.vue'
import TopBar from '~/components/TopBar.vue'
export default {
  name: 'DefaultLayout',
  components: { SideBar, TopBar },
    data() {
        return {
          showSideBar:true
        }
    },
    methods: {
      toggleSideBar(){
        const grid = document.getElementById("layoutGrid");
        if(this.showSideBar){
          grid.children[0].style.display="none";
          grid.style.gridTemplateColumns = "1fr"
          
        }else{
          grid.children[0].style.display="flex";
          grid.style.gridTemplateColumns = "2fr 8fr"
        }
        this.showSideBar=!this.showSideBar;
      }
    },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&family=Nunito&family=Open+Sans&family=Roboto&family=Zen+Kurenaido&display=swap');

.main{
 
  grid-template-columns: 2fr 8fr;
}
.main-wrapper{
   grid-auto-rows: 1fr 11fr;
}
</style>
