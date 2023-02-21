import Image from "next/image";

function NextImage({ path, className, onClick, width, height }) {
  return (
    <Image
      src={`/images/${path}.svg`}
      alt=''
      className={className}
      onClick={onClick}
      width={width ? width : '20'}
      height={height ? height : '20'}
    />
  );
}

export default NextImage;
