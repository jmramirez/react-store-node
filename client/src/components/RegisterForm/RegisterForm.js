import './RegisterForm.scss'
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useRef} from "react";
import {useForm} from "react-hook-form";
import {hideAuthModal} from "../../redux/actions/modalActions";

export const RegisterForm = () => {
  const { register, handleSubmit, reset, formState: { errors }, watch } = useForm({ defaultValues: { }})
  const modalOpen = useSelector((state) => state.modal.showAuthModal)
  const dispatch = useDispatch()
  const password = useRef({})
  password.current = watch("password", "")
  const userRegister = useSelector((state) => state.userRegister)
  const { error } = userRegister

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
    /*dispatch(signup(data.firstName, data.lastName, data.email, data.password))*/
    console.log(error)
  }

  return (
    <>
      <form className="form--xl" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-content">
          <h1 className="form-content__header">Sign Up</h1>
          {error && <p className="form__error">{error}</p>}
          <div className="form-content__name">
            <div className="form-content__name__controls">
              <label className="form-content__label">First Name</label>
              <input type="text" className="form-content__input" autoComplete="off" {...register("firstName", { required: true })}/>
              {errors.firstName &&( <p className="form__error">You must enter FirstName</p>)}
            </div>
            <div className="form-content__name__controls">
              <label className="form-content__label">Last Name</label>
              <input type="text" className="form-content__input" autoComplete="off" {...register("lastName", { required: true })}/>
              {errors.lastName &&( <p className="form__error">You must enter LastName</p>)}
            </div>
          </div>
          <label className="form-content__label">Email</label>
          <input type="text" className="form-content__input" autoComplete="off" {...register("email", { required: true })}/>
          {errors.email &&( <p className="form__error">You must enter email</p>)}
          <label className="form-content__label">Password</label>
          <input type="password" className="form-content__input" autoComplete="off"  {...register("password", { required: true })}/>
          {errors.password &&( <p className="form__error">You must enter password</p>)}
          <label className="form-content__label">Confirm Password</label>
          <input type="password" className="form-content__input" autoComplete="off" {...register("passwordConfirmation", {validate: value => value === password.current || "The passwords do not match"})}/>
          {errors.passwordConfirmation &&( <p className="form__error">{errors.passwordConfirmation.message}</p>)}
        </div>
        <div className="form-action">
          <button className="form-action__cancel" onClick={closeModal} type="button">
            Cancel
          </button>
          <input className="form-action__accept" type="submit" value="Join Now" />
        </div>
      </form>
    </>
  )
}