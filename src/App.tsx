import React, { useState } from "react"
import ExpandableText from "./components/ExpandableText"

function App() {
  const [maxChars, setMaxChars] = useState(50)

  const handleInputChange = (event: { target: { value: string } }) => {
    const value = parseInt(event.target.value)

    if (!isNaN(value)) {
      setMaxChars(value)
    }

    if (!value) {
      setMaxChars(50)
    }
  }

  return (
    <div>
      <h4>Type the amount of characters to be displayed before sum up:</h4>
      <input
        type="text"
        placeholder="Eg: 50"
        onChange={handleInputChange}
      ></input>
      <ExpandableText maxChars={maxChars}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
        repudiandae dolorum eaque dolor maxime nesciunt itaque quia. Aperiam
        temporibus vel voluptate! Sed distinctio pariatur dolorem totam fuga
        enim, maiores itaque modi magnam quasi magni aut nihil praesentium, odio
        laborum voluptas esse. Nostrum doloremque nihil sequi obcaecati dicta
        reprehenderit reiciendis dolorem aut ducimus necessitatibus, voluptas
        explicabo? Blanditiis consequuntur dolore, iure aperiam tenetur illum,
        atque enim doloremque corporis ut voluptatum eveniet, libero dignissimos
        numquam eum nostrum expedita temporibus impedit ullam aliquid ea
        suscipit explicabo reprehenderit? Quo ducimus, pariatur rem ipsam
        officiis magni praesentium adipisci eaque odit error vel mollitia nihil
        reiciendis, dignissimos sapiente commodi eligendi iure. Soluta dicta
        fuga non corrupti pariatur rerum ipsam cum, facilis delectus. Dicta,
        nulla. Possimus suscipit enim provident nihil explicabo perferendis
        molestias, quo ratione ipsam quidem! Aliquam consequatur veritatis sequi
        necessitatibus sapiente reprehenderit, molestiae, ex excepturi cumque
        officiis voluptatibus laudantium ea unde soluta perspiciatis! Corrupti
        cupiditate doloremque expedita pariatur facilis nostrum non fuga saepe
        atque beatae temporibus dolor, laudantium, ab voluptatum error, tempora
        porro deleniti natus reprehenderit architecto! Quam eaque quo unde nemo
        harum, dolorem aut inventore perferendis blanditiis suscipit nostrum
        animi? Placeat repellat asperiores quisquam in et modi dolores,
        temporibus eum molestias officia ullam tenetur totam nobis mollitia
        molestiae perspiciatis fuga impedit nostrum quam? Officiis
        exercitationem libero itaque doloremque nesciunt. Ut nam tempora
        deserunt deleniti eos nulla unde non dignissimos? Laboriosam non magni,
        consequatur quae libero odio cumque expedita sed culpa neque amet maxime
        voluptas fugiat ipsum molestiae esse placeat quibusdam soluta unde odit
        perferendis illum nemo. Odio natus molestias laboriosam. Soluta
        laboriosam, quod inventore aliquid molestiae quae velit illo veniam.
        Quos eius molestiae repellat at quaerat illum id fugiat officiis error,
        maxime dolor non dolore architecto quod, ipsam inventore placeat
        cupiditate? Ipsum sint voluptatibus unde dolore nesciunt voluptate sed
        in, natus fuga repellat magni architecto?
      </ExpandableText>
    </div>
  )
}

export default App
