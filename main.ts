import { writeFileSync, mkdirSync } from "node:fs";

const JOKE_OPEN = "My calendar has a 'quick sync' at 4:55 on Friday. ";
const JOKE_MIDDLE = "It runs 45 minutes. ";
const JOKE_CLOSE = "The organizer is on leave.";
const OUTPUT_DIR = "/output";
const OUTPUT_FILE = "entry.txt";
const OUTPUT_PATH = OUTPUT_DIR + "/" + OUTPUT_FILE;

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_PATH, JOKE_OPEN + JOKE_MIDDLE + JOKE_CLOSE, "utf8");
