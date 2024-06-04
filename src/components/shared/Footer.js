import { Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import sparkNetIcon from "@/assets/sparkNetIconFull.png"
import SendIcon from '@mui/icons-material/Send';
import { faFacebookF, faXTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Footer.module.css";
import footer from '../../assets/footer-bg.png';

const Footer = () => {
    return (
        <footer style={{
            background: `url(${footer.src})`,
            backgroundSize: 'cover'
        }} className="poppins text-white">
            <div class="lg:px-24 py-12 flex flex-wrap md:text-left text-center order-first">
                <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                    <Image src={sparkNetIcon} width={250} height={20} alt="Spark Net Icon" className="" />
                    <p className="mb-10 lg:mb-0">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, non eaque?</p>
                </div>
                <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 class="title-font font-medium text-[#8B3EE2] tracking-widest text-sm mb-3">Services</h2>
                    <nav class="list-none mb-10">
                        <li>
                            <a class="text-gray-600 hover:text-gray-800">First Link</a>
                        </li>
                        <li>
                            <a class="text-gray-600 hover:text-gray-800">Second Link</a>
                        </li>
                        <li>
                            <a class="text-gray-600 hover:text-gray-800">Third Link</a>
                        </li>
                        <li>
                            <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
                        </li>
                    </nav>
                </div>
                <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 class="title-font font-medium text-[#8B3EE2] tracking-widest text-sm mb-3">Services</h2>
                    <nav class="list-none mb-10">
                        <li>
                            <a class="text-gray-600 hover:text-gray-800">First Link</a>
                        </li>
                        <li>
                            <a class="text-gray-600 hover:text-gray-800">Second Link</a>
                        </li>
                        <li>
                            <a class="text-gray-600 hover:text-gray-800">Third Link</a>
                        </li>
                        <li>
                            <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
                        </li>
                    </nav>
                </div>
                <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 class="title-font font-medium text-[#8B3EE2] tracking-widest text-sm mb-3">Services</h2>
                    <div>
                        <ul className={styles.wrapper}>
                            <li>
                                <Link href="/" className={`${styles.icon} ${styles.facebook}`}>
                                    <span className={styles.tooltip}>Facebook</span>
                                    <FontAwesomeIcon icon={faFacebookF} style={{ width: 9 }} />
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className={`${styles.icon} ${styles.twitter}`} >
                                    <span className={styles.tooltip}>X</span>
                                    <FontAwesomeIcon icon={faXTwitter} style={{ width: 13 }} />
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className={`${styles.icon} ${styles.instagram}`}>
                                    <span className={styles.tooltip}>Instagram</span>
                                    <FontAwesomeIcon icon={faInstagram} style={{ width: 13 }} className={styles.svg} />
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className={`${styles.icon} ${styles.linkedin}`}>
                                    <span className={styles.tooltip}>LinkedIn</span>
                                    <FontAwesomeIcon icon={faLinkedin} style={{ width: 13 }} />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <Typography variant="body2" className="poppins m-3">Get In Touch And Let&apos;s Work Together</Typography>
                    <div className="searchBox">
                        <input className="searchInput" type="text" name="" placeholder="Enter your email" />
                        <button className="searchButton" href="">
                            <SendIcon className="mx-auto" />
                        </button>
                    </div>
                </div>
            </div>
            <hr className="bg-gray-200" />
            <div className="flex justify-center items-center poppins text-center my-5">
                <p className="text-center">© Spark Net 2024 | This Website Is Made With ❣️ By SparkNet Corporation</p>
            </div>
        </footer>
    );
};

export default Footer;