export class GenericResponse {
    success: boolean;
    message: string;
    data: Map<string, string> = new Map();
}
