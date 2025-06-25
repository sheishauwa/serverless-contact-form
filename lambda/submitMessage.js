const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');
const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    const body = JSON.parse(event.body);

    const { name, email, message } = body;

    if (!name || !email || !message) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: 'All fields are required' })
        };
    }

    const params = {
        TableName: 'ContactMessages',
        Item: {
            id: uuidv4(),
            name,
            email,
            message,
            timestamp: new Date().toISOString()
        }
    };

    try {
        await dynamo.put(params).promise();
        return {
            statusCode: 200,
            body: JSON.stringify({ success: true, message: 'Message saved successfully' })
        };
    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Internal Server Error' })
        };
    }
};
