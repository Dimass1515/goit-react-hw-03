import { FaPhoneAlt } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import css from './Contact.module.css'


export default Contacts({contact:{id, name, number}, onDelete}) => {
    return(
        <div>
            <div></div>

          <p><IoPerson />   {name}</p>
          <p><FaPhoneAlt />   {number}</p>
        </div>
    )
}