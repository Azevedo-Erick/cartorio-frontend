<template>
    <div class="top-bar-container w-full">
        <div class="menu">
            <div @click="toggleSideBar()" id="menuTopBar">
                <transition name="rotate">
                    <div class="cross" v-if="this.showSideBar">
                         <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            version="1.1"
                            id="Layer_1"
                            x="0px"
                            y="0px"
                            viewBox="0 0 512 512"
                            style="enable-background: new 0 0 512 512"
                            xml:space="preserve"
                        >
                            <g>
                                <g>
                                    <polygon
                                        points="512,59.076 452.922,0 256,196.922 59.076,0 0,59.076 196.922,256 0,452.922 59.076,512 256,315.076 452.922,512     512,452.922 315.076,256   "
                                    />
                                </g>
                            </g>
                        </svg>
                    </div>
                    <div class="three-lines" v-else>
                        <svg viewBox="0 0 100 80" width="40" height="40">
                            <rect width="100" height="20"></rect>
                            <rect y="30" width="100" height="20"></rect>
                            <rect y="60" width="100" height="20"></rect>
                        </svg>
                       
                    </div>
                </transition>
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
    props: {
        showSideBar: Boolean,
    },
    methods: {
        toggleSideBar() {
            this.$emit('toggleSideBar')
        },
    },
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
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.three-lines,
.cross {
    display: flex;
    flex-direction: column;
    width: 60px;
    height: 40px;
    cursor: pointer;
    margin-right: 15px;
    justify-content: space-evenly;
    align-items: center;
}
svg {
    fill: #333533;
}
.three-lines > div,
.cross > div {
    width: 100%;
    height: 7px;
    background-color: #333533ff;
}
.user-identifier {
    font-family:'Raleway', 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
        sans-serif;
        font-weight: 300;
}
.rotate-enter-active, .rotate-leave-active {
  transition: opacity .5s;
}
.rotate-enter, .rotate-leave-to /* .fade-leave-active em versões anteriores a 2.1.8 */ {
  opacity: 0;
}
</style>
