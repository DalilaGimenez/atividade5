import './styles/App.css'; // Importando o arquivo CSS corretamente
import CustomInput from './components/CustomInput.jsx';

function App() {
  return (
    <div className="App">
      <header className="header">
        <span>Atividade 5 - Dalila Gimenez</span>
      </header>

      <form className="form-container">
        <div className="form-group">
          <label className='label'>Nome:</label>
          <CustomInput type="text" placeholderText="Digite seu nome" />
        </div>

        <div className="form-group">
          <label className='label'>Email:</label>
          <CustomInput type="email" placeholderText="Digite seu email" />
        </div>

        <div className="form-group">
          <label className='label'>Telefone:</label>
          <CustomInput type="tel" placeholderText="Digite seu telefone" />
        </div>

        <button className='button-enviar' type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;