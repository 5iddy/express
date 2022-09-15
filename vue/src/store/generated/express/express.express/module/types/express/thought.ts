/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "express.express";

export interface Thought {
  index: number;
  content: string;
  isReply: boolean;
  replyForId: number;
  replyForThoughtId: number;
  categories: string[];
  tags: string[];
  extension: string;
}

const baseThought: object = {
  index: 0,
  content: "",
  isReply: false,
  replyForId: 0,
  replyForThoughtId: 0,
  categories: "",
  tags: "",
  extension: "",
};

export const Thought = {
  encode(message: Thought, writer: Writer = Writer.create()): Writer {
    if (message.index !== 0) {
      writer.uint32(8).uint64(message.index);
    }
    if (message.content !== "") {
      writer.uint32(18).string(message.content);
    }
    if (message.isReply === true) {
      writer.uint32(24).bool(message.isReply);
    }
    if (message.replyForId !== 0) {
      writer.uint32(32).uint64(message.replyForId);
    }
    if (message.replyForThoughtId !== 0) {
      writer.uint32(40).uint64(message.replyForThoughtId);
    }
    for (const v of message.categories) {
      writer.uint32(50).string(v!);
    }
    for (const v of message.tags) {
      writer.uint32(58).string(v!);
    }
    if (message.extension !== "") {
      writer.uint32(66).string(message.extension);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Thought {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseThought } as Thought;
    message.categories = [];
    message.tags = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.content = reader.string();
          break;
        case 3:
          message.isReply = reader.bool();
          break;
        case 4:
          message.replyForId = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.replyForThoughtId = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.categories.push(reader.string());
          break;
        case 7:
          message.tags.push(reader.string());
          break;
        case 8:
          message.extension = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Thought {
    const message = { ...baseThought } as Thought;
    message.categories = [];
    message.tags = [];
    if (object.index !== undefined && object.index !== null) {
      message.index = Number(object.index);
    } else {
      message.index = 0;
    }
    if (object.content !== undefined && object.content !== null) {
      message.content = String(object.content);
    } else {
      message.content = "";
    }
    if (object.isReply !== undefined && object.isReply !== null) {
      message.isReply = Boolean(object.isReply);
    } else {
      message.isReply = false;
    }
    if (object.replyForId !== undefined && object.replyForId !== null) {
      message.replyForId = Number(object.replyForId);
    } else {
      message.replyForId = 0;
    }
    if (
      object.replyForThoughtId !== undefined &&
      object.replyForThoughtId !== null
    ) {
      message.replyForThoughtId = Number(object.replyForThoughtId);
    } else {
      message.replyForThoughtId = 0;
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
    return message;
  },

  toJSON(message: Thought): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.content !== undefined && (obj.content = message.content);
    message.isReply !== undefined && (obj.isReply = message.isReply);
    message.replyForId !== undefined && (obj.replyForId = message.replyForId);
    message.replyForThoughtId !== undefined &&
      (obj.replyForThoughtId = message.replyForThoughtId);
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
    return obj;
  },

  fromPartial(object: DeepPartial<Thought>): Thought {
    const message = { ...baseThought } as Thought;
    message.categories = [];
    message.tags = [];
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = 0;
    }
    if (object.content !== undefined && object.content !== null) {
      message.content = object.content;
    } else {
      message.content = "";
    }
    if (object.isReply !== undefined && object.isReply !== null) {
      message.isReply = object.isReply;
    } else {
      message.isReply = false;
    }
    if (object.replyForId !== undefined && object.replyForId !== null) {
      message.replyForId = object.replyForId;
    } else {
      message.replyForId = 0;
    }
    if (
      object.replyForThoughtId !== undefined &&
      object.replyForThoughtId !== null
    ) {
      message.replyForThoughtId = object.replyForThoughtId;
    } else {
      message.replyForThoughtId = 0;
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
    return message;
  },
};

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
