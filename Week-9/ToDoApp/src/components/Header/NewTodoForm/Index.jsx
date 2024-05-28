import React from 'react';
import {Formik, Field, Form} from "formik";
import validationSchema from './Validations';
import {useTodo} from "../../../contexts/TodoContext";


function NewTodoForm() {

  const {addTodo} = useTodo();

  return (
    <Formik
      initialValues={{
        text: '',
        
      }}
      onSubmit={(values, bag) => { 
        
        console.log(values); //{text:"girilen değer"} çıktısı var
        addTodo(values.text); //yeniyi ekledik
        bag.resetForm(); //bag ile entera bastığımızda girdiğimiz text temizlendi
      }}
      validationSchema = {validationSchema} 
    >
      <Form>
        <Field className="new-todo" 
            placeholder="What needs to be done?" 
            autoFocus
            id="text"
            name="text" />
      </Form>
  
    </Formik>

  )
    
}

export default NewTodoForm;
