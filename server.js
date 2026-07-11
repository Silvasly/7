const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

const azureFeatures = [
  {
    title: 'Azure App Service',
    summary: 'Hosts the web app and provides an Azure-native deployment experience.',
    level: 'Hosting'
  },
  {
    title: 'Azure Functions',
    summary: 'Adds serverless logic for event-driven tasks and automation.',
    level: 'Serverless'
  },
  {
    title: 'Azure Cosmos DB',
    summary: 'Stores application data with global scale and low-latency access.',
    level: 'Data'
  },
  {
    title: 'Azure Storage',
    summary: 'Supports blob, queue, and file storage patterns for modern apps.',
    level: 'Storage'
  },
  {
    title: 'Azure Key Vault',
    summary: 'Protects secrets, keys, and certificates in a secure vault.',
    level: 'Security'
  },
  {
    title: 'Azure Service Bus',
    summary: 'Enables reliable messaging between distributed services.',
    level: 'Messaging'
  },
  {
    title: 'Azure Monitor & App Insights',
    summary: 'Provides telemetry, alerting, and operational visibility.',
    level: 'Operations'
  },
  {
    title: 'Azure AI Services',
    summary: 'Adds intelligent experiences such as language and vision APIs.',
    level: 'AI'
  }
];

app.get('/api/azure-features', (req, res) => {
  res.json(azureFeatures);
});

app.get('/api/architecture', (req, res) => {
  res.json({
    title: 'Azure-first architecture',
    steps: [
      'Users visit the web app hosted in Azure App Service.',
      'Azure Functions handle background tasks and event-based actions.',
      'Cosmos DB and Storage store and retrieve application data.',
      'Key Vault secures credentials while Monitor and App Insights track health.'
    ]
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`AZ-204 Azure learning app running at http://localhost:${PORT}`);
});
