import React from 'react';
import {
  Container, Col, Row, Button, Form, FormGroup, Label, Input, FormText
} from 'reactstrap';

import './projectPage.css';
export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      customer: '',
      dueDate: '',
      startDate: '',
      endDate: '',
      from: '',
      to: '',
      description: '',
      involvedFields: [],
      address: '',
      country: '',
      email: '',
      phone:'',
      workDays: [],
      projectTimespan: [],
      applicationRequirements: ''
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-console
    const projectData = {...this.state};
    delete projectData.projectTimespan;
    this.props.publish(projectData);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  handleMultipleChange = (e) => {
    const { name, options } = e.target;
    const value = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    this.setState({
      [name]: value,
    });
  }

  handleCheckboxes = (e) => {
    const values = this.state[e.target.name];
    const tempValues = [...values];
    const elPos = tempValues.indexOf(e.target.value);
    // eslint-disable-next-line no-unused-expressions
    elPos === -1
      ? tempValues.push(e.target.value)
      : tempValues.splice(elPos, 1);
    this.setState({
      [e.target.name]: [...tempValues],
    });
  }

  render() {
    const {
      name, customer, dueDate, from, to, description, involvedFields, address, country, email, phone,workDays, startDate, endDate, projectTimespan, applicationRequirements
    } = this.state;
    return (
      <Col xl={{ size: 8, offset: 2 }} md={{ size: 10, offset: 1 }}>
        <h2>CREATE A NEW PROJECT</h2>
        <Container className="form-frame">
          <Form onSubmit={this.handleSubmit}>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="dueDate">Due date ( announce )</Label>
                  <Input
                    type="date"
                    id="dueDate"
                    value={dueDate}
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="customer">Customer</Label>
                  <Input
                    type="select"
                    name="customer"
                    id="customer"
                    value={customer}
                    onChange={this.handleChange}
                  >
                    <option>myCompany</option>
                    <option>myOtherCompany</option>
                  </Input>
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col md={6}>
                <FormGroup>
                <FormGroup check>
                  <Label for="start" check>
                  <Input
                  type="checkbox"
                  id="start"
                  name="projectTimespan"
                  value="start"
                  checked={projectTimespan.includes('start')}
                  onChange={this.handleCheckboxes}
                  /> Start date
                  </Label>
                  </FormGroup>
                  <Input
                    type="date"
                    id="startDate"
                    value={startDate}
                    disabled={!projectTimespan.includes('start')}
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                <FormGroup check>
                  <Label  for="end" check>
                  <Input
                  type="checkbox"
                  id="end"
                  name="projectTimespan"
                  value="end"
                  checked={projectTimespan.includes('end')}
                  onChange={this.handleCheckboxes}
                  /> End date
                  </Label>
                  </FormGroup>
                  <Input
                    type="date"
                    id="endDate"
                    value={endDate}
                    disabled={!projectTimespan.includes('end')}
                    onChange={this.handleChange}
                  >
                  </Input>
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                id="name"
                placeholder="myProject"
                value={name}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Row>
                <Col md={6}>
                  <Label for="description">Short description</Label>
                  <Input
                    type="textarea"
                    name="text"
                    id="description"
                    placeholder="Please provide a brief description (max 200 chars)"
                    maxLength="200"
                    rows="2"
                    style={{ lineHeight: '1.7' }}
                    value={description}
                    onChange={this.handleChange}
                  />
                </Col>
                <Col md={6}>
                  <Label for="involvedFields">Involved Fields</Label>
                  <Input
                    type="select"
                    name="involvedFields"
                    id="involvedFields"
                    value={involvedFields}
                    onChange={this.handleMultipleChange}
                    multiple
                  >
                    <option>poverty</option>
                    <option>hunger</option>
                    <option>health</option>
                    <option>gender</option>
                    <option>water</option>
                    <option>energy</option>
                    <option>work</option>
                    <option>innovation</option>
                    <option>inequality</option>
                    <option>sustainability</option>
                    <option>climate</option>
                    <option>oceans</option>
                    <option>earth</option>
                    <option>justice</option>
                    <option>partnership</option>
                  </Input>
                </Col>
              </Row>
            </FormGroup>
            <Row form>
              <Col md={8}>
                <FormGroup>
                  <Label for="address">Address / area</Label>
                  <Input
                    type="text"
                    id="address"
                    value={address}
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for="country">Country</Label>
                  <Input
                    type="text"
                    id="country"
                    value={country}
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Label for="workDays">Weekly work time</Label>
            <Row>
              <Col md={6} onChange={this.handleTest}>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="checkbox"
                      name="workDays"
                      value="mon"
                      checked={workDays.includes('mon')}
                      onChange={this.handleCheckboxes}
                    />
                monday
                  </Label>
                  <Label check>
                    <Input
                      type="checkbox"
                      name="workDays"
                      value="tue"
                      checked={workDays.includes('tue')}
                      onChange={this.handleCheckboxes}
                    />
                tuesday
                  </Label>
                  <Label check>
                    <Input
                      type="checkbox"
                      name="workDays"
                      value="wed"
                      checked={workDays.includes('wed')}
                      onChange={this.handleCheckboxes}
                    />
                wednesday
                  </Label>
                  <Label check>
                    <Input
                      type="checkbox"
                      name="workDays"
                      value="thu"
                      checked={workDays.includes('thu')}
                      onChange={this.handleCheckboxes}
                    />
                thursday
                  </Label>
                  <Label check>
                    <Input
                      type="checkbox"
                      name="workDays"
                      value="fri"
                      checked={workDays.includes('fri')}
                      onChange={this.handleCheckboxes}
                    />
                friday
                  </Label>
                  <Label check>
                    <Input
                      type="checkbox"
                      name="workDays"
                      value="sat"
                      checked={workDays.includes('sat')}
                      onChange={this.handleCheckboxes}
                    />
                saturday
                  </Label>
                  <Label check>
                    <Input
                      type="checkbox"
                      name="workDays"
                      value="sun"
                      checked={workDays.includes('sun')}
                      onChange={this.handleCheckboxes}
                    />
                sunday
                  </Label>
                </FormGroup>
              </Col>
              <Col md={3} sm={6}>
                <FormGroup>
                  <Label for="from">From</Label>
                  <Input
                    type="time"
                    id="from"
                    value={from}
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </Col>
              <Col md={3} sm={6}>
                <FormGroup>
                  <Label for="to">To </Label>
                  <Input
                    type="time"
                    id="to"
                    value={to}
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Label for="applicationRequirements">Additional requirements</Label>
              <Input
                type="text"
                id="applicationRequirements"
                placeholder="Specific requirements, warnings, ..."
                value={applicationRequirements}
                onChange={this.handleChange}
              />
            </FormGroup>
            <hr />
            <h6>CONTACTS</h6>
            <Row form>
              <Col md={8}>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input
                    type="email"
                    id="email"
                    value={email}
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for="phone">Phone</Label>
                  <Input
                    type="text"
                    id="phone"
                    pattern="\d+"
                    value={phone}
                    onChange={this.handleChange}
                  />
                  <FormText color="muted">
                  Insert number only
                  </FormText>
                </FormGroup>
              </Col>
            </Row>
            <Button
              color="secondary"
              type="submit"
              block
            >
              Publish the announce
            </Button>
          </Form>
        </Container>
      </Col>
    );
  }
}
