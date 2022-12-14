function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
$(function() {
	if (l_bgImagesRandom)
		l_bgImages = shuffle(l_bgImages);
	if (l_bgVideo) {
	}else{
		$.backstretch(l_bgImages, {duration: l_bgImageDuration, fade: l_bgImageFadeVelocity});
	}
	if (l_bgOverlay)
		$("#overlay").css("background-image", "url('assets/img/overlay.png')");
	$("#overlay").css("background-color", "rgba(0,0,0,"+(l_bgDarkening/100)+")");
});