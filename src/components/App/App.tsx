import ErrorDisplay from "../ErrorDisplay/ErrorDisplay";
import SearchForm from "../SearchForm/SearchForm";

function App() {
  return (
    <div className="container">
      <SearchForm />
      <div className="row">
        <div className="container-gif offset-1 col-6">
          <img src="" className="gif" alt="" />
        </div>
      </div>
      <div className="row">
        <ErrorDisplay />
      </div>
    </div>
  );
}

export default App;
