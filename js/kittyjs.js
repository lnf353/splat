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
	maxPosition = bar.offsetWidth - barSlideWidth - lastPositionFix,
	untilBarWidth = bar.getBoundingClientRect(),
	animationIndex=0;
        var currentAnimate = false;

    
    if(lastPositionFix % iterationCount != 0 ) {
	fix = (lastPositionFix+1)/iterationCount;
    } else {
	fix = lastPositionFix/iterationCount
    }
    barSlide.style.width = barSlideWidth + "px";
    
    var kittyWidth = 240,// 150 + padding 
	kittyCount = 4,
	kPosition = 0,
	kittyBoss = document.querySelector(".overflow"),
	kittyUl = kittyBoss.querySelector(".description-slider"),
	kittyLi = kittyBoss.querySelectorAll(".description-slider__slide");
    
    function kittyLeft(){
	kPosition = Math.min(kPosition + kittyWidth * kittyCount,0)
	var leftAnimate = setInterval(function(){
	    currentAnimate=true;
	    animationIndex += 20;
	    kittyUl.style.marginLeft = animationIndex + "px"
	    if(animationIndex>=kPosition){
		kittyUl.style.marginLeft = animationIndex + "px"
		currentAnimate = false; 		
		clearInterval(leftAnimate);
	    } 
	},5)
    }

    function kittyRight(){
	
	kPosition = Math.max(kPosition - kittyWidth * kittyCount, -kittyWidth * (kittyLi.length - kittyCount));

	var rightAnimate = setTimeout(function ra(){
	    currentAnimate = true;
	    animationIndex -= 20;
	    kittyUl.style.marginLeft = animationIndex + "px"
	    rightAnimate = setTimeout(ra,4)
	    if(animationIndex <= kPosition){
		currentAnimate = false; 		
		clearInterval(rightAnimate);
	    } 
	},4)
	
	
	
	

    }
    
    var right = function(e) {
	if(currentAnimate) return; 
	if( !(e.clientX >= (untilBarWidth.left +bar.offsetWidth/2)) ) return;
	if(position >= maxPosition ) {
	    return;
	};
	cursorPosition +=1;
	position = fix + cursorPosition * barSlideWidth;
	barSlide.style.marginLeft = position + fix + "px";
	kittyRight();
    }

    var left = function(e) {
	if(currentAnimate) return; 
	if(!(e.clientX <= (untilBarWidth.left + bar.offsetWidth/2))) return;
	if(position <=0) return;
	
	cursorPosition -= 1;
	position = cursorPosition * barSlideWidth - fix;
	barSlide.style.marginLeft = position - fix + "px";
	kittyLeft();
    }
    bar.addEventListener("click",right);
    bar.addEventListener("click",left);
})();




















