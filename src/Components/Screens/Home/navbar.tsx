import '../../../Assets/css/home.css';
import profile from '../../../Assets/images/myImage.png';
import { MdAccountBalance } from 'react-icons/md';
import { IoHome } from 'react-icons/io5';
import { IoCardSharp } from 'react-icons/io5';
import { RiSecurePaymentFill } from 'react-icons/ri';
import { AiFillShop } from 'react-icons/ai';
import { RiShoppingBag3Line } from 'react-icons/ri';
import { MdSubscriptions } from 'react-icons/md';
import { IoIosPeople } from 'react-icons/io';
import { VscDebugDisconnect } from 'react-icons/vsc';
import { GoGift } from 'react-icons/go';
import { BsBackspace } from 'react-icons/bs';
import LogoutButton from '../Signin/LogoutButton';
import { CgProfile } from 'react-icons/cg';
function Header() {
    return (
        <div className="sidenav active">
            <img src={profile} alt="My Image" className="profile" />
            <ul>
                {/* <li>
                    <a href="/home"><IoHome /> Home</a>
                </li> */}
                <li>
                    <a href="/"><CgProfile />  My Profile</a>
                </li>
                <li>
                    <a href="/accounts"><MdAccountBalance /> Accounts</a>
                </li>
                <li>
                    <a href="/"><AiFillShop /> Merchant</a>
                </li>
                <li>
                    <a href="/"><RiSecurePaymentFill /> Payments</a>
                </li>
                <li>
                    <a href="/"><IoCardSharp />  Cards</a>
                </li>
                <li>
                    <a href="/"> <LogoutButton /></a>
                </li>
                {/*<li>
                    <a href="/"><RiShoppingBag3Line /> Subscriptions</a>
                </li><li>
                    <a href="/"><MdSubscriptions /> Expenses</a>
                </li><li>
                    <a href="/"><IoIosPeople /> Payroll</a>
                </li><li>
                    <a href="/"><VscDebugDisconnect /> Connect</a>
                </li><li>
                    <a href="/"><GoGift /> Perks</a>
                </li> */}
            </ul>
            <hr />
            <a href="#">Refer a business</a>
            <a href="#">Settings</a>
        </div>
    );
}

export default Header;
