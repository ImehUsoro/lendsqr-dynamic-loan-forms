export interface ActionTypes {
  type: string;
  label: string;
  message?: string;
}

export interface ValidationTypes {
  required: boolean;
  minimum?: string;
  maximum?: string;
  number_of_lines?: number;
  decimal_points?: number;
  multi_select?: boolean;
  allowed?: string;
}
export interface OptionTypes {
  id: string;
  label: string;
  value: string;
}

export interface FieldTypes {
  id: string;
  name: string;
  type: string;
  label: string;
  description: string;
  validation?: ValidationTypes;
  options?: OptionTypes[];
}

export interface SectionTypes {
  name: string;
  description: string;
  fields: FieldTypes[];
}

export interface PageProps {
  page: {
    name: string;
    title: string;
    description: string;
    actions: ActionTypes[];
    sections: SectionTypes[];
  };
}
