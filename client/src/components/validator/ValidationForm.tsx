import React, { useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { styled, useTheme } from "@mui/material/styles";

// Internal Dependencies
import EnhancedButton from "../../shared/button";

// Type Definitions
type ValidationResult = {
  isValid?: boolean; 
  msg?: string;
  error?: string;
};

type CreditCardPayload = {
  creditCardNumber: string;
};

// Local Variables
const FormWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: 'center',
  height: '90%',
  width: '100%',
  '.input': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

// this is needed to hide the control buttons of the mui number textfield.
const StyledTextField = styled(TextField)({
  width: 200,
  "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
    WebkitAppearance: "none",
    margin: 0,
  },
  "& input[type=number]": {
    MozAppearance: "textfield",
  },
});

const ValidationForm: React.FC = () => {
  const [creditCardNumber, setCreditCardNumber] = useState<string>("");
  const [validationResult, setValidationResult] = useState<ValidationResult>({
    msg: "",
    error: "",
  });
  const theme = useTheme();

  const handleValidation = async () => {
    try {
      const payload: CreditCardPayload = { creditCardNumber };
      const response = await axios.post<ValidationResult>(
        "http://localhost:8080/validateCard",
        payload
      );

      setValidationResult(response.data);
    } catch (error: any) {
      if (error.response) {
        setValidationResult(error.response.data);
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Error:", error.message);
      }
    }
  };
  return (
    <FormWrapper component="form">
      <Typography variant="h3">EMD VALIDATOR</Typography>
      <div className="input">
        <StyledTextField
          type="number"
          placeholder="Enter Credit Card Number"
          value={creditCardNumber}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCreditCardNumber(e.target.value)
          }
        />
        <EnhancedButton onClick={handleValidation} title="Validate" />
        <Typography color={validationResult.error ? "error" : theme.palette.success.main}>
          {validationResult.msg || validationResult.error}
        </Typography>
      </div>
    </FormWrapper>
  );
};

export default ValidationForm;
