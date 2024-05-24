import { Icon } from "@iconify/react/dist/iconify.js";

const ContentSection = (props:any) => {
    const items = props.items;

    return ( 

        <div className="content-section container">
            
                {items.map((item:any) =>(
                    <div className="list-item" key={item.name}>
                        <div className="list-text">
                            {item.name}
                        </div>
                        <div className="list-icon">
                            <Icon icon='ep:arrow-right-bold'/>
                        </div>
                    </div>
                ))}
            
        </div>
     );
}
 
export default ContentSection;