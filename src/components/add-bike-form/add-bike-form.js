import React from "react";
import {Formik} from "formik";
import * as yup from 'yup';
import PropTypes from 'prop-types';

import './add-bike-form.scss';
import {FormGroupInput, FormGroupTextArea} from "../form-group";
import Button from "../button";

const AddBikeForm = ({onAddBike, bikesList}) => {
  const idList = bikesList.map(bike => bike.id.toUpperCase());

  const validationSchema = yup.object().shape({
    name: yup.string()
      .min(5, 'Too short. Minimum length should be 5 characters')
      .required('Field is required'),
    type: yup.string()
      .min(5, 'Too short. Minimum length should be 5 characters')
      .required('Field is required'),
    color: yup.string()
      .min(5, 'Too short. Minimum length should be 5 characters')
      .required('Field is required'),
    wheelSize: yup.number().typeError('Field must include only numbers')
      .required('Field is required'),
    price: yup.number().typeError('Field must include only numbers')
      .required('Field is required'),
    id: yup.string()
      .uppercase()
      .notOneOf(idList, 'This ID already exists')
      .min(5, 'Too short. Minimum length should be 5 characters')
      .required('Field is required'),
    description: yup.string()
      .min(5, 'Too short. Minimum length should be 5 characters')
      .required('Field is required'),
  });

  const inputFields = [
    [
      {name: 'name', label: 'Name'},
      {name: 'type', label: 'Type'}
    ],
    [
      {name: 'color', label: 'Color'},
      {name: 'wheelSize', label: 'Wheel size'}
    ],
    [
      {name: 'price', label: 'Price'},
      {name: 'id', label: 'ID (slug): ХХХХХХХХХХХХХ'}
    ],
  ];

  const transformBikeData = (bike) => {
    return {
      ...bike,
      price: parseFloat(bike.price),
      wheelSize: parseFloat(bike.wheelSize),
      id: bike.id.toUpperCase(),
    }
  }

  return (
    <Formik initialValues={{
      name: '',
      type: '',
      color: '',
      wheelSize: '',
      price: '',
      id: '',
      description: '',
    }}
    validateOnBlur
    validationSchema={validationSchema}
    onSubmit={(values, {resetForm})=> {
      onAddBike(transformBikeData(values));
      resetForm({values: ''});
    }}
    >
      {
        ({
           values,
           errors,
           touched,
           handleChange,
           handleBlur,
           isValid,
           handleSubmit,
           dirty,
           resetForm,
        }) => (
          <form onSubmit={handleSubmit} className="add-bike-form">

            {
              inputFields.map(inputFieldsGroup => (
                <div className="add-bike-form__row" key={inputFieldsGroup[0].name + inputFieldsGroup[1].name}>
                  {
                    inputFieldsGroup.map(inputField => (
                      <div className="add-bike-form__col" key={inputField.name}>
                        <FormGroupInput
                          handleChange={handleChange}
                          handleBlur={handleBlur}
                          value={values[inputField.name]}
                          name={inputField.name}
                          label={inputField.label}
                          errorMessage={touched[inputField.name] && errors[inputField.name]}
                        />
                      </div>
                    ))
                  }
                </div>
              ))
            }

            <div className="add-bike-form__row">
              <div className="add-bike-form__col-fluid">
                <FormGroupTextArea
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  value={values.description}
                  errorMessage={touched.description && errors.description}
                  name="description"
                  label="Description"
                />
              </div>
            </div>

            <div className="add-bike-form__row">
              <div className="add-bike-form__col">
                <Button className="btn-primary btn-fluid" disabled={!isValid || !dirty} type="submit">SAVE</Button>
              </div>
              <div className="add-bike-form__col">
                <Button className="btn-primary btn-fluid" onClick={(e) => {
                  e.preventDefault();
                  resetForm({values: ''});
                }}>CLEAR</Button>
              </div>
            </div>
          </form>
        )
      }
    </Formik>
  );
};

AddBikeForm.defaultProps = {
  bikesList: [],
};

AddBikeForm.propTypes = {
  onAddBike: PropTypes.func.isRequired,
  bikesList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  })),
};

export default AddBikeForm;