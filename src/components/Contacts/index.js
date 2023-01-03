import React, { useState } from "react";
import axios from "axios";
import { withStyles } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Fade from "react-reveal/Fade";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import CircularProgress from "@material-ui/core/CircularProgress";

import "./Contacts.scss";

const black = "#222222";
const serviceUrl = "https://ocron.herokuapp.com";

const successMessage = (
  <DialogContentText
    style={{
      fontSize: "1.4rem",
      color: black
    }}
  >
    We have received your message and would like to thank you for writing to us.
    We will reply as soon as possible.
    <br />
    <br />
    Team Ocron
  </DialogContentText>
);

const failureMessage = (
  <DialogContentText
    style={{
      fontSize: "1.4rem",
      color: black
    }}
  >
    Unfortunately something went wrong. Please contact us via
    info@ocrontechnologies.com or through other mediums.
    <br />
    <br />
    Team Ocron
  </DialogContentText>
);

// Custom input theme example
// const theme = createMuiTheme({
//   overrides: {
//     MuiInput: {
//       underline: {
//         "&:before": {
//           borderBottomColor: `${black} !important` // Default color
//         },
//         "&:hover:not($disabled):before": {
//           borderBottomColor: `${black} !important` // Hover color
//         },
//         "&:after": {
//           borderBottomColor: `${black} !important` // Click color
//         }
//       }
//     }
//   }
// });

const theme = createMuiTheme({
  palette: {
    primary: {
      main: black
    }
  }
});

const CustomButton = withStyles(theme => ({
  root: {
    backgroundColor: black,
    "&:hover": {
      backgroundColor: "#363636"
    },
    "&:active": {
      backgroundColor: black
    },
    "&:focus": {
      backgroundColor: black
    },
    "&:disabled": {
      backgroundColor: "#e0e0e0"
    }
  }
}))(Button);

function Contacts() {
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [requestSuccessful, setRequestSuccessful] = React.useState(true);
  const [fields, setFieldStatuses] = useState({
    nameValid: true,
    emailValid: true,
    messageValid: true
  });

  const [values, setValues] = useState({
    name: "",
    email: "",
    website: "",
    phone: "",
    business: "",
    message: ""
  });

  const handleInputChange = fieldName => event => {
    setValues({ ...values, [fieldName]: event.target.value });

    // If the field needs to be checked for validity and was invalid in the previous state
    //  then check for its validity
    if (fieldName + "Valid" in fields && !fields[fieldName + "Valid"]) {
      setFieldStatuses({
        ...fields,
        [fieldName + "Valid"]: isFieldValid(fieldName, event.target.value)
      });
    }
  };

  // When focusing out from an input, check whether it is valid
  const handleFocusOut = fieldName => event => {
    if (fieldName + "Valid" in fields) {
      setFieldStatuses({
        ...fields,
        [fieldName + "Valid"]: isFieldValid(fieldName, event.target.value)
      });
    }
  };

  // Check if an input value is valid
  const isFieldValid = (fieldName, value) => {
    switch (fieldName) {
      case "name":
        return isNameValid(value);
      case "email":
        return isEmailValid(value);
      case "message":
        return isMessageValid(value);
      default:
        return false;
    }
  };

  // Check if input name is valid
  const isNameValid = name => {
    if (!name) {
      name = values.name;
    }

    return name.trim().length >= 2;
  };

  // Check if input email is valid
  const isEmailValid = email => {
    if (!email) {
      email = values.email;
    }

    // eslint-disable-next-line
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  // Check if input message is valid
  const isMessageValid = message => {
    if (!message) {
      message = values.message;
    }

    return message.trim().length >= 9;
  };

  // Check input validity on submit click and send an email
  const handleSubmitClick = () => {
    const nameValid = isNameValid(values.name);
    const emailValid = isEmailValid(values.email);
    const messageValid = isMessageValid(values.message);

    if (nameValid && emailValid && messageValid) {
      setLoading(true);

      axios
        .post(serviceUrl, { values })
        .then(result => {
          setRequestSuccessful(true);
          setLoading(false);
          setDialogOpen(true);

          setTimeout(function() {
            setDialogOpen(false);
          }, 4000);

          setValues({
            name: "",
            email: "",
            phone: "",
            company: "",
            message: ""
          });
        })
        .catch(error => {
          setRequestSuccessful(false);
          setLoading(false);
          setDialogOpen(true);
        });
    } else {
      setFieldStatuses({
        nameValid: nameValid,
        emailValid: emailValid,
        messageValid: messageValid
      });
    }
  };

  return (
    <Fade bottom duration={1500}>
      <div className="Contacts" id="contacts">
        <div className="Contacts__Content">
          <div className="Contacts__Content__Titles">
            <h2 className="Contacts__Content__Titles__Title">
              Ready to start a project?
            </h2>
            <p className="Contacts__Content__Titles__Subtitle">
              Want to get in touch? Drop us a line and we’ll be in touch with
              you shortly.
            </p>
          </div>
          <div className="Contacts__Content__Inputs">
            <ThemeProvider theme={theme}>
              <TextField
                label="Your Name *"
                className="Contacts__Content__Inputs__InputField"
                inputProps={{
                  maxLength: 32,
                  "aria-label": "name"
                }}
                InputProps={{
                  className: "Contacts__Content__Inputs__InputField__InputText"
                }}
                InputLabelProps={{
                  className: "Contacts__Content__Inputs__InputField__InputText"
                }}
                FormHelperTextProps={{
                  className: "Contacts__Content__Inputs__InputField__HelperText"
                }}
                value={values.name}
                onChange={handleInputChange("name")}
                onBlur={handleFocusOut("name")}
                margin="normal"
                error={!fields.nameValid}
                helperText={!fields.nameValid && "This value is too short."}
              />
              <div className="Contacts__Content__Inputs__Group">
                <TextField
                  label="Email Address *"
                  className="Contacts__Content__Inputs__Group__InputField"
                  inputProps={{ maxLength: 50, "aria-label": "email" }}
                  InputProps={{
                    className:
                      "Contacts__Content__Inputs__InputField__InputText"
                  }}
                  InputLabelProps={{
                    className:
                      "Contacts__Content__Inputs__InputField__InputText"
                  }}
                  FormHelperTextProps={{
                    className:
                      "Contacts__Content__Inputs__InputField__HelperText"
                  }}
                  value={values.email}
                  onChange={handleInputChange("email")}
                  onBlur={handleFocusOut("email")}
                  margin="normal"
                  type="email"
                  name="email"
                  autoComplete="email"
                  error={!fields.emailValid}
                  helperText={
                    !fields.emailValid && "This value should be a valid email."
                  }
                />
                <TextField
                  label="Website"
                  className="Contacts__Content__Inputs__Group__InputField"
                  inputProps={{ maxLength: 50, "aria-label": "website" }}
                  InputProps={{
                    className:
                      "Contacts__Content__Inputs__InputField__InputText"
                  }}
                  InputLabelProps={{
                    className:
                      "Contacts__Content__Inputs__InputField__InputText"
                  }}
                  value={values.website}
                  onChange={handleInputChange("website")}
                  margin="normal"
                />
              </div>
              <div className="Contacts__Content__Inputs__Group">
                <TextField
                  label="Phone Number"
                  className="Contacts__Content__Inputs__Group__InputField"
                  inputProps={{ maxLength: 20, "aria-label": "phone number" }}
                  InputProps={{
                    className:
                      "Contacts__Content__Inputs__InputField__InputText"
                  }}
                  InputLabelProps={{
                    className:
                      "Contacts__Content__Inputs__InputField__InputText"
                  }}
                  value={values.phone}
                  onChange={handleInputChange("phone")}
                  margin="normal"
                />
                <TextField
                  label="Business"
                  className="Contacts__Content__Inputs__Group__InputField"
                  inputProps={{ maxLength: 30, "aria-label": "business" }}
                  InputProps={{
                    className:
                      "Contacts__Content__Inputs__InputField__InputText"
                  }}
                  InputLabelProps={{
                    className:
                      "Contacts__Content__Inputs__InputField__InputText"
                  }}
                  value={values.business}
                  onChange={handleInputChange("business")}
                  margin="normal"
                />
              </div>
              <TextField
                label="Message *"
                className="Contacts__Content__Inputs__InputField"
                inputProps={{
                  maxLength: 2048,
                  "aria-label": "message to ocron"
                }}
                InputProps={{
                  className: "Contacts__Content__Inputs__InputField__InputText"
                }}
                InputLabelProps={{
                  className: "Contacts__Content__Inputs__InputField__InputText"
                }}
                FormHelperTextProps={{
                  className: "Contacts__Content__Inputs__InputField__HelperText"
                }}
                value={values.message}
                onChange={handleInputChange("message")}
                onBlur={handleFocusOut("message")}
                margin="normal"
                multiline
                error={!fields.messageValid}
                helperText={!fields.messageValid && "Message is too short."}
              />
            </ThemeProvider>
            <CustomButton
              className="Contacts__Content__Inputs__Submit"
              variant="contained"
              color="primary"
              onClick={handleSubmitClick}
              disabled={loading}
            >
              <Typography className="Contacts__Content__Inputs__Submit__Text">
                Get In Touch
              </Typography>
              {loading && (
                <CircularProgress
                  className="Contacts__Content__Inputs__Submit__ProgressBar"
                  size={26}
                />
              )}
            </CustomButton>
          </div>
          <Dialog className="Contacts__Content__Dialog" open={dialogOpen}>
            <DialogTitle>
              <Typography className="Contacts__Content__Dialog__Title">
                {requestSuccessful ? `Thank you ${values.name}` : "Ooops 😕"}
              </Typography>
            </DialogTitle>
            <DialogContent className="Contacts__Content__Dialog__Content">
              {requestSuccessful ? successMessage : failureMessage}
            </DialogContent>
            {!requestSuccessful && (
              <DialogActions>
                <Button
                  className="Contacts__Content__Dialog__CloseButton"
                  onClick={() => setDialogOpen(false)}
                >
                  <Typography className="Contacts__Content__Dialog__CloseButton__Text">
                    Close
                  </Typography>
                </Button>
              </DialogActions>
            )}
          </Dialog>
        </div>
      </div>
    </Fade>
  );
}

export default Contacts;
