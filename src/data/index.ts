import {
  projects as projectsEs,
  pageTitle as projectsPageTitleEs,
  pageDescription as projectsPageDescriptionEs,
  schema as projectsSchemaEs,
} from './es/projects';
import {
  projects as projectsEn,
  pageTitle as projectsPageTitleEn,
  pageDescription as projectsPageDescriptionEn,
  schema as projectsSchemaEn,
} from './en/projects';

import {
  techs as techsEs,
  pageTitle as techsPageTitleEs,
  pageDescription as techsPageDescriptionEs,
  schema as techsSchemaEs,
} from './es/techs';
import {
  techs as techsEn,
  pageTitle as techsPageTitleEn,
  pageDescription as techsPageDescriptionEn,
  schema as techsSchemaEn,
} from './en/techs';

import {
  components as componentsEs,
  pageTitle as playgroundPageTitleEs,
  pageDescription as playgroundPageDescriptionEs,
  schema as playgroundSchemaEs,
} from './es/playground';
import {
  components as componentsEn,
  pageTitle as playgroundPageTitleEn,
  pageDescription as playgroundPageDescriptionEn,
  schema as playgroundSchemaEn,
} from './en/playground';

import {
  timelineData as timelineDataEs,
  certificateScroller as certificateScrollerEs,
  imageCardData as imageCardDataEs,
  pageTitle as experiencePageTitleEs,
  pageDescription as experiencePageDescriptionEs,
  schema as experienceSchemaEs,
} from './es/experience';
import {
  timelineData as timelineDataEn,
  certificateScroller as certificateScrollerEn,
  imageCardData as imageCardDataEn,
  pageTitle as experiencePageTitleEn,
  pageDescription as experiencePageDescriptionEn,
  schema as experienceSchemaEn,
} from './en/experience';
import {
  mainCard as mainCardEs,
  contentList as contentListEs,
  factSlider as factSliderEs,
  contactData as contactDataEs,
  pageTitle as indexPageTitleEs,
  pageDescription as indexPageDescriptionEs,
  schema as indexSchemaEs,
} from './es';
import {
  mainCard as mainCardEn,
  contentList as contentListEn,
  factSlider as factSliderEn,
  contactData as contactDataEn,
  pageTitle as indexPageTitleEn,
  pageDescription as indexPageDescriptionEn,
  schema as indexSchemaEn,
} from './en';

import {
  info404 as info404Es,
  pageTitle as pageTitle404Es,
  pageDescription as pageDescription404Es,
} from './es/404';
import {
  info404 as info404En,
  pageTitle as pageTitle404En,
  pageDescription as pageDescription404En,
} from './en/404';
import type { Lang } from './consts';

//Index
export const getMainCardData = (lang: Lang) =>
  lang === 'en' ? mainCardEn : mainCardEs;
export const getContentListData = (lang: Lang) =>
  lang === 'en' ? contentListEn : contentListEs;
export const getFactSliderData = (lang: Lang) =>
  lang === 'en' ? factSliderEn : factSliderEs;
export const getContactData = (lang: Lang) =>
  lang === 'en' ? contactDataEn : contactDataEs;
export const getIndexTitle = (lang: Lang) =>
  lang === 'en' ? indexPageTitleEn : indexPageTitleEs;
export const getIndexDescription = (lang: Lang) =>
  lang === 'en' ? indexPageDescriptionEn : indexPageDescriptionEs;
export const getIndexSchema = (lang: Lang) =>
  lang === 'en' ? indexSchemaEn : indexSchemaEs;

//Experience
export const getTimelineData = (lang: Lang) =>
  lang === 'en' ? timelineDataEn : timelineDataEs;
export const getCertificateScrollerData = (lang: Lang) =>
  lang === 'en' ? certificateScrollerEn : certificateScrollerEs;
export const getImageCardData = (lang: Lang) =>
  lang === 'en' ? imageCardDataEn : imageCardDataEs;
export const getExperienceTitle = (lang: Lang) =>
  lang === 'en' ? experiencePageTitleEn : experiencePageTitleEs;
export const getExperienceDescription = (lang: Lang) =>
  lang === 'en' ? experiencePageDescriptionEn : experiencePageDescriptionEs;
export const getExperienceSchema = (lang: Lang) =>
  lang === 'en' ? experienceSchemaEn : experienceSchemaEs;

//Projects
export const getProjectsData = (lang: Lang) =>
  lang === 'en' ? projectsEn : projectsEs;
export const getProjectsTitle = (lang: Lang) =>
  lang === 'en' ? projectsPageTitleEn : projectsPageTitleEs;
export const getProjectsDescription = (lang: Lang) =>
  lang === 'en' ? projectsPageDescriptionEn : projectsPageDescriptionEs;
export const getProjectsSchema = (lang: Lang) =>
  lang === 'en' ? projectsSchemaEn : projectsSchemaEs;

//Techs
export const getTechsData = (lang: Lang) => (lang === 'en' ? techsEn : techsEs);
export const getTechsTitle = (lang: Lang) =>
  lang === 'en' ? techsPageTitleEn : techsPageTitleEs;
export const getTechsDescription = (lang: Lang) =>
  lang === 'en' ? techsPageDescriptionEn : techsPageDescriptionEs;
export const getTechsSchema = (lang: Lang) =>
  lang === 'en' ? techsSchemaEn : techsSchemaEs;

//Playground
export const getComponentsData = (lang: Lang) =>
  lang === 'en' ? componentsEn : componentsEs;
export const getPlaygroundTitle = (lang: Lang) =>
  lang === 'en' ? playgroundPageTitleEn : playgroundPageTitleEs;
export const getPlaygroundDescription = (lang: Lang) =>
  lang === 'en' ? playgroundPageDescriptionEn : playgroundPageDescriptionEs;
export const getPlaygroundSchema = (lang: Lang) =>
  lang === 'en' ? playgroundSchemaEn : playgroundSchemaEs;

//404
export const get404Data = (lang: Lang) =>
  lang === 'en' ? info404Es : info404En;
export const get404Title = (lang: Lang) =>
  lang === 'en' ? pageTitle404En : pageTitle404Es;
export const get404Description = (lang: Lang) =>
  lang === 'en' ? pageDescription404En : pageDescription404Es;
