const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');
const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  const { name, email, message } = JSON.parse(event.body);

  if (!name || !email || !message) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Missing input fields' }),
    };
  }

  const item = {
    messageId: uuidv4(),
    name,
    email,
    message,
    createdAt: new Date().toISOString()
  };

  try {
    await dynamo.put({
      TableName: process.env.TABLE_NAME,
      Item: item
    }).promise();

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Message stored successfully' }),
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Could not store message' }),
    };
  }
};

