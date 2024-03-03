// deno-lint-ignore-file no-var no-explicit-any
declare var process: any;

/**
 * Exit the current process
 *
 * @example
 * ```ts
 * import { exit } from "jsr:@tsirysndr/exit-js";
 * exit();
 */
export function exit(code?: number): void {
  if (Object.keys(globalThis).includes("process")) {
    process.exit(code);
  }

  if (Object.keys(globalThis).includes("Deno")) {
    Deno.exit(code);    
  }
}

