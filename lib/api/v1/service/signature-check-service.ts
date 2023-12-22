import { Service } from '../../interface/service';
import { SignatureCheckResponse } from '../types/signature-check';

export class SignatureCheckService extends Service {
  constructor(instance: string, apiSecret: string) {
    super(instance, apiSecret, 'SignatureCheck');
  }
  /**
   *
   * @returns This endpoint can be used to verify the INSTANCE_API_SECRET to be correct. In case it is not correct, you get an error status.
   */
  async check(): Promise<SignatureCheckResponse> {
    return this.get();
  }
}
