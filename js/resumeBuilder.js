var bio = {
	"name" : "Angela Yu",
	"role" : "IoT Engineering Leader",
	"contacts" : {
		"email" : "wangela@gmail.com",
		"mobile" : "415-615-2664",
		"github" : "wangela",
		"twitter" : "@wangela",
		"blog" : "www.changedbydesign.com",
		"location" : "Palo Alto, CA"
	},
	"welcomeMessage" : "At the intersection of business, engineering, and design.",
	"picture URL" : "images/wangela-illo.jpeg",
	"skills" : [
		"engineering", "design", "business"
	]
}

var workExperience = {
	"jobs": [
		{
			"employer": "Cisco",
			"department": "IoT Cloud Software Group",
			"title": "FrontEnd Engineering Manager",
			"dates": "10/2015 - present",
			"location": "Milpitas, CA",
			"description": "Led an awesome team to peak awesome"
		},
		{
			"employer": "Cisco",
			"department": "IoT Vertical Solutions Group",
			"title": "Sr. Manager",
			"dates": "09/2014 - 09/2015",
			"location": "Milpitas, CA",
			"description": "Blew your mind with IoT"
		},
		{
			"employer": "Wepow",
			"department": "Marketing",
			"title": "Director",
			"dates": "08/2012 - 12/2013",
			"location": "Sunnyvale, CA",
			"description": "Established marketing practice"
		}
	],
	"volunteering": [
		{
			"organization": "Iridescent Technovation",
			"program": "Android App Development",
			"role": "Team mentor and Judge",
			"dates": "2014 - 2015"
		},
		{
			"organization": "Taproot Foundation",
			"program": "Silicon Valley Children's Foundation",
			"role": "Brand strategy",
			"dates": "2013"
		}
	]
}

var projects = {
	"project": [
		{
			"title": "Rock Lizard Spock app",
			"description": "Android app in Google Play store",
			"dates": "2014"
		},
		{
			"title": "Silicon Chef Hackathon",
			"description": "Alert",
			"dates": "October 2014"
		}
	]
}

var education = {
	"schools": [
		{
			"name": "MIT",
			"location": "Cambridge, MA",
			"degree": "BS",
			"majors": "Electrical Engineering and Computer Science",
			"dates": "2001",
			"url": "http://web.mit.edu"
		},
		{
			"name": "Codepath",
			"location": "San Francisco, CA",
			"degree": "Bootcamp",
			"majors": "Android Mobile Development",
			"dates": "2014",
			"url": "http://thecodepath.com"
		}
	],
	"onlineCourses": [
		{
			"title": "JavaScript Syntax",
			"school": "Udacity",
			"year": "2017",
			"url": "http://udacity.com"
		},
		{
			"title": "Git and GitHub",
			"school": "Udacity",
			"year": "2016",
			"url": "http://udacity.com"
		}
	]
}

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);

var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);

bio.display = function() {
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#bio").append(formattedEmail + formattedMobile + formattedGithub + formattedTwitter + formattedBlog + formattedLocation);
	var formattedBioImage = HTMLbioPic.replace("%data%", bio["picture URL"]);
	$("#header").append(formattedBioImage);
}

bio.display();


if (bio['skills'].length != 0) {
	console.log("skills length is " + bio['skills'].length);
	$("#header").append(HTMLskillsStart);
	bio['skills'].forEach(skillsBuilder);
}

function skillsBuilder(item) {
	var formattedSkill = HTMLskills.replace("%data%", item);
	$("#skills").append(formattedSkill);
}

/* practice for-in loops 
for (item in workExperience.jobs) { 
	// create new div for Work Experience
	$("#workExperience").append(HTMLworkStart); 

	// concat each job's details
	var formattedEmployer = HTMLworkEmployer.replace("%data%", workExperience.jobs[item].company); 
	var formattedTitle = HTMLworkTitle.replace("%data%", workExperience.jobs[item].role);
	var formattedDept = HTMLworkDept.replace("%data%", workExperience.jobs[item].department);
	var formattedDates = HTMLworkDates.replace("%data%", workExperience.jobs[item].dates);
	var formattedLocation = HTMLworkLocation.replace("%data%", workExperience.jobs[item].location);
	var formattedDescription = HTMLworkDescription.replace("%data%", workExperience.jobs[item].description);
	$(".work-entry:last").append(formattedEmployer + formattedTitle + formattedDept + formattedDates + formattedLocation + formattedDescription);
}
  end practice */ 

function displayWork(item) {
	// create new div for Work Experience
	$("#workExperience").append(HTMLworkStart); 

	// concat each job's details
	var formattedEmployer = HTMLworkEmployer.replace("%data%", item.employer); 
	var formattedTitle = HTMLworkTitle.replace("%data%", item.title);
	var formattedDept = HTMLworkDept.replace("%data%", item.department);
	var formattedDates = HTMLworkDates.replace("%data%", item.dates);
	var formattedLocation = HTMLworkLocation.replace("%data%", item.location);
	var formattedDescription = HTMLworkDescription.replace("%data%", item.description);
	$(".work-entry:last").append(formattedEmployer + formattedTitle + formattedDept + formattedDates + formattedLocation + formattedDescription);

}

workExperience['jobs'].forEach(displayWork);

$("#main").append(internationalizeButton);

function inName(names) {
	var nameArray = names.trim().split(" ");
	var nameLength = nameArray.length;
	var surnameIndex = nameLength - 1;

	var firstname = nameArray[0];
	var firstInit = firstname.slice(0, 1).toUpperCase();
	var restname = firstname.slice(1).toLowerCase();
	var surname = nameArray[1].toUpperCase();
	var internationalName = firstInit + restname + " " + surname;

	return internationalName;
}

projects.display = function() {
	for (var item = 0; item < projects.project.length; item++) {
		// create new div for Projects
		$("#projects").append(HTMLprojectStart);

		// concate each project's details
		var formattedProjTitle = HTMLprojectTitle.replace("%data%", projects.project[item].title);
		var formattedProjDates = HTMLprojectDates.replace("%data%", projects.project[item].dates);
		var formattedProjDescription = HTMLprojectDescription.replace("%data%", projects.project[item].description);
		$(".project-entry:last").append(formattedProjTitle + formattedProjDates + formattedProjDescription);
		if (projects.project[item].images) {
			var formattedProjImage = HTMLprojectImage.replace("%data%", projects.project[item].description);
			$(".project-entry:last").append(formattedProjImage);
		}
	}
}

projects.display();

education.display = function() {
	for (var item = 0; item < education.schools.length; item++) {
		// create new div for Schools
		$("#education").append(HTMLschoolStart);

		// concate each school's details
		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[item].name);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[item].degree);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[item].dates);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[item].location);
		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[item].majors);
		var formattedSchoolURL = HTMLschoolURL.replace("%data%", education.schools[item].url);
		$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree + formattedSchoolDates + formattedSchoolLocation + formattedSchoolMajor + formattedSchoolURL);
	}

	$("#education").append(HTMLonlineClasses);

	for (var item = 0; item < education.onlineCourses.length; item++) {
		// create new div for Schools
		$("#education").append(HTMLschoolStart);

		// concate each school's details
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[item].title);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[item].school);
		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[item].year);
		var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[item].url);
		$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool + formattedOnlineDates + formattedOnlineURL);
	}
}

education.display();

$("#mapDiv").append(googleMap);