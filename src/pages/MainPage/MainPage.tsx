import { Form } from "../../components/Form/Form"
import { MainHeading } from "../../components/MainHeading/MainHeading"
import './MainPage.scss'

export const MainPage = () => {
  return (
    <main>
      <MainHeading />
      <button className="clear__form">Clear All</button>
      <Form />
    </main>
  )
}