import Title from "./components/Title";
import Header from "./components/header";
import './App.css'
function App() {
  return (
    <body class="main-body">
      <Header />
      <Title  title="Preparation Time"
              index={0} 
              class="content-preparation"/>
      <Title  title="Ingredients" 
              index={1} 
              class="content-ingredients" />
              <hr />
      <Title  title="Instruction"
              index={2} 
              class="content-instruction" />
              <hr />
      <Title  title="Nutrition" 
              description="The table below shows nutritional values per serving without the additional fillings."
              index={3} 
              class="content-nutrition" />
    </body>
  );
}

export default App;
