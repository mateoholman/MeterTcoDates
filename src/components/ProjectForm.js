import React, { Component } from 'react';
import { Form, FormGroup, ControlLabel, FormControl, Radio, Button, Col, Row } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';

import '../styles/ProjectForm.css';

class ProjectForm extends Component {

  renderProjectType(field){
    return(
      <Row>
        <FormGroup controlId="projectType">
          <Col smOffset={2} componentClass={ControlLabel} sm={2}>
            Project Type:
          </Col>
          <Col sm={4}>
            <FormControl componentClass="select" placeholder="DTRes">
              <option value="DTRes">Downtown Residential / Hotel</option>
              <option value="DTOffice">Downtown Office</option>
              <option value="Multifamily">Multifamily</option>
              <option value="OfficeWarehouse">Office / Warehouse</option>
            </FormControl>
          </Col>
        </FormGroup>
      </Row>

    );
  }

  render() {
    return (
      <div className="project-form">
        <h2>Choose The Type of Project</h2>

        <Form>
            <Field
              name="projectType"
              component={this.renderProjectType}
            />
          <Row>
            <FormGroup controlId="scheduleType">
              <Col smOffset={2} componentClass={ControlLabel} sm={2}>
                Schedule Type:
              </Col>
              <Col sm={8}>
                <Radio name="radioGroup" inline>Water Meter</Radio>
                <Radio name="radioGroup" inline>Occupancy</Radio>
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
