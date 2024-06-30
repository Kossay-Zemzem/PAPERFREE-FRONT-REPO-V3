### TODAY'S OBJECTIVE

- [ ] add title / explanatory icon to each page (CIN , PASSEPORT  , etc....) [start with a figma concept maybe]
- [ ] Add animation to progress bar
- [ ] Check background animation (find better ways maybe ? idk)
- [ ] add transition animation to the rest of the pages 
- [ ] Add border to preview of document( needs caution because I ركحتها بالسيف)
- [ ] add animation to "details button" like the ones in other buttons for now
- [x] Test page animation using UseRef() hook and opacitiy-transition
- [x] Center every page the middle (veritcally and horizontally)
- [x] Better style the uploaded image preview - make image stay in a fixed range , no layout shifting [in progress] (filename not wrapping is causing th width of the thing to increase )
- [x] add smooth transtions between pages (added to Home and CIN)


### Known issues
- [x] Icon inside inputs offsets padding  [Last effort solution-> put the icon outside the input] 
- [ ] Input icon overlaps the text when it surpasses a certa n amount of characters 
- [ ] Logout button gradient doen't work with animations (and smooting them)
### Misc
[ ] Recap very quickly "how to implement multi page in react" the way it was done here [in progress using LaTeX]
### High priority  [UNFINISHED]
- [ ] Fix file input 
- [x] Figure out how to conditionally render success/failure icon (Bro code  conditional rendering)
- [ ] 
###  Medium priority [UNFINISHED]
- [ ] 
### Low priority  [UNFINISHED]
- [ ] 
### Implementing / modifying components and parts
- [x] Add logout icon/text to all pages
- [ ] add title / explanatory icon to each page (CIN , PASSEPORT  , etc....)
- [ ] Implement **login/sign** up page before 
	- [ ] increase size of boxes
- [ ] Implement **Results** page
	- [ ] Progress bar animation (entering) later
	- [x]  Success/failure variable icon and text loading

### Visual changes
- [x] Remove reset button from all pages
- [x] Center every page the middle (veritcally and horizontally)
- [ ] Better style the uploaded image preview - make image stay in a fixed range , no layout shifting [in progress]
- [x] Add icons to sign up page (and other places if possible) [In progress]
- [x] -Improve input file design [In progress] [first iteration done]
- [x]  Figure out how to change file upload text to araribic OR remove it
- [ ] -add animations and smooth things to elements
	- [ ] click animations (file input and the other inputs)
	- [ ] 
- [ ] Test background animation CSS [[so far so many issues]]
### Functional changes
- [ ] -Figure out why the bottom footer doesn't reach the very end of the page
- [ ] Figure out why the custom cursor doesn't work in the entire page (only top half works)


### Other changes

- [x] - Test diffrent background and general styling 
- [x] -Decide main elements of to put in header and footer
- [x] -fix upload image box color to match the other cards
- [x] -Fix cards text color from black to white
- [x] -Change all class attributes to className atrributes to avoid future problems (cause it works for now)
- [x] -Add temporary logo (as a component maybe)
