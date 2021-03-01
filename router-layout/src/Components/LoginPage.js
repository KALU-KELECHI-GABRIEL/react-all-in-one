import './login_styles.scss';

const LoginPage = ({ classNamees }) => {
  return (
    <div className="centered">
      <h2>Login</h2>
      <form name='form'>
      <div class="container"> 
        <div className='form-group'>
          <label>Username</label>
          <input type='text' className='form-control' />
        </div>
        <div className='form-group'>
          <label>Password</label>
          <input type='password' className='form-control' />
        </div>
        </div>
        <div className='container'>
          <button type='submit' className='btn btn-primary'>
            Login
          </button>
        </div>
        <div className='container'>
          <button type='button' className='cancelbtn'>
            Cancel
          </button>
          <span className='psw'>
            Forgot password ?
          </span>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
