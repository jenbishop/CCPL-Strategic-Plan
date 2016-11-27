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
	
var branches = "<li> Eldersburg Branch....6400 W. Hemlock Drive </li> \
	<li> Finksburg Branch....2265 Old Westminster Pike </li> \
	<li> Mount Airy Branch....705 Ridge Avenue </li> \
	<li> North Carroll Branch....2255 Hanover Pike </li> \
	<li> Taneytown Branch....10 Grand Drive </li> \
	<li> Westminster Branch....50 East Main Street </li>";

var infoMessage = '"Libraries are not the consequence of progress and prosperity,\
	they are the cause of progress and prosperity" Andrew Carnegie, 1889';
	

function overDarkBlue() {
	document.getElementById("info").innerHTML = vision;
	document.getElementById('info').style.backgroundColor = "#0d387c";
}

function overRed() {
	document.getElementById("info").innerHTML = mission;
	document.getElementById("info").style.backgroundColor = "#ff0000";
}

function overGreen() {
	document.getElementById("info").innerHTML= coreValues;
	document.getElementById("info").style.backgroundColor = "#33cc33";
}

function overYellow() {
	document.getElementById("info").innerHTML = customerService;
	document.getElementById("info").style.backgroundColor = "#e6e600";
}

function overLightBlue() {
	document.getElementById("info").innerHTML = branches;
	document.getElementById("info").style.backgroundColor = "#005ce6";
}
    
function mouseOut () {
	document.getElementById("info").innerHTML = infoMessage;
	document.getElementById("info").style.backgroundColor = "grey";
}   
    
function overEducation() {
	document.getElementById("education").innerHTML = "All ages will have access to collections,\
	educational activities, and services that engage them in self-directed and lifelong education\
	to enrich their lives.";
	document.getElementById("education").style.backgroundColor = "#ffffcc";
	document.getElementById("education").style.fontSize = "xx-large";
}

function outEducation() {
	document.getElementById("education"). innerHTML = "<img src='EP.jpg'> Lifelong Education";
	document.getElementById("education").style.backgroundColor = "white";
	document.getElementById("education").style.fontSize = "x-large";
}

function overCommunity() {
	document.getElementById("community").innerHTML = "Local businesses, schools, and organizations\
	 will make connections with the library through our services, resources and events.";
	document.getElementById("community").style.backgroundColor = "#ffffcc";
	document.getElementById("community").style.fontSize = "xx-large";
}

function outCommunity() {
	document.getElementById("community"). innerHTML = "<img src='Battle.jpg'>Community Engagement";
	document.getElementById("community").style.backgroundColor = "white";
	document.getElementById("community").style.fontSize = "x-large";
} 

function overAccess() {
	document.getElementById("access").innerHTML = "Residents will be aware\
	of the availability, and have access to, current and emerging technologies and to the \
	assistance they need to use them effectively in their daily lives.";
	document.getElementById("access").style.backgroundColor = "#ffffcc";
	document.getElementById("access").style.fontSize = "xx-large";
}

function outAccess() {
	document.getElementById("access"). innerHTML = "<img src='VR_TechStroll.jpg'> Access to Technology";
	document.getElementById("access").style.backgroundColor = "white";
	document.getElementById("access").style.fontSize = "x-large";
}




	 