import { beforeEach, describe, expect, test } from 'vitest';
import { PaymentProviderResponse, ZahlsClient } from '../lib';
import clientConfig from './client-config';

// THESE TEST ARE TO BE EXECUTED LOCALLY ONLY

describe('Payment provider', () => {
  let client: ZahlsClient;

  beforeEach(() => {
    client = new ZahlsClient(clientConfig.instance, clientConfig.secret);
  });

  test.skip('test get all', async () => {
    const result: PaymentProviderResponse =
      await client.api.paymentProvider.retrieveAll();

    console.log('RESULT', result);
    console.log('RESULT paymentMethods', result.data[0].paymentMethods);
    console.log(
      'RESULT activePaymentMethods',
      result.data[0].activePaymentMethods,
    );
    expect(result.status).toEqual('success');
  });
});
