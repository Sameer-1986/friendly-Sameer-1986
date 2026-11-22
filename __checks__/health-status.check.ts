import { ApiCheck, AssertionBuilder } from 'checkly/constructs'

new ApiCheck('acme-api-health-status', {
  name: 'Acme API - Health Status',
  locations: ['us-east-1', 'eu-central-1'],
  frequency: 1,
  degradedResponseTime: 300,
  maxResponseTime: 500,
  request: {
    method: 'GET',
    url: 'https://api.acme.com/v1/status',
    assertions: [
      AssertionBuilder.statusCode().equals(200),
      AssertionBuilder.responseTime().lessThan(500),
    ],
  },
})
