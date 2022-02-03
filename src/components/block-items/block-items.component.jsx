import styled from 'styled-components'

import Block from '../block/block.component'
import { generateLastNYears } from '../../utils'

const BlockItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const BlockItems = ({ num }) => {
  const lastNYears = generateLastNYears(num)

  return (
    <BlockItemsContainer>
      {
        lastNYears.map((year, idx) => (
          <Block key={idx} data={year} index={idx} />
        ))
      }
    </BlockItemsContainer>
  )
}

export default BlockItems
