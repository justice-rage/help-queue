import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewTicketForm(props){

    function handleNewTicketFormSubmission(event) {
      event.preventDefault();
      props.onNewTicketCreation({
        names: event.target.names.value,
        location: event.target.location.value,
        issue: event.target.issue.value,
        id: v4(),
      });
    }

NewTicketForm.propTypes = {
    onNewTicketcreation: PropTypes.func
};
    

return (
  <React.Fragment>
    <ReusableForm 
      formSubmissionHandler={handleNewTicketFormSubmission}
      buttonText="Help!" />
  </React.Fragment>
);
}

export default NewTicketForm;