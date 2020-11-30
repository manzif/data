import './App.css';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import AppHeader from './components/common/header'
import AppFooter from './components/common/footer'
import AppHome from './views/home'

const { Header, Content, Footer } = Layout

function App() {
  return (
    <div className="App">
      <Layout className="mainLayout">
        <Header>
          <AppHeader/>
        </Header>
        <Content>
          <AppHome />
        </Content>
        <Footer>
          <AppFooter />
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
