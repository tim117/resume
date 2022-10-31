import data from './resume_data';

/**
 * Date range with a start date and optional end date.
 *
 * An undefined end date indicates that the range has not yet ended.
 */
type DateRange = {
  /** Start date for the range. */
  start: Date;
  /**
   * End date for the range.
   *
   * If not provided, then value will be displayed as 'Present'.
   */
  end?: Date;
};

/** Representation of an experience that would be included on a resume. */
export type Experience = {
  id: string;
  organization: string;
  position: string;
  location?: string;
  projects: Project[];
} & DateRange;

/** Represents a project that took place in an experience. */
export type Project = {
  id: string;
  name: string;
  details: string[];
};

/** Representation of an education that would be included in a resume.
 *
 * This can be anything that granted a degree or certificate of any kind.
 */
export type Education = {
  id: string;
  institution: string;
  degree: string;
  grade?: string;
  location?: string;
} & DateRange;

/** Valid social media with supported icon.
 *
 * These icon names come from the [`simple-icon`](https://simpleicons.org/)
 * package.
 */
export type SocialMediaIcon =
  | 'apple'
  | 'codepen'
  | 'discord'
  | 'docker'
  | 'gitlab'
  | 'github'
  | 'google'
  | 'googleplay'
  | 'linkedin'
  | 'pinterest'
  | 'instagram'
  | 'medium'
  | 'messenger'
  | 'microsoft'
  | 'minecraft'
  | 'nintendo'
  | 'tiktok'
  | 'twitch'
  | 'twitter'
  | 'whatsapp'
  | 'xbox'
  | 'youtube';

type Url = `${'http' | 'https'}://${string}`;

/**
 * Representation of a social media account with an icon.
 *
 * If icon is 'other', a generic icon will be displayed.
 */
export type SocialMedia = {
  display: string;
  profileUrl: Url;
  icon?: SocialMediaIcon;
};

/** Contact data that would typically be included on a resume. */
export type ContactData = {
  email?: string;
  phoneNumber?: string;
  location?: string;
  socials: SocialMedia[];
};

/** Representation of a full resume. */
export type Resume = {
  name: string;
  position: string;
  contactData?: ContactData;
  experienceList: Experience[];
  educationList: Education[];
  skills: string[];
};

interface ResumeDataHelper {
  /** The full raw resume data. */
  raw(): Resume;
  /** Gets the position from the raw resume data. */
  position(): string;
  /** Gets the name from the raw resume data. */
  name(): string;
  /** Gets the experience list from the raw resume data. */
  experience(): Experience[];
  /** Gets the specific experience from the experience list. */
  experience(index: number): Experience;
  /** Gets the experience list from the raw resume data. */
  education(): Education[];
  /** Gets the specific experience from the experience list. */
  education(index: number): Education;
  /** Gets the contact data from the raw resume data. */
  contactData(): ContactData;
  /** Gets the skills listed in the raw resume data. */
  skills(): string[];
}

/** Functions to get data from the `resume_data`. */
export default {
  // TODO: Fetch data from a database.
  raw: () => data,
  name: function () {
    return this.raw().name;
  },
  position: function () {
    return this.raw().position;
  },
  experience: function (index: number | undefined = undefined) {
    if (index) {
      return this.raw().experienceList[index];
    }
    return this.raw().experienceList;
  },
  education: function (index: number | undefined = undefined) {
    if (index) {
      return this.raw().educationList[index];
    }
    return this.raw().educationList;
  },
  contactData: function () {
    return this.raw().contactData;
  },
  skills: function () {
    return this.raw().skills;
  },
} as ResumeDataHelper;
