// $('#save_lincoln').click(()=>saveLincoln(parseInt($('#interval').val())))
//
// function saveLincoln(interval) {
//   if(isNaN(interval)) {
//     interval = 10000
//   }
//   $('#foreground').fadeOut(interval);
// }

document.addEventListener('click', function (event) {
  const interval = document.getElementById("interval")
  const message = document.getElementById("hidden-message")
  const zombie = document.getElementById("foreground")
  let user_input = interval.value
  let ms_counter = 0 //my test

  if ((event.target.id === "save_lincoln") && (user_input != "")){
    let x = 1
    let timer = setInterval(function(){
      if (x <= 0) {
        clearInterval(timer)
        message.style.display = "";
      }
      zombie.style.opacity = x
      x -= 0.001

      ms_counter += 1
      console.log(ms_counter)

    }, user_input)

  }
})
