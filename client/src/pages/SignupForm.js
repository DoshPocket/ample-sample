import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useMutation } from "@apollo/react-hooks";
import { ADD_COORDINATOR } from "../utils/mutations";
import Auth from "../utils/auth";
import Box from '@material-ui/core/Box';

const SignupForm = () => {
  const [coordinatorFormData, setCoordinatorFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    company: "",
  });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const [createCoordinator] = useMutation(ADD_COORDINATOR);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCoordinatorFormData({ ...coordinatorFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await createCoordinator({
        variables: { ...coordinatorFormData },
      });

      Auth.login(data.addCoordinator.token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setCoordinatorFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      company: "",
    });
  };

  return (
    <>
      <Box height="75vh" display="flex" flexDirection="column">
        <Box flex={1} overflow="auto">
          <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
            <Alert
              dismissible
              onClose={() => setShowAlert(false)}
              show={showAlert}
              variant="danger"
            >
              Something went wrong with your signup!
            </Alert>

            <Form.Group>
              <Form.Label htmlFor="firstName">First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="First Name"
                name="firstName"
                onChange={handleInputChange}
                value={coordinatorFormData.firstName}
                required
              />
              <Form.Control.Feedback type="invalid">
                First Name is required!
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="lastName">Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last Name"
                name="lastName"
                onChange={handleInputChange}
                value={coordinatorFormData.lastName}
                required
              />
              <Form.Control.Feedback type="invalid">
                Last Name is required!
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleInputChange}
                value={coordinatorFormData.email}
                required
              />
              <Form.Control.Feedback type="invalid">
                Email is required!
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="password">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleInputChange}
                value={coordinatorFormData.password}
                required
              />
              <Form.Control.Feedback type="invalid">
                Password is required!
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="company">Company</Form.Label>
              <Form.Control
                type="text"
                placeholder="Company"
                name="company"
                onChange={handleInputChange}
                value={coordinatorFormData.company}
              />
            </Form.Group>

            <Button
              disabled={
                !(
                    coordinatorFormData.firstName &&
                    coordinatorFormData.lastName &&
                    coordinatorFormData.email &&
                    coordinatorFormData.password &&
                    coordinatorFormData.company
                )
              }
              type="submit"
              variant="success"
            >
              Submit
            </Button>
          </Form>
        </Box>
     </Box>
    </>
  );
};

export default SignupForm;