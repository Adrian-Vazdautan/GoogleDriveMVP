import { MantineProvider, Center } from '@mantine/core';
import '@mantine/core/styles.css';
import { AuthenticationTitle } from './components/Authentication/AuthenticationTitle';
import './App.css';

function App() {
  return (
    <MantineProvider> 
      <Center h="100vh">
        <AuthenticationTitle /> 
      </Center>
    </MantineProvider>
  );
}

export default App;