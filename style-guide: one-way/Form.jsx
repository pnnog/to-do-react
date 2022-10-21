import { useState } from 'react';

function Form() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState();
  function cadastrarUsuario(e) {
    e.preventDefault();
    console.log(`O usuário ${user} foi cadastado com a senha ${password}!`);
  }
  return (
    <form onSubmit={cadastrarUsuario}>
      <div>
        <label htmlFor="user">
          Usuário:
          <input
            onChange={(e) => setUser(e.target.value)}
            type="text"
            name="user"
            id="user"
          />
        </label>
      </div>

      <div>
        <label htmlFor="psw">
          Senha:
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="psw"
            id="psw"
          />
        </label>
      </div>

      <div>
        <input type="submit" value="Cadastrar" />
      </div>
    </form>
  );
}
export default Form;
