// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: market/order.proto

package types

import (
	fmt "fmt"
	_ "github.com/gogo/protobuf/gogoproto"
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

type Order struct {
	Id         int32  `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	Creator    string `protobuf:"bytes,2,opt,name=creator,proto3" json:"creator,omitempty"`
	Amount     int32  `protobuf:"varint,3,opt,name=amount,proto3" json:"amount,omitempty"`
	SourceCoin int32  `protobuf:"varint,4,opt,name=sourceCoin,proto3" json:"sourceCoin,omitempty"`
	TargetCoin int32  `protobuf:"varint,5,opt,name=targetCoin,proto3" json:"targetCoin,omitempty"`
	ExchRate   string `protobuf:"bytes,6,opt,name=exchRate,proto3" json:"exchRate,omitempty"`
}

func (m *Order) Reset()         { *m = Order{} }
func (m *Order) String() string { return proto.CompactTextString(m) }
func (*Order) ProtoMessage()    {}
func (*Order) Descriptor() ([]byte, []int) {
	return fileDescriptor_8c6375df0c4a1904, []int{0}
}
func (m *Order) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Order) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Order.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Order) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Order.Merge(m, src)
}
func (m *Order) XXX_Size() int {
	return m.Size()
}
func (m *Order) XXX_DiscardUnknown() {
	xxx_messageInfo_Order.DiscardUnknown(m)
}

var xxx_messageInfo_Order proto.InternalMessageInfo

func (m *Order) GetId() int32 {
	if m != nil {
		return m.Id
	}
	return 0
}

func (m *Order) GetCreator() string {
	if m != nil {
		return m.Creator
	}
	return ""
}

func (m *Order) GetAmount() int32 {
	if m != nil {
		return m.Amount
	}
	return 0
}

func (m *Order) GetSourceCoin() int32 {
	if m != nil {
		return m.SourceCoin
	}
	return 0
}

func (m *Order) GetTargetCoin() int32 {
	if m != nil {
		return m.TargetCoin
	}
	return 0
}

func (m *Order) GetExchRate() string {
	if m != nil {
		return m.ExchRate
	}
	return ""
}

func init() {
	proto.RegisterType((*Order)(nil), "onomyprotocol.onomy.market.Order")
}

func init() { proto.RegisterFile("market/order.proto", fileDescriptor_8c6375df0c4a1904) }

var fileDescriptor_8c6375df0c4a1904 = []byte{
	// 245 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x54, 0x90, 0xbf, 0x4e, 0xc3, 0x30,
	0x10, 0xc6, 0xe3, 0x40, 0x02, 0x78, 0x60, 0xb0, 0x10, 0xb2, 0x32, 0x58, 0x15, 0x53, 0x17, 0xe2,
	0x81, 0x37, 0x80, 0x81, 0x11, 0x29, 0x23, 0x9b, 0xeb, 0x58, 0x69, 0x04, 0xc9, 0x55, 0xd7, 0x8b,
	0xd4, 0xbe, 0x05, 0x2f, 0xc1, 0xbb, 0x30, 0x76, 0x64, 0x44, 0xc9, 0x8b, 0xa0, 0x5c, 0xc2, 0x9f,
	0x6e, 0xf7, 0xfb, 0x7e, 0x9f, 0x6d, 0xf9, 0xa4, 0x6a, 0x1c, 0xbe, 0x04, 0xb2, 0x80, 0x65, 0xc0,
	0x7c, 0x83, 0x40, 0xa0, 0x32, 0x68, 0xa1, 0xd9, 0xf3, 0xec, 0xe1, 0x35, 0x67, 0xca, 0xa7, 0x5e,
	0x76, 0x55, 0x41, 0x05, 0xac, 0xec, 0x38, 0x4d, 0x27, 0x6e, 0xde, 0x85, 0x4c, 0x9e, 0xc6, 0x1b,
	0xd4, 0xa5, 0x8c, 0xeb, 0x52, 0x8b, 0x85, 0x58, 0x26, 0x45, 0x5c, 0x97, 0x4a, 0xcb, 0x33, 0x8f,
	0xc1, 0x11, 0xa0, 0x8e, 0x17, 0x62, 0x79, 0x51, 0xfc, 0xa0, 0xba, 0x96, 0xa9, 0x6b, 0xa0, 0x6b,
	0x49, 0x9f, 0x70, 0x7b, 0x26, 0x65, 0xa4, 0xdc, 0x42, 0x87, 0x3e, 0x3c, 0x40, 0xdd, 0xea, 0x53,
	0x76, 0xff, 0x92, 0xd1, 0x93, 0xc3, 0x2a, 0x10, 0xfb, 0x64, 0xf2, 0x7f, 0x89, 0xca, 0xe4, 0x79,
	0xd8, 0xf9, 0x75, 0xe1, 0x28, 0xe8, 0x94, 0x9f, 0xfc, 0xe5, 0xfb, 0xc7, 0x8f, 0xde, 0x88, 0x43,
	0x6f, 0xc4, 0x57, 0x6f, 0xc4, 0xdb, 0x60, 0xa2, 0xc3, 0x60, 0xa2, 0xcf, 0xc1, 0x44, 0xcf, 0xb7,
	0x55, 0x4d, 0xeb, 0x6e, 0x95, 0x7b, 0x68, 0xec, 0xd1, 0xf7, 0x27, 0xb2, 0x3b, 0x3b, 0x2f, 0x8a,
	0xf6, 0x9b, 0xb0, 0x5d, 0xa5, 0xac, 0xef, 0xbe, 0x03, 0x00, 0x00, 0xff, 0xff, 0x4a, 0x23, 0xba,
	0xff, 0x3f, 0x01, 0x00, 0x00,
}

func (m *Order) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Order) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Order) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.ExchRate) > 0 {
		i -= len(m.ExchRate)
		copy(dAtA[i:], m.ExchRate)
		i = encodeVarintOrder(dAtA, i, uint64(len(m.ExchRate)))
		i--
		dAtA[i] = 0x32
	}
	if m.TargetCoin != 0 {
		i = encodeVarintOrder(dAtA, i, uint64(m.TargetCoin))
		i--
		dAtA[i] = 0x28
	}
	if m.SourceCoin != 0 {
		i = encodeVarintOrder(dAtA, i, uint64(m.SourceCoin))
		i--
		dAtA[i] = 0x20
	}
	if m.Amount != 0 {
		i = encodeVarintOrder(dAtA, i, uint64(m.Amount))
		i--
		dAtA[i] = 0x18
	}
	if len(m.Creator) > 0 {
		i -= len(m.Creator)
		copy(dAtA[i:], m.Creator)
		i = encodeVarintOrder(dAtA, i, uint64(len(m.Creator)))
		i--
		dAtA[i] = 0x12
	}
	if m.Id != 0 {
		i = encodeVarintOrder(dAtA, i, uint64(m.Id))
		i--
		dAtA[i] = 0x8
	}
	return len(dAtA) - i, nil
}

func encodeVarintOrder(dAtA []byte, offset int, v uint64) int {
	offset -= sovOrder(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *Order) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.Id != 0 {
		n += 1 + sovOrder(uint64(m.Id))
	}
	l = len(m.Creator)
	if l > 0 {
		n += 1 + l + sovOrder(uint64(l))
	}
	if m.Amount != 0 {
		n += 1 + sovOrder(uint64(m.Amount))
	}
	if m.SourceCoin != 0 {
		n += 1 + sovOrder(uint64(m.SourceCoin))
	}
	if m.TargetCoin != 0 {
		n += 1 + sovOrder(uint64(m.TargetCoin))
	}
	l = len(m.ExchRate)
	if l > 0 {
		n += 1 + l + sovOrder(uint64(l))
	}
	return n
}

func sovOrder(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozOrder(x uint64) (n int) {
	return sovOrder(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *Order) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowOrder
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
			return fmt.Errorf("proto: Order: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Order: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Id", wireType)
			}
			m.Id = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowOrder
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Id |= int32(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Creator", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowOrder
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
				return ErrInvalidLengthOrder
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthOrder
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Creator = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Amount", wireType)
			}
			m.Amount = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowOrder
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Amount |= int32(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 4:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field SourceCoin", wireType)
			}
			m.SourceCoin = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowOrder
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.SourceCoin |= int32(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 5:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field TargetCoin", wireType)
			}
			m.TargetCoin = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowOrder
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.TargetCoin |= int32(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 6:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field ExchRate", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowOrder
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
				return ErrInvalidLengthOrder
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthOrder
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.ExchRate = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipOrder(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthOrder
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
func skipOrder(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowOrder
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
					return 0, ErrIntOverflowOrder
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
					return 0, ErrIntOverflowOrder
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
				return 0, ErrInvalidLengthOrder
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupOrder
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthOrder
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthOrder        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowOrder          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupOrder = fmt.Errorf("proto: unexpected end of group")
)
