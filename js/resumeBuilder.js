/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
	"name" : "Richard Saldivar", 
	"role" : "Web Developer",
  "image" : "images/photo.jpg",
	"contacts" :  {
		"mobile": "770-555-5555",
		"email": "rsaldiva@someemailhost.com",
		"github": "richardsa",
		"location": "Atlanta, GA"
	},
	"welcome message" : "Howdy",
	"skills" : ["chillin", "the", "most", "for real"]
};

var education = {
"schools" : [
  {
    "name": "MLIS University",
    "location": "City, GA, US",
    "degree": "Masters",
    "major" : ["Library Science"],
    "dates" : "2010-2013",
    "url": "http://ala.org"
  },
  {
    "name": "University of BA",
    "location": "Some City, TN, US",
    "degree" : "BA", 
    "major" : ["Psychology"],
    "dates" : "2003-2006",
    "url": "www.apa.org"
  }
  ]
};

var work ={
  "jobs" : [
    {
      "employer": "Medical School", 
      "title" : "Systems and Emerging Technologies Librarian",
      "location" : "Suburban, GA",
      "dates": "July 2008 - present",
      "description": "Chillin the most."
    },
    {
      "employer": "University in Florida", 
      "title" : "Library Assistant",
      "location" : "The Bay, FL",
      "dates": "August 2006 - January 2008",
      "description": "Chillin the most."
    }
  ]
};

var projects ={
  "projects":[
    {
      "title": "Wordpress Site",
      "dates": "July 2013 - present",
      "description": "Redesign of existing website using Wordpress.",
       // commented out image code - works correctly but removed from display
      //"image": "F:/frontend-nanodegree-resume/images/librarywebsite.png"
    },
    {
      "title": "Vufind",
      "dates": "July 2015 - present",
      "description": "Launch vufind instance for the library.",
       // commented out image code - works correctly but removed from display
      //"image": "F:/frontend-nanodegree-resume/images/vufind.png"
    }
  ]
};

function displayBio(){
 
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  $("#topContacts").append(formattedMobile);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  $("#topContacts").append(formattedEmail);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  $("#topContacts").append(formattedGithub);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  $("#topContacts").append(formattedLocation);
  
  
  var formattedbioPic = HTMLbioPic.replace("%data%", bio.image);
   $("#header").append(formattedbioPic);

  var formattedRole =  HTMLheaderRole.replace("%data%", bio.role);
  $("#header").prepend(formattedRole);  
  var formattedName =  HTMLheaderName.replace("%data%", bio.name);
  $("#header").prepend(formattedName);
}

displayBio();


if(bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  
  var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkill);
   formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkill);
   formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
  $("#skills").append(formattedSkill);
   formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
  $("#skills").append(formattedSkill);
 }
 
 
projects.display = function () {
   for (project in projects.projects){
     $("#projects").append(HTMLprojectStart);
     var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
     $(".project-entry:last").append(formattedTitle);
     var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
     $(".project-entry:last").append(formattedDates);
     var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
     $(".project-entry:last").append(formattedDescription);
      // commented out image code - works correctly but removed from display
     //var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].image);
     //$(".project-entry:last").append(formattedImage);
  
   } 
}
projects.display();
   
   
   
function displayWork(){
  for (job in work.jobs) { 
   $("#workExperience").append(HTMLworkStart);
   var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
   var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
   var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
   var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
   var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
   var formattedEmployerTitle = formattedEmployer + formattedTitle;
   $(".work-entry:last").append(formattedEmployerTitle);
   $(".work-entry:last").append(formattedDates);
   $(".work-entry:last").append(formattedLocation);
   $(".work-entry:last").append(formattedDescription);
  }
}
 
displayWork();



function displayEducation(){
  for (school in education.schools) { 
   $("#education").append(HTMLschoolStart);
   var formattedSchool = HTMLschoolName.replace("%data%", education.schools[school].name);
   var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
   var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
   var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
   var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
   var formattedSchoolDegree = formattedSchool + formattedDegree;
   $(".education-entry:last").append(formattedSchoolDegree);
   $(".education-entry:last").append(formattedDates);
   $(".education-entry:last").append(formattedLocation);
   $(".education-entry:last").append(formattedMajor);
  }
}



displayEducation();
   
function displayConnect(){
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  $("#footerContacts").append(formattedMobile);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  $("#footerContacts").append(formattedEmail);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  $("#footerContacts").append(formattedGithub);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  $("#footerContacts").append(formattedLocation);
   
}
    
displayConnect();
   
$(document).click(function(loc) {
  var x = loc.pageX; 
  var y = loc.pageY;
  logClicks(x,y);
});
 
 
  
function inName() {
  var originalName = bio.name;
  var intlName = originalName.split(' ');
  intlName[1] = intlName[1].toUpperCase();
  intlName[0] = intlName[0].slice(0,1).toUpperCase() + intlName[0].slice(1).toLowerCase();
  return intlName.join(' ');
};
  
$("#main").append(internationalizeButton);

$("#map-div").append(googleMap);
  
  