'use client';

import { CLIENTS } from '@/constant/clients.const';
import Image from 'next/image';

export default function TrustedBy() {
  return (
    <section className="mb-[20px] flex w-full flex-col items-center justify-center rounded-[24px] bg-primary px-5 pb-[22px] pt-[30px]">
      <p className="font-18 text-primary-foreground">
        Trusted BY 1600+ Happy Clients, Including Fortune 500 Companies
      </p>

      <div className="slide-track mt-[25px] flex w-full items-center justify-between">
        {CLIENTS.map((client, index) => (
          <div
            className="slide"
            key={index}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <Image src={`/images${client.logo}`} alt={client.name} width={133} height={66} />
          </div>
        ))}
        {CLIENTS.map((client, index) => (
          <div
            className="slide"
            key={index}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <Image src={`/images${client.logo}`} alt={client.name} width={133} height={66} />
          </div>
        ))}
      </div>
    </section>
  );
}
