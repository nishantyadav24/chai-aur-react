import { useState } from 'react'
import { Inputbox } from './components'
import useCurrencyInfo from './hooks/usecurrencyinfo'
import './App.css'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState("")
const CurrencyInfo = useCurrencyInfo(from)
const options = object.keys(CurrencyInfo)
  return (
    <>
 <h1 className='bg-orange-500 flex justify-center my-10 text-3xl'>Currency ko karein  convert </h1>
    </>
  )
}

export default App
