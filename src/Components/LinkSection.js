import React from "react";
import slack from "../images/slack.png";
import icon from "../images/Social icon.png";
import styles from "./LinkSection.module.css";

const btnLinks = [
  { id: "btn-zuri", link: "https://training.zuri.team/", name: "Zuri Team" },
  { id: "book", link: "https://training.zuri.team/", name: "Zuri Books",
  title: "checkout design and coding books", subtext: "Home for design and coding books"},
  {
    id: "book__python",
    link: "https://books.zuri.team/python-for-beginners?ref_id=oluwakeshi",
    name:"Python Books",
    subtext: "market your book on zuri"
  },
  { id: "pitch", link: "https://background.zuri.team",name: "Background check for coders",
subtext: "know your coders more"},
  {id: "design-books", link: "https://books.zuri.team/design-rules", name: "Design Books",
subtext: "Free design book by zuri"}
];

const LinkSection = ()=>{
  return(
    <div>
      <ul>
        {btnLinks.map(btn=>{
        return  <li className={styles.btnLinks}>
            <a className={styles.link} id={`${styles}.${btn.id}`} href={btn.link}>{btn.name}</a>
          </li>
        })}
      </ul>
      <div className={styles.icon}>
        <img src={slack} alt="slack"/>
        <img src={icon} alt="icon" />
      </div>
    </div>
  )
}
export default LinkSection;