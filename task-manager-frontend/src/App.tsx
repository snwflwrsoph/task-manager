import './App.css'
import Navbar from './components/Navbar';
import Tasks from './pages/Tasks';



const App:React.FC = () => {
  return(
    <div className="min-h-screen flex bg-[#fefcff]">
      <div className="absolute inset-0 z-0" 
          style={{
            backgroundImage:`
            radial-gradient(circle at 30% 70%, rgba(173, 216, 230, 0.35), transparent 60%),
            radial-gradient(circle at 70% 30%, rgba(255, 182, 193, 0.4), transparent 60%)`,}}
        />
      <Navbar/>
      <Tasks/>
    </div>
  );
};

export default App;