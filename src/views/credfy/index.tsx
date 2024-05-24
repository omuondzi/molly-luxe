import { Link } from "react-router-dom";
import CredfyContent from "./credfy-content";
import CredfyIntro from "./intro";
import './credfy.css'
import Footer from "@views/home/footer";

const CredfyPageView = () => {
    return ( 
        <main>

            <CredfyIntro/>
            <section className="content">
                <CredfyContent /> 
                <Link to="#" ><p className="main-link">Learn More On How We Measure Our Impact</p></Link>
       
            </section>

            {/* footer  */}
            <Footer/>
           
         </main>
        
        
     );
}
 
export default CredfyPageView;