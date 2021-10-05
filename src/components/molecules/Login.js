import React, {useRef, useState} from "react"
import {Alert, Button, Card, Form} from "react-bootstrap"
import {useAuth} from "./AuthContext";
import {Link, useHistory} from "react-router-dom"
import './Login.css'

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const {login} = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  return (
    <>
      <div id='LoginPage'>
        
        <div id='LoginGreeting'>
          <div id='LogoAndText'>
            <div id='Logo'></div>
            <div id='Vseobuch'><p>Всеобуч</p>
            <p>ЦентрИнвест</p></div>
          </div>
        </div>
        
      
      <Card id='LoginCard'>
        <Card.Body>
          <h2 className="text-center mb-4">Вход</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Почта</Form.Label>
              <Form.Control type="email" ref={emailRef} required/>
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Пароль</Form.Label>
              <Form.Control type="password" ref={passwordRef} required/>
            </Form.Group>
            <Button disabled={loading} id='LoginButton' type="submit">
              Продолжить
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Забыли пароль?</Link>
          </div>
          <div className="w-100 text-center mt-2">
            Ещё нет аккаунта? <Link to="/signup">Зарегистрироваться</Link>
          </div>
        </Card.Body>
      </Card>
      
      </div>
    </>
  )
}
