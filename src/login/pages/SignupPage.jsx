
import Header from "../components/Header"
import Signup from "../components/Signup"

function SignupPage() {
  return (
    <>
      <Header
        heading={'Sign-Up and create your account'}
        paragraph={'Do you have an account?'}
        linkName={'Log-in'}
        linkUrl={'/'}
      />

      <Signup />
      
    </>
  )
}

export default SignupPage