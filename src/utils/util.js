import bcrypt from "bcryptjs";

const saltRounds = 10;
const salt = await bcrypt.genSalt(saltRounds);

export async function hashPassword(userPassword) {
    return await bcrypt.hash(userPassword, salt);
}

export async function comparePassword(userInputPassword, storedHashedPassword) {
    return await bcrypt.compare(userInputPassword, storedHashedPassword);
}

export const TMDB_IMAGE_PREFIX = "https://image.tmdb.org/t/p/original";