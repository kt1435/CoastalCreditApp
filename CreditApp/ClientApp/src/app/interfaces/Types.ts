export interface ICard {
    cardName: string;
    cardId: string;
    maskCardNumber: string;
    isOn?: boolean;
}

export interface ICardHolder {
    cards: Array<ICard>;
    cardHolder: string;
}

export interface ICardReport {
    cardId: string;
    cardStatus: string;
    comment: string;
}

export const testApiKey = "cfcb858c-b741-4e54-a0e2-efe271e881ad";
export const testUserId = "012345";


export type cardReportStatus = "lost" | "stolen" | "broken";
export const statusArray = ["lost", "stolen", "broken"];
