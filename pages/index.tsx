// @ts-ignore
import { Post } from '../components/Post';
import { MainLayout } from '../layouts/MainLayout';
import {GetServerSideProps} from "next";
import {wrapper} from "../redux/store";
import {parseCookies} from "nookies";
import {UserApi} from "../utils/api/user";
import {setUserData} from "../redux/slices/user";


export default function Home() {
    return (
        <MainLayout>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </MainLayout>
    );
}
