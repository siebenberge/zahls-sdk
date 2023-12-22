import { DesignService } from './service/design-service';
import { GatewayService } from './service/gateway-service';
import { PaylinkService } from './service/paylink-service';
import { PaymentMethodService } from './service/payment-method-service';
import { PaymentProviderService } from './service/payment-provider-service';
import { PayoutService } from './service/payout-service';
import { QrCodeService } from './service/qrcode-service';
import { SignatureCheckService } from './service/signature-check-service';
import { TransactionService } from './service/transaction-service';

export default class Api {
  public readonly paylink: PaylinkService;
  public readonly gateway: GatewayService;
  public readonly qrCode: QrCodeService;
  public readonly paymentProvider: PaymentProviderService;
  public readonly paymentMethod: PaymentMethodService;
  public readonly payout: PayoutService;
  public readonly transaction: TransactionService;
  public readonly design: DesignService;
  public readonly signatureCheck: SignatureCheckService;

  constructor(instance: string, apiSecret: string) {
    this.paylink = new PaylinkService(instance, apiSecret);
    this.gateway = new GatewayService(instance, apiSecret);
    this.qrCode = new QrCodeService(instance, apiSecret);
    this.paymentProvider = new PaymentProviderService(instance, apiSecret);
    this.paymentMethod = new PaymentMethodService(instance, apiSecret);
    this.payout = new PayoutService(instance, apiSecret);
    this.transaction = new TransactionService(instance, apiSecret);
    this.design = new DesignService(instance, apiSecret);
    this.signatureCheck = new SignatureCheckService(instance, apiSecret);
  }
}
