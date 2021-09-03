import React from "react";
import { Paper, Button, IconButton, Avatar } from '@material-ui/core';
import {
    WhatshotOutlined as FireIcon,
    SmsOutlined as MessageIcon,
    TrendingUpOutlined as TrandingIcon,
    FormatListBulletedOutlined as ListIcon,
    Menu as MenuIcon,
    ExpandMoreOutlined as ArrowBottom,
    NotificationsNoneOutlined as NotificationIcon,
    AccountCircleOutlined as UserIcon,
    Create as PenIcon
} from '@material-ui/icons';

import styles from './LeftMenu.module.scss'

const LeftMenu: React.FC = () => {
    return (
        <div className={styles.menu}>
            <ul>
                <li>
                    <Button><FireIcon /> Лента</Button>
                </li>
                <li>
                    <Button><MessageIcon /> Сообщения</Button>
                </li>
                <li>
                    <Button><TrandingIcon /> Рейтинг TJ</Button>
                </li>
                <li>
                    <Button><ListIcon /> Подписки</Button>
                </li>
            </ul>
        </div>
    );
};

export default LeftMenu;