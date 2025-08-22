import { initializeApp, cert, ServiceAccount } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

const serviceAccount: ServiceAccount = {
  projectId: "flutter-practice-e7ef2",
  clientEmail:
    "firebase-adminsdk-fbsvc@flutter-practice-e7ef2.iam.gserviceaccount.com",
  privateKey:
    "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQD53dA4uumXEojC\nyBUN/WIFwy6FWvIRmWbAEcebdj0MSEZGw7I571AIbQ5CpkudW00o7ZK68oeN+bY7\n6+6fCFcdNkpYdwu/MGnrDzc3IZwoI/bWrNFIKG0ELpfYHQDZkgu3a854DLGKqX+A\nsQcKiUQ9dAgsownobOSjEto32+OPlvmGeuZq+/+fMdLQDO6oU8uBxxb5o3eBlFAb\nSAUoLDYLLGVsK+cXGQPUEGtfs3HlpK2bdumj/r/Bp1YRwkb7kD1n0V16VgkozEhs\nfhGqcguU4o0GeOdpKi9VZbKTzI3hzMzusCydnSFeWafW0p4mKEWVP530eJP3GYi6\neL/hShcbAgMBAAECggEAMiYoT/KHxof0Re/FdgjYfyKU+DPwKMMaocsPvm6FQy1Q\nWYyWfVVAQWit94eL3pnAC0pfbEEYHtEzF6S7QFT6swS9+DJwe596arCjmt+WiWHq\nfVyzJmHiu3ekhz4O+Rv8WQR8rJCTo6pwSkJ9kMpLFXBv4ZGZf/o3C1nRzWtHKX60\nr/LrIvizG9um/Y+U83XQv4wLChxj9qA6eN/tLomdMY93NY9/mJw4v9C/Z1Gvwck2\n+OyVvprztBfhNoZUM6xLgKDy7Cem6JOfbVhMCyjLRDCSk7wtYe64P7lHYU8JqhF4\ndJoI/8PNme186B9icEs7ryCh8b7BlyOF4Wcr/XyrIQKBgQD/Yn7oyuwFOaOM7iJ3\nIsKL0NP4Zfa10W9JLtgSlUEEz7JUVHyzqgLJ0JUAJgCihCg+ZbUIN7JNdd0dl3kQ\n/W3SLZUqCBvcwesYy+/yi3BoCKcPXkBB2Uj1PvPBiSkI6eOq5LFf2cBTJQPI3860\nC3351HpLCJgUtBLKAThnW99V4QKBgQD6d+oQaKBtXswUP7vEMYXq5VFOeJgYgA8N\nTiaXoFeTESIP07Kkh8ODg1TSCOT+HttUGxK5ePmAQm/DP0ZdbvVojYkdou5CO/5P\nxSZod2YEpYHwnbndnyLrRn9ZZdT249yWw5SF3fmuSBEaeqTtMfpa9zYCqRFo2lDe\nGT/GEo5UewKBgQCBKdW583evpNk9G+u+iYwPnsy2YwuGJai9QL3zmB1MS6eL0zdG\nvwOuApp5er7zcxfPhy0qPNEnMCdnIgcPOr3igT9iBLviyQkYf3yaFUACve2QbkDd\njQHDV9V82twwL+r/sa6sJbuJ0by6SceHdBCA3KAFdxFD11dxZ3CZhfPMwQKBgAOE\nG20PivD+G69NFb2zVEXv4ixP1RLC+XMeXbxTK+eMngXK2v8kSMJX3aD1LwHCPSH5\nH1IrOJVsWVVMVhiJrjhBhGM+HkofvXoxMlDVHEGEcUaHcEyEJ2FWJAOFQnAU0svr\nAvK+IvsnV9YfUqFhyjnsrn1rEit+pRP5FsQZDpZxAoGAPh+eWRwtgdbn9Ezw2BY/\nj7yksmjI6Viszs1efx+kL47sw8pdZIfWiV/iXK52XQv4FtsocI5zwUhfvhsHU3If\nEOwFV74Y/+YtjPYC7moGMHpP1buVO+u+XIBjT2iuG6nyjDkCE0Jva9103zX2lMVQ\nM569rn1UDfLCnDi92N550gs=\n-----END PRIVATE KEY-----\n",
};

initializeApp({
  credential: cert(serviceAccount),
});
export const firebaseAuth = getAuth();
