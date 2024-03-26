/**
 * Room Service
 */
import prisma from "../prisma";

/**
 * Get all rooms
 *
 * @param roomId
 */
export const getRooms = () => {
	return prisma.room.findMany({
		orderBy: {
			name: "asc",
		},
	});
}

/**
 * Get a single room
 *
 * @param roomId User ID (in our app it's the socket's id)
 */
export const getRoom = (roomId: string) => {
	return prisma.room.findUnique({
		where: {
			id: roomId,
		},
	});
}


