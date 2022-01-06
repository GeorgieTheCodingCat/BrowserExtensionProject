//buton listeners for the html in the index.html file
window.onload = function () 
{
	function update()
	{
		var enabled = chrome.extension.getBackgroundPage().enabled;
		var disabled = !enabled;
	}

	
    document.getElementById('off').onclick = function () 
	{
		
		update();
        
	};

	update();
}

//button listeners for the popup html
document.getElementById('warnings').onclick = function () 
{
		
	popup();
};


//finds the date and time
var year = new Date().getFullYear()
var dayOfTheWeek = getDayOfWeek(new Date().getDay())
var month = getMonth(new Date().getMonth())
var isToday = String(new Date().getDate()).padStart(2, '0');

function getDayOfWeek(day)
{
	
	var dayInText="";
	if(day == 1){ dayInText = "Monday"}
	else if(day == 2){ dayInText = "Tuesday"}
	else if(day == 3){ dayInText = "Wedesday"}
	else if(day == 4){ dayInText = "Thursday"}
	else if(day == 5){ dayInText = "Friday"}
	else if(day == 6){ dayInText = "Saturday"}
	else if(day == 7){ dayInText = "Sunday"}
	
	return dayInText
	
}

function getMonth(month)
{
	
	var monthOfYear="";
	if(month == 0){ monthOfYear = "January"}
	else if(month == 1){ monthOfYear = "Febuary"}
	else if(month == 2){ monthOfYear = "March"}
	else if(month == 3){ monthOfYear = "April"}
	else if(month == 4){ monthOfYear = "May"}
	else if(month == 5){ monthOfYear = "June"}
	else if(month == 6){ monthOfYear = "July"}
	else if(month == 7){ monthOfYear = "Augest"}
	else if(month == 8){ monthOfYear = "September"}
	else if(month == 9){ monthOfYear = "October"}
	else if(month == 10){ monthOfYear = "November"}
	else if(month == 11){ monthOfYear = "December"}
	
	return monthOfYear
	
}

//output the time and date
document.getElementById('date').textContent = dayOfTheWeek + "," + month  + "/" + isToday +"/" + year;
var currentTime = new Date().toLocaleTimeString()
document.getElementById('time').textContent = currentTime;

//send a message to the content script
function popup()
 {
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "start"});
   });
}
