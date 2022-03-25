import { MessageInterface } from "../types/Interface";
import { deflateSync, inflateSync } from "zlib";
import { UnobfMessage } from "../types/UnobfMessage";


export class UnobfEnv {
  /**
 * @param msg The UnobfMessage recived by the Aether Server.
 * @returns The unobfJson data used to send the unobfuscated message. Can be decoded with the decode() function.
 * @deprecated This should only be used for testing, do not use this in production as it doesn't use auth.
 */
  static encode(msg: UnobfMessage): string {
    const unobfJson = deflateSync(JSON.stringify(msg), { level: 5 });
    return unobfJson.toString("base64");
  }

  /**
   * @param msg The unobfJson data from the encode() function. 
   * @returns The unobfuscated deobfJson as a MessageInterface.
   * @deprecated This should only be used for testing, do not use this in production as it doesn't use auth.
   */
  static decode(msg: string): MessageInterface | null {
    try {
      const deobfJson = inflateSync(Buffer.from(msg, "base64"), {
        level: 5,
      })?.toString();
      if (!deobfJson) return null;
      else return JSON.parse(deobfJson) as MessageInterface;
    } catch {
      return null;
    }
  }
}
