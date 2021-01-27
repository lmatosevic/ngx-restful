class ResourceResponseBase {
    success: boolean;
    message: string;
    total_count: number;
    total_pages: number;
    result_count: number;
}

export class ResourceResponse<T> extends ResourceResponseBase {
    data: T = null;
}

export class ResourceResponseList<T> extends ResourceResponseBase {
    data: Array<T> = [];
}
