import { Header } from "./components/Header/Header";
import { Aside } from "./components/pages/Aside";
import { AllTickets } from "./components/pages/AllTickets";
import './assets/styles/index.css'

function App() {
  return (
    <>
      <Aside />
      <div style={{'paddingLeft': '255px', 'backgroundColor': '#F7F8FC'}}>
        <div style={{'padding': '30px',}}>
          <Header />
          <AllTickets />
        </div>
      </div>
    </>
  );
}

export default App;
