import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { FiBell, FiCheckCircle, FiCircle } from 'react-icons/fi';
import { parseISO, formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

import api from '~/services/api';

import {
  Notifications,
  NotificationIcon,
  NotificationBox,
  NotificationsHeader,
  NotificationsList,
  SingleNotification,
  LeftBox,
  IconBox,
  MarkAsReadButton,
  NotificationExcerpt,
  NotificationInfo,
  TheExcerpt,
} from './styles';

export default function NotificationsComponent() {
  const [toggleNotification, setToggleNotification] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const hasUnread = useMemo(
    () => !!notifications.find(notification => notification.read === false),
    [notifications]
  );

  const markAsRead = useCallback(
    async id => {
      await api.put(`notification/${id}`);

      setNotifications(
        notifications.map(notification =>
          notification.id === id
            ? {
                ...notification,
                read: !notification.read,
              }
            : notification
        )
      );
    },
    [notifications]
  );

  const loadNotification = useCallback(async () => {
    const response = await api.get('notifications');
    const data = response.data.map(notification => ({
      ...notification,
      timeDistance: formatDistance(
        parseISO(notification.createdAt),
        new Date(),
        {
          addSuffix: true,
          locale: pt,
        }
      ),
    }));
    setNotifications(data);
  }, []);

  useEffect(() => {
    loadNotification();
  }, [loadNotification]);

  return (
    <Notifications>
      <NotificationIcon
        onClick={() => setToggleNotification(!toggleNotification)}
        hasUnread={hasUnread}
      >
        <FiBell size={24} />
      </NotificationIcon>

      <NotificationBox toggleNotification={toggleNotification}>
        <NotificationsHeader>Suas Notificações</NotificationsHeader>
        <NotificationsList>
          {notifications.map(single => (
            <SingleNotification key={single.id} read={single.read}>
              <LeftBox>
                <IconBox read={single.read}>
                  <FiBell size={24} />
                </IconBox>
                <MarkAsReadButton onClick={() => markAsRead(single.id)}>
                  {single.read ? <FiCheckCircle /> : <FiCircle />}
                </MarkAsReadButton>
              </LeftBox>
              <NotificationExcerpt>
                <NotificationInfo>
                  <small>{single.method}</small>
                  <small>{single.timeDistance}</small>
                </NotificationInfo>

                <TheExcerpt>{single.excerpt}</TheExcerpt>
              </NotificationExcerpt>
            </SingleNotification>
          ))}
        </NotificationsList>
      </NotificationBox>
    </Notifications>
  );
}
