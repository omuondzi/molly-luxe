import ContentSection from "@components/contentSection";

const items = [
    {
        name:"Health and Safety Programs ",
        content:"Ensuring the health and safety of informal workers is a cornerstone of CredLife’s mission. Our Health and Safety Programs include:Health insurance,partnerships with Healthcare Providers, mobile health clinics and workplace safety training and resources",
    },
    {
        name:"Legal Aid Services ",
        content:"CredLife’s Legal Aid Services ensure that informal workers have access to justice and legal protection by offering :•	Legal Aid and Low-Cost Legal Counseling, Rigts education and advocay, Contracts, Buss=iness Accounting and tax services, Business Advisory ",
    },
    {
        name:"Social Safety Nets: Cred Welfare ",
        content:"Cred Welfare aims to provide a financial safety net for informal workers during emergencies by ensuring the following : Community-driven financial assistance, Insurance products Disaster management which includes providnig training and resources as well as community resilience programs",
    },
    {
        name:"Sustainability Initiatives ",
        content:"CredLife is committed to promoting environmentally sustainable practices among informal businesses by embracing Environmentally sustainable practices and support for green technologies",
    },
    {
        name:"Gender Inclusion Programs ",
        content:"CredLife’s Gender Inclusion Programs aim to empower women and promote gender equality in the informal sector",
    },

]
const CredLifeContent = () => {
    return ( 
        <main className="content">
            <ContentSection items={items}/>
        </main>
     );
}
 
export default CredLifeContent;