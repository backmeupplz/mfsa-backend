import env from '@/helpers/env'
import { Controller, Get } from 'amala'
import {
  NeynarAPIClient,
  generateSignature,
} from '@standard-crypto/farcaster-js-neynar'

@Controller('/uuid')
export default class LoginController {
  @Get('/')
  async generateUUID() {
    const client = new NeynarAPIClient(env.API_KEY)
    const signerFid = env.FID
    const deadline = Math.floor(Date.now() / 1000) + 86400 // a day from now
    const signer = await client.v2.createSigner()
    const signature = await generateSignature(
      signer.public_key,
      signerFid,
      env.FARCASTER_MNEMONIC,
      deadline
    )
    const registeredSigner = await client.v2.registerSigner(
      signer.signer_uuid,
      signerFid,
      deadline,
      signature
    )
    console.log(`Got signer ${registeredSigner.public_key}`)
    return {
      iosUrl: registeredSigner.signer_approval_url,
      androidUrl: `https://client.warpcast.com/deeplinks/signed-key-request?token=${registeredSigner.signer_approval_url?.split(
        '='
      )[1]}`,
      signerUUID: registeredSigner.signer_uuid,
      signerFID: registeredSigner.fid,
      signerPublicKey: registeredSigner.public_key,
      signerStatus: registeredSigner.status,
      apiKey: env.API_KEY,
    }
  }
}
