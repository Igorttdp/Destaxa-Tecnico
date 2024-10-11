export const textFieldSx = {
  ".MuiOutlinedInput-notchedOutline": {
    borderColor: "#CCCCCC",
  },
  ".MuiInputBase-input": {
    padding: "12px 16px",
  },
  ".MuiInputLabel-root": {
    color: "#CCCCCC",
  },
  ".MuiInputLabel-root:not(.Mui-focused,.MuiFormLabel-filled)": {
    top: "-3px",
  },
};

export const textFieldErrorSx = {
  ...textFieldSx,
  ".MuiOutlinedInput-notchedOutline": {
    borderColor: "#ef4444",
  },
  ".MuiInputLabel-root": {
    color: "#ef4444",
  },
};
