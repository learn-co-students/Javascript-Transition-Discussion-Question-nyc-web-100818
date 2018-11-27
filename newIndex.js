const foregroundImg = document.getElementById('foreground');
const saveButton = document.getElementById('save_lincoln');
const intervalField = document.getElementById('interval');
let intervalFn
let lastUpdate

function saveLincolnAgain() {
  console.dir(intervalField);
  foregroundImg.style.opacity = 1
  lastUpdate = Date.now()
  intervalFn = setInterval(fade, 10);
}

function fade() {
  let currentTime = Date.now()
  let dTime = currentTime - lastUpdate
  //debugger;
  if (dTime != 0) {
    let amount = (dTime / parseInt(intervalField.value))
    console.log(amount)
    foregroundImg.style.opacity -= 1 * amount
    lastUpdate = Date.now()
  }
  if (foregroundImg.style.opacity <= 0) {
    clearInterval(intervalFn)
  }
}
saveButton.addEventListener('click', saveLincolnAgain)