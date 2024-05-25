export interface SOLUTION {
	name: string;
	path: string;
	tagline: string;
	intro: string;
	id: string;
	pointers?: SOLUTIONPOINTER[];
	featuresBenefits?: FEATURESBENEFITS[];
	groupedPointers?: GROUPEDSOLUTIONPOINTER[];
	outro?: string;
}

interface SOLUTIONPOINTER {
	title: string;
	content: string[];
	subtitle?: string;
}

interface GROUPEDSOLUTIONPOINTER {
	title: string;
	subtitle?: string;
	pointers: SOLUTIONPOINTER[];
}

interface FEATURESBENEFITS {
	title: string;
	content: string;
	subtitle?: string;
}

export const SOLUTIONS: SOLUTION[] = [
	{
		name: "Credfy",
		path: "/our-services/credfy",
		id: "credfy",
		tagline: "Inclusive Digital Finance Solutions",
		intro: "Credfy offers a range of financial services designed to support the unbanked and underbanked populations in the informal sector.",
		pointers: [
			{
				title: "Low-Fee Wallet Accounts",

				content: [
					"Affordable banking options with minimal fees to encourage savings and financial management.",
				],
			},
			{
				title: "Loans",

				content: [
					"Accessible loans to support personal and business needs, fostering economic stability and growth.",
				],
			},
			{
				title: "Savings Programs",

				content: [
					"Structured programs to encourage regular savings and build financial security.",
				],
			},
			{
				title: "Biometric Authentication",

				content: [
					"Enhanced security through biometric identification, ensuring accessibility even for individuals without formal identification documents.",
				],
			},
			{
				title: "Group & Cooperatives/Credit Union Savings and Loans",
				content: [
					"Using alternative data to facilitate group credit with AI-based creditworthiness assessments under Rotating Savings and Credit Associations (ROSCAs).",
				],
			},
			{
				title: "Social Insurance",
				content: [
					"Cred offers a comprehensive suite of social insurance products, including affordable health insurance plans to protect against medical expenses, life and accident insurance to cover unforeseen events and ensure financial security for workers and their families, and unemployment insurance to provide financial support during periods of unemployment.",
				],
			},
			{
				title: "Investments",
				content: [
					"Cred offers investment platforms that enable individuals to invest in diversified portfolios, complemented by personalized investment advice and AI-based risk management. Additionally, Cred provides pension schemes to ensure income security in old age through structured retirement savings plans.",
				],
			},
			{
				title: "Welfare, Philanthropy & Crowdfunding",
				content: [
					"Cred is dedicated to community mobilization, harnessing community support, and financial empowerment through community welfare and crowdfunding solutions. Our programs provide organized support for essential social needs and empower individuals and communities to raise funds for various projects.",
				],
			},
		],
	},
	{
		name: "Cred Work",
		path: "/our-services/cred-work",
		id: "cred-work",
		tagline: "Fair Jobs & Safe Workspace and Resilient Livelihoods",
		intro: "Cred Work is dedicated to creating quality employment opportunities and ensuring safe working conditions for gig workers in Africa's informal sector. By integrating advanced technology, comprehensive education, and community support, Cred Work empowers workers and promotes sustainable economic growth.",
		groupedPointers: [
			{
				title: "Job-Matching Platform",
				pointers: [
					{
						title: "AI Matching Technology",
						content: [
							"Utilizes advanced machine learning algorithms to analyze the profiles of informal workers and job requirements, ensuring the best job matches tailored to skills and preferences.",
						],
					},
					{
						title: "Fair Wage Assurance",
						content: [
							"Implements transparent wage standards and ensures compliance with local labor laws to guarantee fair compensation for informal workers.",
						],
					},
					{
						title: "Safe Working Conditions",
						content: [
							"Partners with employers dedicated to providing safe and healthy work environments, ensuring the well-being and security of informal workers.",
						],
					},
				],
			},
		],
		featuresBenefits: [
			{
				title: "Access to Quality Jobs",
				subtitle:
					"Cred Work addresses the multifaceted challenges faced by gig workers, providing them with access to quality jobs, safe workplaces, and continuous professional development.",
				content:
					"AI-driven job matching connects workers with suitable opportunities that match their skills and preferences.",
			},
			{
				title: "Safe Workplaces",
				content:
					"Collaboration with employers ensures compliance with safety standards, promoting a safe and healthy working environment.",
			},
		],
		outro: "Cred Work drives sustainable economic growth and fosters meaningful social change across Africa's informal sector by creating a robust ecosystem that supports gig workers at every stage of their professional journey.",
	},
	{
		name: "CredLife",
		path: "/our-services/cred-life",
		id: "cred-life",
		tagline: "Social Services and Inclusion",
		intro: "CredLife is dedicated to providing comprehensive support to informal sector workers, enhancing their well-being and enabling them to thrive economically and socially. Our holistic approach encompasses health and safety, legal aid, social safety nets, disaster management, sustainability, and gender inclusion.",
		groupedPointers: [
			{
				title: "Health and Safety Programs",
				subtitle:
					"Ensuring the health and safety of informal workers is a cornerstone of CredLife’s mission. Our Health and Safety Programs include",
				pointers: [
					{
						title: "Health Insurance",
						content: [
							"Affordable health insurance plans tailored to the needs of informal workers, providing coverage for medical expenses",
						],
					},
				],
			},
		],
		outro: "CredLife’s integrated solutions aim to address the multifaceted needs of informal workers, ensuring they have access to essential services and support systems. By integrating health and safety, legal aid, social safety nets, disaster management, sustainability, and gender inclusion into our platform, CredLife creates a robust ecosystem that empowers informal workers and fosters sustainable economic growth.",
	},
];
