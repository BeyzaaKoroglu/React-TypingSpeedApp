import "./App.css";
import Header from "./components/Header";
import InputArea from "./components/InputArea";
import Result from "./components/Result";
import SelectLanguage from "./components/SelectLanguage";
import Text from "./components/Text";

function App() {
  return (
    <div className="App">
      <Header />
      <SelectLanguage />
      <Text />
      <InputArea />
      <Result />
    </div>
  );
}

export default App;
