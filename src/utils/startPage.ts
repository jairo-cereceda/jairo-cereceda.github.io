import { createCarousel } from '@utils/carousel';
import { controlMoreInfo } from '@utils/moreInfo';
import { createScroller } from '@utils/scroller';
import { musicControl } from '@utils/music';
import { workingClock } from '@utils/clock';

export function startPage() {
  controlMoreInfo();
  workingClock();
  musicControl();
  createCarousel();
  createScroller();
}
