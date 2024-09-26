(()=>{

    // --

    

    
    // Wait for the DOM to be fully loaded before executing the script
    document.addEventListener('DOMContentLoaded', () => {


        // Get the current viewport height
        // This is used to calculate scroll distances for the animation
        let viewportHeight = window.innerHeight;

        // Select the outermost container element
        // This is used to determine the correct width and position for section_one
        const container = document.querySelector('.container');

        // Get the left offset of the container
        // This ensures section_one stays aligned with its container when fixed
        let containerLeft = container.getBoundingClientRect().left;
        
        // Get the width of the container
        // This maintains section_one's width when it becomes fixed
        let containerWidth = container.offsetWidth;


        // Select the scroll-window element
        // This is the container that determines the scrollable area
        const scrollWindow = document.querySelector('.scroll-window');

        // This is a botton when clicked will remove the animation and replace it with a powerpoint embedding  
        const removeAnimation = document.querySelector('.remove_animation');
        isAnimationRemoved = false



    
        // This is the embedded powerpoint version of the progress animation, this is initailly not displayed, and is only displayed on click of the "removeAnimation" button. 
        // When the powerpoint is displayed on click the animation is removed 
        const powerpoint = document.querySelector('.powerpoint-container');
        // Initially hide div-two
        powerpoint.style.display = 'none';


        // Select the section_one element from the DOM
        // This is the main section we'll be manipulating
        const sectionOne = document.querySelector('.section_one');

        // Select the section_two element from the DOM
        // This is the main section we'll be manipulating
        const sectionTwo = document.querySelector('.section_two');

        // Select the section_three element from the DOM
        // This is the main section we'll be manipulating
        const sectionThree = document.querySelector('.section_three');
        


        // Select the section_ph1 (place holder 1) element from the DOM
        // This is a element that will maintain the space between section 1 and section 2 will the user scrolls, So that once the section 1 scrolls out then section 2 can scroll in view
        const sectionPlaceHolderOne = document.querySelector('.section_ph1');
        

        // Select the section_ph3 (place holder 3) element from the DOM
        // This is a element that will maintain the space between section 2 and section 3 will the user scrolls, So that once the section 1 scrolls out then section 2 can scroll in view
        const sectionPlaceHolderThree = document.querySelector('.section_ph3');


        // Select the section_ph5 (place holder 5) element from the DOM
        // This is a element that will maintain the space between section 3 and section 4 will the user scrolls, So that once the section 1 scrolls out then section 2 can scroll in view
        const sectionPlaceHolderFive = document.querySelector('.section_ph5');



        // Calculate the initial top position of section_one relative to the document
        // This value is used to determine when section_one should become fixed
        let sectionOneHeight = sectionOne.getBoundingClientRect().top + window.pageYOffset;

        
        // The scroll positions of the top of scetion One 
        // This position is used to identify when section one has entered the screen 
        let sectionOneTopPosition = sectionOne.getBoundingClientRect().top - viewportHeight;
 
    
        // Calculate the scroll position where section_one should start scrolling out
        // This position is double viewport height after section_one becomes fixed allows the animation to continue before scrolling out
        let sectionOneScrollOutStartPoint = sectionOneHeight + ( viewportHeight * 2);
        
        // Calculate the scroll position where section_one should be fully scrolled out
        // This is to determin the end point in which the scroll out ends, which is the + the view port height 
        let sectionOneScrollOutEndPoint = sectionOneScrollOutStartPoint + viewportHeight;



        // Calculate the initial top position of section_two relative to the document
        // This value is used to determine when section_two should become fixed
        //  (- viewportHeight ) is added to section two because while section one is fixed all the sections and placeholders moves up the size of the view port height
        let sectionTwoHeight = (sectionTwo.getBoundingClientRect().top + window.pageYOffset ) - viewportHeight;

        
        // The scroll positions of the top of scetion Two
        // This position is used to identify when section two has entered the screen 
        //  (- viewportHeight ) is added to section two because while section one is fixed all the sections and placeholders move up the size of the view port height 
        let sectionTwoTopPosition = (sectionTwo.getBoundingClientRect().top - viewportHeight) - viewportHeight;
 
        // Calculate the scroll position where section_two should start scrolling out
        // This position is double viewport height after section_two becomes fixed allows the animation to continue before scrolling out
        let sectionTwoScrollOutStartPoint = sectionTwoHeight + ( viewportHeight * 2);
        
        // Calculate the scroll position where section_two should be fully scrolled out
        // This positions is to determin the end point in which the scroll out ends, which is the + the view port height 
        let sectionTwoScrollOutEndPoint = sectionTwoScrollOutStartPoint + viewportHeight;


        // Calculate the initial top position of section_three relative to the document
        // This value is used to determine when section_three should become fixed
        //  (- viewportHeight(- viewportHeight) ) is added to section three because while section one and two is fixed all the sections and placeholders moves up the size of the view port height * 2
        let sectionThreeHeight = ((sectionThree.getBoundingClientRect().top + window.pageYOffset) - viewportHeight ) - viewportHeight;;

        
        // The scroll positions of the top of section three 
        // This position is used to identify when section one has entered the screen 
        //  (- viewportHeight(- viewportHeight) ) is added to section three because while section one and two is fixed all the sections and placeholders moves up the size of the view port height * 2
        let sectionThreeTopPosition = ((sectionThree.getBoundingClientRect().top - viewportHeight) - viewportHeight ) - viewportHeight;;
 
    
        // Calculate the scroll position where section_three should start scrolling out
        // This position is double viewport height after section_one becomes fixed allows the animation to continue before scrolling out
        let sectionThreeScrollOutStartPoint = sectionThreeHeight + ( viewportHeight * 2) + viewportHeight;
        
        // Calculate the scroll position where section_three should be fully scrolled out
        // This is to determin the end point in which the scroll out ends, which is the + the view port height 
        let sectionThreeScrollOutEndPoint = sectionThreeScrollOutStartPoint + viewportHeight;


        // Set left position to keep section_one aligned with the container
        // This prevents section_one from expanding to full viewport width
        sectionOne.style.left = `${containerLeft}px`;
        
        // Set width to match the container's width
        // This ensures section_one maintains its original width when fixed
        sectionOne.style.width = `${containerWidth}px`;

        // Set left position to keep section_one aligned with the container
        // This prevents section_two from expanding to full viewport width
        sectionTwo.style.left = `${containerLeft}px`;
        
        // Set width to match the container's width
        // This ensures section_two maintains its original width when fixed
        sectionTwo.style.width = `${containerWidth}px`;

        // Set left position to keep section_one aligned with the container
        // This prevents section_two from expanding to full viewport width
        sectionThree.style.left = `${containerLeft}px`;
        
        // Set width to match the container's width
        // This ensures section_two maintains its original width when fixed
        sectionThree.style.width = `${containerWidth}px`;



         
        removeAnimation.addEventListener('click', () => {
            // Hide div-one
            scrollWindow.style.display = 'none';
            
            // Show div-two
            powerpoint.style.display = 'block';
            isAnimationRemoved = true;
        });



        function scrollLayoutAnimationBoard(scrollPosition, section, sectionHeight, sectionScrollOutStartPoint ,sectionScrollOutEndPoint, sectionPlaceHolder){ 
                    
            // Check when the section should be fixed at the top of the viewport
            // This occurs when the scroll position is between section Height and sectionScrollOutStartPoint
            if (scrollPosition >= sectionHeight && scrollPosition < sectionScrollOutStartPoint) {
                 
                    
                   if(isAnimationRemoved == false){
                    // This is a button, when fixed is added to the class the button will appear and be fixed to the screen 
                    removeAnimation.classList.add('fixed')

                   }

                    // Add the 'fixed' class to keep section at the top of the viewport
                    section.classList.add('fixed');
                    // console.log('FIX SECTION :' + section.classList)
                    
                    // Set left position to keep section aligned with the container once it is fixed 
                    // This prevents the section from expanding to full viewport width or moving to the right once it is fixed
                    section.style.left = `${containerLeft}px`;

                    // Set width to match the container's width
                    // This ensures the section maintains its original width when fixed
                    section.style.width = `${containerWidth}px`;

                    // Ensure that the section holder is in place when scrolling down
                    // This will maintain the spacing between the current section and the next section
                    sectionPlaceHolder.style.display = 'block'

                    // Remove 'hidden' classes to ensure correct styling
                    section.classList.remove('hidden');
                    // Reset the transform to ensure the section is at the top
                    section.style.transform = 'translateY(0)';

                    }
                    // Check if the section should be in the process of scrolling out
                    // This occurs when the scroll position is between sectionOneScrollOutStartPoint and sectionOneScrollOutEndPoint
                    else if (scrollPosition >= sectionScrollOutStartPoint && scrollPosition < sectionScrollOutEndPoint) {

                        // This is a button, when fixed is removed from the class the button will disappear and be no longer fixed to the screen 
                        removeAnimation.classList.remove('fixed')

                        // Keep the 'fixed' class to maintain the element's position at the top
                        section.classList.add('fixed');
                        // Calculate how far through the scroll-out animation we are (0 to 1)
                        let scrollOutProgress = (scrollPosition - sectionScrollOutStartPoint) / viewportHeight;
                        // Calculate the translateY value based on the scroll progress (-100% to 0%)
                        let translateY = scrollOutProgress * -100;
                        // Apply the calculated transform to create the scroll-out effect
                        section.style.transform = `translateY(${translateY}%)`;

                        // Remove 'hidden' class to ensure the element is visible
                        section.classList.remove('hidden');
                        // Optionally, we can adjust the opacity to fade out the section
                        section.style.opacity = 1 - scrollOutProgress;
                        } 

                    // Check if the section should be hidden (fully scrolled out)
                    // This occurs when the scroll position is beyond sectionScrollOutEndPoint
                    else if (scrollPosition >= sectionScrollOutEndPoint) {
                        // Add the 'hidden' class to hide the section
                        section.classList.add('hidden');
                        // Remove 'fixed' classes to ensure correct styling
                        section.classList.remove('fixed');
                        // Set transform to -100% to ensure that the section is fully off-screen
                        section.style.transform = 'translateY(-100%)';
                        } 

                    // If none of the above conditions are met, reset the section to its original state
                    // This occurs when the scroll position is greater than the sectionHeight 
                    else {
                    // Reset all styles when not fixed
                    // This returns section_one to its original state in the document flow
                    section.classList.remove('fixed', 'hidden');
                    section.style.transform = 'translateY(0)';
                    section.style.opacity = 1;
                    section.style.left = '';
                    section.style.width = '';

                    }  

            }





        // The animated linear line that shows the progession of the steps
        // This SVG line will progressively enter the screen from left to right as the user scrolls.  
        let linePathOne = document.querySelector('path.line-path-one');
       

        // Defines SVG elements and their trigger points for scroll-based animations, specifying when each element becomes visible or animates.
        const presentationOnePaths = [
            { class: 'title-preproject', triggerPoint: 0.34 },
            { class: 'requestor', triggerPoint: 0.21 },
            { class: 'discription-one', triggerPoint: 0.23, endPoint: 0.36},
            { class: 'project-idea', triggerPoint: 0.25 },
            { class: 'digital-team', triggerPoint: 0.37 },
            { class: 'coffee-chat', triggerPoint: 0.38 },
            { class: 'discription-two', triggerPoint: 0.385, endPoint: 0.52},
            { class: 'requestor-two', triggerPoint: 0.51 },
            { class: 'project-request', triggerPoint: 0.52 },
            { class: 'discription-three', triggerPoint: 0.56, endPoint: 0.78},
            { class: 'digital-board', triggerPoint: 0.71 },
            { class: 'review', triggerPoint: 0.80},
            { class: 'discription-four', triggerPoint: 0.82, endPoint: 0.90},
            { class: 'arrow-four', triggerPoint: 0.91, endPoint: 1.20},
            { class: 'text-one', triggerPoint: 0.91, endPoint: 1.19},
            { class: 'discription-five', triggerPoint: 0.98, endPoint: 1.36},
            { class: 'arrow-one', triggerPoint: 1.2,},
            { class: 'arrow-two', triggerPoint: 1.2,},
            { class: 'arrow-three', triggerPoint: 1.2,},
            { class: 'user-research', triggerPoint: 1.2,},
            { class: 'discription-six', triggerPoint: 1.3,},
        ];



         // The animated linear line that shows the progession of the steps
        // This SVG line will progressively enter the screen from left to right as the user scrolls.  
        let linePathTwo = document.querySelector('path.line-path-two');
       

        // Defines SVG elements and their trigger points for scroll-based animations, specifying when each element becomes visible or animates.
        const presentationTwoPaths = [
            { class: 'title-feasibilty', triggerPoint: 0.34},
            { class: 'requestor-three', triggerPoint: 0.24},
            { class: 'digital-team-two', triggerPoint: 0.24},
            { class: 'Info-gather-section', triggerPoint: 0.28, endPoint: 1.27},
            { class: 'discription-seven', triggerPoint: 0.4, endPoint: 0.84},
            { class: 'discription-eight', triggerPoint: 0.6, endPoint: 0.90},
            { class: 'discription-nine', triggerPoint: 0.86, endPoint: 1.24},
            { class: 'discription-ten', triggerPoint: 0.92, endPoint: 1.05},
            { class: 'arrow-five', triggerPoint: 0.86, endPoint: 1.24},
            { class: 'arrow-six', triggerPoint: 0.92, endPoint: 1.05},
            { class: 'discription-eleven', triggerPoint: 1.1, endPoint: 1.24},
            { class: 'arrow-seven', triggerPoint: 1.1, endPoint: 1.24},
            { class: 'doc-gather-section', triggerPoint: 1.26},
            { class: 'discription-tweleve', triggerPoint: 1.3},
            { class: 'discription-thirteen', triggerPoint: 1.32},
            { class: 'discription-fourteen', triggerPoint: 1.34},
            
        ];


         // The animated linear line that shows the progession of the steps
        // This SVG line will progressively enter the screen from left to right as the user scrolls.  
        let linePathThree = document.querySelector('path.line-path-three');
       

        // Defines SVG elements and their trigger points for scroll-based animations, specifying when each element becomes visible or animates.
        const presentationThreePaths = [
            { class: 'title-development', triggerPoint: 0.34},
            { class: 'requestor-four', triggerPoint: 0.24},
            { class: 'digital-team-three', triggerPoint: 0.24},
            { class: 'circle', triggerPoint: 0.3, animatePoint: 0.6},
            { class: 'build', triggerPoint: 0.42, },
            { class: 'feedback', triggerPoint: 0.6, },
            { class: 'iterate', triggerPoint: 0.74, },
            { class: 'discription-fithteen', triggerPoint: 0.86, endPoint: 0.94},
            { class: 'discription-sixteen', triggerPoint: 0.94, endPoint: 1},
            { class: 'discription-seventeen', triggerPoint: 1, endPoint: 1.10},
            { class: 'circle-info-animation', triggerPoint: 0.3, animatePoint: 1.18},
            { class: 'deploy-icon', triggerPoint: 1.37, endPoint: 1.6},
            { class: 'resources', triggerPoint: 1.45, endPoint: 1.6},
            { class: 'discription-eightteen', triggerPoint: 1.5, endPoint: 1.63},
            { class: 'project-close', triggerPoint: 1.61,},
            { class: 'final-review', triggerPoint: 1.67,},
            { class: 'discription-nineteen', triggerPoint: 1.72,},

        ];


        

        // Initialise last Scroll Position to keep track of the previous scroll position
        // This will be used to determine scroll direction
        let lastScrollPosition = 0;
        // Add a scroll event listener to the window
        // This function will run every time the user scrolls
        window.addEventListener('scroll', () => {
            // Get the current scroll position of the window
            let scrollPosition = window.pageYOffset;
            // console.log({scrollPosition})

            // Determine if the user is scrolling up or down
            // This is done by comparing the current scroll position to the last known position
            let isScrollingUp = scrollPosition < lastScrollPosition;

            // Update lastScrollPosition for the next scroll event
            lastScrollPosition = scrollPosition;
            

            // Calculate how far we've scrolled into section one 
            let scrollIntoSectionOne = scrollPosition + viewportHeight - sectionOneHeight;
            
            // Calculate the scroll percentage for section one 
            let sectionOneScrollPercentage = scrollIntoSectionOne / (sectionOne.offsetHeight + viewportHeight);
            
            // Ensure that section one scrollPercentage is between 0 and 1
            // sectionOneScrollPercentage = Math.min(Math.max(sectionOneScrollPercentage, 0), 1);

            // Calculate how far we've scrolled into section two
            let scrollIntoSectionTwo = scrollPosition + viewportHeight - sectionTwoHeight;
            
            // Calculate the scroll percentage for section two 
            let sectionTwoScrollPercentage = scrollIntoSectionTwo / (sectionTwo.offsetHeight + viewportHeight);

            // Calculate how far we've scrolled into section three 
            let scrollIntoSectionThree = scrollPosition + viewportHeight - sectionThreeHeight;
            
            // Calculate the scroll percentage for section three 
            let sectionThreeScrollPercentage = scrollIntoSectionThree / (sectionThree.offsetHeight + viewportHeight);
            

            
            // console.log({scrollPosition })
            // console.log({sectionOneScrollPercentage})
            // console.log({sectionOneTopPosition})
            // console.log({sectionOneHeight})
            // console.log({sectionOneScrollOutStartPoint})
            // console.log({sectionTwoScrollPercentage})
            // console.log({sectionTwoTopPosition})
            // console.log({sectionTwoHeight})



            scrollLayoutAnimationBoard(scrollPosition, sectionOne, sectionOneHeight,sectionOneScrollOutStartPoint, sectionOneScrollOutEndPoint, sectionPlaceHolderOne)
            scrollLayoutAnimationBoard(scrollPosition, sectionTwo, sectionTwoHeight,sectionTwoScrollOutStartPoint, sectionTwoScrollOutEndPoint, sectionPlaceHolderThree)
            scrollLayoutAnimationBoard(scrollPosition, sectionThree, sectionThreeHeight,sectionThreeScrollOutStartPoint, sectionThreeScrollOutEndPoint, sectionPlaceHolderFive)


            // Section One Presentation Animation ----------------------------------------------------------------------------------------------------
            // -----------------------------------------------------------------------------------------------------------------------

            // Check if the top of the section is in view 
            // Once the top of the section is in view can now start the animations  
            if(scrollPosition > sectionOneTopPosition) {
            

                // Loop through each path in the presentationOnePaths array
                presentationOnePaths.forEach(path => {
                    // Select all elements with the class specified in the current path object
                    const pathElements = document.querySelectorAll(`.${path.class}`);
                
                    pathElements.forEach((element, index) => {
                        
                        // Check if the path object has an endPoint defined
                        // For presentation one paths with an endPoint (like 'discription-one') 
                        if (path.endPoint) {
                        
                        // If the current scroll percentage is between the triggerPoint and endPoint
                        // make the element visible by setting its opacity to 1
                        // Otherwise, hide the element by setting its opacity to 0
                        if (sectionOneScrollPercentage > path.triggerPoint && sectionOneScrollPercentage < path.endPoint) {
                            element.style.opacity = 1;
                        } else {
                            element.style.opacity = 0;
                        }
                    } else {
                        // If the path class is 'title-preproject', apply a special animation
                        if (path.class === 'title-preproject') {        
                            // Select the <g> element containing the SVG path for 'title-preproject' 
                            // This allows us to move and change the shape of the SVG               
                            const gElement = document.querySelector(`.title-preproject-animation`);

                            // If the current scroll percentage exceeds the triggerPoint, add the 'final' class
                            // This will initiate the transformation animation defined in the CSS
                            if (sectionOneScrollPercentage > path.triggerPoint) {
                                
                                gElement.classList.add('final');
                            } else {
                                // If the scroll percentage is below the triggerPoint, remove the 'final' class
                                // This will revert the transformation to its initial state
                                gElement.classList.remove('final');
                            }

                        // For all other paths without an endPoint, simply control their visibility based on scroll percentage
                        // If the current scroll percentage exceeds the triggerPoint
                        // make the element visible by setting its opacity to 1
                        // Otherwise, hide the element by setting its opacity to 0
                        } else if (sectionOneScrollPercentage > path.triggerPoint) {
                            element.style.opacity = 1;
                        } else {
                            element.style.opacity = 0;
                            }
                        }
                    });
                });

                         


                // Progess line Animation 

                // Start line path animation at 34% scroll, once the scroll positions is 10%  in section one begin the linear progess line animation
                const startPoint = 0.34;
                // End animation at 80% scroll, once the  scroll positions is 140% of section one the linear progess line animation will reach 100% using the animationRange 
                const endPoint = 0.8;   
                // Will help to decide when to start and complete the animation  (Range of 0.36)
                const animationRange = endPoint - startPoint;;
                // Increase this value greater than 1 to make the animation faster, lower than 1 to make it slower
                const speedFactor = 0.8;
                    
                if(sectionOneScrollPercentage < startPoint){
                    linePathOne.style.strokeDashoffset = 1;
                    linePathOne.style.opacity = 0;

                // If the sectionOneScrollPercentage is less then 0 then it will draw the line path animation, 
                // The strokeDashoffset goes from 1 to 0 if sectionOneScrollPercentage is lower then zero do nothing 
                } else if(sectionOneScrollPercentage > 0) {
                    // After 30% scroll, start the animation
                    // Map sectionOneScrollPercentage to our new range
                    let adjustedPercentage = (sectionOneScrollPercentage - startPoint) / animationRange;
                    
                    // Ensure adjustedPercentage is between 0 and 1
                    adjustedPercentage = Math.min(Math.max(adjustedPercentage, 0), 1);

                    // Apply the speed factor to make the animation faster
                    adjustedPercentage = Math.pow(adjustedPercentage, 1 / speedFactor);

                    // Calculate the strokeDashoffset
                    // It should start at 1 and decrease to 0 showing the full path by the end of the scroll position for the section 
                    let dashOffset = 1 - adjustedPercentage;
                    

                    // Update the path's dash offset
                    // The path with animate into the frame and complete by the end of the section 
                        linePathOne.style.strokeDashoffset = dashOffset;
                        linePathOne.style.opacity = 1;   
                    
                }
            

            }

        // Section Two Presentation Animation ----------------------------------------------------------------------------------------------------
        // -----------------------------------------------------------------------------------------------------------------------
        
            // Check if the top of the section is in view 
            // Once the top of the section is in view can now start the animations  
            if(scrollPosition > sectionTwoTopPosition) {
                

                // Loop through each path in the presentationTwoPaths array
                presentationTwoPaths.forEach(path => {
                     // Select all elements with the class specified in the current path object
                    const pathElements = document.querySelectorAll(`.${path.class}`);
                   

                    pathElements.forEach((element, index) => {
                        // Check if the path object has an endPoint defined
                        // For presentation two paths with an endPoint
                        if (path.endPoint) {
                        
                        // If the current scroll percentage is between the triggerPoint and endPoint
                        // make the element visible by setting its opacity to 1
                        // Otherwise, hide the element by setting its opacity to 0
                        if (sectionTwoScrollPercentage > path.triggerPoint && sectionTwoScrollPercentage < path.endPoint) {
                            element.style.opacity = 1;
                        } else {
                            element.style.opacity = 0;
                        }
                    } else {

                        // If the path class is 'title-feasibilty', apply a special animation
                        if (path.class === 'title-feasibilty') {  
                            // Select the <g> element containing the SVG path for 'title-feasibilty' 
                            // This allows us to move and change the shape of the SVG                
                            const gElement = document.querySelector(`.title-feasibilty-animation`);

                            // If the current scroll percentage exceeds the triggerPoint, add the 'final' class
                            // This will initiate the transformation animation defined in the CSS
                            if (sectionTwoScrollPercentage > path.triggerPoint) {
                             
                                gElement.classList.add('final');
                            } else {
                                // If the scroll percentage is below the triggerPoint, remove the 'final' class
                                // This will revert the transformation to its initial state
                                gElement.classList.remove('final');
                            }

                        // For all other paths without an endPoint, simply control their visibility based on scroll percentage
                        // If the current scroll percentage exceeds the triggerPoint
                        // make the element visible by setting its opacity to 1
                        // Otherwise, hide the element by setting its opacity to 0
                        } else if (sectionTwoScrollPercentage > path.triggerPoint) {
                            element.style.opacity = 1;
                        } else {
                            element.style.opacity = 0;
                            }
                        }
                    });
                });


                // Progess line Animation 
                  
                // Start line path animation at 10% scroll, once the scroll positions is 10%  in section Two begin the linear progess line animation 
                const startPoint = 0.2;
                // End animation at 140% scroll, once the  scroll positions is 140% of section Two the linear progess line animation will reach 100% using the animationRange
                const endPoint = 1.4;   
                // Will help to decide when to start and complete the animation
                const animationRange = endPoint - startPoint;;
                // Increase this value greater than 1 to make the animation faster, lower than 1 to make it slower
                const speedFactor = 1;
                    
                if(sectionTwoScrollPercentage < startPoint){
                    linePathTwo.style.strokeDashoffset = 1;
                    linePathTwo.style.opacity = 0;

                // If the sectionTwoScrollPercentage is less then 0 then it will draw the line path animation, 
                // The strokeDashoffset goes from 1 to 0 if sectionOneScrollPercentage is lower then zero do nothing 
                } else if(sectionTwoScrollPercentage > 0) {
                    // After 30% scroll, start the animation
                    // Map sectionOneScrollPercentage to our new range
                    let adjustedPercentage = (sectionTwoScrollPercentage - startPoint) / animationRange;
                    
                    // Ensure adjustedPercentage is between 0 and 1
                    adjustedPercentage = Math.min(Math.max(adjustedPercentage, 0), 1);

                    // Apply the speed factor to make the animation faster
                    adjustedPercentage = Math.pow(adjustedPercentage, 1 / speedFactor);

                    // Calculate the strokeDashoffset
                    // It should start at 1 and decrease to 0 showing the full path by the end of the scroll position for the section 
                    let dashOffset = 1 - adjustedPercentage;
                    

                    // Update the path's dash offset
                    // The path with animate into the frame and complete by the end of the section 
                    linePathTwo.style.strokeDashoffset = dashOffset;
                    linePathTwo.style.opacity = 1;   
                    
                }
            }


            // Section Three Presentation Animation ----------------------------------------------------------------------------------------------------
            // -----------------------------------------------------------------------------------------------------------------------

            // Check if the top of the section is in view 
            // Once the top of the section is in view can now start the animations  

            // console.log({sectionThreeScrollPercentage})
            
            if(scrollPosition > sectionThreeTopPosition) {
                
            // Loop through each path in the presentationThreePaths array
            presentationThreePaths.forEach(path => {
            // Select all elements with the class specified in the current path object
            const pathElements = document.querySelectorAll(`.${path.class}`);
        

            pathElements.forEach((element, index) => {
                // Check if the path object has an endPoint defined
                // For presentation three paths with an endPoint 
                if (path.endPoint) {
                
                // If the current scroll percentage is between the triggerPoint and endPoint
                // make the element visible by setting its opacity to 1
                // Otherwise, hide the element by setting its opacity to 0
                if (sectionThreeScrollPercentage > path.triggerPoint && sectionThreeScrollPercentage < path.endPoint) {
                    element.style.opacity = 1;
                } else {
                    element.style.opacity = 0;
                }
            } else {
                
                // If the path class is 'title-development', apply a special animation
                if (path.class === 'title-development') {  
                    
                    // Select the <g> element containing the SVG path for 'title-development' 
                    // This allows us to move and change the shape of the SVG                
                    const gElement = document.querySelector(`.title-development-animation`);

                    // If the current scroll percentage exceeds the triggerPoint, add the 'final' class
                    // This will initiate the transformation animation defined in the CSS
                    if (sectionThreeScrollPercentage > path.triggerPoint) {
                        
                        gElement.classList.add('final');
                    } else {
                        // If the scroll percentage is below the triggerPoint, remove the 'final' class
                        // This will revert the transformation to its initial state
                        gElement.classList.remove('final');
                    }
                
                } 

                // If the path class is 'circle', apply a special animation to rotate the element 360 degrees using CSS 
                if (path.class === 'circle' ) {
                     // Select the <g> element containing the SVG path for 'circle' 
                    // This allows us to move and change the shape of the SVG 
                    const circleElement = document.querySelector('.circle-animation');

                    // If the current scroll percentage exceeds the animatePoint, add the 'rotate' class
                    // This will initiate the transformation animation defined in the CSS
                    if (sectionThreeScrollPercentage > path.animatePoint) {
                        // Add the 'rotate' class when triggerPoint is met
                        circleElement.classList.add('rotate');
                    } 
                }


                // If the path class is 'circle-info', apply a special animation to move the circle-info to the left using CSS 
                 if (path.class === 'circle-info-animation') {   
         
                    // Select the <g> element containing the SVG path for 'circle-info' 
                    // This allows us to move and change the shape of the SVG 
                    const circleInfoElement = document.querySelector(`.circle-info-animation`);

                    // If the current scroll percentage exceeds the animatePoint, add the 'final' class
                    // This will initiate the transformation animation defined in the CSS
                    if (sectionThreeScrollPercentage > path.animatePoint) {
                       
                        circleInfoElement.classList.add('final');
                    } else {
                        // If the scroll percentage is below the triggerPoint, remove the 'final' class
                        // This will revert the transformation to its initial state
                        circleInfoElement.classList.remove('final');
                    }
                
                } 

                // For all other paths without an endPoint, simply control their visibility based on scroll percentage
                // If the current scroll percentage exceeds the triggerPoint
                // make the element visible by setting its opacity to 1
                // Otherwise, hide the element by setting its opacity to 0    
                
                if (sectionThreeScrollPercentage > path.triggerPoint) {
                    element.style.opacity = 1;
                } else {
                    element.style.opacity = 0;
                    }
                }
            });
        });



        // Progess line Animation 

        // Start line path animation at 10% scroll, once the scroll positions is 10%  in section one begin the linear progess line animation
        const startPoint = 0.1;
        // End animation at 140% scroll, once the  scroll positions is 140% of section one the linear progess line animation will reach 100% using the animationRange 
        const endPoint = 1.4;   
        // Will help to decide when to start and complete the animation 
        const animationRange = endPoint - startPoint;;
        // Increase this value greater than 1 to make the animation faster, lower than 1 to make it slower
        const speedFactor = 1.5;
            
        if(sectionThreeScrollPercentage < startPoint){
            linePathThree.style.strokeDashoffset = 1;
            linePathThree.style.opacity = 0;

        // If the sectionThreeScrollPercentage is less then 0 then it will draw the line path animation, 
        // The strokeDashoffset goes from 1 to 0 if sectionOneScrollPercentage is lower then zero do nothing 
        } else if(sectionThreeScrollPercentage > 0) {
            // After 30% scroll, start the animation
            // Map sectionOneScrollPercentage to our new range
            let adjustedPercentage = (sectionThreeScrollPercentage - startPoint) / animationRange;
            
            // Ensure adjustedPercentage is between 0 and 1
            adjustedPercentage = Math.min(Math.max(adjustedPercentage, 0), 1);

            // Apply the speed factor to make the animation faster
            adjustedPercentage = Math.pow(adjustedPercentage, 1 / speedFactor);

            // Calculate the strokeDashoffset
            // It should start at 1 and decrease to 0 showing the full path by the end of the scroll position for the section 
            let dashOffset = 1 - adjustedPercentage;
            

            // Update the path's dash offset
            // The path with animate into the frame and complete by the end of the section 
            linePathThree.style.strokeDashoffset = dashOffset;
            linePathThree.style.opacity = 1;   
            
        }
        }
        

        if (isScrollingUp) {
                // Add your custom actions for scrolling up here
                console.log("Scrolling up");

                  // This is a button, when fixed is removed from the class the button will disappear and be no longer fixed to the screen 
                  removeAnimation.classList.remove('fixed')
            
            }

        });

        // Add a resize event listener to the window
        // This function will run every time the window is resized
        window.addEventListener('resize', () => {
            // Update container dimensions on window resize
            // This ensures section_one remains correctly positioned and sized if the window changes
            containerLeft = container.getBoundingClientRect().left;
            containerWidth = container.offsetWidth;
            // Set left position to keep section_one aligned with the container
            // This prevents section_one from expanding to full viewport width
            sectionOne.style.left = `${containerLeft}px`;
             
            // Set width to match the container's width
            // This ensures section_one maintains its original width when fixed
            sectionOne.style.width = `${containerWidth}px`;
        });
    });

    
   
            
    // ----
    
})();