interface ISanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface ISanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
}

export interface IPageInfo extends ISanityBody {
  _type: 'pageInfo';
  address: string;
  backgroundInformation: string;
  email: string;
  role: string;
  heroImage: ISanityImage;
  name: string;
  phoneNumber: string;
  profilePicture: ISanityImage;
  attributes: string[];
}

export interface IExperience extends ISanityBody {
  _type: 'experience';
  company: string;
  companyImage: ISanityImage;
  dateStarted: string;
  dateEnded: string;
  isCurrentlyWorkingHere: boolean;
  jobTitle: string;
  points: string[];
  technologies: ITechnology[];
}

export interface ISocial extends ISanityBody {
  _type: 'social';
  title: string;
  url: string;
}

export interface ITechnology extends ISanityBody {
  _type: 'skill';
  image: ISanityImage;
  progress: number;
  title: string;
}

export interface ISkill extends ISanityBody {
  _type: 'skill';
  image: ISanityImage;
  progress: number;
  title: string;
}

export interface IProject extends ISanityBody {
  _type: 'project';
  title: string;
  image: ISanityImage;
  linkToBuild: string;
  summary: string;
  technologies: ITechnology[];
}
