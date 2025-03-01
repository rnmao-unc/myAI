import { OWNER_NAME, AI_NAME } from "./identity";

export const INITIAL_MESSAGE: string = `Hello, I'm Recipe Finder, Foodie Renee's AI assistant.`;
export const DEFAULT_RESPONSE_MESSAGE: string = `Sorry, I'm having trouble finding your plate. Please try again later.`;
export const WORD_CUTOFF: number = 8000; // Number of words until bot says it needs a break
export const WORD_BREAK_MESSAGE: string = `-`;
export const HISTORY_CONTEXT_LENGTH: number = 7; // Number of messages to use for context when generating a response
