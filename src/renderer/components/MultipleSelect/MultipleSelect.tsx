import DropDown from '../DropDown/DropDown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition, faChevronDown, faThumbTack } from '@fortawesome/free-solid-svg-icons'
import { Form } from 'react-bootstrap'
import { PropsWithChildren, useState } from 'react'

type Props = {
   data: any[]
   placeholder: string
   onChange: (data: any) => void
   icon?: IconDefinition
   className?: string
   classContainer?: string
   defaultChecked?: boolean
} & PropsWithChildren<React.HtmlHTMLAttributes<HTMLDivElement>>

export default function MultipleSelect(P: Props) {

   const [checkedItems, setCheckedItems] = useState(P.data);

   const handleCheckboxChange = (event: any, index: number) => {
      const newCheckedItems = [...checkedItems]; // Copy the array
      newCheckedItems[index].value = event.currentTarget.checked; // Update value
      setCheckedItems(newCheckedItems); // Update state
      P.onChange(newCheckedItems)
   };

   return (
      <DropDown
         classContainer={P.classContainer}
         className={`v-center-between card-box-style ${P.className}`}
         dropdownParent={<>
            <div className='v-center gap-2'>
               <FontAwesomeIcon icon={P.icon || faThumbTack} />
               <p>{P.placeholder}</p>
            </div>
            <FontAwesomeIcon icon={faChevronDown} />
         </>}
      >
         {P.data
            ? P.data.map((data, idx) => <div className='v-center-normal gap-2' key={idx}>
               <Form.Check
                  type={'checkbox'}
                  id={data.text}
                  label={data.text}
                  defaultChecked={P.defaultChecked || data.value}
                  onChange={(e) => handleCheckboxChange(e, idx)}
               />
            </div>)
            : null}

         {P.children}
      </DropDown>
   )
}
