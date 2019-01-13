<script>
import { mapState, mapMutations } from 'vuex'

export default {
  props: {
    source: { type: String, default: '' },
    name: { type: String, default: '' }
  },

  data () {
    return {
    }
  },

  computed: {
    ...mapState([
      'audioSrc', 'audioState'
    ])
  },

  methods: {
    ...mapMutations([
      'SET_AUDIO_SRC', 'SET_AUDIO_STATE'
    ]),

    clickHandler () {
      if (this.audioSrc !== this.source) {
        this.SET_AUDIO_STATE('stop')
        this.$nextTick(() => {
          this.SET_AUDIO_SRC(this.source)
          this.SET_AUDIO_STATE('play')
        })
      } else {
        const currentState = this.audioState === 'play' ? 'pause' : 'play'
        this.SET_AUDIO_STATE(currentState)
      }
    }
  }
}
</script>

<template>
  <div class="audio-player">
    <button @click="clickHandler">{{name}}</button>
  </div>
</template>

<style lang="scss" scoped>
  button {
    margin: 2px;
    width: 8em;
    height: 2em;
  }
</style>
