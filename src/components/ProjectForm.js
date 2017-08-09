import React, { Component } from 'react';
import { Form, FormGroup, ControlLabel, FormControl, Radio, Button, Col, Row } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import { SingleDatePicker } from 'react-dates';

import '../styles/ProjectForm.css';
import 'react-dates/lib/css/_datepicker.css';

class ProjectForm extends Component {

  componentDidMount(){
    this.props.initialize({
      projectType: "DTRes",
      scheduleType: "waterMeter"
    })
  }

  onSubmit(values) {
    console.log(values)
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="project-form">
        <h2>Choose The Type of Project</h2>

        <Form onSubmit={handleSubmit(this.onSubmit.bind(this))}>

          <Row>
            <FormGroup controlId="projectType">
              <Col smOffset={2} componentClass={ControlLabel} sm={2}>
                Project Type:
              </Col>
              <Col sm={4}>
                <Field
                  name="projectType"
                  component="select"
                >
                  <option value="DTRes">Downtown Residential / Hotel</option>
                  <option value="DTOffice">Downtown Office</option>
                  <option value="Multifamily">Multifamily</option>
                  <option value="OfficeWarehouse">Office / Warehouse</option>
                </Field>
              </Col>
            </FormGroup>
          </Row>

          <Row>
            <FormGroup controlId="scheduleType">
              <Col smOffset={2} componentClass={ControlLabel} sm={2}>
                Schedule Type:
              </Col>
              <Col sm={8}>
                <label>
                  <Field name="scheduleType" component="input" type="radio" value="waterMeter" />
                  Water Meter
                </label>
                <label>
                  <Field name="scheduleType" component="input" type="radio" value="occupancy" />
                  Occupancy
                </label>
              </Col>
            </FormGroup>
          </Row>
          
          <Row>
            <FormGroup>
             <Col smOffset={4} sm={2}>
               <Button bsStyle="primary" type="submit">
                 Submit
               </Button>
             </Col>
           </FormGroup>
          </Row>

        </Form>

      </div>
    );
  }
}

export default reduxForm({
  form: 'ProjectForm'
})(ProjectForm);
