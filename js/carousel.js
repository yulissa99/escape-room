var index = 0;
var amount = 0;
var currTransl = []
var translationComplete = true;

var transitionCompleted = function(){
    translationComplete = true;
}

document.addEventListener("DOMContentLoaded", function(event)
{
    amount = document.getElementsByClassName("carousel-item").length;
    for(var i = 0; i < amount; i++)
    {
        currTransl[i] = -300;
        document.getElementsByClassName("carousel-item")[i].addEventListener("transitionend", transitionCompleted, true);
        document.getElementsByClassName("carousel-item")[i].addEventListener("webkitTransitionEnd", transitionCompleted, true);
        document.getElementsByClassName("carousel-item")[i].addEventListener("oTransitionEnd", transitionCompleted, true);
        document.getElementsByClassName("carousel-item")[i].addEventListener("MSTransitionEnd", transitionCompleted, true);
    }
    setInterval(function f(){left()},1000);
});

function left()
{
    if(translationComplete === true)
    {
        translationComplete = false;
        index++;
        var outerIndex = (index-1) % amount;
        for(var i = 0; i < amount; i++)
        {
            var img = document.getElementsByClassName("carousel-item")[i];
            img.style.opacity = '1';
            img.style.transform = 'translate('+(currTransl[i]-300)+'px)';
            currTransl[i] = currTransl[i]-300;
        }
        var outerImg = document.getElementsByClassName("carousel-item")[outerIndex];
        outerImg.style.transform = 'translate('+(currTransl[outerIndex]+300*(amount))+'px)';
        outerImg.style.opacity = '0';
        currTransl[outerIndex] = currTransl[outerIndex]+300*(amount);
    }
}