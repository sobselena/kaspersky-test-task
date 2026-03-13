import styles from './users-page.module.scss';

export const UsersPage = () => (
  <main className={styles.page}>
    <header>
      <h1 className={styles.pageTitle}>Сотрудники</h1>
    </header>

    <div className={styles.toolbar}>
      <div className={styles.search}>
        <span className={styles.searchIcon}>
          <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeWidth="2" />
          </svg>
        </span>

        <input
          type="text"
          placeholder="Поиск по имени или логину..."
          className={styles.searchInput}
        />
      </div>

      <select className={styles.filter}>
        <option value="all">Все группы</option>
        <option value="accounting">Менеджер</option>
        <option value="accounting">Teamlead</option>
        <option value="accounting">Backend</option>
        <option value="it">Frontend</option>
        <option value="accounting">Дизайнер</option>
      </select>

      <button className={styles.addButton}>
        <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M12 4v16m8-8H4" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
        Добавить
      </button>
    </div>

    <div className={styles.tableCard}>
      <table className={styles.table}>
        <thead className={styles.tableHead}>
          <tr>
            <th className={styles.checkboxCell}>
              <div className={styles.cell}>
                <input type="checkbox" className={styles.checkbox} />
              </div>
            </th>

            <th>
              <div className={styles.cell}>Сотрудник</div>
            </th>

            <th>
              <div className={styles.cell}>Email</div>
            </th>

            <th>
              <div className={styles.cell}>Группа</div>
            </th>

            <th>
              <div className={styles.cell}>Телефон</div>
            </th>

            <th>
              <div className={`${styles.cell} ${styles.actionsCell}`}></div>
            </th>
          </tr>
        </thead>

        <tbody>
          <tr className={styles.row}>
            <td className={styles.checkboxCell}>
              <div className={styles.cell}>
                <input type="checkbox" className={styles.checkbox} />
              </div>
            </td>

            <td>
              <div className={styles.cell}>
                <span className={styles.userName}>Райан Гуслинг</span>
              </div>
            </td>

            <td>
              <div className={styles.cell}>
                <span className={styles.userMeta}>gusli@mail.ru</span>
              </div>
            </td>

            <td>
              <div className={styles.cell}>
                <span className={styles.userMeta}>Teamlead</span>
              </div>
            </td>

            <td>
              <div className={styles.cell}>
                <span className={styles.userMeta}>+7 943 173-45-67</span>
              </div>
            </td>

            <td>
              <div className={`${styles.cell} ${styles.actionsCell}`}>
                <button className={styles.iconButton}>
                  <svg
                    className={styles.smallIcon}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                      strokeWidth="2"
                    />
                  </svg>
                </button>

                <button className={styles.iconButton}>
                  <svg
                    className={styles.smallIcon}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 6l12 12M18 6L6 18" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
);
