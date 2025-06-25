# 📬 Serverless Contact Form App (AWS Lambda + API Gateway + DynamoDB)

A fully serverless contact form for static websites. Built using AWS Lambda, API Gateway, and DynamoDB, with optional email alerts via SNS. Perfect for businesses that want a secure, scalable contact form without servers.

---

## 🏗 Architecture

```
Browser → API Gateway → Lambda → DynamoDB
                      ↘
                       SNS → Email Notification (Optional)
```

---

## 💡 Use Case

> GreenNest Farms, a local business, needed a contact form on their website for feedback and inquiries. They wanted a simple, cost-effective, and serverless solution without relying on third-party services like Google Forms.

---

## 🚀 Tech Stack

| Layer       | Technology       |
|-------------|------------------|
| Frontend    | HTML, CSS, JavaScript |
| Backend     | AWS Lambda (Node.js) |
| API         | Amazon API Gateway |
| Database    | DynamoDB |
| Notification | SNS (Email Alerts) |
| IaC         | AWS CloudFormation |
| Hosting     | S3 Static Website |
| CI/CD       | GitHub Actions (Optional) |

---

## 📁 Folder Structure

```
/serverless-contact-form
├── frontend/
│   └── index.html
├── lambda/
│   └── submitMessage.js
├── diagrams/
│   └── contact-app.drawio
│   └── contact-app.png
├── templates/
│   └── cloudformation.yaml
├── .github/
│   └── workflows/
│       └── deploy.yml
└── README.md
```

---

## ⚙️ Deployment Steps

### 1. 🔧 Prepare Resources

- Upload `lambda.zip` (zipped `lambda/` folder) to an S3 bucket
- Replace the bucket name and Lambda function name in `cloudformation.yaml`

### 2. 🛠 Deploy CloudFormation Stack

```bash
aws cloudformation deploy \
  --template-file templates/cloudformation.yaml \
  --stack-name contact-form-app \
  --capabilities CAPABILITY_NAMED_IAM
```

### 3. 📬 Confirm Email for SNS

You will receive a confirmation email to allow SNS notifications. Make sure to click “**Confirm subscription**”.

---

## 🖼 Frontend Integration

Replace this line in `frontend/index.html`:

```js
const apiUrl = 'https://YOUR_API_ID.execute-api.eu-north-1.amazonaws.com/prod/contact';
```

Then upload to S3 for static site hosting:

```bash
aws s3 mb s3://your-static-site-bucket
aws s3 cp frontend/index.html s3://your-static-site-bucket/index.html --acl public-read
aws s3 website s3://your-static-site-bucket/ --index-document index.html
```

---

## 🔁 GitHub Actions (CI/CD)

Automatically deploys Lambda code when you push to main.

Stored in `.github/workflows/deploy.yml`

Secrets required:

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`

---

## ✅ Features

- Accepts name, email, and message
- Validates input server-side
- Stores message in DynamoDB
- Sends optional email alert via SNS
- Fully deployable via CloudFormation
- GitHub Actions support

---

## 🔐 Security

- IAM roles scoped to least privilege
- Input validation on server-side
- HTTPS via API Gateway

---

## 📬 Future Improvements

- Add CAPTCHA for spam protection
- Add Cognito authentication
- Create admin dashboard for submissions

---

## 🧑‍💻 Author

Made by a Cloud Developer for small businesses needing cost-efficient serverless tools.

---

## 📷 Preview

![Architecture Diagram](diagrams/contact-app.png)

---
