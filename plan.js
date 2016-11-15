// CCPL Strategic Plan webpage
// author:  Jen Bishop-INST630

var vision = "Inspire, educate, and empower our community.";

var mission = "We create and provide our community with enriching and innovative\
	resources, experiences, and services.";

var coreValues = "<li> We treat everyone equally and with respect </li> \
	<li> We meet each other with humor and kindness </li> \
	<li> We build community </li> \
	<li> We are risk-takers and leaders </li> \
	<li> We inspire curiosity </li> \
 	<li> We embrace challenges and learn from mistakes </li> ";
 	
var customerService = "Carroll County Public Library strives to be an active part of \
	our community, serving, educating, and fostering growth toward a brighter future. \
	</br> </br> We are your neighbors and take pride in providing you with the best ideas, \
	information, and resources to discover, learn, and grow.";
	
var branches = "<li> Eldersburg Branch </li> \
	<li> Finksburg Branch </li> \
	<li> Mount Airy Branch </li> \
	<li> North Carroll Branch </li> \
	<li> Taneytown Branch </li> \
	<li> Westminster Branch </li>";

var infoMessage = '"Libraries are not the consequence of\
	progress and prosperity, they are the cause of progress and prosperity"\
	Andrew Carnegie, 1889';
	

function overDarkBlue() {
	document.getElementById("info").innerHTML = vision;
}

function overRed() {
	document.getElementById("info").innerHTML = mission;
}

function overGreen() {
	document.getElementById("info").innerHTML= coreValues;
}

function overYellow() {
	document.getElementById("info").innerHTML = customerService;
}

function overLightBlue() {
	document.getElementById("info").innerHTML = branches;
}
    
function mouseOut () {
	document.getElementById("info").innerHTML = infoMessage;
}   
    

			