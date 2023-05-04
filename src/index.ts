import { parse } from "./parse";
import * as fs from "fs";

export function read(path: string): any {
  const fileContents: string = fs.readFileSync(path, "utf-8");
  return parse(fileContents);
}