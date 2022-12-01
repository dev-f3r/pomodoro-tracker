// const alert = new Audio('alert.flac')
// let mode = 'study'


// // printer
// const print = (m, s, mod) => {
//   const clockD = document.getElementById('clock')
//   const modeD = document.getElementById('mode')

//   // toggle color
//   if (mod == 'study') {
//     clockD.setAttribute('class', 'red')
//   } else {
//     clockD.setAttribute('class', 'green')
//   }

//   // print countdown
//   clockD.innerHTML = `${('0' + m).slice(-2)}:${('0' + s).slice(-2)}`
//   modeD.innerHTML = mod
//   document.title = `${clockD.textContent} | ${mode}`
// }

// // countdown
// const countDown = () => {
//   let remainMinutes, remainSeconds = 0;
//   if (mode === 'study') {
//     remainMinutes = 25
//     // remainMinutes = 5
//   } else {
//     remainMinutes = 5
//     // remainMinutes = 2
//   }

//   const timerUpdate = setInterval(() => {
//     if (remainSeconds == 0) {
//       // reset seconds
//       remainSeconds = 59
//       // subtract minutes
//       remainMinutes--
//     }
//     remainSeconds--

//     // call printer each second
//     print(remainMinutes, remainSeconds, mode)


//     if (remainMinutes <= 0 && remainSeconds <= 0) {
//       clearInterval(timerUpdate)
//       mode = mode == 'study'
//         ? 'rest'
//         : 'study';
//       alert.play()
//       countDown()
//     }
//   }, 1000)
// }


// document.getElementById('btn').addEventListener('click', () => {
//   countDown()
// })
// // document.getElementById('btn').addEventListener('click', () => {
// //   countDown('clock', 'mode')
// // })


////////// GLOBAL //////////
// sounds
const ALERT_SOUND = new Audio('alert.flac')
const BTN_SOUND = new Audio('btn_sound.wav')
// work section
const W_PLUS_BTN = document.getElementById('w-plus-btn')
const W_MINUS_BTN = document.getElementById('w-minus-btn')
const W_MINS = document.getElementById('w-minutes')
// break section
const B_PLUS_BTN = document.getElementById('b-plus-btn')
const B_MINUS_BTN = document.getElementById('b-minus-btn')
const B_MINS = document.getElementById('b-seconds')
// watch section
const WA_MINUTES = document.getElementById('minutes')
const WA_SECONDS = document.getElementById('seconds')
const WA_START_BTN = document.getElementById('start-btn')
const WA_PAUSE_BTN = document.getElementById('pause-btn')
const WA_RESET_BTN = document.getElementById('reset-btn')

// all buttons use BTN_SOUND
const BUTTONS = document.getElementsByTagName('button')
for (const button of BUTTONS) {
  button.addEventListener('click', () => {
    BTN_SOUND.play()
  })
}


////////// SIDE PANEL //////////

// change minutes
W_PLUS_BTN.addEventListener('click', () => {
  if (W_MINS.innerHTML < 70) {
    W_MINS.innerHTML <= 10
      ? W_MINS.innerHTML = ("0" + (Number(W_MINS.innerHTML) + 1)).slice(-2)
      : W_MINS.innerHTML = Number(W_MINS.innerHTML) + 1
  }
  WA_MINUTES.innerHTML = W_MINS.innerHTML
})

W_MINUS_BTN.addEventListener('click', () => {
  BTN_SOUND.play()
  // min-max
  if (W_MINS.innerHTML > 5) {
    W_MINS.innerHTML <= 10
      ? W_MINS.innerHTML = ("0" + (Number(W_MINS.innerHTML) - 1)).slice(-2)
      : W_MINS.innerHTML = Number(W_MINS.innerHTML) - 1
  }
  WA_MINUTES.innerHTML = W_MINS.innerHTML
})

// break section

// change minutes
B_PLUS_BTN.addEventListener('click', () => {
  BTN_SOUND.play()
  if (B_MINS.innerHTML < 30) {
    B_MINS.innerHTML <= 10
      ? B_MINS.innerHTML = ("0" + (Number(B_MINS.innerHTML) + 1)).slice(-2)
      : B_MINS.innerHTML = Number(B_MINS.innerHTML) + 1
  }
})

B_MINUS_BTN.addEventListener('click', () => {
  BTN_SOUND.play()
  if (B_MINS.innerHTML > 2) {
    B_MINS.innerHTML <= 10
      ? B_MINS.innerHTML = ("0" + (Number(B_MINS.innerHTML) - 1)).slice(-2)
      : B_MINS.innerHTML = Number(B_MINS.innerHTML) - 1
  }
})




/* ////////// WATCH SECTION ////////// */
function getTime() {
  return {
    workTime: Number(W_MINS.innerHTML),
    breakTime: Number(B_MINS.innerHTML)
  }
}

function start() {
  let seconds = 59
  const time = getTime()

  const timerUpdate = () => {
    let mode = 'workTime'
    // console.log(mode)
    // console.log(time)
    // change display
    WA_MINUTES.innerHTML = ('0' + time[mode]).slice(-2)
    WA_SECONDS.innerHTML = ('0' + seconds).slice(-2)

    // start
    seconds = Number(seconds) - 1

    // check seconds
    if (seconds === 0) {
      WA_SECONDS.innerHTML = '00'
      if (mode == 'workTime') time.workTime--
      if (mode == 'breakTime') time.breakTime--
      seconds = 59
      if (time.workTime === 0) {
        mode = 'breakTime'
        console.log(0)
        console.log(mode)
        // time.workTime = getTime().workTime
      }
    }
    // check minutes
  }

  setInterval(timerUpdate, 10)
  // console.log('start')
}

WA_START_BTN.addEventListener('click', () => {
  start()
})