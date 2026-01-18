import Image from 'next/image';

export default function Logo() {
  return (
    <Image
      src="@/app/Designer.png"
      alt="Logo"
      width={32}
      height={32}
    />
  );
}
