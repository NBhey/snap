import designSystem from './84a4450b3827bc21.webp';
import compliance from './afe03eb4a67d5dfb.webp';
import flexibleConfiguration from './process-flexible-configuration.webp';
import flexibleConfigurationMobile from './process-flexible-configuration-mobile.webp';
import flexibleConfigurationTablet from './process-flexible-configuration-tablet.webp';

export const processMedia = {
  designSystem,
  flexibleConfiguration: {
    desktop: flexibleConfiguration,
    tablet: flexibleConfigurationTablet,
    mobile: flexibleConfigurationMobile,
  },
  compliance,
} as const;

