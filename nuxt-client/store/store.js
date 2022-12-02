export const state = ()=>({

    user: [],
    id:0,
})

export const mutations = { 
    updateUser(state, obj){
        
        obj.id = state.id++
        state.user.push(obj)
        console.log(state.user)
    }

}