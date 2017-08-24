;
(function(){
    var search = document.querySelector("#search").firstElementChild;

    var makeSearchLarger = function(e) {
	search.classList.toggle("srch-panel--to-extend");
    };

    search.addEventListener("focus",makeSearchLarger);
    search.addEventListener("blur",makeSearchLarger);
})();




















