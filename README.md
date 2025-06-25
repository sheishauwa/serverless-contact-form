# 🌿 Serverless Contact Form for GreenNest Farms

This project implements a fully serverless contact form using AWS Lambda, API Gateway, DynamoDB, and optional SNS email alerts. The form is hosted on S3 and deployable with Infrastructure as Code (IaC).

---

## 🌐 Use Case

GreenNest Farms needed a lightweight, scalable way for customers to send inquiries through their website—without using third-party tools like Google Forms.

---

## 📦 Tech Stack

| Layer        | Service        |
|--------------|----------------|
| Frontend     | HTML, CSS, JS (Hosted on S3) |
| API          | Amazon API Gateway |
| Logic        | AWS Lambda (Node.js) |
| Database     | Amazon DynamoDB |
| Notification | Amazon SNS (optional) |
| IaC          | AWS CloudFormation |
| CI/CD        | GitHub Actions (optional) |

---

## 📁 Folder Structure

/serverless-contact-form
├── frontend/ # Static HTML form
├── lambda/ # Lambda function code
├── diagrams/ # Architecture diagram (drawio + PNG)
├── templates/ # CloudFormation YAML
├── .github/workflows/ # GitHub Actions CI/CD
└── README.md


---

## 📤 Features

- Accepts **name**, **email**, and **message**
- Validates inputs on server
- Saves message to **DynamoDB**
- Sends **SNS email notification**
- Hosted via **S3 static hosting**
- Fully reproducible with CloudFormation

---

## 🚀 Deployment Guide

### ✅ 1. Deploy CloudFormation Stack
Upload your `lambda.zip` to S3 and deploy the `cloudformation.yaml` using AWS Console or CLI.

```bash
aws cloudformation deploy \
  --template-file templates/cloudformation.yaml \
  --stack-name contact-form-stack \
  --capabilities CAPABILITY_NAMED_IAM
