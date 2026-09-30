export type TechniqueExpectation = {
  required: string[];
  preferred: string[];
  forbidden: string[];
};

export type StyleReferenceExpectation = {
  representativeWorks: string[];
  rhythm: string[];
  articulation: string[];
  techniques: string[];
  roleExpectations: Record<string, string[]>;
};

