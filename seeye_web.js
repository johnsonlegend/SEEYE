"""
Web plugin for SeeYe Tech, based on Youtube and Chrome.

seeye_web.js
@ johson
@ SeeYe Tech
@ Nov 1, 2018
"""

// Locate video player button
var chrome_controls = document.getElementsByClassName('ytp-chrome-controls')[0]
var chrome_right_controls = document.getElementsByClassName('ytp-right-controls')[0]

// Create seeye button with logo
var seeye_button = createSeeyeButton()


// Insert seeye button
chrome_right_controls.insertBefore(seeye_button, chrome_right_controls.firstChild)



function createSeeyeButton() {
	"Return seeye button with icon."

	// Create seeye button
	var seeye_button = document.createElement("BUTTON")
	seeye_button.className = "ytp-button seeye-button"
	seeye_button.title = "seeye"

	// Add style and attribute
	seeye_button.setAttribute("aria-haspopup",true)
	seeye_button.style.textAlign="center"
	seeye_button.style.position="relative"
	seeye_button.style.bottom="14px"
	// seeye_button.setAttribute("aria-owns","ytp-id-17")
	// seeye_button.style.backgroundColor="transparent"
	// seeye_button.style.border="none"
	// seeye_button.style.color="inherit"
	// seeye_button.style.cursor="pointer"
	// seeye_button.style.opacity="0.9"



	// Add link to Font Awesome Icons
	var icon_link=document.createElement('LINK')
	icon_link.rel="stylesheet"
	icon_link.href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
	document.head.appendChild(icon_link)

	seeye_button.innerHTML='<i class="fa fa-cart-arrow-down"></i>'


}