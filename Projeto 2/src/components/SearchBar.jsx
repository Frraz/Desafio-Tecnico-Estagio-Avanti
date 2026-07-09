function SearchBar({ valor, aoDigitar, aoBuscar }) {
  return (

    <form className="busca" onSubmit={aoBuscar}>
      <input
        type="text"
        className="busca__input"
        placeholder="Digite um usuário do Github"
        value={valor}
        onChange={aoDigitar}
      />

      <button type="submit" className="busca__botao" aria-label="Buscar">
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </button>
    </form>
  );
}

export default SearchBar;
