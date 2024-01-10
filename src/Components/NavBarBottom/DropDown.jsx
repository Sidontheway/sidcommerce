"use client"

import {
  SfDropdown,
  useDisclosure,
  SfIconExpandMore
} from '@storefront-ui/react';

const DropDown = (props) => {

  const { isOpen, toggle, close } = useDisclosure();
  
  return (
    <SfDropdown
      trigger={<div className="  text-lg font-semibold p-5 rounded mb-0 cursor-pointer" onMouseOver={toggle} onMouseOut={close} variant="tertiary">{props.details.title} <SfIconExpandMore /></div>}
      open={isOpen}
      onClose={close}
      className='hover:underline underline-offset-[-40px] decoration-green-600 decoration-2'
      >

      <ul className=" flex  flex-col  bg-gray-100 w-60 text-left justify-between p-3 mt-[-7px] gap-2" onMouseOver={toggle} onMouseOut={close}>
        {
          props.details.item.map((item)=>{
            return <li className='cursor-pointer hover:text-green-600'>{item}</li>

          })
        }
      </ul>
    </SfDropdown>
  );
}

export default DropDown;
