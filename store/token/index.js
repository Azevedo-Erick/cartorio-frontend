export default{
    state:{
        accessToken: null,
    },
    mutations:{
        setToken:(state,token)=>{
            this.state.accessToken=token;
        }
    }
}