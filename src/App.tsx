import { useSelector } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import InputArea from "./components/InputArea";
import Result from "./components/Result";
import SelectLanguage from "./components/SelectLanguage";
import Text from "./components/Text";
import { counter } from "./redux/words/wordsSlice";

function App() {
  const timer = useSelector(counter);
  return (
    <div className="App">
      <Header />
      <SelectLanguage />
      <Text />
      <InputArea />
      {timer === 0 && <Result />}
    </div>
  );
}

export default App;
