export interface BaseSheetViewModel {
  Name: string;
  Position: string;
  Summary: string;
  Contacts: Array<ContactViewModel>;
  Experience: Array<ExperienceViewModel>;
  Education: Array<EducationViewModel>;
  Projects: Array<ProjectViewModel>;
}

export interface EducationViewModel {
  ID: number;
  From: Date | string;
  Until: Date | string;
  Institution: string;
  Specialty: string;
  Location: string;
  Subjects: string[];
}

export interface ProjectViewModel {
  ID: number;
  From: Date | string;
  Until: Date | string;
  Name: string;
  Description: string;
  Technologies: string[];
}

export interface ExperienceViewModel {
  ID: number;
  From: Date | string;
  Until: Date | string | null;
  Company: string;
  Location: string;
  Position: string;
  Projects: Array<ProjectViewModel>;
}

export interface ContactViewModel {
  ID: number;
  Value: string;
  Type: string;
  Icon: string;
}
