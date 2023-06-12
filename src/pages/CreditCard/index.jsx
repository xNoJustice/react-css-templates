import { useState } from 'react'

export default function CreditCard() {
  const [cardType, setCardType] = useState('visa')
  const [cardName, setCardName] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [cardMonth, setCardMonth] = useState('')
  const [cardYear, setCardYear] = useState('')
  const [cardCvv, setCardCvv] = useState('')
  const [isCardFlipped, setIsCardFlipped] = useState(false)

  const onChange = (key, value) => {
    if (key === 'number') {
      const returnCardType = () => {
        let re = new RegExp('^4')
        if (value.match(re) != null) return 'visa'

        re = new RegExp('^(34|37)')
        if (value.match(re) != null) return 'amex'

        re = new RegExp('^5[1-5]')
        if (value.match(re) != null) return 'mastercard'

        re = new RegExp('^6011')
        if (value.match(re) != null) return 'discover'

        re = new RegExp('^9792')
        if (value.match(re) != null) return 'troy'

        return 'visa'
      }
      setCardType(returnCardType())
      if (value.length <= 16) setCardNumber(value)
    }
    if (key === 'name') {
      if (value.length > 0) {
        let re = new RegExp('^([a-zA-Z ]+)$')
        if (value.match(re) != null && value.length < 50) setCardName(value)
      } else {
        setCardName('')
      }
    }
    if (key === 'month') {
      if (value > 0 && value <= 12) {
        setCardMonth(value)
      } else {
        setCardMonth(12)
      }
    }
    if (key === 'year') {
      if (value > 0 && value <= 40) {
        setCardYear(value)
      } else {
        setCardYear(40)
      }
    }
    if (key === 'cvv') {
      if (value > 0 && value < 999) {
        setCardCvv(value)
      } else {
        setCardCvv(999)
      }
    }
  }

  const returnCardNumber = (value) => {
    const chunks = []
    for (let i = 0; i < 16; i += 4) {
      chunks.push(value.substring(i, i + 4))
    }

    return chunks.join(' ')
  }

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen h-auto bg-gradient-to-tr from-red-500 to-red-100">
      <div
        id="card"
        className="relative overflow-hidden font-mono text-white transition-all duration-500 cursor-pointer w-96 h-60 rounded-2xl"
        style={{ transition: '0.6s', transformStyle: 'preserve-3d' }}
      >
        <div
          className="absolute top-0 left-0 z-20 flex flex-col justify-center w-full h-full gap-6 p-6 transition-all duration-100 delay-200 bg-gradient-to-tr from-gray-900 to-gray-700"
          style={{
            opacity: isCardFlipped ? 0 : 1,
          }}
          onClick={() => setIsCardFlipped(!isCardFlipped)}
        >
          <div className="flex items-center justify-between">
            <img
              src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png"
              alt="Smart card"
              className="w-12"
            />

            <img
              src={new URL(`./images/${cardType}.png`, import.meta.url).href}
              alt={cardType}
              className="w-12"
            />
          </div>

          <div className="">
            <label htmlFor="card-number" className="hidden">
              Card Number
            </label>
            <input
              type="text"
              id="card-number"
              value={returnCardNumber(cardNumber) || '#### #### #### ####'}
              readOnly
              className="w-full text-2xl bg-transparent outline-none"
            />
          </div>

          <div className="flex flex-row justify-between w-full">
            <div className="flex flex-col w-full">
              <label htmlFor="card-holder">Card holder</label>
              <input
                type="text"
                id="card-holder"
                value={cardName.toUpperCase() || 'FULL NAME'}
                readOnly
                className="bg-transparent outline-none"
              />
            </div>

            <div className="flex flex-col w-1/4">
              <label htmlFor="expires">Expires</label>
              <input
                type="text"
                id="expires"
                value={`${cardMonth || 'MM'}/${cardYear || 'YY'}`}
                readOnly
                className="bg-transparent outline-none"
              />
            </div>
          </div>
        </div>

        <div
          className="absolute top-0 left-0 z-10 flex flex-col justify-center w-full h-full gap-3 transition-all bg-gradient-to-tr from-gray-900 to-gray-700"
          style={{
            opacity: isCardFlipped ? 1 : 0,
          }}
          onClick={() => setIsCardFlipped(!isCardFlipped)}
        >
          <div className="w-full h-12 bg-black"></div>

          <div className="flex flex-col justify-center gap-6 px-6">
            <div className="flex flex-col items-end">
              <label htmlFor="cvv">CVV</label>
              <input
                type="number"
                id="cvv"
                value={cardCvv}
                readOnly
                className="w-full h-8 text-right text-black rounded outline-none"
                style={{
                  background:
                    'repeating-linear-gradient(45deg, #ededed, #ededed 5px, #f9f9f9 5px, #f9f9f9 10px)',
                }}
              />
            </div>

            <div className="flex items-center justify-start">
              <img
                src={new URL(`./images/${cardType}.png`, import.meta.url).href}
                alt={cardType}
                className="w-12"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-lg p-8 mx-auto">
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h2 className="mb-6 text-lg font-medium">Payment Information</h2>
          <form>
            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-3">
                <label
                  htmlFor="card-number"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Card Number
                </label>
                <input
                  type="text"
                  name="card-number"
                  id="card-number"
                  value={cardNumber}
                  onChange={(e) => onChange('number', e.target.value)}
                  placeholder="0000 0000 0000 0000"
                  className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="col-span-3">
                <label
                  htmlFor="card-holder"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Card Holder
                </label>
                <input
                  type="text"
                  name="card-holder"
                  id="card-holder"
                  value={cardName}
                  onChange={(e) => onChange('name', e.target.value)}
                  placeholder="Full Name"
                  className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label
                  htmlFor="expiration-month"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Expiration Month
                </label>
                <input
                  type="number"
                  name="expiration-month"
                  id="expiration-month"
                  value={cardMonth}
                  onChange={(e) => onChange('month', e.target.value)}
                  placeholder="MM"
                  className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label
                  htmlFor="expiration-year"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Expiration Year
                </label>
                <input
                  type="number"
                  name="expiration-year"
                  id="expiration-year"
                  value={cardYear}
                  onChange={(e) => onChange('year', e.target.value)}
                  placeholder="YY"
                  className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label
                  htmlFor="cvv"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  CVV
                </label>
                <input
                  type="number"
                  name="cvv"
                  id="cvv"
                  value={cardCvv}
                  onChange={(e) => {
                    onChange('cvv', e.target.value)
                    setIsCardFlipped(true)
                    setTimeout(() => {
                      setIsCardFlipped(false)
                    }, 2000)
                  }}
                  placeholder="000"
                  className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
            <div className="mt-8">
              <button
                type="button"
                className="w-full py-3 font-medium text-white bg-green-500 rounded-lg hover:bg-blue-600 focus:outline-none"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
