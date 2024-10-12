var i_score = 10
var highScore = 0
function check(){
    if (i_score <=0){
        alert("TRY AGAIN!")
    }
    else{
        check1()
    }

}

function check1(){
    var numIn = document.getElementById("get").value
    var ran = Math.floor(Math.random()*10+1)
    

    if (ran == numIn){
        if(highScore < i_score){
            highScore = i_score
            document.getElementById("hscore").innerHTML = "&#9971 Highest Score: "+ highScore
            document.getElementById("guess").innerHTML = "Voila !!.."
        }
        
    }

    else{
        i_score = i_score-1
        document.getElementById("iscore").innerHTML = "&#128175 your score:"+ i_score
        document.getElementById("guess").innerHTML = "Oops :("
    }
    document.getElementById("get").value=''
}

