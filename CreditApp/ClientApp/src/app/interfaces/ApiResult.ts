export class ApiResult<T> {
    resultArray: T[];
    isSuccessful: boolean;
    message: string;
    exception: string;

    getData(): T[] {
        return this.resultArray != null ? this.resultArray : new Array<T>(0);
    }
}
