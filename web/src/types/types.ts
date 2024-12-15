/**
 * Represents the status of an asynchronous task.
 */
export enum TaskStatus {
  /** Task has not started yet */
  Idle = "IDLE",
  /** Task is currently running */
  Pending = "PENDING",
  /** Task completed successfully */
  Completed = "COMPLETED",
  /** Task failed with an error */
  Failed = "FAILED",
}

/**
 * Security severity levels for heuristic warnings.
 */
export enum Severity {
  /** Low severity - minor concern */
  Low = "Low",
  /** Medium severity - moderate concern */
  Medium = "Medium",
  /** High severity - significant security risk */
  High = "High",
  /** Informational - no security concern */
  Info = "Info",
}

/**
 * Represents a security heuristic finding.
 */
export interface Heuristic {
  /** Name of the heuristic check */
  name: string;
  /** Severity level of the finding */
  severity: Severity;
}

/**
 * File content type information from Magika.
 */
export interface ContentType {
  /** MIME type of the file */
  mime_type: string | null;
  /** General category (code, document, image, etc.) */
  group: string | null;
  /** Human-readable description */
  description: string | null;
  /** Common file extensions */
  extensions: string[];
  /** Whether the file contains text */
  is_text: boolean;
}

/**
 * Tracks the status of various analysis tasks.
 */
export interface Status {
  /** Entropy calculation status */
  entropy: TaskStatus;
  /** Entropy by chunks calculation status */
  entropies: TaskStatus;
  /** Main file analysis report status */
  report: TaskStatus;
  /** String extraction status */
  strings: TaskStatus;
  /** IP address extraction status */
  ips: TaskStatus;
  /** URL extraction status */
  urls: TaskStatus;
}

/**
 * Comprehensive analysis report for a file.
 */
export interface Report {
  /** Status of individual analysis tasks */
  status: Status;
  /** Key-value metadata about the file */
  metadata: { title: string; value: string }[];
  /** Entropy values for file chunks */
  entropies: number[];
  /** Extracted strings from the file */
  strings: string[];
  /** Extracted IP addresses */
  ips: string[];
  /** Extracted URLs */
  urls: string[];
  /** Detailed report from WASM analyzer */
  report: any | undefined;
  /** Content type information */
  contentType: ContentType | undefined;
  /** Security heuristics and warnings */
  heuristics: Heuristic[];
}
