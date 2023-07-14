const cognito_config = {
  local: {
    region: 'us-west-2',
    endpoint: 'http://localhost:9229',
    PoolName: 'pang-user-cognito-local',
    clientName: 'pang-users'
  }
};

export default cognito_config;
