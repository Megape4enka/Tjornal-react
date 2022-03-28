// @ts-ignore
import { Post } from '../components/Post';
import { MainLayout } from '../layouts/MainLayout';
import {GetServerSideProps} from "next";
import {wrapper} from "../redux/store";

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

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
    (store) => async (ctx) => {
        return {props: {}}
    })
