import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header text-center">
          <h1>Dictionary</h1>
        </header>
        <main>
          <Dictionary defaultQuery="croissant" />
        </main>
        <footer>
          This app was coded by{" "}
          <a
            href="https://niawright.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Nia Wright
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/nianokia/dictionary-app"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
