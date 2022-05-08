<template>
<div class="flex main h-screen flex-col  ">

    <TopBar class="top-bar" :show-side-bar="showSideBar" @toggleSideBar="toggleSideBar()"/>
          <div id="content-container" class="flex flex-row">

          <SideBar class="side-bar"/>
    

            <Nuxt class="nuxt overflow-y-auto w-full nuxt p-6" />
       
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
    mounted(){
      this.toggleSideBar()
    }
    ,
    methods: {
      toggleSideBar(){
        const grid = document.getElementById("content-container");
        if(this.showSideBar){
          grid.children[0].style.display="none";
        }else{
          grid.children[0].style.display="flex";
        }
        this.showSideBar=!this.showSideBar;
      }
    },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&family=Nunito&family=Open+Sans&family=Raleway:wght@200;300;500&family=Roboto&family=Zen+Kurenaido&display=swap');

.nuxt{
  max-height: 90vh;
  height: 89vh;
}
</style>
