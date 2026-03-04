export interface Package {
  id: string;
  country: string;
  packageName: string;
  duration: string;
  price: number;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  highlights: string[];
  description: string;
}

export interface PipelineStepResult {
  passed: boolean;
  detail: string;
}

export interface PipelineResults {
  step1: PipelineStepResult;
  step2: PipelineStepResult;
  step3: PipelineStepResult;
  step4: PipelineStepResult;
  step5: PipelineStepResult;
  step6: PipelineStepResult;
}

export type ReviewStatus = 'approved' | 'flagged';

export interface Review {
  id: string;
  packageId: string;
  userName: string;
  userEmail: string;
  ipAddress: string;
  rating: number;
  headline: string;
  body: string;
  submittedAt: string;
  status: ReviewStatus;
  flagReasons: string[];
  pipelineResults: PipelineResults;
}

export type Page = 
  | 'home' 
  | 'packages' 
  | { type: 'country'; countryName: string }
  | { type: 'package'; packageId: string }
  | { type: 'submit-review'; packageId: string }
  | 'live-demo' 
  | 'admin-login' 
  | 'admin-dashboard' 
  | 'admin-reviews' 
  | 'admin-analytics' 
  | 'admin-packages';
