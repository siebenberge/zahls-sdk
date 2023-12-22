import { beforeEach, describe, expect, test } from 'vitest';
import { ZahlsClient } from '../lib';
import clientConfig from './client-config';
import { SignatureCheckResponse } from '../lib/api/v1/types/signature-check';

// THESE TEST ARE TO BE EXECUTED LOCALLY ONLY

describe('Signature Check', () => {
  let client: ZahlsClient;

  beforeEach(() => {
    client = new ZahlsClient(clientConfig.instance, clientConfig.secret);
  });

  test.skip('test check signature', async () => {
    const result: SignatureCheckResponse =
      await client.api.signatureCheck.check()
    console.log('RESULT', result);
    expect(result.status).toEqual('success');
  });
});
