class ResourceResponseBase {
    success: boolean;
    message: string;
}

export class ResourceResponse<T> extends ResourceResponseBase {
    data: T = null;
}

export class ResourceResponseList<T> extends ResourceResponseBase {
    total_count: number;
    total_pages: number;
    result_count: number;
    data: Array<T> = [];
}
