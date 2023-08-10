import { useState } from "react"
import { styled } from "styled-components"

const List = styled.ul`
  list-style: none;
  padding: 0;
`
interface ListItemProps {
  active: boolean
}
const ListItem = styled.li<ListItemProps>`
  padding: 2rem;
  background-color: ${(props) => (props.active ? "blue" : "none")};
`

interface ListGroupProps {
  items: string[]
  heading: String
  onSelectItem: (item: string) => void
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)

  // items = []

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <List>
        {items.map((item, index) => (
          <ListItem
            active={index === selectedIndex}
            key={item}
            onClick={() => {
              setSelectedIndex(index)
              onSelectItem(item)
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default ListGroup
