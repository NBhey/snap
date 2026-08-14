import type { CSSProperties } from 'react';

import { useReveal } from '@/shared/lib/reveal';

import { partnerLogos } from '../assets';

function LogoGroup({ hidden = false }: { hidden?: boolean }) {
  const indexOffset = hidden ? partnerLogos.length : 0;

  return (
    <div className="dds-marquee-content" aria-hidden={hidden || undefined}>
      {partnerLogos.map((logo, index) => (
        <div
          className={`dds-marquee-item dds-marquee-item-${logo.classId}`}
          key={`${logo.src}-${hidden}`}
          style={{ '--logo-index': indexOffset + index } as CSSProperties}
        >
          <img
            src={logo.src}
            alt=""
            width="100%"
            height="100%"
            style={{ display: 'block' }}
            {...(!hidden && {
              'data-cms-image': `logos.marquee.asset-${logo.cmsAssetId}`,
              'data-cms-no-generate': '',
            })}
          />
        </div>
      ))}
    </div>
  );
}

export function Logos() {
  const { ref, revealClassName, isRevealed } = useReveal();

  return (
    <section
      id="logos"
      ref={ref}
      className={`logos dds-logos dds-marquee ${revealClassName}${
        isRevealed ? ' is-logos-revealed' : ''
      }`}
      data-cms-section="logos.marquee"
      data-section-id="019f8703-47cb-7669-a38e-b7781c7e8174"
      data-template-id="e49c66ed-927c-5596-8eb2-bd01ea1cbc23"
    >
      <p className="dds-marquee-eyebrow" data-cms-key="logos.eyebrow">
        {'С\u00a0платформой работают команды, для\u00a0которых бренд\u00a0— закон'}
      </p>
      <div className="dds-marquee-track" data-marquee-built="">
        <LogoGroup />
        <LogoGroup hidden />
      </div>
    </section>
  );
}
