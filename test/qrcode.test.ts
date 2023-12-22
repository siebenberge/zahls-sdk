import { beforeEach, describe, expect, test } from 'vitest';
import { ZahlsClient, QrCodeRequest } from '../lib';
import clientConfig from './client-config';

// UNABLE TO TEST QR CODE ATM, TWINT IS NOT ENABLED

describe('QR code', () => {
  let client: ZahlsClient;

  beforeEach(() => {
    client = new ZahlsClient(clientConfig.instance, clientConfig.secret);
  });

  test.skip('test create', async () => {
    const request = new QrCodeRequest('https://www.zahls.ch');
    const result = await client.api.qrCode.create(request);

    console.log('RESULT', result);
    expect(result.status).toEqual('success');
  });
});
