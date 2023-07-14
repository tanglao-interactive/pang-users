import dotenv from 'dotenv';
dotenv.config();
import {
  CognitoIdentityProviderClient,
  CreateUserPoolCommand,
  CreateUserPoolCommandInput
} from "@aws-sdk/client-cognito-identity-provider";
import cognito_config from './config';

const createCognitoPool = async () => {
  const { endpoint, PoolName } = cognito_config['develop'];
  const client = new CognitoIdentityProviderClient({ endpoint });
  const command = new CreateUserPoolCommand({ PoolName });
  await client.send(command);
}

const seedCognito = async () => {
  await createCognitoPool();
};

seedCognito();
