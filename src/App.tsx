import { BrowserRouter } from 'react-router-dom';
import Navbar from './shared/components/Navbar';
function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <div className="flex w-screen min-h-screen">
                Navbar PageSection - We will make all things in page.tsx Footer
            </div>
        </BrowserRouter>
    );
}
export default App;
