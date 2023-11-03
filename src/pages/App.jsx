import { CartBtn } from '../components/CartBtn'
import { CustomButton } from '../components/CustomButton'
import { CustomInput } from '../components/CustomInput'

function App() {

  return (
    <>
      <CustomButton text="paga"/>
      <CustomButton text="login"/>
      <CustomButton text="register"/>
      <CustomButton text="uomo"/>
      <CustomButton text="donna"/>
      <CustomButton text="sophora"/>
      <CustomInput text="text"/>
      <CustomInput type="password" text="pass"/>
      <CartBtn />
    </>
  )
}

export default App
