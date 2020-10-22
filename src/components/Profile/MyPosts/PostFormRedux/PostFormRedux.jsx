import React from 'react';
import style from '../myPosts.module.css';
import { reduxForm, Field } from 'redux-form';
import FormsControl from '../../../common/FormControl/FormsControl';
import { requiredField, maxLengthCreator } from '../../../../utils/Validations/validators';

export let AddNewPostForm = reduxForm({ form: 'formForPost' })(PostFormRedux);

const maxLengthCreator10 = maxLengthCreator(10);

function PostFormRedux(props) {
  return (
    <form onSubmit={props.handleSubmit} className={style.sendText}>
      <div>
        <Field
          name='newText'
          component={FormsControl}
          validate={[requiredField, maxLengthCreator10]}
          placeholder='Add your post here'
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
}

export default PostFormRedux;
