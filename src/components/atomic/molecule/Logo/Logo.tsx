import { Image } from "@atomic";

const Logo = ({ src, width = "100%" }: { src: string; width?: string }) => {
  return <Image src={src} width={width} />;
};

export default Logo;
