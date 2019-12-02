import React from 'react';
import {Breadcrumb, BreadcrumbItem, Row, Button, Label, Col} from 'reactstrap';
import {Form, Control, Errors} from 'react-redux-form';
import {Link} from 'react-router-dom';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const isEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    this.props.postMessage(
        values.firstname,
        values.lastname,
        values.telnum,
        values.email,
        values.agree,
        values.contactType,
        values.message);
    this.props.resetMessageForm();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
            <BreadcrumbItem active>Contact</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <hr />
          </div>
        </div>
        <div className="row row-content">
          <div className="col-12">
            <h3>Send Me A Message </h3>
          </div>
          <div className="col-12 col-md-9">
            <Form model="message" onSubmit={
              (values) => this.handleSubmit(values)}>
              <Row className="form-group">
                <Label htmlFor="firstname" md={3}>First Name</Label>
                <Col md={9}>
                  <Control.text
                    model=".firstname"
                    id="firstname"
                    name="firstname"
                    placeholder="First Name"
                    className="form-control"
                    validators= {{
                      required,
                      maxLength: maxLength(15),
                      minLength: minLength(3),
                    }} />
                  <Errors
                    className="text-danger"
                    model=".firstname"
                    show="touched"
                    messages={{
                      required: 'Required-',
                      minLength: 'Must be greater than 2 characters',
                      maxLength: 'Must be 15 characters or less',
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="lastname" md={3}>Last Name</Label>
                <Col md={9}>
                  <Control.text
                    model=".lastname"
                    id="lastname"
                    name="lastname"
                    placeholder="Last Name"
                    className="form-control"
                    validators= {{
                      required,
                      maxLength: maxLength(15),
                      minLength: minLength(3),
                    }} />
                  <Errors
                    className="text-danger"
                    model=".lastname"
                    show="touched"
                    messages={{
                      required: 'Required-',
                      minLength: 'Must be greater than 2 characters',
                      maxLength: 'Must be 15 characters or less',
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="telnum" md={3}>Contact Tel.</Label>
                <Col md={9}>
                  <Control.text
                    model=".telnum"
                    id="telnum"
                    name="telnum"
                    placeholder="Tel. Number"
                    className="form-control"
                    validators= {{
                      maxLength: maxLength(15),
                      minLength: minLength(3),
                      isNumber,
                    }} />
                  <Errors
                    className="text-danger"
                    model=".telnum"
                    show="touched"
                    messages={{
                      minLength: 'Must be greater than 2 numbers',
                      maxLength: 'Must be 15 numbers or less',
                      isNumber: 'Must be a number',
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="email" md={3}>Email</Label>
                <Col md={9}>
                  <Control.text
                    model=".email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                    validators= {{
                      required,
                      isEmail,
                    }} />
                  <Errors
                    className="text-danger"
                    model=".email"
                    show="touched"
                    messages={{
                      required: 'Required-',
                      isEmail: 'Invalid Email Address',
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={{size: 5, offset: 3}}>
                  <div className="form-check">
                    <Label check>
                      <Control.checkbox
                        model=".agree"
                        name="agree"
                        className="form-check-input" /> {' '}
                      <strong>May I contact you?</strong>
                    </Label>
                  </div>
                </Col>
                <Col md={{size: 3, offset: 1}}>
                  <Control.select
                    model=".contactType"
                    name="contactType"
                    className="form-control">
                    <option>Tel.</option>
                    <option>Email</option>
                  </Control.select>
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="message" md={3}>Your Message</Label>
                <Col md={9}>
                  <Control.textarea
                    model=".message"
                    id="message"
                    name="message"
                    rows="12"
                    className="form-control" />
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={{size: 9, offset: 3}}>
                  <Button type="submit" className="submit-button">
                    Send Message
                  </Button>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}


export default Contact;
