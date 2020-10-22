import React from 'react';
import { reduxForm, Field } from 'redux-form';
import FormsControl from '../../common/FormControl/FormsControl';
import { requiredField, maxLengthCreator } from '../../../utils/Validations/validators';
export const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm);

const maxLengthCreator50 = maxLengthCreator(50);
function AddMessageForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={FormsControl}
          validate={[requiredField, maxLengthCreator50]}
          name='newMessageBody'
          placeholder='Add your message'
        />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
}

export default AddMessageForm;
