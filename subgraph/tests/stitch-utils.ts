import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  DonateStreamer,
  NewStreamer,
  RunLottery,
  WithdrawEarnings
} from "../generated/Stitch/Stitch"

export function createDonateStreamerEvent(
  streamer: Address,
  amount: BigInt
): DonateStreamer {
  let donateStreamerEvent = changetype<DonateStreamer>(newMockEvent())

  donateStreamerEvent.parameters = new Array()

  donateStreamerEvent.parameters.push(
    new ethereum.EventParam("streamer", ethereum.Value.fromAddress(streamer))
  )
  donateStreamerEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return donateStreamerEvent
}

export function createNewStreamerEvent(streamer: Address): NewStreamer {
  let newStreamerEvent = changetype<NewStreamer>(newMockEvent())

  newStreamerEvent.parameters = new Array()

  newStreamerEvent.parameters.push(
    new ethereum.EventParam("streamer", ethereum.Value.fromAddress(streamer))
  )

  return newStreamerEvent
}

export function createRunLotteryEvent(
  streamer: Address,
  winner: Address
): RunLottery {
  let runLotteryEvent = changetype<RunLottery>(newMockEvent())

  runLotteryEvent.parameters = new Array()

  runLotteryEvent.parameters.push(
    new ethereum.EventParam("streamer", ethereum.Value.fromAddress(streamer))
  )
  runLotteryEvent.parameters.push(
    new ethereum.EventParam("winner", ethereum.Value.fromAddress(winner))
  )

  return runLotteryEvent
}

export function createWithdrawEarningsEvent(
  streamer: Address
): WithdrawEarnings {
  let withdrawEarningsEvent = changetype<WithdrawEarnings>(newMockEvent())

  withdrawEarningsEvent.parameters = new Array()

  withdrawEarningsEvent.parameters.push(
    new ethereum.EventParam("streamer", ethereum.Value.fromAddress(streamer))
  )

  return withdrawEarningsEvent
}
