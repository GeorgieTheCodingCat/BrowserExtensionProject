//global variables
 var vulnerablities = []
 var foundVulnerablities = [];
 var parsedData = [];
 var count = 0;


//parse the website being viewed
function parseSourceCode()
{
  //get script tags store everything inbetween tags into an array
  var scriptTags = document.getElementsByTagName('script');
  var parse = [];

  //short lived variable used to hold parsed data between <script></script>
  var temp1="";
  var temp2="";

  //parse the website and store the data
  for ( var i = 0; i < scriptTags.length; i ++ ){parse[i] = scriptTags[i];}


  //parse again, keep only data between <script></script>
  for(i=0; i<parse.length; i++){temp1 = parse[i].outerHTML;}

  
  //the parsed out data is now stored as a string
  //split it each line by line by using ; as an indicator character
  //store it into the variable parsedData
  temp2 = temp1.toString();
  parsedData = temp2.split(";");

  
}

//find the source/sink functions
function findVulnerbilities()
{
  //find if the sinks and sources are in the parsed data array
  //O(n^2) time
  for(i=0; i<parsedData.length; i++)
  {
      for(var j=0; j<vulnerablities.length; j++)
      {
        if(parsedData[i].includes(vulnerablities[j]))
        {

            //count how many sink/source functions and store them
            if(foundVulnerablities.length == 0)
            {
              foundVulnerablities[0] = (parsedData[j]);
            }
            else
            {
              foundVulnerablities[count] = (parsedData[j]);
            }
            
            count++;
        }
      }
  }
}

//outpur what the source/sink functions are the vulnerablities
function outputVulnerablities()
{

   for(i=0; i<count; i++){alert(foundVulnerablities[i]);}
}

//output warning
function displayWarnings(){ if (count > 0 ){alert(count + ": " + "vulnerablities found");}}

//message passing
chrome.runtime.onMessage.addListener
(
  function(request, sender, sendResponse) 
  {
    if( request.message === "start" ) 
    {
      outputVulnerablities();
    }
  }
);

//Source/sink functions to look for
function vulnerableFunction()
{
  
// dom cross-site scripting	
vulnerablities[0] = "document.write()";

// dom redirection	
vulnerablities[1] = "window.location()";

// cookie manipulation
vulnerablities[2] = "document.cookie()";

// javaScript injection	
vulnerablities[3]  = "eval()";

// document domain manipulation	
vulnerablities[4] = "document.domain";

//webSocket poisoning	
vulnerablities[5] = "WebSocket()";

//link manipulation	
vulnerablities[6] ="element.src";

// web message manipulation	
vulnerablities[7] = "postMessage()";

// ajax request-header manipulation	
vulnerablities[8] = "setRequestHeader()";

// local file-path manipulation	
vulnerablities[9] = "FileReader.readAsText()";

// Client-side SQL injection	
vulnerablities[10] = "ExecuteSql()";

// HTML5-storage manipulation	
vulnerablities[11] = "sessionStorage.setItem()";

// Client-side XPath injection	
vulnerablities[12] = "document.evaluate()";

// Client-side JSON injection	
vulnerablities[13] = "JSON.parse()";

// DOM-data manipulation	
vulnerablities[14] = "element.setAttribute()";

// Denial of service	
vulnerablities[15] = "RegExp()";
vulnerablities[16] ="document.write(";
vulnerablities[17] ="escape(";

}

//setup function call
function main()
{  
  vulnerableFunction();
  parseSourceCode();
  findVulnerbilities();
  displayWarnings();
}

//start
main();


