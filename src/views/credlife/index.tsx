import CredLifeContent from "./content";
import CredLifeIntro from "./intro";

const CredLifePageView = () => {
    return (  
        <main className="credlife">
            <section className="">
                <CredLifeIntro/>
            </section>
            <section className="">
                <CredLifeContent/>
            </section>
        </main>
    );
}
 
export default CredLifePageView;