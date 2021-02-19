const ContactList = (props) => {
    return( <ul className="list-group" id="contact-list">
                {props.contactList.map(
                  (contact) => 
                  <li key={contact.email} className="list-group-item"> 
                    <ContactCard contact = {contact}/>
                  </li>
                )}
            </ul>)
}
 
export default ContactList;