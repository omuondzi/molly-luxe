import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

const Footer = () => {
    return (  
        <div className="footer">
           <div className="footer-logo"> 
            <img src="./images/logo.png" alt="" />
            </div>
            <section className="footer-content">
                <div className="footer-contact">
                    <h1>Contacts</h1>
                    <span><b>Email </b> <i>:info@cred.afrca</i> </span>
                    <span><b>Phone </b> <i>:+25412345677</i></span>
                    <span><b> Address</b> <i>:1102 Applewood Adams</i></span>
                </div>
                <div className="footer-reach">
                    <p className="text">Have questions or want to learn more? <Link to="#"><i>Reach out to us!</i></Link></p>
                    <p className="icons">
                        <Icon icon="typcn:social-instagram"/>
                        <Icon icon="ant-design:facebook-filled"/>
                    </p>
                    <p  className="copyright">Copyright <Icon icon="ph:copyright-thin"/> 2024 Cred Africa</p>
                </div>
            </section>
        </div>
    );
}
 
export default Footer;