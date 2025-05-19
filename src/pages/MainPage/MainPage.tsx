import { Form } from "../../components/Form/Form"
import { MainHeading } from "../../components/MainHeading/MainHeading"
import { Results } from "../../components/Results/Results"
import { useFormContext } from "../../hooks/useFormContext"
import './MainPage.scss'

export const MainPage = () => {
  const { handleClearForm } = useFormContext();

  return (
    <main className="main">
      <div className="main__content">
        <div className="title__section">
          <MainHeading />
          <button className="clear__form" onClick={handleClearForm}>Clear All</button>
        </div>
        <Form />
      </div>
      <Results />
    </main>
  )
}