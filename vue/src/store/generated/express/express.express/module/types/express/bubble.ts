/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "express.express";

export interface Bubble {
  /** bubbleId */
  id: number;
  /** Who created it -> creators wallet address */
  creator: string;
  /** Name or title of the bubble */
  title: string;
  /**
   * any extra info that needs to be stored with the bubble
   * probably a json encoded string
   */
  extension: string;
  /** any extra info that is needed to decode the extension string */
  extensionType: string;
  /** An array of thoughtIds that are part of this Bubble */
  thoughtIds: number[];
  /** An array of bubbleIds that are part of this Bubble */
  bubbleIds: number[];
}

const baseBubble: object = {
  id: 0,
  creator: "",
  title: "",
  extension: "",
  extensionType: "",
  thoughtIds: 0,
  bubbleIds: 0,
};

export const Bubble = {
  encode(message: Bubble, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    if (message.title !== "") {
      writer.uint32(26).string(message.title);
    }
    if (message.extension !== "") {
      writer.uint32(34).string(message.extension);
    }
    if (message.extensionType !== "") {
      writer.uint32(42).string(message.extensionType);
    }
    writer.uint32(50).fork();
    for (const v of message.thoughtIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    writer.uint32(58).fork();
    for (const v of message.bubbleIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Bubble {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBubble } as Bubble;
    message.thoughtIds = [];
    message.bubbleIds = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.creator = reader.string();
          break;
        case 3:
          message.title = reader.string();
          break;
        case 4:
          message.extension = reader.string();
          break;
        case 5:
          message.extensionType = reader.string();
          break;
        case 6:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.thoughtIds.push(longToNumber(reader.uint64() as Long));
            }
          } else {
            message.thoughtIds.push(longToNumber(reader.uint64() as Long));
          }
          break;
        case 7:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.bubbleIds.push(longToNumber(reader.uint64() as Long));
            }
          } else {
            message.bubbleIds.push(longToNumber(reader.uint64() as Long));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Bubble {
    const message = { ...baseBubble } as Bubble;
    message.thoughtIds = [];
    message.bubbleIds = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title);
    } else {
      message.title = "";
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
    if (object.thoughtIds !== undefined && object.thoughtIds !== null) {
      for (const e of object.thoughtIds) {
        message.thoughtIds.push(Number(e));
      }
    }
    if (object.bubbleIds !== undefined && object.bubbleIds !== null) {
      for (const e of object.bubbleIds) {
        message.bubbleIds.push(Number(e));
      }
    }
    return message;
  },

  toJSON(message: Bubble): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.creator !== undefined && (obj.creator = message.creator);
    message.title !== undefined && (obj.title = message.title);
    message.extension !== undefined && (obj.extension = message.extension);
    message.extensionType !== undefined &&
      (obj.extensionType = message.extensionType);
    if (message.thoughtIds) {
      obj.thoughtIds = message.thoughtIds.map((e) => e);
    } else {
      obj.thoughtIds = [];
    }
    if (message.bubbleIds) {
      obj.bubbleIds = message.bubbleIds.map((e) => e);
    } else {
      obj.bubbleIds = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Bubble>): Bubble {
    const message = { ...baseBubble } as Bubble;
    message.thoughtIds = [];
    message.bubbleIds = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    } else {
      message.title = "";
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
    if (object.thoughtIds !== undefined && object.thoughtIds !== null) {
      for (const e of object.thoughtIds) {
        message.thoughtIds.push(e);
      }
    }
    if (object.bubbleIds !== undefined && object.bubbleIds !== null) {
      for (const e of object.bubbleIds) {
        message.bubbleIds.push(e);
      }
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
