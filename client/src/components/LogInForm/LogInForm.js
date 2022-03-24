import './LogInForm.scss'
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {hideAuthModal} from "../../redux/actions/modalActions";
import {login} from "../../redux/actions/userActions";

const LogInForm = ({ signUp }) => {
  const { register, handleSubmit, reset, formState: { errors }} = useForm({ defaultValues: {email: "", password: ""}})
  const dispatch = useDispatch()

  const modalOpen = useSelector((state) => state.modal.showAuthModal)
  const userLogin = useSelector((state) => state.userLogin)
  const { error } = userLogin

  useEffect(() => {
    if(!modalOpen) {
      reset()
    }
  }, [modalOpen, reset])

  const closeModal = (e) => {
    e.preventDefault()
    reset()
    dispatch(hideAuthModal())
  }

  const onSubmit = (data, e) => {
    e.preventDefault()
    dispatch(login(data.email,data.password))
  }

  const demoLogin = () => {
    dispatch(login("demouser@example.com", "creStoreNet"))
  }

  return (
    <>
      <form className="form form--login" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-content">
          <h1 className="form-content__header">Sign In</h1>
          {error && <p className="form__error">{error}</p>}
          <label className="form-content__label">
            Username/Email
          </label>
          <input className="form-content__input" type="text" {...register("email", { required: true })} autoComplete="off"/>
          {errors.email &&( <p className="form__error">You must enter username</p>)}
          <label className="form-content__label">
            Password
          </label>
          <input type="password" className="form-content__input" {...register("password", { required: true })}/>
          {errors.password &&( <p className="form__error">You must enter password</p>)}
          <button className="form-content__button" type="button"  onClick={() =>signUp('signup')}>Not account? Create one!</button>
        </div>
        <div className="form-action">
          <button className="form-action__cancel" onClick={closeModal} type="button">
            Cancel
          </button>
          <input className="form-action__accept form-action__accept--login" type="submit" value="Log In" />
          <button className="form-action__cancel" onClick={demoLogin} type="button">
            Demo Log In
          </button>
        </div>
      </form>
    </>
  )
}

export default LogInForm