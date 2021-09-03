import React from 'react';
import {Paper, Typography} from '@material-ui/core';
import Image from "next/image";

import styles from './Post.module.scss'

const Post = () => {
    return (
        <Paper elevation={0} className='p-20' classes={{root: styles.paper}}>
            <Typography variant='h5' className={styles.title}>
                LAN Party — домашние вечеринки с играми по
                «локалке», оставшиеся в прошлом.
                История явления и самого мемного фото эпохи
            </Typography>
            <Typography className='mt-10 mb-15'>
                По мотивам ностальгического треда о временах без быстрого
                интернета, когда мультиплеерная сессия означала, что надо
            </Typography>
            {/*<Image*/}
            {/*    src="https://leonardo.osnova.io/2785d02f-cfec-5c73-8bad-6d2f3ff06797/-/preview/700/-/format/webp/"*/}
            {/*    width={400}*/}
            {/*    height={600}*/}
            {/*/>*/}
        </Paper>
    );
};

export default Post;