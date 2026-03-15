type Props = {
  error: Error;
};

export const ErrorMessage = (props: Props) => (
  <div>
    <p>{props.error.message}</p>
    <button onClick={() => window.location.reload()}>Reset</button>
  </div>
);
