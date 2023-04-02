import { FirebaseAdapter } from "@next-auth/firebase-adapter"
import {db} from "../../../firebase";
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
  providers: [
    Providers.Google({
      clientId: "166653415935-ucdp1u49nd31h4123lr2glb5kp9oqjqc.apps.googleusercontent.com",
      clientSecret: "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"
    }),
  ],
  // adapter: FirebaseAdapter(db)
})
