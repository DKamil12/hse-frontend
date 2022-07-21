// import Authorization from './components/Authorization';
// import OrgStructure from './components/OrgStructure';
// import DocFolders from './DocFolders';
import DocList from './components/DocList';
import Navigation from './components/Navigation';
// import CreateDocForm from './components/CreateDocForm';

function App() {
  return (
    <div>
      <Navigation/>
      {/* <CreateDocForm/> */}
      <DocList/>
    </div>
  );
}

export default App;
