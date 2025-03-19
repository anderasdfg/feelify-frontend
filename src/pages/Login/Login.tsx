import feelifyLogo from '../../assets/feelify.svg';
import spotifyLogo from '../../assets/spotify.svg';
import './styles.scss';
import ParticlesBackground from '../../components/ParticlesBackground';

const handleLogin = () => {
    window.location.href = `${import.meta.env.VITE_BACKEND_URL}/auth/login`;
};

const Login = () => {
    return (
        <div className="login-container">
            <ParticlesBackground />
            <img src={feelifyLogo} className="feelify-logo" alt="Feelify Logo" />
            <button className="login-button" onClick={handleLogin}>
                <img className="login-button-logo" src={spotifyLogo} alt="Spotify Logo" />
                Login with Spotify
            </button>
        </div>
    );
};

export default Login;