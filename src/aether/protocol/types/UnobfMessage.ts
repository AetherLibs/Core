import { Types } from "./InfoEnum";

export class UnobfMessage {
  types: Types;
  nonce?: string;
  data: unknown;

  constructor(type: Types, data: unknown, nonce?: string) {
    this.nonce = nonce;
    this.types = type;
    this.data = data;
  }

  toJSON() {
    return {
      tp: this.types,
      dt: this.data,
      nn: this.nonce,
    };
  }
}
