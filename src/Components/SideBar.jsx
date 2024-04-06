
import { useId, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { SfModal, SfButton, SfIconClose, useDisclosure ,SfIconMenu} from '@storefront-ui/react';

const ShopByDepartment = {
  title: "Shop By Department ",
  item: [
    "New Arrivals", "Best Sellers", "Special Offers ", "Milk & Creams ", "Fruits", "Vegetables", "Ocean Food", "Butters & Eggs", "Lamps & Lighting", "Fresh Meats", "Seeds & Spices"
  ]
}

export default function SideBar() {
  const { isOpen, open, close } = useDisclosure({ initialValue: false });
  const headingId = useId();
  const descriptionId = useId();
  const modalRef = useRef(null);
  const backdropRef = useRef(null);

  return (
    <div className=" z-50 hidden max-lg:block ">
      <SfIconMenu onClick={open} className='w-9 h-9 cursor-pointer ' />
      {/* Backdrop */}
      <CSSTransition
        in={isOpen}
        nodeRef={backdropRef}
        timeout={200}
        unmountOnExit
        classNames={{
          enter: 'opacity-0',
          enterDone: 'opacity-100 transition duration-200 ease-out',
          exitActive: 'opacity-0 transition duration-200 ease-out',
        }}
      >
        <div ref={backdropRef} className="fixed inset-0 bg-neutral-700 bg-opacity-50" />
      </CSSTransition>

      {/* Modal */}
      <CSSTransition
        in={isOpen}
        nodeRef={modalRef}
        timeout={200}
        unmountOnExit
        classNames={{
          enter: 'translate-y-10 opacity-0',
          enterDone: 'translate-y-0 opacity-100 transition duration-200 ease-out',
          exitActive: 'translate-y-10 opacity-0 transition duration-200 ease-out',
        }}
      >
        <SfModal
          open
          onClose={close}
          ref={modalRef}
          as="section"
          role="alertdialog"
          aria-labelledby={headingId}
          aria-describedby={descriptionId}
          className="max-w-[90%] md:max-w-lg left-[-300px]"
        >

          <header>
            <SfButton square variant="tertiary" className="absolute right-2 top-2" onClick={close}>
              <SfIconClose />
            </SfButton>
            <h1 className='text-lg font-semibold p-2 bg-green-600 mb-2 text-white ml-[-25px] text-left pl-5'>Main Menu</h1>
          </header>
          <div className='flex flex-col gap-2 '>
            {
              ShopByDepartment.item.map((item) => {
                return (
                  <>
                    <h1 className='text-lg font-normal cursor-pointer pl-2'>{item}</h1>
                    <hr />
                  </>
                )
              })
            }
          </div>
        </SfModal>
      </CSSTransition>
    </div>
  );
}
