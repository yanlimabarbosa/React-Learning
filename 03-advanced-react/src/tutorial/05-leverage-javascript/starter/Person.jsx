import avatar from "../../../assets/default-avatar.svg"

const Person = ({ name, nickName, images }) => {
  return (
    <div>
      <h3>{name}</h3>
      {nickName && <p>Nickname: {nickName}</p>}
      {(images?.[0]?.small?.url && (
        <div>
          <p>{name} photo:</p>
          <img src={images[0].small.url} alt={name} width={"35%"} />
        </div>
      )) || (
        <div>
          <p>{name} photo:</p>
          <img src={avatar} width={"35%"} />
        </div>
      )}
    </div>
  )
}
export default Person
