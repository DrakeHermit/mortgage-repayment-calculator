import { FormProvider } from './context/formContext'
import { MainPage } from './pages/MainPage/MainPage'
import './styles/main.scss'

function App() {
  
  return (
    <>
      <FormProvider>
        <MainPage />
      </FormProvider>
    </>
  )
}

export default App
