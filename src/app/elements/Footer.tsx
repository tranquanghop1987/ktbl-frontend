"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "../atoms/Logo";
import { CgWebsite } from "react-icons/cg";
import { FaDiscord } from "react-icons/fa";
import { AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai";

interface FooterLink {
    id: number;
    url: string;
    newTab: boolean;
    text: string;
    social?: string;
}

function FooterLink({ url, text }: FooterLink) {
    const path = usePathname();
    return (
        <li className="flex">
            <Link
                href={url}
                className={`hover:dark:text-violet-400 ${
                    path === url && "dark:text-violet-400 dark:border-violet-400"
                }}`}
            >
                {text}
            </Link>
        </li>
    );
}

function RenderSocialIcon({ social }: { social: string | undefined }) {
    switch (social) {
        case "WEBSITE":
            return <CgWebsite />;
        case "TWITTER":
            return <AiFillTwitterCircle />;
        case "YOUTUBE":
            return <AiFillYoutube />;
        case "DISCORD":
            return <FaDiscord />;
        default:
            return null;
    }
}

const Footer = ({
   logoUrl,
   logoText,
    description
                               }: {
    logoUrl: string | null;
    logoText: string | null;
    description: string | null;
}) => {
    // TODO logic here

    return (
        <footer className="main-footer alternet-2">
            <div className="footer-top">
                <div className="auto-container">
                    <div className="widget-section">
                        <div className="row clearfix">
                            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                                <div className="footer-widget logo-widget">
                                    <figure className="footer-logo">
                                        <Logo src={logoUrl}>
                                            {logoText && <h2>{logoText}</h2>}
                                        </Logo>
                                    </figure>
                                    <div className="text">
                                        <p>Tempor incididunt ut labore eut dolore veniam quis nostrud exercitation
                                            ullamc consequat. Duis aute irure.</p>
                                    </div>
                                    <ul className="info-list clearfix">
                                        <li><i className="fas fa-map-marker-alt"></i>838 Andy Street, Madison, NJ 08003
                                        </li>
                                        <li><i className="fas fa-envelope"></i>Email <a
                                            href="mailto:support@my-domain.com">support@my-domain.com</a></li>
                                        <li><i className="fas fa-headphones"></i>Support <a href="tel:01005200369">0100
                                            5200 369</a></li>
                                    </ul>
                                    <ul className="social-links clearfix">
                                        <li><a href="index.html"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="index.html"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="index.html"><i className="fab fa-instagram"></i></a></li>
                                        <li><a href="index.html"><i className="fab fa-linkedin-in"></i></a></li>
                                        <li><a href="index.html"><i className="fab fa-pinterest-p"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                                <div className="footer-widget links-widget ml-70">
                                    <div className="widget-title">
                                        <h4>Useful Links</h4>
                                    </div>
                                    <div className="widget-content">
                                        <ul className="list clearfix">
                                            <li><a href="index.html">About Us</a></li>
                                            <li><a href="index.html">What We Offers</a></li>
                                            <li><a href="index.html">Testimonials</a></li>
                                            <li><a href="index.html">Our Projectss</a></li>
                                            <li><a href="index.html">Latest News</a></li>
                                            <li><a href="index.html">Privacy Policy</a></li>
                                            <li><a href="index.html">Contact Us</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                                <div className="footer-widget links-widget">
                                    <div className="widget-title">
                                        <h4>What We Do</h4>
                                    </div>
                                    <div className="widget-content">
                                        <ul className="list clearfix">
                                            <li><a href="index.html">Financial Advice</a></li>
                                            <li><a href="index.html">Business Planning</a></li>
                                            <li><a href="index.html">Startup Help</a></li>
                                            <li><a href="index.html">Investment Strategy</a></li>
                                            <li><a href="index.html">Management Services</a></li>
                                            <li><a href="index.html">Market Research</a></li>
                                            <li><a href="index.html">SEO Optimization</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                                <div className="footer-widget newsletter-widget">
                                    <div className="widget-title">
                                        <h4>Newslette</h4>
                                    </div>
                                    <div className="widget-content">
                                        <div className="text">
                                            <p>Get in your inbox the latest News</p>
                                        </div>
                                        <form action="contact.html" method="post" className="newsletter-form">
                                            <div className="form-group">
                                                <i className="far fa-user"></i>
                                                <input type="text" name="name" placeholder="Your Name" required="" />
                                            </div>
                                            <div className="form-group">
                                                <i className="far fa-envelope"></i>
                                                <input type="email" name="email" placeholder="Email address"
                                                       required="" />
                                            </div>
                                            <div className="form-group message-btn">
                                                <button className="theme-btn style-two" type="submit">subscribe</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {description && (
            <div className="footer-bottom">
                <div className="auto-container">
                    <div className="copyright">
                        <p>{description}</p>
                    </div>
                    <RenderSocialIcon social="YOUTUBE" />
                </div>
            </div>
            )}

        </footer>
    );
}

export default Footer;
