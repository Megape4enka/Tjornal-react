import {UserApi} from "./user";
import {GetServerSidePropsContext, NextPageContext} from "next";
import Cookies, {parseCookies} from "nookies";
import axios from "axios";
import {PostApi} from "./post";

export type ApiReturnType = {
    user: ReturnType<typeof UserApi>
    post: ReturnType<typeof PostApi>
}

export const Api = (ctx?: NextPageContext | GetServerSidePropsContext): ApiReturnType => {
    const cookies = ctx ? Cookies.get(ctx) : parseCookies()
    const token = cookies.rtoken

    const instance = axios.create({
        baseURL: 'hhtp://localhost:7777',
        headers: {
            Authorization: 'Bearer ' + token
        }
    })

    return {
        user: UserApi(instance),
        post: PostApi(instance)
    }
}