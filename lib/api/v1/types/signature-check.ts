import { Response } from '../../interface/response';

interface SignatureCheckResponse extends Response {
  data: SignatureCheck[];
}

type SignatureCheck = {
  id: number;
};

export type { SignatureCheckResponse };
