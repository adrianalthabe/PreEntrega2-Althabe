function ProfileCard({ titulo, handle, img }) {
  return (
    <div>
      <img src={img} alt="Cartas" />
      <h3>{titulo}</h3>
      <p>{handle}</p>
    </div>
  );
}

export default ProfileCard;
