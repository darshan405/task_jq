// $(document).ready(function(){
//     $("#qwerty1").click(function(){
//     var ex = $( "#qwerty1" );
//     if(this.style.background == ''){
//     $("#qwerty1").css('background', 'red');
//     }
//     else{
//     $("#qwerty1").css('background', 'white');
//     };
//     });
//     });
//     $(document).ready(function(){
//     $("#qwerty2").click(function(){
//     var ex = $( "#qwerty2" );
//     if(this.style.background == ''){
//     $("#qwerty2").css('background', 'blue');
//     }
//     else{
//     $("#qwerty2").css('background', 'white');
//     };
//     });
//     });
//     $(document).ready(function(){
//     $("#qwerty3").click(function(){
//     var ex = $( "#qwerty3" );
//     if(this.style.background == ''){
//     $("#qwerty3").css('background', 'yellow');
//     }
//     else{
//     $("#qwerty3").css('background', 'white');
//     };
//     });
//     });
            $(document).ready(function(){
            $("#qwerty1").click(function(){
            $("#qwerty1").toggleClass("r");
            });
            });
            $(document).ready(function(){
            $("#qwerty2").click(function(){
            $("#qwerty2").toggleClass("b");
            });
            });
            $(document).ready(function(){
            $("#qwerty3").click(function(){
            $("#qwerty3").toggleClass("y");
            });
            });