export type CaseType = {
    id: string;
    name: string;
    status: string;
    createdAt: string;
    type: string;
};

export interface CaseProps {
    cases: CaseType[];
}
  
export type EvidenceType = {
    url?: string,
    file?: string,
    description: string
}
