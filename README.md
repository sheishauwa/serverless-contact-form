# Serverless Contact Form

A fully serverless contact form app using AWS Lambda, API Gateway, and DynamoDB.

## 🧱 Architecture
- API Gateway for POST request
- Lambda to handle logic
- DynamoDB for storage
- Optional: SNS for notifications
- IaC with CloudFormation

## 🚀 Deployment
1. Upload `lambda.zip` to S3
2. Deploy `cloudformation.yaml`
3. Update frontend with API URL

## 📁 Folder Structure
/serverless-contact-form
│
├── frontend/
│   └── index.html
├── lambda/
│   └── submitMessage.js
├── diagrams/
│   └── contact-app.drawio
├── templates/
│   └── cloudformation.yaml
├── README.md
└── .github/
    └── workflows/
        └── deploy.yml
