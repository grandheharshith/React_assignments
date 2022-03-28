import Blue from "./components/Blue";
import Yellow from "./components/Yellow";
import Red from "./components/Red";
import AppcomponentGroup from "./components/AppcompenentGroup";

function App() {
  return (
    <div className="App">
      <AppcomponentGroup>
        <Yellow />
        <Yellow />
      </AppcomponentGroup>
      <AppcomponentGroup>
        <Red />
      
      </AppcomponentGroup>
      <AppcomponentGroup>
        <Blue />
        <Blue />
        <Blue />
      </AppcomponentGroup>
    </div>
  );
}

export default App;
