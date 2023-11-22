import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Tab, Tabs, TextField, Button, Checkbox, FormControlLabel } from '@mui/material';
import { NavLink } from 'react-router-dom';
// import { UndoTwoTone } from '@mui/icons-material';

interface RegisterFormProps {
  onSubmit: (email: string, username: string, password: string) => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit }) => {
  const [email, setEmail] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(email, username, password);
  };

  // Personaliza los colores para adaptarse al tema del sistema
  const theme = createTheme({
    palette: {
      mode: undefined,
      primary: {
        main: '#2196f3', // Color primario
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <form onSubmit={handleSubmit}>
        <Tabs value={1}>
		<NavLink to={'/LoginForm'}>
          <Tab label="Sign in" />
		  </NavLink>
          <Tab label="Register" disabled />
        </Tabs>

        <Box mt={2}>
          <TextField
            label="Email"
            value={email}
            onChange={handleEmailChange}
            required
            fullWidth
          />
        </Box>

        <Box mt={2}>
          <TextField
            label="Username"
            value={username}
            onChange={handleUsernameChange}
            required
            fullWidth
          />
        </Box>

        <Box mt={2}>
          <TextField
            label="Password"
            value={password}
            onChange={handlePasswordChange}
            type="password"
            required
            fullWidth
          />
        </Box>

        <Box mt={2}>
          <TextField
            label="Confirm Password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            type="password"
            required
            fullWidth
          />
        </Box>

        <Box mt={2}>
          <FormControlLabel
            control={<Checkbox value="remember" />}
            label="Remember me?"
          />
        </Box>

        <Box mt={2}>
          <Button type="submit" variant="contained" color="primary">
            Register
          </Button>
        </Box>
      </form>
    </ThemeProvider>
  );
};

export default RegisterForm;