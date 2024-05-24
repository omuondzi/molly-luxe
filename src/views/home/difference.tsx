import { Icon } from "@iconify/react/dist/iconify.js";

const Difference = () => {

    const points = [
        {
            name:"For gig workers, we offer the tools and suppport needed to build better lives."
        },
        {
            name:"For funders and partners , investing in Cred means contributing to a more inclusive and resilient society."
        }
    ]
    return ( 
        <div className="container">
            <section className="difference">
                <div className="intro">
                    <div><img src="./images/credlogo.png" alt="" /></div>
                    <div >
                        <h1>Join Us in <i> Making a Difference</i></h1>
                       <i> Cred is transforming the informal sector inAfrica by creating apportunities , ensuring fair treatment , and fostering sustainable growth</i>
                    </div>

                </div>
                <div className="points">
                    {points.map((point, index) => (
                        <div className="point" key={index}>
                            <div className="icon"> <Icon icon="el:ok-sign" className="icons"/></div>
                            <div>{point.name}</div>
                        </div>

                    ))}

                </div>
                    <div className="buttons">
                         <button>
                    Get Involved
                </button>
                    </div>
               


            </section>
        </div>
     );
}
 
export default Difference;