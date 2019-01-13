import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const SET_AUDIO_SRC = 'SET_AUDIO_SRC'
const SET_AUDIO_STATE = 'SET_AUDIO_STATE'

export default new Vuex.Store({
  state: {
    audioState: 'stop',
    audioSrc: ''
  },

  mutations: {
    [SET_AUDIO_STATE] (state, audioState) {
      this.state.audioState = audioState
    },
    [SET_AUDIO_SRC] (state, src) {
      this.state.audioSrc = src
    }
  }
})
