import { defineConfig } from 'checkly'

export default defineConfig({
  projectName: 'friendly-Sameer-1986',
  logicalId: 'friendly-sameer-1986',
  checks: {
    locations: ['us-east-1', 'eu-central-1'],
    checkMatch: '**/*.check.ts',
    browserChecks: { testMatch: '**/*.spec.ts' },
  },
})
