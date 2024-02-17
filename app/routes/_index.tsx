import LogoTitle from '../../assets/images/logo-s.png'


export default function Index() {
    return (
        
        <p id="index-page">
            <img id="index-img" src={LogoTitle} alt="logo" />
            Welcome to Warren's Contact Book!
            <br />
            Check Out{" "}
            <a href="https://warrenkuah.com"> my website at warrenkuah.com</a>
        </p>
    )
}