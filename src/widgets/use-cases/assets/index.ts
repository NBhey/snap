import banners1 from './use-cases-tab4-item1.webp';
import banners2 from './use-cases-tab4-item2.webp';
import banners3 from './use-cases-tab4-item3.webp';
import banners4 from './use-cases-tab4-item4.webp';
import images1 from './use-cases-img-01.webp';
import images2 from './use-cases-tab2-item2.webp';
import images3 from './use-cases-tab2-item3.webp';
import images4 from './use-cases-tab2-item4.webp';
import presentations1 from './use-cases-pres-01.jpg';
import presentations2 from './use-cases-tab5-item2.webp';
import presentations3 from './use-cases-tab5-item3.webp';
import presentations4 from './use-cases-tab5-item4.webp';
import sites1 from './use-cases-tab1-item1-v2.webp';
import sites2 from './use-cases-tab1-item2.webp';
import sites3 from './use-cases-tab1-item3.webp';
import sites4 from './use-cases-web-04.webp';
import video1 from './use-cases-vid-01.webp';
import video2 from './use-cases-tab3-item2.webp';
import video3 from './use-cases-tab3-item3.webp';
import video4 from './use-cases-tab3-item4.webp';

export const useCaseMedia = [
  { id: 'sites', label: 'Сайты', items: [sites1, sites2, sites3, sites4] },
  { id: 'images', label: 'Изображения', items: [images1, images2, images3, images4] },
  { id: 'video', label: 'Видео', items: [video1, video2, video3, video4] },
  { id: 'banners', label: 'Баннеры', items: [banners1, banners2, banners3, banners4] },
  {
    id: 'presentations',
    label: 'Презентации',
    items: [presentations1, presentations2, presentations3, presentations4],
  },
] as const;

