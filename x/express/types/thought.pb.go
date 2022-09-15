// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: express/thought.proto

package types

import (
	fmt "fmt"
	proto "github.com/gogo/protobuf/proto"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

type Thought struct {
	Index             uint64   `protobuf:"varint,1,opt,name=index,proto3" json:"index,omitempty"`
	Content           string   `protobuf:"bytes,2,opt,name=content,proto3" json:"content,omitempty"`
	IsReply           bool     `protobuf:"varint,3,opt,name=isReply,proto3" json:"isReply,omitempty"`
	ReplyForId        uint64   `protobuf:"varint,4,opt,name=replyForId,proto3" json:"replyForId,omitempty"`
	ReplyForThoughtId uint64   `protobuf:"varint,5,opt,name=replyForThoughtId,proto3" json:"replyForThoughtId,omitempty"`
	Categories        []string `protobuf:"bytes,6,rep,name=categories,proto3" json:"categories,omitempty"`
	Tags              []string `protobuf:"bytes,7,rep,name=tags,proto3" json:"tags,omitempty"`
	Extension         string   `protobuf:"bytes,8,opt,name=extension,proto3" json:"extension,omitempty"`
}

func (m *Thought) Reset()         { *m = Thought{} }
func (m *Thought) String() string { return proto.CompactTextString(m) }
func (*Thought) ProtoMessage()    {}
func (*Thought) Descriptor() ([]byte, []int) {
	return fileDescriptor_7ce425beb2a1c9dc, []int{0}
}
func (m *Thought) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Thought) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Thought.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Thought) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Thought.Merge(m, src)
}
func (m *Thought) XXX_Size() int {
	return m.Size()
}
func (m *Thought) XXX_DiscardUnknown() {
	xxx_messageInfo_Thought.DiscardUnknown(m)
}

var xxx_messageInfo_Thought proto.InternalMessageInfo

func (m *Thought) GetIndex() uint64 {
	if m != nil {
		return m.Index
	}
	return 0
}

func (m *Thought) GetContent() string {
	if m != nil {
		return m.Content
	}
	return ""
}

func (m *Thought) GetIsReply() bool {
	if m != nil {
		return m.IsReply
	}
	return false
}

func (m *Thought) GetReplyForId() uint64 {
	if m != nil {
		return m.ReplyForId
	}
	return 0
}

func (m *Thought) GetReplyForThoughtId() uint64 {
	if m != nil {
		return m.ReplyForThoughtId
	}
	return 0
}

func (m *Thought) GetCategories() []string {
	if m != nil {
		return m.Categories
	}
	return nil
}

func (m *Thought) GetTags() []string {
	if m != nil {
		return m.Tags
	}
	return nil
}

func (m *Thought) GetExtension() string {
	if m != nil {
		return m.Extension
	}
	return ""
}

func init() {
	proto.RegisterType((*Thought)(nil), "express.express.Thought")
}

func init() { proto.RegisterFile("express/thought.proto", fileDescriptor_7ce425beb2a1c9dc) }

var fileDescriptor_7ce425beb2a1c9dc = []byte{
	// 250 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x12, 0x4d, 0xad, 0x28, 0x28,
	0x4a, 0x2d, 0x2e, 0xd6, 0x2f, 0xc9, 0xc8, 0x2f, 0x4d, 0xcf, 0x28, 0xd1, 0x2b, 0x28, 0xca, 0x2f,
	0xc9, 0x17, 0xe2, 0x87, 0x0a, 0xeb, 0x41, 0x69, 0xa5, 0xcf, 0x8c, 0x5c, 0xec, 0x21, 0x10, 0x25,
	0x42, 0x22, 0x5c, 0xac, 0x99, 0x79, 0x29, 0xa9, 0x15, 0x12, 0x8c, 0x0a, 0x8c, 0x1a, 0x2c, 0x41,
	0x10, 0x8e, 0x90, 0x04, 0x17, 0x7b, 0x72, 0x7e, 0x5e, 0x49, 0x6a, 0x5e, 0x89, 0x04, 0x93, 0x02,
	0xa3, 0x06, 0x67, 0x10, 0x8c, 0x0b, 0x92, 0xc9, 0x2c, 0x0e, 0x4a, 0x2d, 0xc8, 0xa9, 0x94, 0x60,
	0x56, 0x60, 0xd4, 0xe0, 0x08, 0x82, 0x71, 0x85, 0xe4, 0xb8, 0xb8, 0x8a, 0x40, 0x0c, 0xb7, 0xfc,
	0x22, 0xcf, 0x14, 0x09, 0x16, 0xb0, 0x71, 0x48, 0x22, 0x42, 0x3a, 0x5c, 0x82, 0x30, 0x1e, 0xd4,
	0x72, 0xcf, 0x14, 0x09, 0x56, 0xb0, 0x32, 0x4c, 0x09, 0x90, 0x69, 0xc9, 0x89, 0x25, 0xa9, 0xe9,
	0xf9, 0x45, 0x99, 0xa9, 0xc5, 0x12, 0x6c, 0x0a, 0xcc, 0x1a, 0x9c, 0x41, 0x48, 0x22, 0x42, 0x42,
	0x5c, 0x2c, 0x25, 0x89, 0xe9, 0xc5, 0x12, 0xec, 0x60, 0x19, 0x30, 0x5b, 0x48, 0x86, 0x8b, 0x33,
	0xb5, 0xa2, 0x24, 0x35, 0xaf, 0x38, 0x33, 0x3f, 0x4f, 0x82, 0x03, 0xec, 0x6e, 0x84, 0x80, 0x93,
	0xe1, 0x89, 0x47, 0x72, 0x8c, 0x17, 0x1e, 0xc9, 0x31, 0x3e, 0x78, 0x24, 0xc7, 0x38, 0xe1, 0xb1,
	0x1c, 0xc3, 0x85, 0xc7, 0x72, 0x0c, 0x37, 0x1e, 0xcb, 0x31, 0x44, 0x89, 0xc3, 0xc2, 0xad, 0x42,
	0x1f, 0x1e, 0x82, 0x95, 0x05, 0xa9, 0xc5, 0x49, 0x6c, 0xe0, 0x00, 0x34, 0x06, 0x04, 0x00, 0x00,
	0xff, 0xff, 0x45, 0xdc, 0x81, 0x60, 0x59, 0x01, 0x00, 0x00,
}

func (m *Thought) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Thought) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Thought) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Extension) > 0 {
		i -= len(m.Extension)
		copy(dAtA[i:], m.Extension)
		i = encodeVarintThought(dAtA, i, uint64(len(m.Extension)))
		i--
		dAtA[i] = 0x42
	}
	if len(m.Tags) > 0 {
		for iNdEx := len(m.Tags) - 1; iNdEx >= 0; iNdEx-- {
			i -= len(m.Tags[iNdEx])
			copy(dAtA[i:], m.Tags[iNdEx])
			i = encodeVarintThought(dAtA, i, uint64(len(m.Tags[iNdEx])))
			i--
			dAtA[i] = 0x3a
		}
	}
	if len(m.Categories) > 0 {
		for iNdEx := len(m.Categories) - 1; iNdEx >= 0; iNdEx-- {
			i -= len(m.Categories[iNdEx])
			copy(dAtA[i:], m.Categories[iNdEx])
			i = encodeVarintThought(dAtA, i, uint64(len(m.Categories[iNdEx])))
			i--
			dAtA[i] = 0x32
		}
	}
	if m.ReplyForThoughtId != 0 {
		i = encodeVarintThought(dAtA, i, uint64(m.ReplyForThoughtId))
		i--
		dAtA[i] = 0x28
	}
	if m.ReplyForId != 0 {
		i = encodeVarintThought(dAtA, i, uint64(m.ReplyForId))
		i--
		dAtA[i] = 0x20
	}
	if m.IsReply {
		i--
		if m.IsReply {
			dAtA[i] = 1
		} else {
			dAtA[i] = 0
		}
		i--
		dAtA[i] = 0x18
	}
	if len(m.Content) > 0 {
		i -= len(m.Content)
		copy(dAtA[i:], m.Content)
		i = encodeVarintThought(dAtA, i, uint64(len(m.Content)))
		i--
		dAtA[i] = 0x12
	}
	if m.Index != 0 {
		i = encodeVarintThought(dAtA, i, uint64(m.Index))
		i--
		dAtA[i] = 0x8
	}
	return len(dAtA) - i, nil
}

func encodeVarintThought(dAtA []byte, offset int, v uint64) int {
	offset -= sovThought(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *Thought) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.Index != 0 {
		n += 1 + sovThought(uint64(m.Index))
	}
	l = len(m.Content)
	if l > 0 {
		n += 1 + l + sovThought(uint64(l))
	}
	if m.IsReply {
		n += 2
	}
	if m.ReplyForId != 0 {
		n += 1 + sovThought(uint64(m.ReplyForId))
	}
	if m.ReplyForThoughtId != 0 {
		n += 1 + sovThought(uint64(m.ReplyForThoughtId))
	}
	if len(m.Categories) > 0 {
		for _, s := range m.Categories {
			l = len(s)
			n += 1 + l + sovThought(uint64(l))
		}
	}
	if len(m.Tags) > 0 {
		for _, s := range m.Tags {
			l = len(s)
			n += 1 + l + sovThought(uint64(l))
		}
	}
	l = len(m.Extension)
	if l > 0 {
		n += 1 + l + sovThought(uint64(l))
	}
	return n
}

func sovThought(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozThought(x uint64) (n int) {
	return sovThought(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *Thought) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowThought
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: Thought: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Thought: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Index", wireType)
			}
			m.Index = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowThought
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Index |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Content", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowThought
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthThought
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthThought
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Content = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field IsReply", wireType)
			}
			var v int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowThought
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				v |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			m.IsReply = bool(v != 0)
		case 4:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field ReplyForId", wireType)
			}
			m.ReplyForId = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowThought
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.ReplyForId |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 5:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field ReplyForThoughtId", wireType)
			}
			m.ReplyForThoughtId = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowThought
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.ReplyForThoughtId |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 6:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Categories", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowThought
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthThought
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthThought
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Categories = append(m.Categories, string(dAtA[iNdEx:postIndex]))
			iNdEx = postIndex
		case 7:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Tags", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowThought
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthThought
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthThought
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Tags = append(m.Tags, string(dAtA[iNdEx:postIndex]))
			iNdEx = postIndex
		case 8:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Extension", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowThought
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthThought
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthThought
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Extension = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipThought(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthThought
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipThought(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowThought
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowThought
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowThought
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthThought
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupThought
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthThought
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthThought        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowThought          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupThought = fmt.Errorf("proto: unexpected end of group")
)
