/**
 * Message Service
 */
import { ChatMessageData } from "@shared/types/SocketTypes";
import prisma from "../prisma";

/**
 * Create (save) a message
 *
 * @param msg Chat message
 */
export const createMessage = (msg: ChatMessageData) => {
	return prisma.message.create({
		data: msg,
	});
}

/**
 *  Get latest messages sent to a room
 */
export const getLatestMessages = (roomId: string, maxAge = 3600) => {
	const past = Date.now() - maxAge * 1000;

	return prisma.message.findMany({
		where: {
			roomId,
			timestamp: {
				gte: past,
			}
		},
		take: -100,
		orderBy: {
			timestamp: "asc"
		},
	});
}
