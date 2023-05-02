import dotenv from "dotenv";
dotenv.config();

function env(key: string): string {
	const stored = process.env[key];
	if (stored === undefined) throw new Error(`MISSING ENVIRONMENT KEY ${key}`);
	return stored;
}

export const DISCORD_WEBHOOK = env("DISCORD_WEBHOOK");