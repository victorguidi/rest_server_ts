import * as bcrypt from "bcrypt";

export async function compareHash(hash: string, password: string): Promise<boolean> {
  return await bcrypt.compare(password, hash);
}
