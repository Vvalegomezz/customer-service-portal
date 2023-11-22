import React from 'react';
import { Box, Tab, Tabs, TextField, Button, Checkbox, FormControlLabel } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

interface LoginFormProps {
  onSubmit: (username: string, password: string) => void;
  serverTheme: 'light' | 'dark'; // Valor recibido desde el servidor
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, serverTheme }) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(username, password);
  };

  // Define el tema claro y oscuro según la respuesta del servidor
  const theme = createTheme({
    palette: {
      mode: serverTheme,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <form onSubmit={handleSubmit}>
        <Tabs value={0}>
          <Tab label="Sign in" />
          <NavLink to={'/RegisterForm'}>
            <Tab label="Register" />
          </NavLink>
        </Tabs>

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
          <FormControlLabel control={<Checkbox value="remember" />} label="Remember me?" />
        </Box>

        <Box mt={2}>
          <Button type="submit" variant="contained" color="primary">
            Sign in
          </Button>
          <Button variant="text" color="primary">
            Forgot your password?
          </Button>
        </Box>
      </form>
    </ThemeProvider>
  );
};

export default LoginForm;