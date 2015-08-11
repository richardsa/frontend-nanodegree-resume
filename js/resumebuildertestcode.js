/*
This is empty on purpose! Your code to build the resume will go here.
 */
 var name = "Richard Saldivar";
 var role = "Web Developer";
 
 var formattedName = HTMLheaderName.replace("%data%", name);
 var formattedRole = HTMLheaderRole.replace("%data%", role);
  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);
  
  var bio = {
	"name" : "Richard Saldivar", 
	"role" : "Web Developer",
	"contacts" :  {
		"mobile": "770-595-3284",
		"email": "rsaldiva@gmail.com",
		"github": "richardsa",
		"location": "Atlanta"
	},
	"bioPic" : "http://54.148.8.149/vufind/themes/pcom/images/pcom_banner_bL.gif",
	"welcome message" : "Howdy",
	"skills" : ["chillin", "the", "most"]
};

var work = {
	"position" : "Librarian"
};

var education = {
	"name" : "Valdosta State"
};

work.employer = "PCOM";
work.years = 8;
work.city = "Suwanee";

education["years"] = "2010-2013";
education["city"] = "Valdosta, GA";

$("#main").append(work["position"]);
$("#main").append(education.name);


  var education = {
	"schools" : [
		{
			"name": "Valdosta State University",
			"city": "Valdosta, GA, US",
			"degree": "Masters",
			"major" : ["Library Science"],
			"year" : 2006
		},
		{
			"name": "University of Tennesse",
			"city": "Knoxville, TN, US",
			"degree" : "BA", 
			"major" : ["Psychology"],
			"year" : 2006
		}
	]
};

 if(bio.skills.length > 0) {
      $("#header").append(HTMLskillsStart);
      
      var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    }