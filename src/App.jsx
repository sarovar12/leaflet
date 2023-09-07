import MapLeaflet from './components/MapLeaflet';
function App() {
  return (
    <>
      <div className="h-screen flex flex-col w-screen text-center text-2xl pt-2 justify-center ">
        MAP- Drag the marker to check location
        <div></div>
        <div className="h-[400px] my-4 justify-center items-center ml-9 py-1 w-[80%]">
          <MapLeaflet />
        </div>
      </div>
    </>
  );
}

export default App;
