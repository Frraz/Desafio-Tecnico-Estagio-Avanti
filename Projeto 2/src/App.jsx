import { useState } from "react";

import Header from "./components/Header.jsx";
import SearchBar from "./components/SearchBar.jsx";
import ProfileCard from "./components/ProfileCard.jsx";

import "./App.css";

// Texto do Figma, em duas linhas (o CSS usa white-space: pre-line)
const ERRO_NAO_ENCONTRADO =
  "Nenhum perfil foi encontrado com esse nome de usuário.\nTente novamente";

function App() {
  const [usuario, setUsuario] = useState("");
  const [perfil, setPerfil] = useState(null);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState(null);
  const [temaClaro, setTemaClaro] = useState(false);

  async function buscarPerfil(evento) {
    evento.preventDefault();

    const nome = usuario.trim();

    if (nome === "") {
      return;
    }

    setCarregando(true);
    setErro(null);
    setPerfil(null);

    try {
      const resposta = await fetch(`https://api.github.com/users/${nome}`);

      if (!resposta.ok) {
        setErro(ERRO_NAO_ENCONTRADO);
        return;
      }

      const dados = await resposta.json();
      setPerfil(dados);
    } catch {
      setErro("Não foi possível conectar. Verifique sua internet e tente novamente.");
    } finally {
      setCarregando(false);
    }
  }

  return (
    <div className={temaClaro ? "pagina pagina--claro" : "pagina"}>
      <div className="brilho brilho--direita"></div>
      <div className="brilho brilho--esquerda"></div>
      <div className="pontos"></div>

      <button
        type="button"
        className="tema-botao"
        onClick={() => setTemaClaro(!temaClaro)}
        aria-label={temaClaro ? "Usar tema escuro" : "Usar tema claro"}
      >
        {temaClaro ? "🌙" : "☀️"}
      </button>

      <main className="painel">
        <Header />
        <SearchBar
          valor={usuario}
          aoDigitar={(e) => setUsuario(e.target.value)}
          aoBuscar={buscarPerfil}
        />

        {carregando && (
          <div className="carregando">
            <span className="carregando__spinner"></span>
            <span>Carregando...</span>
          </div>
        )}

        {erro && !carregando && <p className="mensagem-erro">{erro}</p>}

        {perfil && !carregando && <ProfileCard perfil={perfil} />}
      </main>
    </div>
  );
}

export default App;
