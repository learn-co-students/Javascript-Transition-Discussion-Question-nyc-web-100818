// $('#save_lincoln').click(()=>saveLincoln(parseInt($('#interval').val())))
//
// function saveLincoln(interval) {
//   if(isNaN(interval)) {
//     interval = 10000
//   }
//   $('#foreground').fadeOut(interval);
// }

const saveButton = document.getElementById('save_lincoln');
const interval = document.getElementById('interval');
const foreground = document.getElementById('foreground');
let opacity = parseFloat(foreground.style.opacity);

saveButton.addEventListener('click', function(event){
  let intervalValue = interval.value;

  if(isNaN(intervalValue) || intervalValue <= 0) {
      intervalValue = 10000;
    }


  const counter = setInterval(fadeOut, intervalValue / 100);

  function fadeOut(){

    if (opacity > 0){
      opacity -= 0.01;
    } else {
      clearInterval(counter)
    }
    foreground.style.opacity = opacity;
  }
});
