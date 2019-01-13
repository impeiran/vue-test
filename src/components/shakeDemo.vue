<script>
import Shake from '@/utils/Shake.js'
// import eshake from 'eshake'

export default {
  data () {
    return {
      Shake: undefined,
      started: false,

      showResult: false,

      loading: false
    }
  },
  computed: {
    btnText () {
      return this.started ? '请摇动手机' : '点击按钮启动'
    }
  },
  methods: {
    goShaking () {
      if (this.started) { return }
      if (this.Shake) {
        this.started = true
        this.Shake.go(() => {
          this.loading = true
          setTimeout(() => {
            this.loading = false
            this.AfterShaking()
          }, 2000)
        })
      }
    },
    AfterShaking () {
      this.showResult = true
    },
    closeResult () {
      this.started = false
      this.showResult = false
    }
  },
  mounted () {
    this.Shake = new Shake()
  }
}
</script>

<template>
  <div class="main">
    <h1 class="title">摇一摇</h1>
    <button class="btn" @click="goShaking">{{btnText}}</button>
    <transition name="op">
      <div class="result" v-show="showResult">
        <div class="card">
          <h1>恭喜！</h1>
          <h1>获得xxx体验券！</h1>
        </div>
        <span class="close" @click="closeResult">关闭</span>
      </div>
    </transition>
    <div class="loading" v-show="loading">
      <span>加载中</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .main{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(top, #128fdc, rgb(87, 212, 155));
    h1.title{
      margin: 2em 0 4em;
      color: #fff;
      font-size: 4em;
      text-align: center;
      transform: rotate3d(0deg);
      animation: shakeTwoSides 2s infinite linear;
    }
    .btn{
      display: block;
      margin: 0 auto;
      height: 2.6em;
      width: 10em;
      color: #fff;
      font-size: 1.6em;
      font-weight: bold;
      border-radius: 16px;
      border: 4px #fff solid;
      outline: none;
      background: #15c0d2;
    }

    .result{
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: rgba(0, 0, 0, .4);
      .card{
        position: absolute;
        top: 80px;
        left: 40px;
        bottom: 110px;
        right: 40px;
        background: #ede0c8;
        box-shadow: 0 0 80px gold;
        h1{
          text-align: center;
          color: #fff;
        }
      }
      .close{
        position: absolute;
        left: 50%;
        width: 80px;
        height: 40px;
        line-height: 40px;
        transform: translateX(-50%);
        bottom: 140px;
        color: #fff;
        text-align: center;
        font-size: 32px;
      }
    }

    .loading{
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, .89);
      color: #fff;
      font-size: 4em;
      z-index: 100;
      span{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }

  .op-enter-active, .op-leave-active{
    transition: opacity .6s;
  }

  .op-enter, .op-leave-to{
    opacity: 0;
  }

  @keyframes shakeTwoSides {
    0%{
      transform: rotate(0deg);
    }
    25%{
      transform: rotate(15deg);
    }
    50%{
      transform: rotate(0deg);
    }
    75%{
      transform: rotate(-15deg);
    }
    100%{
      transform: rotate(0deg)
    }
  }
</style>
