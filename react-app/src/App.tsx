import Button from "./components/Button/Button.tsx";
import loop from './assets/loop.mp4'
import './App.css'
function App() {
    return <div>
        <video autoPlay loop muted className='background'>
            <source src={loop} type='video/mp4' />
        </video>
        <Button onClick={() => alert('test')} />
    </div>
}

export default App