import {OutputData} from "@editorjs/editorjs";

export type LoginDto = {
    email: string;
    password: string;
}

export type CreateUserDto = {
    fullName: string;
} & LoginDto;

export type ResponseUser = {
    createdAt: string
    email: string
    fullName: string
    id: number
    token: string
    updatedAt: string
}

export type PostItem = {
    title: string;
    body: OutputData['blocks'];
    tags: null | string;
    id: number;
    description: string;
    views: number;
    user: ResponseUser;
    createdAt: string;
    updatedAt: string;
}