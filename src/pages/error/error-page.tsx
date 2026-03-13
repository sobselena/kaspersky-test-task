import { Link, useRouteError } from 'react-router';

export const ErrorPage = () => {
  const error = useRouteError();

  return (
    <section className="error">
      <p>{error instanceof Error ? error.message : 'Something went wrong'}</p>
      <Link to="..">Go back!</Link>
    </section>
  );
};
