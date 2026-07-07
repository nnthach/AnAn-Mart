import Image from 'next/image';
import Link from 'next/link';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

interface PageHeroProps {
  image: string;
  imageAlt: string;
  homeLabel: string;
  currentLabel: string;
  title: string;
  description: string;
}

export function PageHero({
  image,
  imageAlt,
  homeLabel,
  currentLabel,
  title,
  description,
}: PageHeroProps) {
  return (
    <section className="relative flex items-end overflow-hidden pt-28 pb-10 md:pt-32 md:pb-12">
      <Image src={image} alt={imageAlt} fill priority sizes="100vw" className="object-cover object-center" />
      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/70 to-black/40" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 md:px-8">
        <Breadcrumb>
          <BreadcrumbList className="text-white/60">
            <BreadcrumbItem>
              <BreadcrumbLink render={<Link href="/" className="hover:text-white" />}>
                {homeLabel}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-white/40" />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-white">{currentLabel}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <h1 className="font-heading mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {title}
        </h1>
        <p className="mt-2 max-w-lg text-sm text-white/70 sm:text-base">{description}</p>
      </div>
    </section>
  );
}
