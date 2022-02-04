import styled from 'styled-components'

import BlockItems from '../../components/block-items/block-items.component'

const BlockItemsContainer = styled.div`
  margin: 50px auto 0px auto;
`

const HomePage = () => (
  <BlockItemsContainer>
    <BlockItems num={7} />
  </BlockItemsContainer>
)

export default HomePage
