var search = document.getElementById("search");
	search.addEventListener("keyup",function(){
		if (event.key == "Enter" ) {
			if (search.value.indexOf('+') != -1 || search.value.indexOf('-') != -1|| search.value.indexOf('*') != -1 || search.value.indexOf('/') != -1) {
				search.value = eval(search.value);
			}
			else {
			if (search.value.indexOf('!b') != -1) {
   	        	window.open("https://www.scribd.com/search?query=" + search.value.slice(2, search.value.length), "_blank");
			}	
			if (search.value.indexOf('!y') != -1) {
   	        	window.open("https://www.youtube.com/results?search_query=" + search.value.slice(2, search.value.length), "_blank");
			}	
			if (search.value.indexOf('!s') != -1) {
   	       		window.open("https://www.startpage.com/sp/search?query=" + search.value.slice(2, search.value.length), "_blank");
			}
			if (search.value.indexOf('!e') != -1) {
   	       		window.open("https://www.ecosia.org/search?q=" + search.value.slice(2, search.value.length), "_blank");
			}
			if (search.value.indexOf('!m') != -1) {
   	       		window.open("https://www.imdb.com/find?q=" + search.value.slice(2, search.value.length), "_blank");
			}
			if (search.value.indexOf('!g') != -1) {
   	       		window.open("https://github.com/search?q=" + search.value.slice(2, search.value.length), "_blank");
			}
			if (search.value.indexOf('!w') != -1 && search.value != "!weather") {
   	       		window.open("https://www.walmart.com/search?q=" + search.value.slice(2, search.value.length), "_blank");
			}
			if (search.value.indexOf('!d') != -1) {
   	       		window.open("https://www.dictionary.com/browse/" + search.value.slice(2, search.value.length), "_blank");
			}
			if (search.value.indexOf('!f') != -1) {
   	       		window.open("https://www.flickr.com/search/?text=" + search.value.slice(2, search.value.length), "_blank");
			}
			if (search.value.indexOf('!p') != -1) {
   	       		window.open("https://play.google.com/store/search?q=" + search.value.slice(2, search.value.length), "_blank");
			}
			if (search.value.indexOf('!a') != -1) {
   	       		window.open("https://www.apple.com/us/search/" + search.value.slice(2, search.value.length) + "?src=serp", "_blank");
			}
			if (search.value.indexOf('!l') != -1) {
   	       		window.open("https://www.lyricsmode.com/search.php?search=" + search.value.slice(2, search.value.length), "_blank");
			}
			if (search.value.indexOf('!weather') != -1) {
   	       		window.open("https://www.accuweather.com/en/search-locations?query=" + search.value.slice(9, search.value.length), "_blank");
			}
			if (search.value.indexOf('!3') != -1) {
   	       		window.open("https://www.thingiverse.com/search?q=" + search.value.slice(2, search.value.length), "_blank");
			}
			if (search.value.indexOf('!') == -1) { 
          		window.open("https://www.mojeek.com/search?q=" + search.value, "_blank");
			}
		}
        }	
    })
function currentTime() {
	var date = new Date(); /* creating object of Date class */
	var hour = date.getHours();
	var min = date.getMinutes();
	hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12): hour); /* assigning hour in 12-hour format */
	hour = updateTime(hour);
	min = updateTime(min);
	document.getElementById("clock").innerHTML = hour + "<br>" + min;
	  var t = setTimeout(currentTime, 1000); /* setting timer */
  }
  
  function updateTime(k) { /* appending 0 before time elements if less than 10 */
	if (k < 10) {
	  return "0" + k;
	}
	else {
	  return k;
	}
  }
  
currentTime();
function displayInfo() {
    document.getElementById("popup").setAttribute('class', "popup");
}
function hideUI() {
    document.getElementById("sidebar").setAttribute('class', 'hidden');
    document.getElementById("search").setAttribute('class', 'hidden');
    document.getElementById("clock").setAttribute('class', 'hidden');
}
document.getElementById("info").addEventListener('click', displayInfo);
document.getElementById('toggle').addEventListener('click', hideUI);
document.getElementById("close").addEventListener('click', function() {
document.getElementById('popup').setAttribute('class', 'hidden');
});
