import { createCarousel } from '@utils/carousel';
import { controlActionSheets } from '@utils/actionSheet';
import { createScroller } from '@utils/scroller';
import { musicControl } from '@utils/music';
import { workingClock } from '@utils/clock';

export function startPage() {
  controlActionSheets();
  workingClock();
  musicControl();
  createCarousel();
  createScroller();
}
