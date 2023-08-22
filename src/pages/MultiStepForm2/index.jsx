import { useState } from 'react'
import './multi-step-form2.css'

export default function MultiStepForm2() {
  const [step, setStep] = useState(1)
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    companyName: '',
    jobTitle: '',
    location: '',
    linkedin: '',
    twitter: '',
    github: '',
  })
  const [transition, setTransition] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
  }

  const nextStep = () => {
    if (step === 3) {
      setStep(step + 1)
      return handleSubmit()
    }
    setTransition({
      [`step${step + 1}`]: 'form-active-animate',
      [`step${step}`]: 'form-inactive',
    })
    setStep(step + 1)
    setTimeout(() => {
      setTransition('')
    }, 1000)
  }

  const prevStep = () => {
    setTransition({
      [`step${step - 1}`]: 'form-active-animate',
      [`step${step}`]: 'form-inactive',
    })
    setStep(step + -1)
    setTimeout(() => {
      setTransition('')
    }, 1000)
  }

  const handleSubmit = () => {
    setSubmitted(true)
  }

  return (
    <main id="multi-step-form2">
      <div className="stepper">
        <div className={`step--1${step === 1 ? ` step-active` : ''}`}></div>
        <div className={`step--2${step === 2 ? ` step-active` : ''}`}></div>
        <div className={`step--3${step === 3 ? ` step-active` : ''}`}></div>
        <div className={`step--4${step === 4 ? ` step-active` : ''}`}></div>
      </div>
      <form
        className={`form${step === 1 ? ' form-active' : ''} ${
          transition.step1 || ''
        }`}
      >
        <div className="form--header-container">
          <h1 className="form--header-title">New account</h1>

          <p className="form--header-text">Tell us more about you.</p>
        </div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={values.name}
          onChange={(e) => handleChange(e)}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={values.email}
          onChange={(e) => handleChange(e)}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={values.password}
          onChange={(e) => handleChange(e)}
          required
        />
        <button
          type="button"
          className="form__btn"
          id="btn-1"
          onClick={() => nextStep()}
        >
          Next
        </button>
      </form>
      <form
        className={`form${step === 2 ? ' form-active' : ''} ${
          transition.step2 || ''
        }`}
      >
        <div className="form--header-container">
          <h1 className="form--header-title">Company Info</h1>

          <p className="form--header-text">Tell us more about your company.</p>
        </div>

        <input
          type="text"
          name="companyName"
          placeholder="Company Name"
          value={values.companyName}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          name="jobTitle"
          placeholder="Job title"
          value={values.jobTitle}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={values.location}
          onChange={(e) => handleChange(e)}
        />
        <button
          type="button"
          className="form__btn"
          id="btn-2-prev"
          onClick={() => prevStep()}
        >
          Previous
        </button>
        <button
          type="button"
          className="form__btn"
          id="btn-2-next"
          onClick={() => nextStep()}
        >
          Next
        </button>
      </form>
      <form
        className={`form${step === 3 ? ' form-active' : ''} ${
          transition.step3 || ''
        }`}
        style={{
          visibility: submitted ? 'hidden' : 'visible',
        }}
      >
        <div className="form--header-container">
          <h1 className="form--header-title">Social account</h1>

          <p className="form--header-text">
            Tell us more about your social account.
          </p>
        </div>
        <input
          type="url"
          name="linkedin"
          placeholder="Linkedin"
          value={values.linkedin}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="url"
          name="twitter"
          placeholder="Twitter"
          value={values.twitter}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="url"
          name="github"
          placeholder="Github"
          value={values.github}
          onChange={(e) => handleChange(e)}
        />
        <button
          type="button"
          className="form__btn"
          id="btn-2-prev"
          onClick={() => prevStep()}
        >
          Previous
        </button>
        <button
          type="button"
          className="form__btn"
          id="btn-3"
          onClick={() => nextStep()}
        >
          Submit
        </button>
      </form>
      <div
        className="form--message"
        style={{
          visibility: submitted ? 'visible' : 'hidden',
        }}
      >
        <h1 className="form--message-text">
          Your account is successfully created {console.log(values)}
        </h1>
      </div>
    </main>
  )
}
