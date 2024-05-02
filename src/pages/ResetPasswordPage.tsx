import React from 'react';
import { Alert, Card, CardContent, Grid, TextField, Typography } from '@mui/material';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Resolver, useForm } from 'react-hook-form';

type ResetPasswordValues = {
  email: string
}
const resolver: Resolver<ResetPasswordValues> = async (values: ResetPasswordValues) => {
  let newValues: any = {} as any;
  let errors: any = {} as any;

  if (!values.email) {
    newValues['email'] = values.email;
    errors['email'] = {
      type: 'required',
      message: 'Email is required.',
    };
  }
  return { values: newValues, errors };
};

const ResetPasswordPage = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<ResetPasswordValues>({ resolver });
  const onSubmit = handleSubmit((data) => console.log('data', data));
  const errorMessages = Object.entries(errors).map(([type, error]) => <div key={type}>{error.message}</div>);

  return (
    <div>
      <Card sx={{maxWidth: 500, margin: '150px auto', }}>
        <CardContent>
          <form onSubmit={onSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={12}>
                <Typography variant="h3">Reset Password</Typography>
              </Grid>
              <Grid item xs={12} md={12}>
                {errorMessages.length > 0 && <Alert severity="error">{errorMessages}</Alert>}
              </Grid>
              <Grid item xs={12} md={12}>
                <TextField id="email" type="email" {...(register('email'))}label="Email" variant="outlined" fullWidth/>
              </Grid>
              <Grid item xs={12} md={12}>
                <Button variant="contained" type="submit" fullWidth>Reset Password</Button>
              </Grid>
              <Grid item xs={12} md={12}>
                <Button onClick={() => navigate("/")}>Back to Login</Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default ResetPasswordPage;
