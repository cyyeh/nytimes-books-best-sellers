import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import {
  Paper,
  Typography,
} from '@material-ui/core'

import { COLORS } from '../../utils'

const BlockContainer = styled.div`
  margin: 20px auto;
`

const BlockContent = styled(Paper)`
  width: 300px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => `linear-gradient(to top right, ${props.backgroundstart} 0%, ${props.backgroundend} 100%)`};
  cursor: pointer;
  border-radius: 50px;
`

const BlockText = styled(Typography)`
  font-weight: 500;
`

const Block = ({ data, index, history }) => (
  <BlockContainer>
    <BlockContent
      elevation={6}
      variant="outlined"
      squared="true"
      backgroundstart={COLORS[index % 7][0]}
      backgroundend={COLORS[index % 7][1]}
      onClick={() => history.push(`/books/${data}`)}
    >
      <BlockText variant="h2" component="h3">
        {data}
      </BlockText>
    </BlockContent>
  </BlockContainer>
)

export default withRouter(Block)
