import { BrowserRouter } from 'react-router-dom';
import Navbar from './shared/components/Navbar';
import Landing from './pages/Landing/page';
function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Landing />
        </BrowserRouter>
    );
}
export default App;
