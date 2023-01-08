export const state = () => ({
    //indicate wether the chosen language is english or not
    en: false
  })
  //getters 
  export const getters = {
    getEn: (state) => {
      return state.en
    }
  }
  //mutations
  export const mutations = {
    TOGGLE_EN: (state, newState) => {
      console.log("mutations")
      state.en=newState
    }
  }

  export const actions = {
    toggleEn({ commit },newState) {
        console.log("actions")
      commit('TOGGLE_EN',newState)
    }
  }
  