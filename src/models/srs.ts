export interface SRSList {
  "task-summary": SRS[];
}

interface SRS {
  "task-id": number;
  "task-name": string;
  "task-subject": string;
  "task-description": string;
  "task-status": string;
  "task-priority": number;
  "task-is-skipable": boolean;
  "task-actual-owner": string;
  "task-created-by": string;
  "task-created-on": any;
  "task-activation-time": any;
  "task-expiration-time": any;
  "task-proc-inst-id": number;
  "task-proc-def-id": string;
  "task-container-id": string;
  "task-parent-id": number;
  "correlation-key": string;
  "process-type": number;
}
