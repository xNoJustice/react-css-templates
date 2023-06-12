import { useState } from 'react'
import './multi-step-form.css'

export default function MultiStepForm() {
  const [step, setStep] = useState(1)
  const [values, setValues] = useState({
    name: '',
    firstname: '',
    adress: '',
    age: '',
  })
  const [transition, setTransition] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
  }

  const nextStep = (side) => {
    setTransition(side)
    setTimeout(() => {
      setStep(step + 1)
      setTransition('')
    }, 500)
  }

  const prevStep = (side) => {
    setTransition(side)
    setTimeout(() => {
      setStep(step - 1)
      setTransition('')
    }, 500)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Step1 values={values} handleChange={handleChange} />
      case 2:
        return <Step2 values={values} handleChange={handleChange} />
      case 3:
        return <Step3 values={values} handleChange={handleChange} />
    }
  }

  return (
    <div id="multi-step-form">
      {submitted ? (
        <div>
          Submitted
          <p>Name: {values.name}</p>
          <p>First Name: {values.firstname}</p>
          <p>Adress: {values.adress}</p>
          <button
            type="button"
            onClick={() => {
              setSubmitted(false)
              setStep(1)
              setValues({ name: '', firstname: '', adress: '', age: '' })
              setTransition('')
            }}
          >
            Reset
          </button>
        </div>
      ) : (
        <div className={`content ${transition}`}>
          {renderStep()}
          <div className="btnContainer">
            {step > 1 && (
              <button onClick={() => prevStep('animate-left')}>
                &lt; Previous
              </button>
            )}
            {step < 3 && (
              <button onClick={() => nextStep('animate-right')}>
                Next &gt;
              </button>
            )}
            {step === 3 && <button onClick={handleSubmit}>Submit</button>}
          </div>
        </div>
      )}
    </div>
  )
}

const Step1 = ({ values, handleChange }) => {
  return (
    <form>
      <div className="fields">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
      </div>
      <div className="fields">
        <label>First Name</label>
        <input
          type="text"
          name="firstname"
          value={values.firstname}
          onChange={handleChange}
        />
      </div>
    </form>
  )
}

const Step2 = ({ values, handleChange }) => {
  return (
    <form>
      <div className="fields">
        <label>Adress</label>
        <input
          type="text"
          name="adress"
          value={values.adress}
          onChange={handleChange}
        />
      </div>
    </form>
  )
}

const Step3 = ({ values, handleChange }) => {
  return (
    <form>
      <div className="fields">
        <label>Age</label>
        <input
          type="number"
          name="age"
          min="1"
          max="100"
          value={values.age}
          onChange={handleChange}
        />
      </div>
    </form>
  )
}
