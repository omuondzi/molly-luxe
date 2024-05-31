import { Icon } from "@iconify/react/dist/iconify.js";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";

const ContentSection = (props: any) => {
  const items = props.items;

  return (
    <>
      {items.map((item: any) => (
        <section className="content-section container">

       
        <Dropdown key={item.name}>
          <div className="list-item">
            <div>{item.name}</div>
            <div>
              <DropdownTrigger>
                <Icon icon="ep:arrow-right-bold" />
              </DropdownTrigger>
            </div>
          </div>
          <DropdownMenu>
            <DropdownItem>{item.content}</DropdownItem>
          </DropdownMenu>
        </Dropdown> </section>
      ))}
    </>
  );

  // return (

  //     <div className="content-section container">

  //             {items.map((item:any) =>(
  //                 <div className="list-item" key={item.name}>
  //                     <div className="list-text">
  //                         {item.name}
  //                     </div>
  //                     <div className="list-icon">
  //                         <Icon icon='ep:arrow-right-bold'/>
  //                     </div>
  //                 </div>
  //             ))}

  //     </div>
  //  );
};

export default ContentSection;
