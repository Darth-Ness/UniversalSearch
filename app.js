var search = document.getElementById("search");
	search.addEventListener("keyup",function(){
		if (event.keyCode === 13) {
			if (search.value.indexOf('+') != -1 || search.value.indexOf('-') != -1|| search.value.indexOf('*') != -1 || search.value.indexOf('/') != -1) {
				search.value = eval(search.value);
			}
			else {
			if (search.value.indexOf('!b') != -1) {
   	        	window.location.href = "https://www.scribd.com/search?query=" + search.value.slice(2, search.value.length);
			}	
			if (search.value.indexOf('!y') != -1) {
   	        	window.location.href = "https://www.youtube.com/results?search_query=" + search.value.slice(2, search.value.length);
			}	
			if (search.value.indexOf('!s') != -1) {
   	       		window.location.href = "https://www.startpage.com/sp/search?query=" + search.value.slice(2, search.value.length);
			}
			if (search.value.indexOf('!e') != -1) {
   	       		window.location.href = "https://www.ecosia.org/search?q=" + search.value.slice(2, search.value.length);
			}
			if (search.value.indexOf('!m') != -1) {
   	       		window.location.href = "https://www.imdb.com/find?q=" + search.value.slice(2, search.value.length);
			}
			if (search.value.indexOf('!g') != -1) {
   	       		window.location.href = "https://github.com/search?q=" + search.value.slice(2, search.value.length);
			}
			if (search.value.indexOf('!w') != -1 && search.value != "!weather") {
   	       		window.location.href = "https://www.walmart.com/search?q=" + search.value.slice(2, search.value.length);
			}
			if (search.value.indexOf('!d') != -1) {
   	       		window.location.href = "https://www.dictionary.com/browse/" + search.value.slice(2, search.value.length);
			}
			if (search.value.indexOf('!f') != -1) {
   	       		window.location.href = "https://www.flickr.com/search/?text=" + search.value.slice(2, search.value.length);
			}
			if (search.value.indexOf('!p') != -1) {
   	       		window.location.href = "https://play.google.com/store/search?q=" + search.value.slice(2, search.value.length);
			}
			if (search.value.indexOf('!a') != -1) {
   	       		window.location.href = "https://www.apple.com/us/search/" + search.value.slice(2, search.value.length) + "?src=serp";
			}
			if (search.value.indexOf('!l') != -1) {
   	       		window.location.href = "https://www.lyricsmode.com/search.php?search=" + search.value.slice(2, search.value.length);
			}
			if (search.value.indexOf('!weather') != -1) {
   	       		window.location.href = "https://www.accuweather.com/en/search-locations?query=" + search.value.slice(9, search.value.length);
			}
			if (search.value.indexOf('!') == -1) { 
          		window.location.href = "https://www.mojeek.com/search?q=" + search.value;
			}
		}
        }	
    })
function currentTime() {
	var date = new Date(); /* creating object of Date class */
	var hour = date.getHours();
	var min = date.getMinutes();
	var sec = date.getSeconds();
	var midday = "AM";
	midday = (hour >= 12) ? "PM" : "AM"; /* assigning AM/PM */
	hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12): hour); /* assigning hour in 12-hour format */
	hour = updateTime(hour);
	min = updateTime(min);
	sec = updateTime(sec);
	document.getElementById("clock").innerText = hour + " : " + min + " : " + sec + " " + midday; /* adding time to the div */
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
