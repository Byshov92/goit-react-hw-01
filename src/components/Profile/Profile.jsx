import css from './Profile.module.css';

export const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img alt="User avatar" src={avatar} className={css.avatar} />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span className="label">Followers</span>
          {/* <br /> */}
          <span className="value">{stats.followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          {/* <br /> */}
          <span className="value">{stats.views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          {/* <br /> */}
          <span className="value">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
