import { projects as projectsEs } from './es/projects';
import { projects as projectsEn } from './en/projects';

import { techs as techsEs } from './es/techs';
import { techs as techsEn } from './en/techs';

import { components as componentsEs } from './es/playground';
import { components as componentsEn } from './en/playground';

import {
  timelineData as timelineDataEs,
  certificateScroller as certificateScrollerEs,
  imageCardData as imageCardDataEs,
} from './es/experience';
import {
  timelineData as timelineDataEn,
  certificateScroller as certificateScrollerEn,
  imageCardData as imageCardDataEn,
} from './en/experience';
import {
  mainCard as mainCardEs,
  contentList as contentListEs,
  factSlider as factSliderEs,
  contactData as contactDataEs,
} from './es';
import {
  mainCard as mainCardEn,
  contentList as contentListEn,
  factSlider as factSliderEn,
  contactData as contactDataEn,
} from './en';

import { info404 as info404Es } from './es/404';
import { info404 as info404En } from './en/404';

export type Lang = 'es' | 'en';

//Index
export const getMainCardData = (lang: Lang) =>
  lang === 'en' ? mainCardEn : mainCardEs;
export const getContentListData = (lang: Lang) =>
  lang === 'en' ? contentListEn : contentListEs;
export const getFactSliderData = (lang: Lang) =>
  lang === 'en' ? factSliderEn : factSliderEs;
export const getContactData = (lang: Lang) =>
  lang === 'en' ? contactDataEn : contactDataEs;

//Experience
export const getTimelineData = (lang: Lang) =>
  lang === 'en' ? timelineDataEn : timelineDataEs;
export const getCertificateScrollerData = (lang: Lang) =>
  lang === 'en' ? certificateScrollerEn : certificateScrollerEs;
export const getImageCardData = (lang: Lang) =>
  lang === 'en' ? imageCardDataEn : imageCardDataEs;

//Projects
export const getProjectsData = (lang: Lang) =>
  lang === 'en' ? projectsEn : projectsEs;

//Techs
export const getTechsData = (lang: Lang) => (lang === 'en' ? techsEn : techsEs);

//Playground
export const getComponentsData = (lang: Lang) =>
  lang === 'en' ? componentsEn : componentsEs;

//404
export const get404Data = (lang: Lang) =>
  lang === 'en' ? info404Es : info404En;
