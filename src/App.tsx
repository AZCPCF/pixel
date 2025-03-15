import { FC } from "react";
import "./App.css";
import DinoColorSelector from "./components/DinoColorSelector";
import Eye from "./shared/Nirvana";
import { Container } from "./Styles";
const App: FC = () => {
  // const din
  return (
    <>
      <DinoColorSelector />
      <Container className="h-screen w-full transition-colors duration-500">
        <Eye />
      </Container>
    </>
  );
};

export default App;
