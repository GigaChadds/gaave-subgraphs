import { BigInt } from "@graphprotocol/graph-ts"
import {
  Contract,
  CampaignProposed,
  ClaimBadge,
  Deposited,
  DepositedETH,
  Withdrawn,
  WithdrawnETH
} from "../generated/Contract/Contract"
import { Campaign } from "../generated/schema"

export function handleCampaignProposed(event: CampaignProposed): void {
  let campaign = new Campaign(event.transaction.from.toHex())
  campaign._campaignAddress = event.params._campaignAddress
  campaign._campaignId = event.params._campaignId
  campaign.save()
}

// export function handleClaimBadge(event: ClaimBadge): void {}

// export function handleDeposited(event: Deposited): void {}

// export function handleDepositedETH(event: DepositedETH): void {}

// export function handleWithdrawn(event: Withdrawn): void {}

// export function handleWithdrawnETH(event: WithdrawnETH): void {}
