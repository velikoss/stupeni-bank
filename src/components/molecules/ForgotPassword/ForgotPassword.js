import React, {useRef, useState} from "react"
import {Alert, Button, Card, Form} from "react-bootstrap"
import {useAuth} from "../Auth/AuthContext";
import {Link} from "react-router-dom"
import './ForgotPassword.css'

export default function ForgotPassword() {
  const emailRef = useRef()
  const {resetPassword} = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setMessage("")
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage("Check your inbox for further instructions")
    } catch {
      setError("Failed to reset password")
    }

    setLoading(false)
  }

  return (
    <>
    <div id='ForgotPage'>
      <Card id='ForgotCard'>
        <Card.Body>
          <h2 className="text-center mb-4"><p>Восстановление</p> <p>пароля</p></h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Почта</Form.Label>
              <Form.Control type="email" ref={emailRef} required/>
            </Form.Group>
            <Button disabled={loading} id='ForgotButton' type="submit">
              Продолжить
            </Button>
          </Form>
          <div className="text-center mt-3">
            <Link to="/login">Войти</Link>
          </div>
          <div className="text-center mt-2">
        Ещё нет аккаунта? <Link to="/signup">Зарегестрируйтесь</Link>
      </div>
        </Card.Body>
      </Card>
      </div>
    </>
  )
}


