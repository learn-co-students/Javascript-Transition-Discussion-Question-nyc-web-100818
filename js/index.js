const zombieLincoln = document.getElementById('save_lincoln')

zombieLincoln.addEventListener('click', () => {
  saveLincoln()
})

function saveLincoln() {
  const interval = document.getElementById('interval').value
  let transformingDecimalThing = 1
  opacitizeZombie(transformingDecimalThing, interval)
}

function opacitizeZombie(transformingDecimalThing, interval) {
  var opZomb = setInterval(() => {
    if (transformingDecimalThing <= 0) {
      console.log('Hit 0')
      clearInterval(opZomb)
    } else {
      transformingDecimalThing -= 0.01
      document.getElementById('foreground').style.opacity = transformingDecimalThing
      console.log('!')
    }
  }, (interval/100))
}

// $('#save_lincoln').click(()=>saveLincoln(parseInt($('#interval').val())))
//
// function saveLincoln(interval) {
//   if(isNaN(interval)) {
//     interval = 10000
//   }
//   $('#foreground').fadeOut(interval);
// }
