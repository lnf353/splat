;
(function() {

    var motherSlidesBlock =  document.querySelector("#motherSliderBlock");
    var nameBlock = document.querySelector("#nameBlock");
    var rightArrow = document.querySelector("#rightArrow"),
	leftArrow = document.querySelector("#leftArrow");
    
    var slideList = document.querySelectorAll("#slideContainer");
    var goodsNameList = document.querySelectorAll("#goodsNameText");
    
    var sizeBlock;
    var nameLiCoordinate;
    var oldTarget = nameBlock.children[0];
    var stepSize;
    var move=0;
    var selectedLi = nameBlock.children[0];
    var multiplySlideCount;
    var lastBlockCoordinate;
    var firstBlockCoordinate;
    var nameListStep=0;
    
    var hightLight = function(node) {
	if(selectedLi) {
	    selectedLi.classList.remove("goods-name--hight-light");
	}
	selectedLi = node;
	selectedLi.classList.add("goods-name--hight-light");
    };

    var getsAllElementsSizes = function() {
	lastBlockCoordinate = nameBlock.lastElementChild.getBoundingClientRect();
	firstBlockCoordinate = nameBlock.firstElementChild.getBoundingClientRect();
	sizeBlock = document.querySelector("#sizeControlBlock").getBoundingClientRect();
	nameLiCoordinate = oldTarget.getBoundingClientRect();
    };
    getsAllElementsSizes();
    
    var checkThresholdOfRightLeft = function(e) {
	if(e.target.tagName == "LI") {
	    
	    if(e.clientX >= nameLiCoordinate.left + nameLiCoordinate.width) {
		nameListStep = nameListStep + (-lastBlockCoordinate.right + sizeBlock.right);
	    } else {
		nameListStep = nameListStep + (sizeBlock.left - firstBlockCoordinate.left); 
	    }
	}
	
	if(lastBlockCoordinate.right > sizeBlock.right && e.target.id == "rightArrow") {
	    nameListStep = nameListStep + (-lastBlockCoordinate.right + sizeBlock.right); 
	} else if (firstBlockCoordinate.left < sizeBlock.left && e.target.id == "leftArrow") {
	    nameListStep = nameListStep + (sizeBlock.left - firstBlockCoordinate.left ); 
	}
	nameBlock.style.marginLeft = nameListStep + "px";
    };

    function shiftSlide(e) {
	
	for(var i = 0; i < e.target.parentNode.children.length; i++) {
	    if(e.target.parentNode.children[i] == e.target){
		multiplySlideCount = i;
	    }
	}
	getsAllElementsSizes();
	checkThresholdOfRightLeft(e);
	
	if(e.target.tagName == "LI") { 
	    oldTarget = e.target;
	    stepSize=-960;
	    if(e.clientX >= nameLiCoordinate.left + nameLiCoordinate.width) {
		move = multiplySlideCount * stepSize; 
	    } else if(e.clientX <= nameLiCoordinate.left) {
		move = multiplySlideCount * stepSize; 
	    }
	    hightLight(e.target);   
	}
	
	if( e.target == rightArrow) {
	    if(oldTarget == nameBlock.lastElementChild) {return;}
	    hightLight(oldTarget.nextElementSibling);
	    oldTarget = oldTarget.nextElementSibling; 
	    stepSize = -960;
	    move = Math.max(move + stepSize, slideList.length * stepSize);
	    
	} else if (e.target == leftArrow) {
	    if(oldTarget == nameBlock.children[0]) {return;}
	    hightLight(oldTarget.previousElementSibling);
	    oldTarget = oldTarget.previousElementSibling;
	    stepSize = 960;
	    move = Math.min(0, move + stepSize);
	}
	motherSlidesBlock.style.marginLeft = move + "px";
    }
    
    rightArrow.addEventListener("click", shiftSlide);
    leftArrow.addEventListener("click", shiftSlide);
    nameBlock.addEventListener("click", shiftSlide);
})();


























