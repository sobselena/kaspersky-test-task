import { useSearchParams } from 'react-router';
import styles from './pagination.module.scss';
import { USERS_PAGINATION } from '../../constants/pagination';
import { useEffect } from 'react';

type Props = {
  total?: number;
};

export const Pagination = ({ total = 0 }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = Number(searchParams.get('page')) || 1;
  const totalPages = Math.ceil(total / USERS_PAGINATION);

  const changePage = (page: number) => {
    setSearchParams({ page: String(page) });
  };

  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setSearchParams({ page: String(totalPages) });
    }

    if (totalPages < 1) {
      setSearchParams({ page: '1' });
    }
  }, [setSearchParams, currentPage, totalPages]);

  return (
    <div className={styles.pagination}>
      <button
        className={styles.button}
        disabled={currentPage === 1}
        onClick={() => changePage(currentPage - 1)}
      >
        Prev
      </button>

      <span className={styles.info}>
        {currentPage} / {totalPages}
      </span>

      <button
        className={styles.button}
        disabled={currentPage === totalPages}
        onClick={() => changePage(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};
