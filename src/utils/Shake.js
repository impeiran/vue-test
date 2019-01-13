const THRESHOLD = 13
const TIME_LIMIT = 800

let timer

class Shake {
  /**
   *Creates an instance of Shake.
   * @param {Object} option
   * @memberof Shake
   */
  constructor (option) {
    if (!window.DeviceMotionEvent) {
      return null
    } else {
      this._init(option)
      return this
    }
  }

  _init (option) {
    let defaultOption = {
      threshold: THRESHOLD,
      timeLimit: TIME_LIMIT
    }

    this.option = Object.assign({}, defaultOption, option)
  }

  go (callback) {
    this.callback = callback
    this.handler = this._EventHandler()
    window.addEventListener('devicemotion', this.handler, true)
  }

  _EventHandler () {
    let _this = this

    let currentTime = 0
    let lastTime = 0

    let lastX = null
    let lastY = null
    let lastZ = null

    // let counter = 0

    return function (e) {
      currentTime = +new Date()
      if (currentTime - lastTime > _this.option.timeLimit) {
        lastTime = currentTime

        let acc = e.accelerationIncludingGravity

        if (lastX === null || lastY === null || lastZ === null) {
          lastX = acc.x
          lastY = acc.y
          lastZ = acc.z
          return
        }

        let diff = Math.abs(acc.x + acc.y + acc.z - lastX - lastY - lastZ)

        if (diff > _this.option.threshold && !this.succeed) {
          _this.succeed = true
          _this._AfterSucceed()
        }

        lastX = acc.x
        lastY = acc.y
        lastZ = acc.z
      }
    }
  }
  _AfterSucceed () {
    clearTimeout(timer)
    timer = setTimeout(() => {
      window.removeEventListener('devicemotion', this.handler, true)
      this.handler = null
      alert(timer)
      if (typeof this.callback === 'function') {
        this.callback()
      }
    }, 400)
  }
}

export default Shake
