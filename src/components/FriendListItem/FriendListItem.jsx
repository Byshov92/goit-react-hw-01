import css from './FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      <img className="avatar" src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      {isOnline ? (
        <p className={css.isOnline}>Online</p>
      ) : (
        <p className={css.isOffline}>Offline</p>
      )}
    </li>
  );
};
