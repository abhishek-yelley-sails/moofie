import bcrypt from "bcryptjs";

const saltRounds = 10;

export async function hashPassword(userPassword) {
    try {
        const salt = await bcrypt.genSalt(saltRounds);
        return await bcrypt.hash(userPassword, salt);
    } catch (e) {
        console.error(e);
        return null;
    }
}

export async function comparePassword(userInputPassword, storedHashedPassword) {
    try {
        return await bcrypt.compare(userInputPassword, storedHashedPassword);
    } catch (e) {
        console.error(e);
        return false;
    }
}

export const TMDB_IMAGE_PREFIX = "https://image.tmdb.org/t/p/original";
