import {connect} from 'react-redux';
const AddContact = ({newContact, addContact}) => {
    return (
      <div>
        {newContact.name} <br />
        {newContact.email} <br />
        {newContact.phone} <br />
        
        Are you sure you want to add this contact?
        <span onClick={addContact}> Yes </span>
      </div>
    )
  }
  
  const mapStateToProps = state => {
    return {
      newContact : state.contacts.newContact
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      addContact : () => dispatch(addContact())
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(AddContact)