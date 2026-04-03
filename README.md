# PrizePilot

Judge hackathon submissions with a consensus-backed scorecard.

Contract: [https://studio.genlayer.com/contracts?import-contract=0xeB8B114a699182E58267359c21dfBCd98733e276](https://studio.genlayer.com/contracts?import-contract=0xeB8B114a699182E58267359c21dfBCd98733e276)

## What it does

Paste the submission summary and the hackathon rubric. The contract produces an onchain score, verdict, and why the project should advance or stall.

## Why GenLayer

Directly maps to hackathon judging criteria.
Comparative equivalence fits rich scoring and explanation output.
Strong story: transparent AI judging onchain.

## Contract mode

- Comparative equivalence

## Browser wallet flow

1. Open the app in a browser with the GenLayer Studio wallet available.
2. Paste the case input plus policy or rubric context.
3. Sign with the browser wallet and let the intelligent contract return the decision onchain.

## Local run

1. `pnpm install`
2. `pnpm dev`
3. Keep `.env.local` pointed at Studionet and the deployed contract address.

## Deployed contract

- Address: `0xeB8B114a699182E58267359c21dfBCd98733e276`
- Studio import: [https://studio.genlayer.com/contracts?import-contract=0xeB8B114a699182E58267359c21dfBCd98733e276](https://studio.genlayer.com/contracts?import-contract=0xeB8B114a699182E58267359c21dfBCd98733e276)
