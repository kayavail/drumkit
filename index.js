
    for(var i = 0; i < document.querySelectorAll("button").length; i++){
        document.querySelectorAll("button")[i].addEventListener("click", function(){
            // var kay = this.innerHTML; or you can pass in the variable to the method booBoo();
            booBoo(this.textContent);
            animation(this.textContent);

            // setTimeout(function(){

            // }, 100);
        }
        )}

      document.addEventListener("keypress", function(e){ // you can pass in any letter instead of "e" because the main event happens on the document
         // var kayy = e.key //this assign the key pressed to a variable
        booBoo(e.key); //this obtains the key pressed on the keyboard and pass it to method booBoo();
        animation(e.key);
    });
        //you can pass in any text you want in the function
        function booBoo(x){

            switch (x) {
                case "a":
                    var crash = new Audio ("sounds/tom-4.mp3");
                    crash.play();
                    break;
                case "f":
                    var kick = new Audio ("sounds/tom-4.mp3");
                    kick.play();
                    break;
                case "s":
                    var snare = new Audio ("sounds/snare.mp3");
                    snare.play();
                    break;
                case "h":
                    var snare = new Audio ("sounds/tom-2.mp3");
                    snare.play();
                    break;
                case "d":
                    var tom1 =  new Audio ("sounds/tom-1.mp3");
                    tom1.play();
                    break;
                case "j":
                    var tom2 = new Audio ("sounds/tom-2.mp3");
                    tom2.play();
                    break;
                case "k":
                    var tom3 = new Audio ("sounds/tom-3.mp3");
                    tom3.play();
                    break;
                case "l":
                    var tom4 = new Audio ("sounds/tom-4.mp3");
                    tom4.play();
                    break;                  
                default:
                    window.alert("Damn it!!! Why did you press "+event.key+" ? You can see that "+event.key.toUpperCase() + " is not part of the keys")
                    break;
            }
        };
        

        function animation(letter){
                var animate = "."+letter;
                document.querySelector(animate).classList.add("pressed"); //There are many ways to do this but queryselector is key. and "classList.add"

                setTimeout(function(){
                    document.querySelector(animate).classList.remove("pressed");
                }, 100);
        }
