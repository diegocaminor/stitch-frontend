import {
  DonateStreamer as DonateStreamerEvent,
  NewStreamer as NewStreamerEvent,
  RunLottery as RunLotteryEvent,
  WithdrawEarnings as WithdrawEarningsEvent
} from "../generated/Stitch/Stitch"
import {
  DonateStreamer,
  NewStreamer,
  RunLottery,
  Streamer,
  WithdrawEarnings
} from "../generated/schema"
import { Address, BigInt } from "@graphprotocol/graph-ts"

export function handleDonateStreamer(event: DonateStreamerEvent): void {
  let entity = new DonateStreamer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.streamer = event.params.streamer
  entity.amount = event.params.amount
  entity.save()
  
  let streamer = getOrCreateStreamer(entity.streamer.toHexString())
  streamer.earnings = streamer.earnings.plus(entity.amount)
  streamer.save()
}

export function handleNewStreamer(event: NewStreamerEvent): void {
  let entity = new NewStreamer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.streamer = event.params.streamer
  entity.save()
}

export function handleRunLottery(event: RunLotteryEvent): void {
  let entity = new RunLottery(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.streamer = event.params.streamer
  entity.winner = event.params.winner
  entity.save()
}

export function handleWithdrawEarnings(event: WithdrawEarningsEvent): void {
  let entity = new WithdrawEarnings(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.streamer = event.params.streamer
  entity.save()
}

function getOrCreateStreamer(address: string): Streamer{
  let entity = Streamer.load(address)
  if (entity == null ){
    entity = new Streamer(address)
    entity.earnings = BigInt.fromI32(0)
    entity.save()
  }
  return entity
}