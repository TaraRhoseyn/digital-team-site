addEventListener("scroll", (e) => {
	const scrollTop = document.documentElement.scrollTop;
	// console.log('scrollTop', scrollTop) console.log('Windows', window.innerHeight) console.log('exit %',
	// window.innerHeight / scrollTop)
});
var scrollDirection = 0;
var counter = 0;
var lastScrollPosition = 0;
var scrollThresholdPercentage = 80;
var scrollStart = true;
const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper i");
const carouselChildrens = [...carousel.children];
var isDragging = false,
	isAutoPlay = true,
	startX,
	startScrollLeft,
	timeoutId;
// remove this
var startAutoScroll = false;
var startPlayVideo = false;
window.addEventListener("scroll", function () {
	const scrollTop = document.documentElement.scrollTop;
	var scrollPosition = window.scrollY;
	var responsiveScreenPosition = window.innerHeight / scrollTop;
	var scrollThreshold = (window.innerHeight * scrollThresholdPercentage) / 100;
	// console.log('scrollThreshold %', scrollThreshold)
	// REMOVE THIS Overlay Separatson on scroll var translateY = Math.min(scrollPosition, window.innerHeight); var
	// translateYBottom = Math.min(scrollPosition * 2, window.innerHeight * 2);
	// document.getElementById('top-image').style.transform = 'translateY(' + -translateY + 'px)';
	// document.getElementById('bottom-image').style.transform = 'translateY(' + translateYBottom + 'px)';
	// Calculate the scaling factor based on the scroll position for the opacity
	const scalingFactorO = Math.min(1, (scrollPosition - 30) / 100);
	// Calculate the scaling factor based on the scroll position for the height and width
	const scalingFactorH = Math.min(1, (scrollPosition - 10) / (100 - 10));
	if (responsiveScreenPosition < 4.4) {
		document.getElementById("team-container").style.top = "0px";
		carousel.classList.add("scrolling");
		if (responsiveScreenPosition < 3.4) {
			// Trigger autoplay
			if (!startPlayVideo) {
				var videoIframe = document.getElementById("video-player");
				if (videoIframe) {
					videoIframe.contentWindow.postMessage(
						'{"method":"setVolume", "value":0}',
						"*"
					);
					videoIframe.contentWindow.postMessage('{"method":"play"}', "*");
					videoAutoplayTriggered = true;
					startPlayVideo = true;
				}
			}
		}
		if (responsiveScreenPosition < 2.5) {
			document.getElementById("bottom-image").style.display = "none";
		}
	}
	if (responsiveScreenPosition > 2) {
		document.getElementById("bottom-image").style.display = "block";
		document.getElementById("team-container").style.top = "64px";
	}
	if (scrollPosition > scrollThreshold) {
		var distanceFromThreshold = scrollPosition - scrollThreshold;
		document.getElementById("team-container").style.transform =
			"translateY(" + -distanceFromThreshold + "px)";
		videoIframe.contentWindow.postMessage('{"method":"pause"}', "*");
	}
	// reset screen to original position
	if (scrollPosition < 80) {
		document.getElementById("team-container").style.top = "64px";
		document.getElementById("team-container").style.transform =
			"translateY(0px)";
		videoIframe.contentWindow.postMessage('{"method":"pause"}', "*");
		clearInterval(timeoutId);
	}
});
// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);
// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens
	.slice(-cardPerView)
	.reverse()
	.forEach((card) => {
		carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
	});
// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach((card) => {
	carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});
// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");
// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach((btn) => {
	btn.addEventListener("click", () => {
		carousel.scrollLeft +=
			btn.id == "left-scroll" ? -firstCardWidth : firstCardWidth;
	});
});
const dragStart = (e) => {
	isDragging = true;
	carousel.classList.add("dragging");
	// Records the initial cursor and scroll position of the carousel
	startX = e.pageX;
	startScrollLeft = carousel.scrollLeft;
};
const dragging = (e) => {
	if (!isDragging) return;
	// if isDragging is false return from here Updates the scroll position of the carousel based on the cursor movement
	carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
};
const dragStop = () => {
	isDragging = false;
	carousel.classList.remove("dragging");
};
