import avatar from "../../../assets/default-avatar.svg"

const Person = ({ name, nickName, images }) => {
  const img = images?.[0]?.small?.url ?? avatar
  return (
    <div>
      {name && <h3>{name}</h3>}
      {nickName && <p>Nickname: {nickName}</p>}
      {name && <p>{name} photo:</p>}
      <img src={img} alt={name} width={"35%"} />
    </div>
  )
}
export default Person
