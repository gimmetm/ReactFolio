import emoji from 'react-easy-emoji';

export const greeting = {
	username: 'GimmeTM',
	title: 'Hello I\'m MinGyum Kim',
	subTitle: emoji(""),
	role: "Cloud Application Engineer / Backend Developer",
	resumeLink: "",

	// IMPORTANT
	// If you don't want to show this, change view to false. DO NOT DELETE!
	view: true
};

export const socialMediaLinks = {
	// IMPORTANT
	// if you don't have, change value to blank or false!! DO NOT DELETE!
	github: 'https://github.com/gimmetm',
	linkedin: 'https://www.linkedin.com/in/min-gyum-kim-29b522115/',
	email: 'mingyum.kim@gmail.com',
	facebook: '',
	twitter: "",
	instagram: "",
	medium: '',
	stackoverflow: ''
};

export const skills = {
	title: emoji("I Can Do ⚡"),
	subTitle: "Cloud / Language / Framework",
	describeSkills: [
		emoji("✔ Project : AWS, Kubernetes, Java, Go, Spring, vue.js"),
		emoji("✔ Study : GCP, python, react"),
		emoji("✔ Hobby : Unity, C#"),
	],
	// IMPORTANT
	// You need to find className for font-awesome icon
	// Go to https://fontawesome.com/ and search icon
	lists: [
		{fontAwesome: "fab fa-aws", text: "AWS", proficiency: 100},
		{fontAwesome: "fab fa-google", text: "GCP", proficiency: 100},
		{fontAwesome: "fab fa-docker", text: "Kubernetes", proficiency: 100},
		{fontAwesome: "fab fa-java", text: "JAVA", proficiency: 100},
		{fontAwesome: "fab fa-goodreads-g", text: "GO", proficiency: 100},
		{fontAwesome: "fab fa-python", text: "python", proficiency: 100},
		{fontAwesome: "fas fa-leaf", text: "Spring", proficiency: 100},
		{fontAwesome: "fab fa-vuejs", text: "vue.js", proficiency: 100},
		{fontAwesome: "fab fa-react", text: "react", proficiency: 100},
		{fontAwesome: "fab fa-unity", text: "Unity", proficiency: 100},
		{fontAwesome: "fab fa-cuttlefish", text: "C#", proficiency: 100},

		// {fontAwesome: "fab fa-html5", text: "HTML5", proficiency: 80},
		// {fontAwesome: "fab fa-css3-alt", text: "CSS3", proficiency: 70},
		// {fontAwesome: "fab fa-js", text: "JS", proficiency: 70},
		// {fontAwesome: "fab fa-sass", text: "Sass", proficiency: 30},
		// {fontAwesome: "fab fa-react", text: "React", proficiency: 60},
		// {fontAwesome: "fab fa-aws", text: "AWS", proficiency: 20},
	],
	view: true
};

export const experience = {
	title: "Work Experience",
	lists: [
		{
			date: "2009.01 ~",
			company: "SK C&C",
			role: "Backend Developer",
		}
	],
	view: true
}

export const openSourceProjects = {
	title: emoji("Open Source Projects 💻"),
	view: false
}

export const projects = {
	title: emoji("Projects 💻"),
	subTitle: "",
	lists: [
		{
			title: "Bank IFRS System",
			desc: "Common Module Developer / Financial Product Valuation Developer(Java)",
			url: "#"
		},
		{
			title: "Bank CRM System",
			desc: "Common Module Developer(Java)",
			url: "#"
		},
		{
			title: "Telecom USIM Service Platform",
			desc: "Backend Developer / Frontend Developer / Android Developer(Java, JSP)",
			url: "#"
		},
		{
			title: "Telecom Roaming Service Platform",
			desc: "Backend Developer / Frontend Developer(Java, JSP)",
			url: "#"
		},
		{
			title: "Telecom Public Messaging System",
			desc: "Backend Developer(Java, Mysql)",
			url: "#"
		},
		{
			title: "Serverless(Function as a Service)",
			desc: "Backend Developer with Open Source(Fission, Dispatch)",
			url: "#"
		},
		{
			title: "Data Exchange",
			desc: "Backend Developer / Frontend Developer (Java, Vue.js, AWS)",
			url: "#"
		},

	],
	view: true
}

export const achievements = {
	title: emoji("Certifications 🏆"),
	subTitle: "",
	lists: [
		{
			img: require("./assets/gcp-badge.png"),
			alt: "",
			title: "GCP Professional Cloud Architect",
			desc: ""
		},
		// {
		// 	img: require("./assets/sad-icon.png"),
		// 	alt: "I'm sad..",
		// 	title: "There is no Certification...😥",
		// 	desc: "I'll try harder!"
		// },
	],
	view: true
};

export const blogs = {
	title: emoji("My Games 📰"),
	subTitle: "Game Develop with Unity",
	lists: [
		{
			title: "Dodge",
			desc: "Dodge balls",
			url: "/dodge-web"
		},
		{
			title: "Uni-Run",
			desc: "Run! (space or mouse)",
			url: "/unirun-web"
		},
		{
			title: "Zombie",
			desc: "Kill Zombies(Not so good on webgl, to realod press R)",
			url: "/zombie-web"
		},
	],
	view: true
}

export const contactInfo = {
	title: "Contact To Me! 📞",
	subTitle: "",
	introduce: "Cloud application Engineer",
	// introduce: emoji("❤"),
	view: true
}