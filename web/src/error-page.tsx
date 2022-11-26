
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oopaaaaa!</h1>
      <p>Alguma coisa deu errado !</p>
      <p>"./src/error-page.tsx"</p>
      <p>
        {/* <i>{error.statusText || error.message}</i> */}
      </p>
    </div>
  );
}