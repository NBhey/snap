import aiStack from './security-ai-stack.webp';
import aiStackMobile from './security-ai-stack-mobile-v2.jpg';
import approvedModels from './security-approved-models.webp';
import approvedModelsMobile from './security-approved-models-mobile-v2.jpg';
import privateCloud from './security-private-cloud.webp';
import privateCloudMobile from './security-private-cloud-mobile-v2.jpg';

export const securityMedia = [
  { desktop: approvedModels, mobile: approvedModelsMobile },
  { desktop: privateCloud, mobile: privateCloudMobile },
  { desktop: aiStack, mobile: aiStackMobile },
] as const;

