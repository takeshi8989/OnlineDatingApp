import { createStore } from 'vuex'
import store from '.';

export default createStore({
  state: {
    users: [],
    messages: []
  },
  getters: {
  },
  mutations: {
    addUser(state){
        fetch('https://randomuser.me/api').then(res => res.json()).then(data => {
            state.users.push({userObj: data, id: data.results[0].login.uuid});
        })
    },
    addMessageList(state, user){
      state.messages.push({id: user.id, msg: [], user: user.userObj});
    },
    addMessage(state, payload){
      state.messages.find(userMsg => userMsg.id == payload.userId).msg.push(payload.msg);
    },
    sortList(state, id) {
      let index = state.messages.indexOf(state.messages.find(userMsg => userMsg.id == id));
      if(index >= 1){
        for(let i = index - 1; i >= 0; i--){
          let target = state.messages[i];
          let recent = state.messages[i + 1];
          state.messages[i] = recent;
          state.messages[i + 1] = target;
        }
      }
    }
  },
  actions: {
  },
  modules: {
  }
})

