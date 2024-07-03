- [ ] Consider recording the part of the app that works to show animtions and upload functionalty
### FUNCTIONAL OBJECTIVES (because categorizing them is taking too much time)
- [ ] Add pop up window for details window
- [ ] Add border to preview of document( needs caution because I ركحتها بالسيف)
- [ ] Skip the passport and certificat pages temporarly to test a full unit of doucment upload , analysis and results +
- [ ] Consider which version of title card to use (main branch VS alternate-card-size-test branch VS title-alt-3 )

- [x] add title / explanatory icon to each page (CIN , PASSEPORT  , etc....) [start with a figma concept maybe] 
	- [x]  add the title card with icon on top middle and drop the form down (basically returning it to original position)
	- [x] Consider scaling it up to occupy more space on top. Make it wider than the form cards which means it will have to be put seperatly between the form and the header and might mess up the image preview
- [x] Add title card for the other two documents

- [x] Add animation to progress bar (initial)


- [x] Test page animation using UseRef() hook and opacitiy-transition
- [x] Center every page the middle (veritcally and horizontally)
- [x] Better style the uploaded image preview - make image stay in a fixed range , no layout shifting [in progress] (filename not wrapping is causing th width of the thing to increase )
- [x] add smooth transtions between pages (added to Home and CIN)

### Animations objectives
- [ ] maybe add a smooth transition between before and after image preview shows up (form translates to side and preview pops in or something)
- [ ] add pop in animation for icon result (zoom in+rotate and spring transition for the rotation) +
- [ ] add animation to "details button" like the ones in other buttons for now +
- [ ] add transition animation to the rest of the pages 

### Known issues
- [x] Icon inside inputs offsets padding  [Last effort solution-> put the icon outside the input] 
- [ ] Input icon overlaps the text when it surpasses a certain n amount of characters 
- [ ] Logout button gradient doesn't work with animations (and smoothing them)
- [ ] Check background animation (find better ways maybe ? idk)
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
