// CCPL Strategic Plan webpage
// author:  Jen Bishop-INST630 Final Project -Fall 2016

// declare vision variable with text for banner mouse event
var vision = "Inspire, educate, and empower our community.";

//declare mission variable with text for banner mouse event
var mission = "We create and provide our community with enriching and innovative\
	resources, experiences, and services.";

//declare coreValues variable with list for banner mouse event
var coreValues = "<li> We treat everyone equally and with respect </li> \
	<li> We meet each other with humor and kindness </li> \
	<li> We build community </li> \
	<li> We are risk-takers and leaders </li> \
	<li> We inspire curiosity </li> \
 	<li> We embrace challenges and learn from mistakes </li> ";

//declare customerService variable with text for banner mouse event 	
var customerService = "Carroll County Public Library strives to be an active part of \
	our community, serving, educating, and fostering growth toward a brighter future. \
	</br> </br> We are your neighbors and take pride in providing you with the best ideas, \
	information, and resources to discover, learn, and grow.";

//declare branches variable with list for banner mouse event	
var branches = "<li> Eldersburg Branch....6400 W. Hemlock Drive </li> \
	<li> Finksburg Branch....2265 Old Westminster Pike </li> \
	<li> Mount Airy Branch....705 Ridge Avenue </li> \
	<li> North Carroll Branch....2255 Hanover Pike </li> \
	<li> Taneytown Branch....10 Grand Drive </li> \
	<li> Westminster Branch....50 East Main Street </li>";

//declare infoMessage variable with text for banner mouse event
var infoMessage = '"Libraries are not the consequence of progress and prosperity,\
	they are the cause of progress and prosperity" Andrew Carnegie, 1889';
	
//declare text variable to hold scrolling stats info
var text = ["Cardholders: 96,266 (57% of county pop.)", "CCPL Budget: $9,732,818", "Number of \
Educational Activities: 6,834","Total Educational Activity Attendance: 177,076", "Circulation: \
3.7 million", "CCPL by the Numbers: 2016"];

// declare counter variable for updating stats message
var counter = 0;

// setInterval method to call change function to update stats heading every 2.5 seconds
setInterval(change, 2500);
function change() {
    document.getElementById("stats").innerHTML = text[counter];
    counter++;
    if(counter >= text.length) { 
    	counter = 0; 
    }
}

//function for mouseover event for vision block to update info space with vision text
// and update background color to vision block color
function overDarkBlue() {
	document.getElementById("info").innerHTML = vision;
	document.getElementById("info").style.backgroundColor = "#0d387c";
}

//function for mouseover event for mission block to update info space with mission text
// and update background color to mission block color
function overRed() {
	document.getElementById("info").innerHTML = mission;
	document.getElementById("info").style.backgroundColor = "#ff0000";
}

//function for mouseover event for core values block to update info space with core values list
// and update background color to core values block color
function overGreen() {
	document.getElementById("info").innerHTML= coreValues;
	document.getElementById("info").style.backgroundColor = "#33cc33";
}

//function for mouseover event for customer service block to update info space with customer 
// service text and update background color to customer service block color
function overYellow() {
	document.getElementById("info").innerHTML = customerService;
	document.getElementById("info").style.backgroundColor = "#e6e600";
}

//function for mouseover event for branches block to update info space with branches list
// and update background color to branches block color
function overLightBlue() {
	document.getElementById("info").innerHTML = branches;
	document.getElementById("info").style.backgroundColor = "#005ce6";
}

//function for mouseout event for info block to update info space with initial info quote
// and update background color back to grey
function mouseOut () {
	document.getElementById("info").innerHTML = infoMessage;
	document.getElementById("info").style.backgroundColor = "grey";
}   
    
//function for mouseover event for Lifelong Education image to update space with service priority
// info with neutral background color and larger text  
function overEducation() {
	document.getElementById("education").innerHTML = "All ages will have access to collections,\
	educational activities, and services that engage them in self-directed and lifelong education\
	to enrich their lives.";
	document.getElementById("education").style.backgroundColor = "#ffffcc";
	document.getElementById("education").style.fontSize = "xx-large";
}

//function for mouseout event for Lifelong Education image to update space back to initial image
// and text
function outEducation() {
	document.getElementById("education"). innerHTML = "<img src='EP.jpg'> Lifelong Education";
	document.getElementById("education").style.backgroundColor = "white";
	document.getElementById("education").style.fontSize = "x-large";
}

//function for mouseover event for Community Engagement image to update space with service priority
// info with neutral background color and larger text  
function overCommunity() {
	document.getElementById("community").innerHTML = "Local businesses, schools, and organizations\
	 will make connections with the library through our services, resources and events.";
	document.getElementById("community").style.backgroundColor = "#ffffcc";
	document.getElementById("community").style.fontSize = "xx-large";
}

//function for mouseout event for Community Engagement image to update space back to initial image
// and text
function outCommunity() {
	document.getElementById("community"). innerHTML = "<img src='Battle.jpg'>Community Engagement";
	document.getElementById("community").style.backgroundColor = "white";
	document.getElementById("community").style.fontSize = "x-large";
} 

//function for mouseover event for Access to Technology image to update space with service priority
// info with neutral background color and larger text  
function overAccess() {
	document.getElementById("access").innerHTML = "Residents will be aware\
	of the availability, and have access to, current and emerging technologies and to the \
	assistance they need to use them effectively in their daily lives.";
	document.getElementById("access").style.backgroundColor = "#ffffcc";
	document.getElementById("access").style.fontSize = "xx-large";
}

//function for mouseout event for Access to Technology image to update space back to initial image
// and text
function outAccess() {
	document.getElementById("access"). innerHTML = "<img src='VR_TechStroll.jpg'> Access to Technology";
	document.getElementById("access").style.backgroundColor = "white";
	document.getElementById("access").style.fontSize = "x-large";
}
	 