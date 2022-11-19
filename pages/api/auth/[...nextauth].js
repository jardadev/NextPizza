import NextAuth from 'next-auth';
import DiscordProvider from 'next-auth/providers/discord';
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const authOptions = {

	adapter: PrismaAdapter(prisma),
	// Configure one or more authentication providers
	providers: [
		DiscordProvider({
			clientId: process.env.DISCORD_CLIENT_ID,
			clientSecret: process.env.DISCORD_CLIENT_SECRET,
		}),
	],
};

export default NextAuth(authOptions);
