// $('#save_lincoln').click(()=>saveLincoln(parseInt($('#interval').val())))

// function saveLincoln(interval) {
//   if(isNaN(interval)) {
//     interval = 10000
//   }
//   $('#foreground').fadeOut(interval);
// }

document.addEventListener('click', function(e) {
  if (e.target.id === 'save_lincoln') {
    const interval = document.getElementById('interval')
    let userInput = interval.value
    var x = 1
    var timer = setInterval(function() {
      const zombie = document.getElementById('foreground')
      if (x <= 0){
        clearInterval(timer)
      }
      zombie.style.opacity = x
      x -= .001
      
    }, userInput)
  }
})
