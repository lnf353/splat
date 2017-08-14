;(function(){
    var bar = document.querySelector('.slider-bar'),
	barSlide = document.querySelector('.slider-bar__scroll'),
	cursorPosition =0,
	position =0,
	slideCount = 12,
	slideGroupCount = 4,
	iterationCount = slideCount/slideGroupCount,
	barSlideWidth = Math.floor(bar.offsetWidth /iterationCount),
	fix=0,
	lastPositionFix = bar.offsetWidth - barSlideWidth * iterationCount,
	maxPosition = bar.offsetWidth - barSlideWidth - lastPositionFix;
    
    if(lastPositionFix % iterationCount != 0 ) {
	fix = (lastPositionFix+1)/iterationCount;
    } else {
	fix = lastPositionFix/iterationCount
    }
    barSlide.style.width = barSlideWidth + "px";
    
    var kittyWidth = 220,// 150 + padding 
	kittyCount = 4,
	kPosition = 0,
	kittyBoss = document.querySelector(".overflow"),
	kittyUl = kittyBoss.querySelector(".description-slider"),
	kittyLi = kittyBoss.querySelectorAll(".description-slider__slide");
    function kittyLeft(){
	kPosition = Math.min(kPosition + kittyWidth * kittyCount,0)
	kittyUl.style.marginLeft = kPosition+ "px";
    }
    function kittyRight(){
	kPosition = Math.max(kPosition - kittyWidth * kittyCount, -kittyWidth * (kittyLi.length - kittyCount));
	kittyUl.style.marginLeft = kPosition + "px"
    }
    
    var right = function(e) {
	if(!(e.clientX >= bar.offsetWidth/2)) return;
	if(position >= maxPosition ) {
	    return;
	};
	cursorPosition +=1;
	position = fix + cursorPosition * barSlideWidth;
	barSlide.style.marginLeft = position + fix + "px";
	kittyRight();
    }

    var left = function(e) {
	if(!(e.clientX <= bar.offsetWidth/2)) return;
	console.log(e.clientX);
	if(position <=0) return;
	cursorPosition -= 1;
	position = cursorPosition * barSlideWidth - fix;
	barSlide.style.marginLeft = position - fix + "px";
	kittyLeft();
    }
    bar.addEventListener("click",right);
    bar.addEventListener("click",left);
})();




















