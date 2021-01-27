export class ResourceResponse<T> {
    success: boolean;
    message: string;
    total_count: number;
    total_pages: number;
    result_count: number;
    data: Array<T> | T = [];
}
