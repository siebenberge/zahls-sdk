import Api from './v1/api';

export class ZahlsClient {
  public readonly api: Api;

  constructor(instance: string, apiSecret: string) {
    this.api = new Api(instance, apiSecret);
  }
}
