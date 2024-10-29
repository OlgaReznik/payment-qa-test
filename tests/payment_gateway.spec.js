const axios = require('axios');
const { test, expect } = require('@playwright/test');
const paymentData = require('../test-data/paymentData.json');

test.describe('Credit Card Payment API Tests', () => {
    test('Valid Payment via Credit Card', async ({ baseURL }) => {
        const response = await axios.post(`${baseURL}/api/v1/payments`, paymentData.validCreditCard);

        expect(response.status).toBe(200);
        expect(response.data.status).toBe('success');
        expect(response.data.transaction_id).toContain('txn_123456789');
        expect(response.data.message).toBe('Payment processed successfully')
    });

    test('Valid Payment via PayPal', async ({ baseURL }) => {
        const response = await axios.post(`${baseURL}/api/v1/payments`, paymentData.payPalSuccess);

        expect(response.status).toBe(200);
        expect(response.data.status).toBe('success');
        expect(response.data.transaction_id).toContain('paypal_txn_987654321');
        expect(response.data.message).toBe('Payment via PayPal processed successfully')

    });

    test('Failed Payment due to Insufficient Funds', async ({ baseURL }) => {
        const response = await axios.post(`${baseURL}/api/v1/payments`, paymentData.insufficientFundsCard);
        expect(response.status).toBe(200);
        expect(response.data.status).toBe('failed');
        expect(response.data.error_code).toBe('INSUFFICIENT_FUNDS');
        expect(response.data.message).toBe('Payment failed due to insufficient funds')
    });

    test('Failed Payment due to Invalid Card Number', async ({ baseURL }) => {
        const response = await axios.post(`${baseURL}/api/v1/payments`, paymentData.invalidCard);
        expect(response.status).toBe(200);
        expect(response.data.status).toBe('failed');
        expect(response.data.error_code).toBe('INVALID_CARD');
        expect(response.data.message).toBe('Payment failed due to invalid card details')
    });

    test('Failed Payment due to Invalid CVV Number', async ({ baseURL }) => {
        const response = await axios.post(`${baseURL}/api/v1/payments`, paymentData.invalidCVV);
        expect(response.status).toBe(200);
        expect(response.data.error_code).toBe('INVALID_CVV');
        expect(response.data.status).toBe('failed');
        expect(response.data.message).toBe('Payment failed due to invalid CVV')
    });

    test('Failed Payment due to Expired Card', async ({ baseURL }) => {
        const response = await axios.post(`${baseURL}/api/v1/payments`, paymentData.expiredCard);
        expect(response.status).toBe(200);
        expect(response.data.error_code).toBe('EXPIRED_CARD');
        expect(response.data.status).toBe('failed');
        expect(response.data.message).toBe('Payment failed due to expired card')
    });

    test('Failed Payment due to unknown error', async ({ baseURL }) => {
        const response = await axios.post(`${baseURL}/api/v1/payments`, paymentData.unknownError);
        expect(response.status).toBe(200);
        expect(response.data.error_code).toBe('UNKNOWN_ERROR');
        expect(response.data.status).toBe('failed');
        expect(response.data.message).toBe('Payment failed due to unknown error')
    });


});

