import logo from "./../../../src/assets/images/loading.gif"
import './Loader.css'

export default function LoaderComponent() {
    return (
        <div className="loader">
            <img src={logo} alt="logo" />
        </div>
    );
}