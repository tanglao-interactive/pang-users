import React from 'react';
import { Alert, Card, CardContent, Grid, TextField, Typography } from '@mui/material';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Resolver, useForm } from 'react-hook-form';

type LoginValues = {
  username: string;
  password: string;
};

const resolver: Resolver<LoginValues> = async (values: LoginValues) => {
  let newValues: any = {} as any;
  let errors: any = {} as any;

  if (!values.username) {
    newValues['username'] = values.username;
    errors['username'] = {
      type: 'required',
      message: 'Username is required.',
    };
  }
  if (!values.password) {
    newValues['password'] = values.password;
    errors['password'] = {
      type: 'required',
      message: 'Password is required.',
    };
  }

  return { values: newValues, errors };
};

const LoginPage = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<LoginValues>({ resolver });
  const onSubmit = handleSubmit((data) => {
    console.log('data', data);
    navigate('/dashboard');
  });
  const errorMessages = Object.entries(errors).map(([type, error]) => <div key={type}>{error.message}</div>);

  return (
    <div>
      <Card sx={{maxWidth: 500, margin: '150px auto', }}>
        <CardContent>
          <form onSubmit={onSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <Typography variant="h3">Login</Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              {errorMessages.length > 0 && <Alert severity="error">{errorMessages}</Alert>}
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField id="username" type="text" {...register("username")} label="Username" variant="outlined" fullWidth/>
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField id="password" type="password" {...register("password")} label="Password" variant="outlined" fullWidth/>
            </Grid>
            <Grid item xs={12} md={12}>
              <Button variant="contained" size="large" type="submit" fullWidth>Login</Button>
            </Grid>
            <Grid item xs={12} md={12}>
              <Button onClick={() => navigate("/reset-password")}>Forgot Password</Button>
              <Button onClick={() => navigate("/sign-up")}>Sign Up</Button>
            </Grid>
          </Grid>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default LoginPage;
