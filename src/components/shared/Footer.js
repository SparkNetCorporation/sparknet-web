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
        <div  style={{
            background: `url(${footer.src})`,
            backgroundSize: 'cover'
        }} className="py-10 poppins text-white">
            <footer sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                    <Grid item xs={3}>
                        <Container>
                            <Container className="flex items-centermb-3">
                                <Image src={sparkNetIcon} width={250} height={20} alt="Spark Net Icon" className="" />
                            </Container>
                            <Container>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, non eaque?</p>
                            </Container>
                        </Container>
                    </Grid>
                    <Grid item xs={3}>
                        <Container className="my-5">
                            <Stack direction="column" justifyContent="center" >
                                <Typography variant="body1" className="poppins mb-4 text-start text-[#8B3EE2]" >Services</Typography>
                                <Link href="/services/web-development" className="my-1"><Typography className="poppins" variant="body2">App Development</Typography></Link>
                                <Link href="/services/web-development" className="my-1"><Typography className="poppins" variant="body2">Web Development</Typography></Link>
                                <Link href="/services/web-development" className="my-1"><Typography className="poppins" variant="body2">Logo Design</Typography></Link>
                                <Link href="/services/web-development" className="my-1"><Typography className="poppins" variant="body2">Web Development</Typography></Link>
                                <Link href="/services/web-development" className="my-1"><Typography className="poppins" variant="body2">Logo Design</Typography></Link>
                            </Stack>
                        </Container>
                    </Grid>
                    <Grid item xs={3}>
                        <Container>
                            <Stack direction="column">
                                <Typography variant="body1" className="poppins my-3 mx-2 text-[#8B3EE2]" >Company</Typography>
                                <Link href="/services/web-development" className="mx-2 my-1"><Typography className="poppins" variant="body2">About Us</Typography></Link>
                                <Link href="/services/web-development" className="mx-2 my-1"><Typography className="poppins" variant="body2">Happy Clients</Typography></Link>
                                <Link href="/services/web-development" className="mx-2 my-1"><Typography className="poppins" variant="body2">Logo Design</Typography></Link>
                                <Link href="/services/web-development" className="mx-2 my-1"><Typography className="poppins" variant="body2">Happy Clients</Typography></Link>
                                <Link href="/services/web-development" className="mx-2 my-1"><Typography className="poppins" variant="body2">Logo Design</Typography></Link>
                            </Stack>
                        </Container>
                    </Grid>
                    <Grid item xs={3}>
                        <Container className="my-2">
                            <Typography variant="body1" className="poppins mb-2 mx-2 text-[#8B3EE2]" >Social Links</Typography>
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
                        </Container>
                        <Container className="mb-10">
                            <Typography variant="body2" className="poppins m-3">Get In Touch And Let&apos;s Work Together</Typography>
                            <div className="searchBox">
                                <input className="searchInput" type="text" name="" placeholder="Enter your email" />
                                <button className="searchButton" href="">
                                    <SendIcon className="mx-auto" />
                                </button>
                            </div>
                        </Container>
                    </Grid>
                </Grid>
                <hr style={{ backgroundColor: '#ADACB8', height: 1, margin: "0 30px" }} />
                <Typography variant="body2" className="poppins text-center my-5">© Spark Net 2024 | This Website Is Made With ❣️ By SparkNet Corporation
                </Typography>
            </footer>

        </div>
    );
};

export default Footer;