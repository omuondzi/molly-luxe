
const Intro = (props:any) => {
    const h1=props.h1;
    const h2 = props.h2;
    const paragraph =props.paragraph
    return ( 

        <div className="intro">

        <div className="intro-text">
            <h1>{h1}</h1>
            <h2>{h2}</h2>
            <p>{paragraph}</p>
            <hr />
        </div>

        <div className="intro-image">
            
        </div>
    </div>
     );
}
 
export default Intro;