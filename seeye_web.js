"""
Web plugin for SeeYe Tech, based on Youtube and Chrome.

seeye_web.js
@ johson
@ SeeYe Tech
@ Nov 1, 2018
"""

// Locate video player button
// var chrome_button = document.getElementsByClassName('ytp-chrome-button')[0]
var movie_player = document.getElementById('movie_player')
var chrome_right_controls = document.getElementsByClassName('ytp-right-controls')[0]
// var setting_popup = document.getElementsByClassName('ytp-popup ytp-settings-menu')[0]

// Create and isert seeye button with logo
var seeye_button = createSeeyeButton()
chrome_right_controls.insertBefore(seeye_button, chrome_right_controls.firstChild)

// Create and insert seeye popup
var seeye_popup = createSeeyePopup()
seeye_popup.style.width=movie_player.offsetWidth / 3 + "px"
seeye_popup.style.height=movie_player.offsetHeight + "px"
movie_player.appendChild(seeye_popup)



function createSeeyeButton() {
	"Return seeye button with icon."

	// Create seeye button
	var seeye_button = document.createElement("BUTTON")
	seeye_button.className = "ytp-button seeye-button"
	seeye_button.title = "seeye"
	seeye_button.onclick = function() {
		seeyeClick(seeye_button)
	}

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

	// Add icon
	seeye_button.innerHTML='<i class="fa fa-cart-arrow-down"></i>'

	return seeye_button
}


function seeyeClick(seeye_button) {
	"Onclick seeye button, show/hide popup panel."
	var seeye_popup = document.getElementsByClassName("ytp-popup ytp-seeye-menu")[0]

	if (seeye_popup.style.display == "none") {
		console.log("switch to inline")
		seeye_popup.style.display = "inline"
		console.log(seeye_popup.style.display)
	}
	else {
		console.log("switch to none")
		seeye_popup.style.display = "none"
	}

}


function createSeeyeItem(img_src, name, link) {
	"Create a single product item."

	var seeye_item = document.createElement("DIV")
	seeye_item.className="seeye-item"
	seeye_item.style.width="inherit"
	seeye_item.style.height="inherit"
	seeye_item.style.textAlign="center"

	var a = document.createElement("A")
	a.href = link
	a.style.width="inherit"

	var img = document.createElement("IMG")
	img.src = img_src
	img.style.width= "80%"
	img.style.marginTop= "20px"

	var p = document.createElement("P")
	p.innerHTML = name
	
	// Append
	a.appendChild(img)
	a.appendChild(p)
	seeye_item.appendChild(a)

	return seeye_item
}

function createSeeyePopup() {
	"Return seeye popup panel."

	// Create popup div
	var seeye_popup = document.createElement("DIV")
	seeye_popup.className="ytp-popup ytp-seeye-menu"
	seeye_popup.style.display="none"
	seeye_popup.style.right="0"
	seeye_popup.style.zIndex="10"
	seeye_popup.style.overflow="scroll"

	// // Create popup panel
	// var seeye_popup_panel = document.createElement("DIV")
	// seeye_popup_panel.className="ytp-panel"

	// // Append
	// seeye_popup.appendChild(seeye_popup_panel)

	// Create seeye items
	var img_src = []
	var name = []
	var link = []
	
	img_src.push("https://slimages.macysassets.com/is/image/MCY/products/9/optimized/3773449_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$")
	name.push("Sunset coffee table")
	link.push("https://www.macys.com/shop/product/sunset-coffee-table-quick-ship?ID=2911648&CategoryID=35423#fn=sp%3D1%26spc%3D1538%26ruleId%3D129%7CBOOST%20SAVED%20SET%7CBOOST%20ATTRIBUTE%26searchPass%3DmatchNone%2")
	
	img_src.push("https://slimages.macysassets.com/is/image/MCY/products/7/optimized/8893527_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$")
	name.push("Brodyn Queen Bed")
	link.push("https://www.macys.com/shop/product/brodyn-queen-bed-quick-ship?ID=5157496&tdp=cm_app~zMCOM-NAVAPP~xcm_zone~zPDP_ZONE_B~xcm_choiceId~zcidM06MAU-0a1a6c85-584a-4fd9-9668-021302acb95a%40H8%40customers%2Ba")
	

	for (var i = 0; i < img_src.length; i++) {
		seeye_item = createSeeyeItem(img_src[i], name[i], link[i])
		seeye_popup.appendChild(seeye_item)
	}

	return seeye_popup
}


