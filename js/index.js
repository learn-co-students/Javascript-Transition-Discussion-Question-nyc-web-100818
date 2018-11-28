const saveButton = document.getElementById('save_lincoln')
const interval = document.getElementById('interval')
const foreground = document.getElementById('foreground')
const transition = 100
let opacity = parseFloat(foreground.style.opacity) || 1

saveButton.addEventListener('click', () => {
  let intervalValue = interval.value
  if (isNaN(intervalValue) || intervalValue <= 0) {
    intervalValue = 10000
  }
  let counter = setInterval(fadeOut, intervalValue / transition)

  function fadeOut() {
    if (opacity > 0) {
      opacity -= (1 / transition)
    } else {
      clearInterval(counter)
    }
    foreground.style.opacity = opacity
  }
})