import LG from "./LG"
import SM from "./MobileComponents/SM"
function App() {
  return window.screen.width<=700 ? <SM/>:<LG/>;
}

export default App;
