import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle } from 'lucide-react';

export default function Calibration() {
  const calibrationImage = PlaceHolderImages.find(p => p.id === 'calibration-bench');

  return (
    <section id="calibration" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">
              Precision Calibration Benches
            </h2>
            <p className="mt-4 text-lg text-foreground/80">
              Beyond energy, we engineer state-of-the-art calibration benches for industries where precision is paramount.
            </p>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
                <span>
                  <strong>Temperature Calibration:</strong> Highly accurate and stable temperature sources for sensor calibration.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
                <span>
                  <strong>Pressure Calibration:</strong> Robust solutions for calibrating pressure gauges, transmitters, and switches.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
                <span>
                  <strong>Custom Solutions:</strong> Benches designed and built to your specific requirements and standards.
                </span>
              </li>
            </ul>
          </div>
          <div className="order-1 md:order-2">
            {calibrationImage && (
              <div className="overflow-hidden rounded-lg shadow-2xl">
                <Image
                  src={calibrationImage.imageUrl}
                  alt={calibrationImage.description}
                  width={600}
                  height={450}
                  className="object-cover w-full h-auto transform hover:scale-105 transition-transform duration-500"
                  data-ai-hint={calibrationImage.imageHint}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
