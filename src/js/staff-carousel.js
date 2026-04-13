// Wait for DOM to be loaded
document.addEventListener('DOMContentLoaded', function() {
    // DOM safety checks
    const wrapper = document.querySelector(".wrapper");
    const carousel = document.querySelector(".carousel");
    const teamContainer = document.getElementById("team-container");
    const videoPlayer = document.getElementById("video-player");
    const bottomImage = document.getElementById("bottom-image");

    if (!carousel || !wrapper) {
        console.warn('Carousel elements not found');
        return;
    }

    // Carousel variables
    const firstCard = carousel.querySelector(".card");
    if (!firstCard) {
        console.warn('No cards found in carousel');
        return;
    }

    const firstCardWidth = firstCard.offsetWidth + 16; // Include margin
    const arrowBtns = document.querySelectorAll(".wrapper i");
    const carouselChildrens = [...carousel.children];
    
    let isDragging = false;
    let isAutoPlay = true;
    let startX;
    let startScrollLeft;
    let timeoutId;
    // Scroll-related variables
    let scrollDirection = 0;
    let counter = 0;
    let lastScrollPosition = 0;
    let scrollThresholdPercentage = 80;
    let scrollStart = true;
    let startAutoScroll = false;
    let startPlayVideo = false;

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

    // Scroll the carousel at appropriate position to hide first few duplicate cards
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");
    // Add event listeners for the arrow buttons to scroll the carousel left and right
    arrowBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            carousel.scrollLeft += btn.id == "left-scroll" ? -firstCardWidth : firstCardWidth;
        });
    });

    // Infinite scroll functionality
    const infiniteScroll = () => {
        // If the carousel is at the beginning, scroll to the end
        if (carousel.scrollLeft === 0) {
            carousel.classList.add("no-transition");
            carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
            carousel.classList.remove("no-transition");
        }
        // If the carousel is at the end, scroll to the beginning
        else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
            carousel.classList.add("no-transition");
            carousel.scrollLeft = carousel.offsetWidth;
            carousel.classList.remove("no-transition");
        }

        // Clear existing timeout & start autoplay if mouse is not hovering over carousel
        clearTimeout(timeoutId);
        if (!wrapper.matches(":hover")) autoPlay();
    };
    // Auto-play functionality
    const autoPlay = () => {
        if (window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
        
        // Autoplay the carousel after every 2500 ms
        timeoutId = setTimeout(() => {
            carousel.scrollLeft += firstCardWidth;
        }, 2500);
    };

    // Start autoplay
    autoPlay();

    // Add event listeners for scroll and infinite scroll
    carousel.addEventListener("scroll", infiniteScroll);

    // Drag functionality
    const dragStart = (e) => {
        isDragging = true;
        carousel.classList.add("dragging");
        // Records the initial cursor and scroll position of the carousel
        startX = e.pageX;
        startScrollLeft = carousel.scrollLeft;
    };

    const dragging = (e) => {
        if (!isDragging) return; // if isDragging is false return from here
        // Updates the scroll position of the carousel based on the cursor movement
        carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
    };
    const dragStop = () => {
        isDragging = false;
        carousel.classList.remove("dragging");
    };

    // Add drag event listeners
    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);

    // Stop autoplay on hover
    wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
    wrapper.addEventListener("mouseleave", autoPlay);

    // Video and scroll-based animations
    window.addEventListener("scroll", function () {
        if (!teamContainer) return;

        const scrollTop = document.documentElement.scrollTop;
        const scrollPosition = window.scrollY;
        const responsiveScreenPosition = window.innerHeight / scrollTop;
        const scrollThreshold = (window.innerHeight * scrollThresholdPercentage) / 100;

        if (responsiveScreenPosition < 4.4) {
            teamContainer.style.top = "0px";
            carousel.classList.add("scrolling");
            
            if (responsiveScreenPosition < 3.4) {
                // Trigger video autoplay
                if (!startPlayVideo && videoPlayer) {
                    try {
                        videoPlayer.contentWindow.postMessage(
                            '{"method":"setVolume", "value":0}',
                            "*"
                        );
                        videoPlayer.contentWindow.postMessage('{"method":"play"}', "*");
                        startPlayVideo = true;                    } catch (e) {
                        console.warn('Video autoplay failed:', e);
                    }
                }
            }
            
            if (responsiveScreenPosition < 2.5 && bottomImage) {
                bottomImage.style.display = "none";
            }
        }
        
        if (responsiveScreenPosition > 2) {
            if (bottomImage) bottomImage.style.display = "block";
            teamContainer.style.top = "64px";
        }
        
        if (scrollPosition > scrollThreshold) {
            const distanceFromThreshold = scrollPosition - scrollThreshold;
            teamContainer.style.transform = "translateY(" + -distanceFromThreshold + "px)";
            
            if (videoPlayer) {
                try {
                    videoPlayer.contentWindow.postMessage('{"method":"pause"}', "*");
                } catch (e) {
                    console.warn('Video pause failed:', e);
                }
            }
        }
        
        // Reset screen to original position
        if (scrollPosition < 80) {
            teamContainer.style.top = "64px";
            teamContainer.style.transform = "translateY(0px)";
            
            if (videoPlayer) {
                try {
                    videoPlayer.contentWindow.postMessage('{"method":"pause"}', "*");
                } catch (e) {
                    console.warn('Video pause failed:', e);
                }
            }
            clearInterval(timeoutId);
        }    });

    // Handle window resize
    window.addEventListener('resize', function() {
        // Recalculate cardPerView on window resize
        cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);
        
        // Restart autoplay with new dimensions
        clearTimeout(timeoutId);
        if (!wrapper.matches(":hover")) autoPlay();
    });
});
