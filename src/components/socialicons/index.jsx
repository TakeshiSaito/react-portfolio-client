import {
    FaGithub,
    FaLinkedin,
    FaArtstation
} from "react-icons/fa";
import './style.css';
import {socialprofils} from "../../content_option";

export const Socialicons = (params) => {
    return (
        <div className="stick_follow_icon">
            <ul>
                {socialprofils.github && (
                    <li>
                        <a href={socialprofils.github}>
                            <FaGithub/>
                        </a>
                    </li>
                )}
                {socialprofils.linkedin && (
                    <li>
                        <a href={socialprofils.linkedin}>
                            <FaLinkedin/>
                        </a>
                    </li>
                )}
                {socialprofils.artstation && (
                    <li>
                        <a href={socialprofils.artstation}>
                            <FaArtstation/>
                        </a>
                    </li>
                )}
            </ul>
            <p>Follow Me</p>
        </div>
    );
}