/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "express.express";

/** Represents a single thought */
export interface Thought {
  /** index or id */
  id: number;
  /** Creator wallet Address */
  creator: string;
  /**
   * main content max 4GB
   * content will not will checked or read
   */
  content: string;
  /**
   * type of content, could be anything -> html | json | xml | markdown | text
   * content type will not be checked
   * it falls on the frontend dev to make sure that content and content type match
   */
  contentType: string;
  /** is this thought a reply to something ? */
  isReply: boolean;
  /** if it is a reply, reply to what thought id */
  replyForThoughtId: number;
  /** if it is a reply, reply to what bubble id */
  replyForBubbleId: number;
  /** All the categories that this thought belongs to */
  categories: string[];
  /** All the tags that this thought mentions */
  tags: string[];
  /**
   * Any extra info that needs to be stored as part of this thought
   * this will most likely be a json encoded string
   * extension will not be read nor its content will be checked
   */
  extension: string;
  /**
   * any needed info about how to read extension
   * extensionType and extension string wont be checked
   * falls on the frontend dev to make sure they match
   */
  extensionType: string;
  /** Is this thought cloned from another thought? */
  isCloned: boolean;
  /** if it is a clone, clone of what thoughtId */
  clonedFromThoughtId: number;
  /** Is this thought created for a bubble? */
  isPartOfBubble: boolean;
  /** if it is part of a bubble, what is the parent bubble id? */
  parentBubbleId: number;
}

const baseThought: object = {
  id: 0,
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
  isPartOfBubble: false,
  parentBubbleId: 0,
};

export const Thought = {
  encode(message: Thought, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    if (message.content !== "") {
      writer.uint32(26).string(message.content);
    }
    if (message.contentType !== "") {
      writer.uint32(34).string(message.contentType);
    }
    if (message.isReply === true) {
      writer.uint32(40).bool(message.isReply);
    }
    if (message.replyForThoughtId !== 0) {
      writer.uint32(48).uint64(message.replyForThoughtId);
    }
    if (message.replyForBubbleId !== 0) {
      writer.uint32(56).uint64(message.replyForBubbleId);
    }
    for (const v of message.categories) {
      writer.uint32(66).string(v!);
    }
    for (const v of message.tags) {
      writer.uint32(74).string(v!);
    }
    if (message.extension !== "") {
      writer.uint32(82).string(message.extension);
    }
    if (message.extensionType !== "") {
      writer.uint32(90).string(message.extensionType);
    }
    if (message.isCloned === true) {
      writer.uint32(96).bool(message.isCloned);
    }
    if (message.clonedFromThoughtId !== 0) {
      writer.uint32(104).uint64(message.clonedFromThoughtId);
    }
    if (message.isPartOfBubble === true) {
      writer.uint32(112).bool(message.isPartOfBubble);
    }
    if (message.parentBubbleId !== 0) {
      writer.uint32(120).uint64(message.parentBubbleId);
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
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.creator = reader.string();
          break;
        case 3:
          message.content = reader.string();
          break;
        case 4:
          message.contentType = reader.string();
          break;
        case 5:
          message.isReply = reader.bool();
          break;
        case 6:
          message.replyForThoughtId = longToNumber(reader.uint64() as Long);
          break;
        case 7:
          message.replyForBubbleId = longToNumber(reader.uint64() as Long);
          break;
        case 8:
          message.categories.push(reader.string());
          break;
        case 9:
          message.tags.push(reader.string());
          break;
        case 10:
          message.extension = reader.string();
          break;
        case 11:
          message.extensionType = reader.string();
          break;
        case 12:
          message.isCloned = reader.bool();
          break;
        case 13:
          message.clonedFromThoughtId = longToNumber(reader.uint64() as Long);
          break;
        case 14:
          message.isPartOfBubble = reader.bool();
          break;
        case 15:
          message.parentBubbleId = longToNumber(reader.uint64() as Long);
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
    if (object.isPartOfBubble !== undefined && object.isPartOfBubble !== null) {
      message.isPartOfBubble = Boolean(object.isPartOfBubble);
    } else {
      message.isPartOfBubble = false;
    }
    if (object.parentBubbleId !== undefined && object.parentBubbleId !== null) {
      message.parentBubbleId = Number(object.parentBubbleId);
    } else {
      message.parentBubbleId = 0;
    }
    return message;
  },

  toJSON(message: Thought): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
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
    message.isPartOfBubble !== undefined &&
      (obj.isPartOfBubble = message.isPartOfBubble);
    message.parentBubbleId !== undefined &&
      (obj.parentBubbleId = message.parentBubbleId);
    return obj;
  },

  fromPartial(object: DeepPartial<Thought>): Thought {
    const message = { ...baseThought } as Thought;
    message.categories = [];
    message.tags = [];
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
    if (object.isPartOfBubble !== undefined && object.isPartOfBubble !== null) {
      message.isPartOfBubble = object.isPartOfBubble;
    } else {
      message.isPartOfBubble = false;
    }
    if (object.parentBubbleId !== undefined && object.parentBubbleId !== null) {
      message.parentBubbleId = object.parentBubbleId;
    } else {
      message.parentBubbleId = 0;
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
