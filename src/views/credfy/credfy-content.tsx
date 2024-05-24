import ContentSection from "@components/contentSection";

const CredfyContent = () => {
    const items = [
        {
            name:"Low-Fee Wallet Accounts",
            content:" Affordable banking options with minimal fees to encourage savings and financial management"
        },
        {
            name:"Loans",
            content:"Accessible loans to support personal and business needs, fostering economic stability and growth",
        },
        {
            name:"Savings Programs: ",
            content:"Structured programs to encourage regular savings and build financial security.",
        },
        {
            name:"Biometric Authentication",
            content:"Enhanced security through biometric identification, ensuring accessibility even for individuals without formal identification documents.",
        },
        {
            name:"	Group & Cooperatives/Credit Union Savings and Loans",
            content:" Using alternative data to facilitate group credit with AI-based creditworthiness assessments under Rotating Savings and Credit Associations (ROSCAs).",
        },
        {
            name:"	Payment and Remittance Solutions",
            content:"Low-cost, blockchain-enabled platforms for transparent and affordable money transfers.",
        },
        {
            name:"Social Insurance",
            content:"Cred offers a comprehensive suite of social insurance products, including affordable health insurance plans to protect against medical expenses, life and accident insurance to cover unforeseen events and ensure financial security for workers and their families, and unemployment insurance to provide financial support during periods of unemployment.",
        },
        {
            name:"	Investments",
            content:"Cred offers investment platforms that enable individuals to invest in diversified portfolios, complemented by personalized investment advice and AI-based risk management. Additionally, Cred provides pension schemes to ensure income security in old age through structured retirement savings plans.",
        },
        {
            name:"	Welfare, Philanthropy & Crowdfunding",
            content:"Cred is dedicated to community mobilization, harnessing community support, and financial empowerment through community welfare and crowdfunding solutions. Our programs provide organized support for essential social needs and empower individuals and communities to raise funds for various projects.",
        },
    ]
    return ( 
        <div className="credfy-content">
            <ContentSection items={items}/>
        </div>
     );
}
 
export default CredfyContent;