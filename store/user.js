import { defineStore } from 'pinia';
export const useUserStore = defineStore({

  id: 'userStore',
  state: () => ({ 
    user:{
      name:"batuhan",
      surname:"boran",
      phone:"5554443322",
      adress:{
        city:"ankara",
        subcity:"kızılay",
        district:"merkez mah",
        street:"orta sokak",
        buildno:"4a",
        doorno:"21",
        details:"avm yanında"  
      }
    }
  }),
  getters:{
    getUser(state){
      return state.user
    }
  },

  actions: {
    updateUser(newVal){
      const newValTemp = { ...newVal };
      this.user = newValTemp

    }
  },
});
