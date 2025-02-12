import { beforeEach, describe, expect, test } from 'vitest';
import clientConfig from './client-config';
import { DesignRequest, DesignResponse, ZahlsClient } from '../lib';

// THESE TEST ARE TO BE EXECUTED LOCALLY ONLY

describe('Design', () => {
  let client: ZahlsClient;

  beforeEach(() => {
    client = new ZahlsClient(clientConfig.instance, clientConfig.secret);
  });

  test.skip('test get all', async () => {
    const result: DesignResponse = await client.api.design.retrieveAll();
    console.log('RESULT', result);
    expect(result.status).toEqual('success');
  });

  test.skip('test creation', async () => {
    const request = new DesignRequest('TEST_DESIGN');
    const result: DesignResponse = await client.api.design.create(request);
    console.log('RESULT', result);
    expect(result.status).toEqual('success');
  });

  test.skip('test delete', async () => {
    const result: DesignResponse = await client.api.design.remove('db694eb9');
    console.log('RESULT', result);
    expect(result.status).toEqual('success');
  });

  test.skip('test update', async () => {
    const request = new DesignRequest('TEST_DESIGN');
    request.setFontFamily('Georgia');
    const result: DesignResponse = await client.api.design.update(
      'db694eb9',
      request,
    );
    console.log('RESULT', result);
    expect(result.status).toEqual('success');
  });
});
