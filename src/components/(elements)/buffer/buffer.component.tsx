interface BufferProps {
  height: string;
}

const Buffer = ({ height }: BufferProps) => {
  return <div style={{ width: "100%", height: height, margin: "0" }}></div>;
};

export default Buffer;
