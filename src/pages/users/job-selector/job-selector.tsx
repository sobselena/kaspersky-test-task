import type { User } from '../../../types/user';
import { getJobTitle } from '../utils/job-types';

import styles from './job-selector.module.scss';

type Props = {
  data: User[] | undefined;
};

export const JobSelector = ({ data }: Props) => {
  console.log(data);
  return (
    <select className={styles.filter}>
      <option value="all">All</option>
      {data &&
        getJobTitle(data).map((option) => (
          <option value={option.toLowerCase()} key={option}>
            {`${option[0].toUpperCase()}${option.slice(1).toLowerCase()}`}
          </option>
        ))}
    </select>
  );
};
