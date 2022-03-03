import "./App.css";
import CharacterList from "./CharacterList";
import Character from './Character';
import { Route, Routes } from "react-router";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route strict exact path="/" element={<CharacterList/>}/>
                <Route stric exact path="/:id" element={<Character/>}></Route>
            </Routes>
        </div>
    )
}

export default App;