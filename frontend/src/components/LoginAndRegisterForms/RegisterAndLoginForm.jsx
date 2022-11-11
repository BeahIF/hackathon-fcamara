import { useState } from 'react'
import './RegisterAndLoginForm.css'

import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';

import userIcon from '../../assets/icons/user.svg'
import emailIcon from '../../assets/icons/email.svg'
import lockIcon from '../../assets/icons/lock.svg'
import eyeSlashIcon from '../../assets/icons/eye-slash.svg'
import eyeIcon from '../../assets/icons/eye.svg'
import arrowLeftIcon from '../../assets/icons/arrow-left.svg'
import logo from '../../assets/images/logo.png'
import logoBanner from '../../assets/images/logo-banner.png'

export default function Form(props) {
	const { register, handleSubmit, formState:{ errors } } = useForm({
	resolver: yupResolver(props.yupSchema)
	});
	const onSubmit = props.onSubmit;	

	const [showPassword, setShowPassword] = useState(false)

  	return (
		<section className='form-logo-box'>
			<img className='logo-banner-mobile' src={logoBanner} alt="Banner da da Orange Juice" />
			<div className='slogan-logo-box'>
				<img src={logo} alt="Logo da Orange Juice" />
				<h2>A plataforma mais vitaminada do mundo</h2>
			</div>

			<h2 className='form-legend mobile'>Crie sua conta</h2>

			<form className='login-register-form'>
				<legend className='form-legend'>Crie sua conta</legend>
				
				<fieldset>
					<div className="ipt-err-box">
						<div className="icon-ipt-box" >
							<img className='icon' src={userIcon} alt="Ícone de usuário" />
							<input {...register('name')} type="text" name="name" placeholder='Seu nome'/>
						</div>
						<span>{errors.name?.message}</span>
					</div>

					<div className="ipt-err-box">
						<div className="icon-ipt-box">
							<img className='icon' src={emailIcon} alt="Ícone de email" />
							<input {...register('email')} type="text" name="email" placeholder='Seu email'/>
						</div>
						<span>{errors.email?.message}</span>
					</div>

					<div className="ipt-err-box">
						<div className="icon-ipt-box">
							<img className='icon' src={lockIcon} alt="Ícone de cadeado" />
							<input {...register("password")} type={showPassword ? 'text' : 'password'} name="password" placeholder='Sua senha'/>
							<img className='icon eye-slash' src={showPassword ? eyeIcon : eyeSlashIcon} alt="Ícone de cadeado" onClick={() => setShowPassword(!showPassword)}/>
						</div>
						<span>{errors.password?.message}</span>
					</div>
				</fieldset>

				{props.text}
				<button onClick={handleSubmit(onSubmit)}>{props.textButton}</button>
				<div className='back-to-login-box'>
					<img src={arrowLeftIcon} alt="Seta para a esquerda" />
					<a href="#">Voltar para o login</a>
				</div>
			</form>
		</section>
  )
}

