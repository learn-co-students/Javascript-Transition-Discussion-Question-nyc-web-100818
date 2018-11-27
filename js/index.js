document.addEventListener('click', function(event){
 const interval = document.getElementById("interval")
 const message = document.getElementById("hidden-message")
 const zombie = document.getElementById("foreground")
 let userInput = (interval.value) / 1000
 if ((event.target.id == "save_lincoln") && (userInput != "")){
     var x = 1
     var timer = setInterval(function(){
       if (x <= 0){
           clearInterval(timer)
           message.style.display = ""
         }
         zombie.style.opacity = x
         x -= 0.001
     },userInput)
 }
})
