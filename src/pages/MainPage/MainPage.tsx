import { Form } from "../../components/Form/Form"
import { MainHeading } from "../../components/MainHeading/MainHeading"
import { Results } from "../../components/Results/Results"
import './MainPage.scss'

export const MainPage = () => {
  return (
    <main>
      <div className="main__content">
        <MainHeading />
        <button className="clear__form">Clear All</button>
        <Form />
      </div>
      <Results />
    </main>
  )
}