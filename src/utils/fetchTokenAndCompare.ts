import { TokenRecord } from "@/interfaces/middleware";

export const fetchTokenAndCompare = async (
  fetcher: Function,
  token: string
): Promise<string | undefined> => {
  try {
    const data: TokenRecord[] = await fetcher();
    const match = data.find((record: TokenRecord) => token === record.bearer);
    console.log(match)
    if (!match) {
      throw new Error("Bad token");
    }
    return match.bearer;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
