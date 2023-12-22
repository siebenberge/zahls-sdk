import { Service } from '../../interface/service';
import {
  ChargeRequest,
  TransactionRequest,
  TransactionResponse,
} from '../types/transaction';

export class TransactionService extends Service {
  constructor(instance: string, apiSecret: string) {
    super(instance, apiSecret, 'Transaction');
  }

  /**
   * Retrieve a transaction
   * @param id The id of a transaction
   * @returns Response from zahls.ch
   */
  async retrieve(id: number): Promise<TransactionResponse> {
    return this.get(`${id}`);
  }

  /**
   * Retrieve all transactions
   * @returns Response from zahls.ch
   */
  async retrieveAll(): Promise<TransactionResponse> {
    return this.get();
  }

  /**
   * Create a cash transaction
   * @param request Form data for creation of transaction
   * @returns Response from zahls.ch
   */
  async create(request: TransactionRequest): Promise<TransactionResponse> {
    return this.post(request);
  }

  /**
   * Charge a Pre-Authorized/Reserved Transaction
   * @param id The id of the transaction to charge
   * @param request Request form:
   *
   * - **amount** - Amount for charge in cents
   *
   * - **purpose** - The purpose of the charge
   *
   * - **referenceId** - Reference id for charged transaction. Will be available in transaction webhook
   * @returns Response from zahls.ch
   */
  async charge(
    id: number,
    request?: Partial<ChargeRequest>,
  ): Promise<TransactionResponse> {
    return this.post(request ? request : {}, `${id}`);
  }

  /**
   * Refund a transaction
   * @param id The id of the transaction to refund
   * @param amount Custom amount to refund in cents. If not set, the whole amount will be refunded
   * @returns Response from zahls.ch
   */
  async refund(id: number, amount?: number): Promise<TransactionResponse> {
    return this.post({ amount }, `${id}/refund`);
  }

  /**
   * Capture a Transaction
   * @param id The id of the transaction to capture
   * @returns Response from zahls.ch
   */
  async capture(id: number): Promise<TransactionResponse> {
    return this.post({}, `${id}/capture`);
  }

  /**
   * Send mail receipt
   * @param id The id of the transaction with receipt
   * @param recipient Email address of recipient
   * @returns Response from zahls.ch
   */
  async sendMailReceipt(
    id: number,
    recipient: string,
  ): Promise<TransactionResponse> {
    return this.post({ recipient }, `${id}/receipt`);
  }

  /**
   * Delete a reserved transaction
   * @param id The id of reserved transaction to cancel/delete
   * @returns Response from zahls.ch
   */
  async remove(id: number): Promise<TransactionResponse> {
    return this.delete(`${id}`);
  }
}
