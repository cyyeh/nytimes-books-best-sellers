import { Switch, Route } from 'react-router-dom'
import { 
  Container
} from '@material-ui/core'

import Header from './components/header/header.component'
import BlockItems from './components/block-items/block-items.component'
import BooksListPage from './pages/books-list-page/books-list-page.component'

const App = () => (
  <Container>
    <Header />
    <Switch>
      <Route
        exact
        path='/'
        render={() => <BlockItems num={7} />}
      />
      <Route
        exact 
        path={`/books/:year`}
        component={BooksListPage}
      />
    </Switch>
  </Container>
)

export default App
