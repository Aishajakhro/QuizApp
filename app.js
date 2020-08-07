
function result(){

    var score = 0;

    var ans1 = document.getElementById("ans1");
    if(ans1.checked == true){
        score++
    }
    var ans2 = document.getElementById("ans2");
    if(ans2.checked == true){
        score++
    }
    var ans3 = document.getElementById("ans3");
    if(ans3.checked == true){
        score++
    }
    var ans4 = document.getElementById("ans4");
    if(ans4.checked == true){
        score++
    }
    var ans5 = document.getElementById("ans5");
    if(ans5.checked == true){
        score++
    }

    swal("Your Score is " + score);
   

}