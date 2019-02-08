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
		// console.log("switch to inline")
		seeye_popup.style.display = "inline"
		// console.log(seeye_popup.style.display)
	}
	else {
		console.log("switch to none")
		seeye_popup.style.display = "none"
	}

}


function createSeeyeItem(img_src, name, link, price) {
	"Create a single product item."

	var movie_player = document.getElementById('movie_player')

	var seeye_item = document.createElement("DIV")
	seeye_item.className="seeye-item"
	seeye_item.style.width="200px"
	seeye_item.style.height="80px"
	seeye_item.style.margin="15px"
	seeye_item.style.textAlign="center"

	var a = document.createElement("A")
	a.href = link

	var img = document.createElement("IMG")
	img.src = img_src
	img.style.width= "60px"
	img.style.height= "70px"
	img.style.float="left"

	var p = document.createElement("P")
	p.innerHTML = name
	p.style.display="inline"

	var rating = document.createElement("DIV")
	rating.className="rating-star"
	rating.style.position="relative"
	rating.style.left=movie_player.offsetWidth / 6 + "px"
	rating.style.height="15px"

	var star_outer = document.createElement("DIV")
	star_outer.className="star-outer"
	star_outer.style.position="absolute"
	star_outer.style.top="0"
	star_outer.style.left="0"
	star_outer.style.whiteSpace="nowrap"

	var star_inner = document.createElement("DIV")
	star_inner.className="star-inner"
	star_inner.style.position="absolute"
	star_inner.style.top="0"
	star_inner.style.left="0"
	star_inner.style.whiteSpace="nowrap"
	star_inner.style.overflow="hidden"
	star_inner.style.width="43.5px"

	star_outer.innerHTML='<i class="fa fa-star-o" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i><i class="fa fa-star-o" aria-hidden="true"></i>'

	star_inner.innerHTML='<i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i>'

	rating.appendChild(star_outer)
	rating.appendChild(star_inner)
	
	var p2 = document.createElement("P")
	p2.innerHTML = "Price: $" + price
	p2.style.display="inline"

	// Append
	a.appendChild(img)
	a.appendChild(p)
	a.appendChild(rating)
	a.appendChild(p2)
	seeye_item.appendChild(a)

	return seeye_item
}

function createTwoCategory(catg1, catg2, img_src1, img_src2) {
	"Return two-column-style category."

	var seeye_two_catg = document.createElement("DIV")
	seeye_two_catg.className="seeye-two-catg"
	seeye_two_catg.style.width="200px"
	seeye_two_catg.style.textAlign="center"

	// two-column-style, float:left
	var left = document.createElement("DIV")
	left.style.width="50%"
	left.style.float="left"
	left.style.cursor="pointer"
	left.onclick=function () {
		navigate_to_category(catg1)
	} 
	var right = document.createElement("DIV")
	right.style.width="50%"
	right.style.float="right"

	var img1 = document.createElement("IMG")
	img1.src = img_src1
	img1.style.width= "90px"
	img1.style.height= "100px"
	img1.style.marginTop= "10px"
	var p1 = document.createElement("P")
	p1.innerHTML = catg1
	p1.style.display="inline"

	var img2 = document.createElement("IMG")
	img2.src = img_src2
	img2.style.width= "90px"
	img2.style.height= "100px"
	img2.style.marginTop= "10px"
	var p2 = document.createElement("P")
	p2.innerHTML = catg2
	p2.style.display="inline"

	left.appendChild(img1)
	left.appendChild(p1)
	right.appendChild(img2)
	right.appendChild(p2)
	seeye_two_catg.appendChild(left)
	seeye_two_catg.appendChild(right)

	return seeye_two_catg
}

function createSeeyeCategory(seeye_popup) {
	"Create category div in two-column-style."

	seeye_two_catg1 = createTwoCategory("Table", "Bed", "https://slimages.macysassets.com/is/image/MCY/products/9/optimized/3773449_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$", "https://slimages.macysassets.com/is/image/MCY/products/7/optimized/8893527_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$")
	seeye_two_catg2 = createTwoCategory("Sofa", "Cabinet", "https://res-5.cloudinary.com/goedeker-s/image/upload/d_notavl.jpg/v1/media/catalog/product/s/i/simmons-6485-03-albany-slate.jpg", "https://scontent-amt2-1.cdninstagram.com/vp/52d57e1043152edcf4830fd6cf743410/5C925FB1/t51.2885-15/e35/44576124_270297947005818_8443078414178563520_n.jpg")
	seeye_two_catg3 = createTwoCategory("Chair", "Other", "https://secure.img2-fg.wfcdn.com/im/93476064/resize-h800-w800%5Ecompr-r85/2805/28051632/Aletha+Solid+Wood+Dining+Chair.jpg", "https://secure.img2-fg.wfcdn.com/im/93476064/resize-h800-w800%5Ecompr-r85/2805/28051632/Aletha+Solid+Wood+Dining+Chair.jpg")
	seeye_popup.appendChild(seeye_two_catg1)
	seeye_popup.appendChild(seeye_two_catg2)
	seeye_popup.appendChild(seeye_two_catg3)
}

function createSeeyePopup() {
	"Return seeye popup panel."

	// Create popup div
	var seeye_popup = document.createElement("DIV")
	seeye_popup.className="ytp-popup ytp-seeye-menu"
	seeye_popup.style.display="none"
	seeye_popup.style.right="0"
	seeye_popup.style.zIndex="10"
	seeye_popup.style.overflowY="scroll"


	createSeeyeCategory(seeye_popup)

	return seeye_popup
}

function navigate_to_category(catg) {
	"When click on a category, navigate to that category page."

	// Clear the panel
	var catg_div = document.getElementsByClassName("seeye-two-catg")
	for (var i = catg_div.length - 1; i >= 0; i--) {
		catg_div[i].parentElement.removeChild(catg_div[i])
	}

	// Create seeye items
	var seeye_popup = document.getElementsByClassName("ytp-popup ytp-seeye-menu")[0]
	var img_src = []
	var name = []
	var link = []
	var price = []
	
	img_src.push("https://secure.img1-fg.wfcdn.com/im/38774897/resize-h800%5Ecompr-r85/4381/43817957/Alsey+Rustic+Teak+and+4+Drawer+Accent+Chest.jpg")
	name.push("Alsey Rustic Teak and 4 Drawer Accent Chest")
	link.push("https://www.wayfair.com/furniture/pdp/foundry-select-alsey-rustic-teak-and-4-drawer-accent-chest-fnds1469.html")
	price.push("346.99")

	img_src.push("https://secure.img1-fg.wfcdn.com/im/13525664/resize-h800%5Ecompr-r85/3932/39325902/Idella+Side+Table.jpg")
	name.push("Idella Side Table")
	link.push("https://www.wayfair.com/outdoor/pdp/union-rustic-idella-side-table-unrs1441.html")
	price.push("196.99")
	
	for (var i = 0; i < img_src.length; i++) {
		seeye_item = createSeeyeItem(img_src[i], name[i], link[i], price[i])
		seeye_popup.appendChild(seeye_item)
	}
}





