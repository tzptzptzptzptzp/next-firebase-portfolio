import { Injectable } from "@nestjs/common";
import { FIREBASE_ENV } from "src/config/app.config";

import { auth, storage } from "firebase-admin";
import { firestore } from "firebase-admin";

import * as admin from "firebase-admin";

export const API_VERSION = "v1";
export const envDoc = (): string => {
  if (process.env.NODE_ENV === "production") {
    return "production";
  } else {
    return "development";
  }
};

@Injectable()
export class FirebaseService {
  constructor() {
    if (!admin.apps.length) {
      admin.initializeApp({
        credential: admin.credential.cert({
          projectId: FIREBASE_ENV.FIREBASE_PROJECT_ID,
          clientEmail: FIREBASE_ENV.FIREBASE_CLIENT_EMAIL,
          privateKey: FIREBASE_ENV.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
        }),
        storageBucket: FIREBASE_ENV.FIREBASE_STORAGE_BUCKET,
      });
      admin.firestore().settings({ ignoreUndefinedProperties: true });
    }
    this.auth = admin.auth();
    this.firestore = admin.firestore();
    this.storage = admin.storage();
  }

  private readonly auth: auth.Auth;

  private readonly firestore: firestore.Firestore;

  private readonly storage: storage.Storage;

  /**
   * admin auth 取得
   */
  getAuth(): auth.Auth {
    return this.auth;
  }

  /**
   * admin firestore 取得
   */
  getFirestore(): firestore.Firestore {
    return this.firestore;
  }

  /**
   * admin storage 取得
   */
  getStorage(): storage.Storage {
    return this.storage;
  }

  /**
   * FirestoreCollection 取得
   */
  getCollectionRef(
    collectionName: string
  ): firestore.CollectionReference<firestore.DocumentData> {
    return this.firestore
      .collection(API_VERSION)
      .doc(envDoc())
      .collection(collectionName);
  }

  /**
   * FirestoreDocument 登録・更新
   * @param collectionRef: コレクションリファレンス
   * @param docId: ドキュメントID
   * @param data: 登録データ
   */
  async upsertDoc(
    collectionRef: FirebaseFirestore.CollectionReference<FirebaseFirestore.DocumentData>,
    docId: string,
    data: unknown
  ): Promise<firestore.WriteResult> {
    const res = await collectionRef
      .doc(docId)
      .set(Object.assign({}, data), { merge: true });
    return res;
  }
}
