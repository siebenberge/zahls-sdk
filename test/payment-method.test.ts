import { beforeEach, describe, expect, test } from 'vitest';
import {
  PaymentMethodsResponse,
  PaymentMethodResponse,
  ZahlsClient,
} from '../lib';
import clientConfig from './client-config';

// THESE TEST ARE TO BE EXECUTED LOCALLY ONLY

describe('Payment method', () => {
  let client: ZahlsClient;

  beforeEach(() => {
    client = new ZahlsClient(clientConfig.instance, clientConfig.secret);
  });

  test.skip('test get visa', async () => {
    const result: PaymentMethodResponse =
      await client.api.paymentMethod.retrieve('visa');

    console.log('RESULT', result);
    console.log('RESULT options_by_psp', result.data.options_by_psp);
    expect(result.status).toEqual('success');
  });

  test.skip('test get all', async () => {
    console.log('INSTANCE', process.env.INSTANCE);
    const result: PaymentMethodsResponse =
      await client.api.paymentMethod.retrieveAll();
    console.log('RESULT', result);
    console.log('RESULT options_by_psp', result.data[0].options_by_psp);
    expect(result.status).toEqual('success');
  });
});
