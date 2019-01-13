<script>
import audioPlayer from '../components/audioPlayer'
import { mapState, mapMutations } from 'vuex'
export default {
  components: { audioPlayer },

  data () {
    return {
      arr: [
        {
          src: 'http://dl.stream.qqmusic.qq.com/C400001QvqYA3CQJBG.m4a?guid=7941496236&vkey=56FF5E9CBCD234B682772A660ED9CD088D10A619E57D781AE02A5A808543E855DDE91B7382BF922A1BDAD17041F04B2A5A825693CE6595FC&uin=0&fromtag=38',
          name: 'wonderland'
        },
        {
          src: 'http://dl.stream.qqmusic.qq.com/C4000012Ronu3fHfnZ.m4a?guid=7941496236&vkey=CF5312BEBC0CA562522841D503F57029B23304EB78FB1D91B06DADAC4C46FF92B85BB5F068E808612DD06D48DEC3B9E4B34D6924FC5C559F&uin=0&fromtag=38',
          name: '大哥'
        },
        {
          src: 'http://dl.stream.qqmusic.qq.com/C400004gMNTu0juArP.m4a?guid=7941496236&vkey=80891C99C6C920ECA2182B183CE9D09B3C477E987818B9C4F5A12AF96F7415D3C531F4D65959D3478A7CB5E4A41B157B2826C6CE424134C7&uin=0&fromtag=38',
          name: '街灯晚餐'
        },
        {
          src: 'http://dl.stream.qqmusic.qq.com/C400002FNw3E1OLiYI.m4a?guid=7941496236&vkey=46C6FE389B4CF3F0108C2B48D4ABA8B16291CA56AF1C21FEE2EBAD39ACBF624B438D5FFD8AFAAD71D659526926B46D256575F3D16E12D66F&uin=0&fromtag=38',
          name: '如水'
        }
      ]
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

    musicInBrowserHandler () {
      this.$nextTick(() => {
        console.log('object')
        this.$refs.audioEl.load()
      })
      document.body.removeEventListener('touchstart', this.musicInBrowserHandler)
    }
  },

  watch: {
    audioState (newState) {
      if (newState === 'play') {
        this.$nextTick(() => {
          this.$refs.audioEl.play()
        })
      } else if (newState === 'pause') {
        this.$nextTick(() => {
          this.$refs.audioEl.pause()
        })
      }
    }
  },

  mounted () {
    document.body.addEventListener('touchstart', this.musicInBrowserHandler)
  }
}
</script>

<template>
  <div class="audio-test-page">
    <h1>音频测试页面</h1>
    <audio-player v-for="(item, key) in arr" :key="key" :source="item.src" :name="item.name"></audio-player>
    <audio :src="audioSrc" ref="audioEl"></audio>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  text-align: center;
}
</style>
