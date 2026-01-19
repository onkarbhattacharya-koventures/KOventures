import Image from 'next/image';
import Designer from '@/app/Designer.png';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function Logo({ className, width = 40, height = 40 }: LogoProps) {
  return (
    <Image
      src={Designer}
      alt="KOVentures Logo"
      width={width}
      height={height}
      className={className}
    />
  );
}
