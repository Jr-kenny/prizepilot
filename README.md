# PrizePilot

Judge hackathon submissions with a consensus-backed scorecard.

Contract: [https://studio.genlayer.com/contracts?import-contract=0xeB8B114a699182E58267359c21dfBCd98733e276](https://studio.genlayer.com/contracts?import-contract=0xeB8B114a699182E58267359c21dfBCd98733e276)

## What this app is

PrizePilot is a submission scoring engine for hackathon organizers, judges, and grant committees. Paste the submission summary and the hackathon rubric. The contract produces an onchain score, verdict, and why the project should advance or stall.

## The problem it solves

Submission review gets inconsistent when judges are overloaded or use the rubric differently. PrizePilot turns each submission and rubric into a transparent, consensus-backed scorecard.

## How the product works

1. Connect a browser wallet on GenLayer Studionet.
2. Paste submission summary.
3. Paste rubric or category rules.
4. Sign one write transaction to the intelligent contract.
5. Wait for the contract to return the structured result.
6. Read the verdict, score, reasons, and next action in the UI.

## What the contract decides

The contract performs this judgment onchain:

> Judge the submission against the rubric and decide whether it should move forward, require review, or be rejected.

Returned fields:

- headline
- verdict
- score
- reasons
- next_action
- proof_of_advantage

The verdict is always APPROVE, REVIEW, or REJECT. The score is an integer from 0 to 100, and the reasons array is always kept short enough to read instantly.

## Why GenLayer is necessary here

The app uses GenLayer for the scoring and reasoning step itself. Validators compare a rich rubric-driven judgment and converge on the same decision instead of hiding the evaluation in an opaque offchain process.

Consensus mode: **Comparative equivalence**

Validators compare the same case and must converge on the same verdict. Small score variation is allowed, but the final decision cannot drift. This fits ranking, matching, proposal review, and other judgment-heavy comparisons.

## Example input shape

Submission summary:

~~~text
Product: AI copilot for warehouse safety
Build: browser app plus GenLayer contract
Traction: 2 pilot customers
Demo flow: ...
~~~

Rubric or category rules:

~~~text
Judge on novelty, clarity, execution, user pull, and why GenLayer is necessary.
~~~

## Important files

- contracts/prizepilot.py: intelligent contract
- deploy/001_deploy.mjs: deployment script for Studionet
- src/App.tsx: browser UI
- src/lib/genlayer.ts: wallet connection and contract calls
- src/appConfig.ts: app task, copy, placeholders, and mode

## Run locally

1. pnpm install
2. Ensure .env.local contains VITE_CONTRACT_ADDRESS=0xeB8B114a699182E58267359c21dfBCd98733e276
3. Ensure .env.local contains VITE_GENLAYER_RPC_URL=https://studio.genlayer.com/api
4. pnpm dev
5. Open the app in a browser with Rabby, MetaMask, or another injected wallet that can switch to GenLayer Studionet.

## Deployed contract

- Address: 0xeB8B114a699182E58267359c21dfBCd98733e276
- Studio import: [https://studio.genlayer.com/contracts?import-contract=0xeB8B114a699182E58267359c21dfBCd98733e276](https://studio.genlayer.com/contracts?import-contract=0xeB8B114a699182E58267359c21dfBCd98733e276)
