import LogoR from '../../../assets/images/R.png'
import LogoF from '../../../assets/images/logo-F.png'
import './index.scss'

const Logo = () => {
  return (
    <div className="logo-container">
      <img className="solid-logo-F" src={LogoF} alt="JavaScript,  Developer" />
      <img className="solid-logo-R" src={LogoR} alt="JavaScript,  Developer" />
    </div>
  )
}

export default Logo
