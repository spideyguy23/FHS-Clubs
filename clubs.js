var app = angular.module('clubsApp', []);

app.controller('clubsController', function($scope){

	$scope.listAllClubs = true;
	$scope.clubs = [
	{
		name : "Art Club",
		description : "Spread interest of art through various activities",
		day : "Friday",
		location : "D-2",
		advisor : "Fenton",
		genre : "Art",
		time : "lunch",	
		contact_name : "Oona Guensche",
		contact_email : "me@gmail.com",
		contact_website : ""
	},
	{
		name : "Black Student Union (BSU)",
		description : "To provide educational and positive promotion of black culture and all minorities and the civil rights",
		day : "Wednesday",
		location : "B-2",
		advisor : "Charuhas",
		genre : "Countries and Culture",
		time : "lunch",	
		contact_name : "Mikai Lewis",
		contact_email : "me@gmail.com",
		contact_website : ""
	},
	{
		name : "Bring Change 2 Mind",
		description : "To promote & educate mental health awareness",
		day : "Wednesday",
		location : "C-6",
		advisor : "Carter",
		genre : "Community Service",
		time : "lunch",	
		contact_name : "Me",
		contact_email : "me@gmail.com",
		contact_website : ""
	},
	{
		name : "C.S.F.",
		description : "Community Service",
		day : "Wednesday",
		location : "J-3",
		advisor : "Lobo",
		genre : "Community Service",
		time : "lunch",	
		contact_name : "Sai/Neel Wignarajah",
		contact_email : "csf.fhs@gmail.com",
		contact_website : ""
	},
	{
		name : "Chess Club",
		description : "Teach students how to play chess",
		day : "Friday",
		location : "J-9",
		advisor : "Jones",
		genre : "other",
		time : "After school",	
		contact_name : "Andy Li",
		contact_email : "chess.foothill@gmail.com",
		contact_website : ""
	},
	{
		name : "Chinese Yo-Yo",
		description : "Help students learn yo-yo skills",
		day : "Friday",
		location : "Small gym",
		advisor : "Halliday",
		genre : "Countries and Culture",
		time : "After school",	
		contact_name : "Kai Zamora",
		contact_email : "fhsyoyorangers@gmail.com",
		contact_website : ""
	},
	{
		name : "Chinese-American Youth Association (C.A.Y.A)",
		description : "Promote awareness of Chinese culture",
		day : "Every other Thursday",
		location : "B-28",
		advisor : "Pastor",
		genre : "Countries and Cultures",
		time : "lunch",	
		contact_name : "Maxus Wong",
		contact_email : "foothillcaya@gmail.com",
		contact_website : ""
	},
	{
		name : "Computer Science Club",
		description : "Prepare members for real-world coding",
		day : "Monday",
		location : "P-6 or D-27",
		advisor : "Sos",
		genre : "Tech Club",
		time : "lunch",	
		contact_name : "Ahad Rauf",
		contact_email : "foothillcsclub@gmail.com",
		contact_website : ""
	},
	{
		name : "Dungeons and Dragons",
		description : "Allow students to express imaginitive thinking",
		day : "First and Third Fridays",
		location : "D-17",
		advisor : "H. Richey",
		genre : "other",
		time : "lunch",
		contact_name : "Noah Thomas/Jordan Reni",
		contact_email : "",
		contact_website : "",
	},
	{
		name : "Earth Club",
		description : "Go on hikes, do erath related volunteer oppurtunities and community service",
		day : "Thursday",
		location : "D-24",
		advisor : "Bisagno",
		genre : "Service Clubs",
		time : "lunch",
		contact_name : "Dina Parks",
		contact_email : "",
		contact_website : "",
	},
	{
		name : "Engineering Club",
		description : "Get students interested in engineering",
		day : "Friday",
		location : "I-4",
		advisor : "Evans",
		genre : "Academic Clubs",
		time : "lunch",
		contact_name : "Robathan Harries",
		contact_email : "",
		contact_website : "",
	},
	{
		name : "Falcon Friends (Best Buddies)",
		description : "Make sure buddies have a friend",
		day : "Fridays",
		location : "A-10",
		advisor : "Hooven",
		genre : "Service Clubs",
		time : "lunch",
		contact_name : "Tamara Wilson",
		contact_email : "",
		contact_website : "",
	},
	{
		name : "Fellowship of Christian Athletes",
		description : "Promote the blending of sports, faith and education",
		day : "2 Thursday's a month",
		location : "P-2",
		advisor : "Scavone",
		genre : "Athletics",
		time : "lunch",
		contact_name : "Tessie Scavone",
		contact_email : "",
		contact_website : "",
	},
	{
		name : "F.I.S.H",
		description : "Reach students with gospel and create disciples",
		day : "Friday",
		location : "J-1",
		advisor : "Sears",
		genre : "Countries and Culture",
		time : "lunch",
		contact_name : "Jennifer Kim",
		contact_email : "foothillhsfishclub@gmail.com",
		contact_website : "",
	},
	{
		name : "Free the Children",
		description : "Help against child labor through Free the Children events and fundraising, charities ad spreading awareness",
		day : "Wednesday",
		location : "B-29",
		advisor : "Williams",
		genre : "Service Clubs",
		time : "lunch",
		contact_name : "Connie Hsu",
		contact_email : "",
		contact_website : "",
	},
	{
		name : "French Club",
		description : "Promote French culture and language on campus",
		day : "Every other Thursday",
		location : "B-31",
		advisor : "Porfolio",
		genre : "Academic Clubs",
		time : "lunch",
		contact_name : "Lucas DeBernardi",
		contact_email : "",
		contact_website : "",
	},
	{
		name : "French Honor Society",
		description : "Honor students of French for their higher academic acheivement",
		day : "Every other Thursday",
		location : "B-31",
		advisor : "Porfolio",
		genre : "Academic Clubs",
		time : "lunch",
		contact_name : "Sophie Nguyen",
		contact_email : "",
		contact_website : "",
	},
	{
		name : "Future Business Leaders of America (FBLA)",
		description : "Bring business and education together though leadership and career development programs",
		day : "Thursday",
		location : "I-1",
		advisor : "Z. Lipman",
		genre : "Academic Clubs",
		time : "lunch",
		contact_name : "Rohan Krishnakumar",
		contact_email : "",
		contact_website : "",
	},
	{
		name : "Future Practicing Physicians Network (FPPN)",
		description : "Provide students with hands on experience through f/t's or speakers",
		day : "Wednesday",
		location : "J-4",
		advisor : "Irish",
		genre : "other",
		time : "lunch",
		contact_name : "Arshiya Jain",
		contact_email : "",
		contact_website : "",
	},
	{
		name : "Gay-Straight Alliance (G.S.A.)",
		description : "Create a safe space on campus for evryone; to educate about LGBTQ issues and promote acceptance",
		day : "Tuesday",
		location : "D-21",
		advisor : "Moshtagh",
		genre : "other",
		time : "lunch",
		contact_name : "Ragan Lacy",
		contact_email : "",
		contact_website : "",
	},
	{
		name : "German Club",
		description : "Promote German language and culutre at FHS and the larger community",
		day : "Thursday",
		location : "B-33",
		advisor : "Fleming",
		genre : "Countries and Culture",
		time : "lunch",
		contact_name : "Maya Balachandran",
		contact_email : "",
		contact_website : "",
	},
	{
		name : "Girl Up",
		description : "Raise awareness bout challenges some of the world's hardest to reach marginalized girls",
		day : "Thursday",
		location : "I-9",
		advisor : "Kelly",
		genre : "other",
		time : "lunch",
		contact_name : "Bryn Doyle",
		contact_email : "fhsgirlup@gmail.com",
		contact_website : "",
	},
	{
		name : "Girls Who Code",
		description : "Teach girls to become interested in coding and computer",
		day : "Mondays",
		location : "D-30",
		advisor : "Sos",
		genre : "Tech Club",
		time : "",
		contact_name : "Rachel Mundaden",
		contact_email : "fhsgirlswhocode@gmail.com",
		contact_website : "",
	},
	{
		name : "Health Occupations Students of America (HOSA)",
		description : "Help students interested in the medical field get a jump start on career with speakers, activities and conferences",
		day : "Thursday",
		location : "F-2",
		advisor : "Scotto",
		genre : "Academic Clubs",
		time : "lunch",
		contact_name : "Malavika Raj",
		contact_email : "",
		contact_website : "",
	},
	{
		name : "Interact Club",
		description : "Provide commubity service oportunities through Interacts local and international projects",
		day : "Tuesday",
		location : "MPR",
		advisor : "Lim/M. Lipman",
		genre : "Service Clubs",
		time : "lunch",
		contact_name : "Mikayla Tran",
		contact_email : "",
		contact_website : "",
	},
	{
		name : "Involved Teens Club (IT)",
		description : "Discuss social issues and help make a change in modern day problems by getting involved",
		day : "Thursday",
		location : "A-12",
		advisor : "M. Anderson",
		genre : "Service Clubs",
		time : "lunch",
		contact_name : "Julia Wang",
		contact_email : "",
		contact_website : "",
	},
	{
		name : "Japanese Club",
		description : "Spread awareness",
		day : "Tuesday",
		location : "B-34",
		advisor : "Diehl",
		genre : "Countries and Culture",
		time : "lunch",
		contact_name : "Kai Zamora",
		contact_email : "japakura@gmail.com",
		contact_website : "",
	},
	{
		name : "JSA (Junior Statesmen of America)",
		description : "Expose ideas of politics and to debate these ideas",
		day : "Monday",
		location : "B-18",
		advisor : "Detamore",
		genre : "other",
		time : "lunch",
		contact_name : "Soha Ashraf/Sarah Kier",
		contact_email : "Sohaashraf20@gmail.com",
		contact_website : "",
	},
	{
		name : "Junior Civilian",
		description : "Make the world a better place through outreach programs, volunteering and helping people with developmental disabilities",
		day : "Tuesday",
		location : "D-29",
		advisor : "Elnady",
		genre : "Service Clubs",
		time : "lunch",
		contact_name : "Sahil Patel",
		contact_email : "",
		contact_website : "",
	},
	{
		name : "Key Club",
		description : "Promte community service, build friendships",
		day : "Thursday",
		location : "B-1",
		advisor : "Middleton",
		genre : "Service Clubs",
		time : "lunch",
		contact_name : "Vivian Pae",
		contact_email : "",
		contact_website : "",
	},
	{
		name : "Korean Club",
		description : "Promote and spread Korean history, art and culture",
		day : "Friday",
		location : "F-1",
		advisor : "Rossman",
		genre : "Countries and Culture",
		time : "lunch",
		contact_name : "Andrew Kim",
		contact_email : "",
		contact_website : "",
	},
	{
		name : "Latin Club",
		description : "Supplement Latin and promote classical learning",
		day : "Thursday",
		location : "B-4",
		advisor : "Heinitz",
		genre : "Countries and Culture",
		time : "lunch",
		contact_name : "Galen Gold",
		contact_email : "foothill.hs.latin@gmail.com",
		contact_website : "",
	},
	{
		name : "LEO (Leadership, Experience and Opportunity)",
		description : "Provide community service opportunities to students and allow the to devolope leadership and teamwork skills",
		day : "Every other Monday",
		location : "B-8",
		advisor : "Boultinghouse",
		genre : "Service Clubs",
		time : "lunch",
		contact_name : "Cindy Zhao/Irene Sha",
		contact_email : "foothillleoclub@gmail.com",
		contact_website : "",
	},
	{
		name : "Math Club",
		description : "Promote interest in math and provide students the opportunity to explore different math topics and participate in math competitions",
		day : "Tuesday",
		location : "D-23",
		advisor : "Gorsuch",
		genre : "Academic Clubs",
		time : "lunch",
		contact_name : "Suhasiny Naik",
		contact_email : "",
		contact_website : "",
	},
	{
		name : "Mathcounts Coaches Club",
		description : "Teach competitive math at the middle school",
		day : "Monday",
		location : "D-23",
		advisor : "Gorsuch",
		genre : "Community Service",
		time : "lunch",
		contact_name : "Benjamin Chen/Sharon Chen",
		contact_email : "Academic Clubs",
		contact_website : "",
	},
	{
		name : "MCC",
		description : "Learn, celebrate, showcase the cultural diversity on campus. Promte equity and acceptance",
		day : "Monday",
		location : "D-18",
		advisor : "Garlit",
		genre : "other",
		time : "lunch",
		contact_name : "Maegan Nalagan",
		contact_email : "",
		contact_website : "",
	},
	{
		name : "Medlife Club",
		description : "Fundraise for the poor and under privileged",
		day : "Monday",
		location : "I-1",
		advisor : "Dennis",
		genre : "Service Clubs",
		time : "lunch",
		contact_name : "Malavika Raj",
		contact_email : "",
		contact_website : "",
	},
	{
		name : "Mock Trial",
		description : "Educate students about U.S. legal system and participate in annual mock trial comp.",
		day : "Wednesday",
		location : "A-5",
		advisor : "Dagen",
		genre : "Academic",
		time : "Wednesday",
		contact_name : "Amy Zhao",
		contact_email : "",
		contact_website : "",
	},
	{
		name : "Model UN",
		description : "Educate students about international relations/law and prepare them for Model UN comp.",
		day : "Monday",
		location : "D-11 or C-6",
		advisor : "Parrish/Leitz",
		genre : "Countries and Culture",
		time : "Lunch",
		contact_name : "Bryce Fan",
		contact_email : "",
		contact_website : "",
	},
	{
		name : "Mural Club",
		description : "Create a community of artists to beautify Foothill campus.",
		day : "Thursday",
		location : "D-2",
		advisor : "Fenton",
		genre : "Art",
		time : "Lunch",
		contact_name : "Asha Rudrabhatla",
		contact_email : "",
		contact_website : "",
	},
	{
		name : "Music for Change",
		description : "Use music to inspire and improve the community",
		day : "Thursday",
		location : "H-33",
		advisor : "Nishimori",
		genre : "Music",
		time : "lunch",
		contact_name : "Laura Jie Zhu/Emiko Tsutsuni",
		contact_email : "",
		contact_website : "",
	},
	{
		name : "NHS(National Honor Society)",
		description : "The National Honor Society (NHS) is the nation's premier organization established to recognize outstanding high school students.",
		day : "Tuesday",
		location : "MPR",
		advisor : "Fulton",
		genre : "Community Service",
		time : "Lunch",
		contact_name : "Edward Im",
		contact_email : "",
		contact_website : "",
	},
	{
		name : "Nest for Nets Club",
		description : "Help people around the world suffering from malaria and educating students",
		day : "Monday",
		location : "D-26",
		advisor : "Dalby",
		genre : "Community Service",
		time : "Lunch",
		contact_name : "Praveen Ravisankar",
		contact_email : "",
		contact_website : "",
	},
	{
		name : "Our Movement Club",
		description : "Spread awareness of depression and prevention of suicide by spreading positivity",
		day : "Thursday",
		location : "A-2",
		advisor : "Correia",
		genre : "Community Service",
		time : "Lunch",
		contact_name : "Kylie Lynch/ Jasmine Setiyadi",
		contact_email : "",
		contact_website : "",
	},
	{
		name : "Physics Club",
		description : "Help students solve challenging physics problems with methods not covered in school",
		day : "Friday",
		location : "D-6",
		advisor : "Dixon",
		genre : "Academic",
		time : "Lunch",
		contact_name : "Ryan Panwar",
		contact_email : "",
		contact_website : "",
	},
	{
		name : "R.A.D. (Recycle All Day)",
		description : "Recycle and raise money for the school.",
		day : "Wednesday",
		location : "J-11",
		advisor : "Hill",
		genre : "Community Service",
		time : "Lunch",
		contact_name : "Jenna Edsen",
		contact_email : "",
		contact_website : "",
	},
	{
		name : "Red Cross Club",
		description : "Serve local community through local service projects and provide first aid training",
		day : "Wednesday",
		location : "J-7",
		advisor : "Hansen",
		genre : "Community Service",
		time : "Lunch",
		contact_name : "Snigdha Jayavarapu",
		contact_email : "",
		contact_website : "",
	},
	{
		name : "Robotics",
		description : "Make robots and program them using VEX Design system",
		day : "Friday",
		location : "Outside of School",
		advisor : "Jones",
		genre : "Academic",
		time : "3:30-7",
		contact_name : "Brian Chan",
		contact_email : "fhsrobotics1000@gmail.com",
		contact_website : "",
	},
	{
		name : "Science for Youth",
		description : "Community service providing volunteering and leadership opportunities for students",
		day : "Mondays",
		location : "C-6/Library",
		advisor : "Lewin",
		genre : "Community Service",
		time : "Lunch",
		contact_name : "Dhruva Eswar",
		contact_email : "fhsscify@gmail.com",
		contact_website : "",
	},
	{
		name : "Science Olympiad",
		description : "Promote interest in science and engineering and explore topics by competing in comp.",
		day : "Monday",
		location : "I-2",
		advisor : "Shackleford",
		genre : "Academic",
		time : "Lunch",
		contact_name : "Farrah Khoyloo",
		contact_email : "",
		contact_website : "",
	},

{
		name : "Secular Student Alliance",
		description : "Educate students about scientific reason and its values",
		day : "Wednesday",
		location : "J-12",
		advisor : "Lipman",
		genre : "Academic",
		time : "Lunch",
		contact_name : "Aya Keller",
		contact_email : "foothillssa@gmail.com",
		contact_website : "",
	},

{
		name : "Spanish Club",
		description : "Spread Hispanic-American culture and raise awareness of traditions",
		day : "Wednesday",
		location : "B-27",
		advisor : "Ospina",
		genre : "Countries and Culture",
		time : "Lunch",
		contact_name : "Mariana Perera",
		contact_email : "",
		contact_website : "",
	},
	{
		name : "Speech and Debate",
		description : "Promote speech and debate, participate in tournaments",
		day : "Friday",
		location : "D-16",
		advisor : "Fulton",
		genre : "Academic",
		time : "Lunch",
		contact_name : "Arthur Hwang/Bryce Fan",
		contact_email : "",
		contact_website : "",
	},

{
		name : "STEM (Science, Tech, Eng, Math)",
		description : "Provide STEM education beyond the regular school classes",
		day : "Thursday",
		location : "D-24",
		advisor : "Howard/Dalby",
		genre : "Academic",
		time : "Lunch",
		contact_name : "Niva Ranavat/ Emily Zhang",
		contact_email : "foothillstem@gmail.com",
		contact_website : "",
	},

{
		name : "Student Filmaker Association",
		description : "Provide opportunities for students to exhibit work, use talent to help with community by offering publicity",
		day : "Wednesday",
		location : "B-2",
		advisor : "Sears",
		genre : "Tech Club",
		time : "Lunch",
		contact_name : "Cassie Wang",
		contact_email : "studentfilmmakerassociation@gmail.com",
		contact_website : "",
	},

{
		name : "Team HBV",
		description : "Spread awareness of HBV and have people screened",
		day : "Wednesday",
		location : "B-13",
		advisor : "Asturias",
		genre : "Community Service",
		time : "Lunch",
		contact_name : "Jungyoon Yu",
		contact_email : "",
		contact_website : "",
	},
	{
		name : "Teens for Literacy",
		description : "Produce the school's literacy magazine",
		day : "Wednesday/Thursday ",
		location : "D-16",
		advisor : "Fulton",
		genre : "Academic",
		time : "Lunch",
		contact_name : "Frances Tang",
		contact_email : "",
		contact_website : "",
	},
	{
		name : "Ultimate Frisbee Club",
		description : "Promote and play the sport of Ultimate Frisbee",
		day : "Tuesday",
		location : "I-4",
		advisor : "Johnson",
		genre : "Athletics",
		time : "Lunch",
		contact_name : "Cameron Beck",
		contact_email : "",
		contact_website : "",
	},
	{
		name : "Unicef",
		description : "Raise support and advocate for Unicef",
		day : "Wednesday",
		location : "B-22",
		advisor : "Weiser",
		genre : "Community Service",
		time : "Lunch",
		contact_name : "Harshita Kaushal",
		contact_email : "",
		contact_website : "",
	},
	{
		name : "Writer's Club",
		description : "Encourage literacy, reading, and writing; share writing in a collaborative environment",
		day : "Monday",
		location : "D-12",
		advisor : "Crawbuck",
		genre : "Academic",
		time : "Lunch",
		contact_name : "Tony Italiano",
		contact_email : "",
		contact_website : "",
	},


	];
	$scope.goToClub= function(club){
		$scope.listAllClubs= false;
		$scope.focusClub= club;
	}
}
);