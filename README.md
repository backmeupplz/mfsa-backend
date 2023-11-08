# Backend for the MFSA service

## Installation and local launch

1. Clone this repo: `git clone https://github.com/backmeuppls/mfsa-backend`
2. Create `.env` with the environment variables listed below
3. Run `yarn` in the root folder
4. Run `yarn start`

And you should be good to go! Feel free to fork and submit pull requests.

## Environment variables

| Name                 | Description                              |
| -------------------- | ---------------------------------------- |
| `FARCASTER_MNEMONIC` | Mnemonic for the the main app            |
| `FID`                | Farcaster ID for the main app            |
| `API_KEY`            | [Neynar](https://neynar.com) API key     |
| `PORT`               | Port to run server on (defaults to 1337) |

Also, please, consider looking at `.env.sample`.
