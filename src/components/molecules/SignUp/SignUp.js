import React, {useRef, useState} from "react"
import {Alert, Button, Card, Form} from "react-bootstrap"
import {useAuth} from "../AuthContext";
import {Link, useHistory} from "react-router-dom"
import './SignUp.css'

export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const {signup} = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }

  return (
    <div id = 'SignUpPage'>
      <div id ='SignUpCardDiv'>
      <Card id = 'SignUpCard'>
        
        <Card.Body>
          <h2 className="text-center mb-4">Регистрация</h2>
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
            <Form.Group id="password-confirm">
              <Form.Label>Подтверждение пароля</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required/>
            </Form.Group>
            <Button disabled={loading} className="" type="submit" id='SignUpButton'>
              Продолжить
            </Button>
          </Form>
          <div className="text-center mt-2" id='AlreadySignUp'>
        Уже есть аккаунт? <Link to="/login">Войти</Link>
      </div>
        </Card.Body>
        
      </Card>
      </div>
      </div>
  )
}
