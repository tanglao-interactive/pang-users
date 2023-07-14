import dotenv from 'dotenv';
dotenv.config();
import {
  AdminCreateUserCommand,
  AdminCreateUserCommandInput,
  AdminCreateUserCommandOutput,
  CognitoIdentityProviderClient,
  CreateUserPoolCommand,
  CreateUserPoolCommandInput,
  MessageActionType
} from "@aws-sdk/client-cognito-identity-provider";
import cognito_config from './config';
import { faker } from '@faker-js/faker';

const { endpoint, PoolName } = cognito_config['local'];
const client = new CognitoIdentityProviderClient({ endpoint });

const createCognitoPool = async () => {
  const command = new CreateUserPoolCommand({ PoolName });
  const response = await client.send(command);
  return response;
}

const createUsersInCognitoPool = async (UserPoolId: string) => {
  const promisedUsers: Promise<AdminCreateUserCommandOutput>[] = [];
  for (let i = 0; i < 10; i++) {
    const input: AdminCreateUserCommandInput = {
      "ClientMetadata": {},
      "DesiredDeliveryMediums": [ "string" ],
      "ForceAliasCreation": true,
      "TemporaryPassword": faker.string.alphanumeric({ length: { min: 8, max: 10 } }),
      UserAttributes: [
        { Name: 'email', Value: faker.internet.email() },
        { Name: 'phone_number', Value: faker.phone.number() }
      ],
      MessageAction: MessageActionType.SUPPRESS,
      Username: faker.internet.userName(),
      UserPoolId,
      ValidationData: []
    }
    const command = new AdminCreateUserCommand(input);
    promisedUsers.push(client.send(command));
  }
  const users = await Promise.all(promisedUsers);
  return users;
}

const seedCognito = async () => {
  const cognitoPool = await createCognitoPool();
  const createdCognitoUsers = await createUsersInCognitoPool(cognitoPool.UserPool?.Id as string);
  console.log('Created User Pool:', cognitoPool.UserPool?.Id);
  console.log('Total Cognito users created:', createdCognitoUsers.length);
};

seedCognito();
