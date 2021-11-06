import nacl from "tweetnacl";
import util from "tweetnacl-util";

export interface Identity {
  public: {
    alias: string;
    encPublicKey: string;
    verifyKey: string;
  };
  secret: {
    encSecretKey: string;
    signerKey: string;
  };
}

export const createIdentity = (alias: string) => {
  const encryptionKeyPair = nacl.box.keyPair();
  const encPublicKey = util.encodeBase64(encryptionKeyPair.publicKey);
  const encSecretKey = util.encodeBase64(encryptionKeyPair.secretKey);

  const signKeyPair = nacl.sign.keyPair();
  const verifyKey = util.encodeBase64(signKeyPair.publicKey);
  const signerKey = util.encodeBase64(signKeyPair.secretKey);
  const identity: Identity = {
    public: {
      alias,
      encPublicKey,
      verifyKey,
    },
    secret: {
      encSecretKey,
      signerKey,
    },
  };
  return identity;
};
