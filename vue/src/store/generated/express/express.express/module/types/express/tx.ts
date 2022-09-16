/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "express.express";

export interface MsgCreateThought {
  /** creator is must */
  creator: string;
  /** content is also required */
  content: string;
  /** contentType is also required */
  contentType: string;
  /** optional */
  isReply: boolean;
  /** required only if isReply is true and not replyForBubbleId */
  replyForThoughtId: number;
  /** required only if isReply is true and no replyForThoughtId */
  replyForBubbleId: number;
  /** optional */
  categories: string[];
  /** optional */
  tags: string[];
  /** optional */
  extension: string;
  /** required if extension is present */
  extensionType: string;
  /** optional */
  isCloned: boolean;
  /** required if isCloned is true */
  clonedFromThoughtId: number;
  /** optional */
  isChildOfBubble: boolean;
  /** required if isPartOfBubble is true */
  parentBubbleId: number;
}

export interface MsgCreateThoughtResponse {
  id: number;
  successful: boolean;
  message: string;
}

const baseMsgCreateThought: object = {
  creator: "",
  content: "",
  contentType: "",
  isReply: false,
  replyForThoughtId: 0,
  replyForBubbleId: 0,
  categories: "",
  tags: "",
  extension: "",
  extensionType: "",
  isCloned: false,
  clonedFromThoughtId: 0,
  isChildOfBubble: false,
  parentBubbleId: 0,
};

export const MsgCreateThought = {
  encode(message: MsgCreateThought, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.content !== "") {
      writer.uint32(18).string(message.content);
    }
    if (message.contentType !== "") {
      writer.uint32(26).string(message.contentType);
    }
    if (message.isReply === true) {
      writer.uint32(32).bool(message.isReply);
    }
    if (message.replyForThoughtId !== 0) {
      writer.uint32(40).uint64(message.replyForThoughtId);
    }
    if (message.replyForBubbleId !== 0) {
      writer.uint32(48).uint64(message.replyForBubbleId);
    }
    for (const v of message.categories) {
      writer.uint32(58).string(v!);
    }
    for (const v of message.tags) {
      writer.uint32(66).string(v!);
    }
    if (message.extension !== "") {
      writer.uint32(74).string(message.extension);
    }
    if (message.extensionType !== "") {
      writer.uint32(82).string(message.extensionType);
    }
    if (message.isCloned === true) {
      writer.uint32(88).bool(message.isCloned);
    }
    if (message.clonedFromThoughtId !== 0) {
      writer.uint32(96).uint64(message.clonedFromThoughtId);
    }
    if (message.isChildOfBubble === true) {
      writer.uint32(104).bool(message.isChildOfBubble);
    }
    if (message.parentBubbleId !== 0) {
      writer.uint32(112).uint64(message.parentBubbleId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateThought {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateThought } as MsgCreateThought;
    message.categories = [];
    message.tags = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.content = reader.string();
          break;
        case 3:
          message.contentType = reader.string();
          break;
        case 4:
          message.isReply = reader.bool();
          break;
        case 5:
          message.replyForThoughtId = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.replyForBubbleId = longToNumber(reader.uint64() as Long);
          break;
        case 7:
          message.categories.push(reader.string());
          break;
        case 8:
          message.tags.push(reader.string());
          break;
        case 9:
          message.extension = reader.string();
          break;
        case 10:
          message.extensionType = reader.string();
          break;
        case 11:
          message.isCloned = reader.bool();
          break;
        case 12:
          message.clonedFromThoughtId = longToNumber(reader.uint64() as Long);
          break;
        case 13:
          message.isChildOfBubble = reader.bool();
          break;
        case 14:
          message.parentBubbleId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateThought {
    const message = { ...baseMsgCreateThought } as MsgCreateThought;
    message.categories = [];
    message.tags = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.content !== undefined && object.content !== null) {
      message.content = String(object.content);
    } else {
      message.content = "";
    }
    if (object.contentType !== undefined && object.contentType !== null) {
      message.contentType = String(object.contentType);
    } else {
      message.contentType = "";
    }
    if (object.isReply !== undefined && object.isReply !== null) {
      message.isReply = Boolean(object.isReply);
    } else {
      message.isReply = false;
    }
    if (
      object.replyForThoughtId !== undefined &&
      object.replyForThoughtId !== null
    ) {
      message.replyForThoughtId = Number(object.replyForThoughtId);
    } else {
      message.replyForThoughtId = 0;
    }
    if (
      object.replyForBubbleId !== undefined &&
      object.replyForBubbleId !== null
    ) {
      message.replyForBubbleId = Number(object.replyForBubbleId);
    } else {
      message.replyForBubbleId = 0;
    }
    if (object.categories !== undefined && object.categories !== null) {
      for (const e of object.categories) {
        message.categories.push(String(e));
      }
    }
    if (object.tags !== undefined && object.tags !== null) {
      for (const e of object.tags) {
        message.tags.push(String(e));
      }
    }
    if (object.extension !== undefined && object.extension !== null) {
      message.extension = String(object.extension);
    } else {
      message.extension = "";
    }
    if (object.extensionType !== undefined && object.extensionType !== null) {
      message.extensionType = String(object.extensionType);
    } else {
      message.extensionType = "";
    }
    if (object.isCloned !== undefined && object.isCloned !== null) {
      message.isCloned = Boolean(object.isCloned);
    } else {
      message.isCloned = false;
    }
    if (
      object.clonedFromThoughtId !== undefined &&
      object.clonedFromThoughtId !== null
    ) {
      message.clonedFromThoughtId = Number(object.clonedFromThoughtId);
    } else {
      message.clonedFromThoughtId = 0;
    }
    if (
      object.isChildOfBubble !== undefined &&
      object.isChildOfBubble !== null
    ) {
      message.isChildOfBubble = Boolean(object.isChildOfBubble);
    } else {
      message.isChildOfBubble = false;
    }
    if (object.parentBubbleId !== undefined && object.parentBubbleId !== null) {
      message.parentBubbleId = Number(object.parentBubbleId);
    } else {
      message.parentBubbleId = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateThought): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.content !== undefined && (obj.content = message.content);
    message.contentType !== undefined &&
      (obj.contentType = message.contentType);
    message.isReply !== undefined && (obj.isReply = message.isReply);
    message.replyForThoughtId !== undefined &&
      (obj.replyForThoughtId = message.replyForThoughtId);
    message.replyForBubbleId !== undefined &&
      (obj.replyForBubbleId = message.replyForBubbleId);
    if (message.categories) {
      obj.categories = message.categories.map((e) => e);
    } else {
      obj.categories = [];
    }
    if (message.tags) {
      obj.tags = message.tags.map((e) => e);
    } else {
      obj.tags = [];
    }
    message.extension !== undefined && (obj.extension = message.extension);
    message.extensionType !== undefined &&
      (obj.extensionType = message.extensionType);
    message.isCloned !== undefined && (obj.isCloned = message.isCloned);
    message.clonedFromThoughtId !== undefined &&
      (obj.clonedFromThoughtId = message.clonedFromThoughtId);
    message.isChildOfBubble !== undefined &&
      (obj.isChildOfBubble = message.isChildOfBubble);
    message.parentBubbleId !== undefined &&
      (obj.parentBubbleId = message.parentBubbleId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateThought>): MsgCreateThought {
    const message = { ...baseMsgCreateThought } as MsgCreateThought;
    message.categories = [];
    message.tags = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.content !== undefined && object.content !== null) {
      message.content = object.content;
    } else {
      message.content = "";
    }
    if (object.contentType !== undefined && object.contentType !== null) {
      message.contentType = object.contentType;
    } else {
      message.contentType = "";
    }
    if (object.isReply !== undefined && object.isReply !== null) {
      message.isReply = object.isReply;
    } else {
      message.isReply = false;
    }
    if (
      object.replyForThoughtId !== undefined &&
      object.replyForThoughtId !== null
    ) {
      message.replyForThoughtId = object.replyForThoughtId;
    } else {
      message.replyForThoughtId = 0;
    }
    if (
      object.replyForBubbleId !== undefined &&
      object.replyForBubbleId !== null
    ) {
      message.replyForBubbleId = object.replyForBubbleId;
    } else {
      message.replyForBubbleId = 0;
    }
    if (object.categories !== undefined && object.categories !== null) {
      for (const e of object.categories) {
        message.categories.push(e);
      }
    }
    if (object.tags !== undefined && object.tags !== null) {
      for (const e of object.tags) {
        message.tags.push(e);
      }
    }
    if (object.extension !== undefined && object.extension !== null) {
      message.extension = object.extension;
    } else {
      message.extension = "";
    }
    if (object.extensionType !== undefined && object.extensionType !== null) {
      message.extensionType = object.extensionType;
    } else {
      message.extensionType = "";
    }
    if (object.isCloned !== undefined && object.isCloned !== null) {
      message.isCloned = object.isCloned;
    } else {
      message.isCloned = false;
    }
    if (
      object.clonedFromThoughtId !== undefined &&
      object.clonedFromThoughtId !== null
    ) {
      message.clonedFromThoughtId = object.clonedFromThoughtId;
    } else {
      message.clonedFromThoughtId = 0;
    }
    if (
      object.isChildOfBubble !== undefined &&
      object.isChildOfBubble !== null
    ) {
      message.isChildOfBubble = object.isChildOfBubble;
    } else {
      message.isChildOfBubble = false;
    }
    if (object.parentBubbleId !== undefined && object.parentBubbleId !== null) {
      message.parentBubbleId = object.parentBubbleId;
    } else {
      message.parentBubbleId = 0;
    }
    return message;
  },
};

const baseMsgCreateThoughtResponse: object = {
  id: 0,
  successful: false,
  message: "",
};

export const MsgCreateThoughtResponse = {
  encode(
    message: MsgCreateThoughtResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.successful === true) {
      writer.uint32(16).bool(message.successful);
    }
    if (message.message !== "") {
      writer.uint32(26).string(message.message);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateThoughtResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateThoughtResponse,
    } as MsgCreateThoughtResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.successful = reader.bool();
          break;
        case 3:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateThoughtResponse {
    const message = {
      ...baseMsgCreateThoughtResponse,
    } as MsgCreateThoughtResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.successful !== undefined && object.successful !== null) {
      message.successful = Boolean(object.successful);
    } else {
      message.successful = false;
    }
    if (object.message !== undefined && object.message !== null) {
      message.message = String(object.message);
    } else {
      message.message = "";
    }
    return message;
  },

  toJSON(message: MsgCreateThoughtResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.successful !== undefined && (obj.successful = message.successful);
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateThoughtResponse>
  ): MsgCreateThoughtResponse {
    const message = {
      ...baseMsgCreateThoughtResponse,
    } as MsgCreateThoughtResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.successful !== undefined && object.successful !== null) {
      message.successful = object.successful;
    } else {
      message.successful = false;
    }
    if (object.message !== undefined && object.message !== null) {
      message.message = object.message;
    } else {
      message.message = "";
    }
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreateThought(request: MsgCreateThought): Promise<MsgCreateThoughtResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateThought(request: MsgCreateThought): Promise<MsgCreateThoughtResponse> {
    const data = MsgCreateThought.encode(request).finish();
    const promise = this.rpc.request(
      "express.express.Msg",
      "CreateThought",
      data
    );
    return promise.then((data) =>
      MsgCreateThoughtResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
