import { SfModal, SfButton, SfIconClose, useDisclosure ,SfIconMenu} from '@storefront-ui/react';



const ShopByDepartment = {
  title :"Shop By Department ",
  item:[
    "New Arrivals","Best Sellers","Special Offers ","Milk & Creams ","Fruits","Vegetables","Ocean Food","Butters & Eggs","Lamps & Lighting","Fresh Meats","Seeds & Spices"
  ]
}

export default function SideBar() {
  const { isOpen, open, close } = useDisclosure({ initialValue: false });

  return (
    <div className='hidden max-lg:block '>
      <SfIconMenu onClick={open} className='w-9 h-9 cursor-pointer '/>

      {/* MAIN SIDE BAR */}
      <SfModal
        open={isOpen}
        onClose={close}
        className=" w-[70%] fixed left-0 mt-[-2px] ml-0 rounded-none h-screen ease-in-out duration-300 z-10"
      >
        <header>
          <SfButton square variant="tertiary" className="absolute right-2 top-2" onClick={close}>
            <SfIconClose />
          </SfButton>
          <h1 className='text-lg font-semibold p-2 bg-green-600 mb-2 text-white ml-[-25px] text-left pl-5'>Main Menu</h1>
          </header>
          <div className='flex flex-col gap-2 ml-[-20px]'> 
            {
              ShopByDepartment.item.map((item)=>{
                return (
                  <>
                  <h1 className='text-lg font-normal cursor-pointer pl-2'>{item}</h1>
                  <hr/>
                  </>
                )
              })
            }
          </div>
      </SfModal>
    </div>
  );
}
