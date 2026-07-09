function ProfileCard({ perfil }) {
  return (
    <article className="cartao">
      <img
        className="cartao__foto"
        src={perfil.avatar_url}
        alt={`Foto de ${perfil.name || perfil.login}`}
      />


      <div className="cartao__info">
        <h2 className="cartao__nome">{perfil.name || perfil.login}</h2>
        {perfil.bio ? (
          <p className="cartao__bio">{perfil.bio}</p>
        ) : (
          <p className="cartao__bio cartao__bio--vazia">
            Este usuário ainda não adicionou uma bio.
          </p>
        )}
      </div>
    </article>
  );
}

export default ProfileCard;
