import React, { useState } from "react";
import styles from "./FifthSection.module.css";
import RenderMemberProfile from "../../Profile/RenderMemberProfile";

function FifthSection() {
  const [isSelected, setIsSelected] = useState(null); // will store the index value of selected card

  const handleProfileClick = (cardIndex) => {
    setIsSelected(cardIndex);
  };

  const teamDetails = [
    {
      avatar:
        "https://s3-alpha-sig.figma.com/img/784c/a048/0a24632f9dad48719238ddf2884a0863?Expires=1699228800&Signature=GVTaUSGGUwVGJFa1k2RoOxwTIolqRJ7-p8jd2m1SUni2H9jKynFKeV5O-r~6Bki2rC0Pe0oFG4RIVWOuMmhzjBxiqZmunIBAIiY3J61qqSmXVJeK9u3ERhwCr8e0kXBF8BGGSZbnocZq8D9TUBoZyzbj7ogqttmw~ph6YFUhTF7XUv3lhFm~eG-Q4dZfQZ~RKQPH9Ii2yrl0mBl~qjSiO0rKo7LcqGIsoCV7MYKa5ZxEF7WspfLbQivAhwWJIggYeeeo2Xm4KGiybsXHedwtPgEwY-F6IPdGfSP7vDV58Klj6LmfLBbyOJPo3uqbtulQhEivm7FgORef8W7xmMVWWw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      name: "Danial Def",
      cases: 301,
    },
    {
      avatar:
        "https://s3-alpha-sig.figma.com/img/fcbf/a365/10f4e73f38a7ff1fab32f2fc0db010f9?Expires=1699228800&Signature=jvBdYYAf6GbF20xr0T4bmfFftbFULUVEsGCmRFq3BkoIwusOyW4jeqJxIg1HC-UfPz3choOy4sBGlNuw8MYNrZiNmw6dzooGyOkyhWhHXHxT2XhveYvJyXBrw51-oMQnfJVXDhuWERe05moeZJzMVGkhn6RzYQGBeKoDk5qC2HEHWW9qt35FO-8XyH7mM1YkkAlGEy5TqsAAL4MidkszjAO-MJXf0Pk4PJ7ZqDF6ddwJy8xUsyvsEk1vhVT2xtnLF2LRZkzI5Dtod0TG2D1SC12QmS28h7Idu6Eoz~-5PSnuCDAaruDL51Hz2v7V3ceZKBLnoJJpsWnwpBanYW2FAQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      name: "Sanfole",
      cases: 850,
    },
    {
      avatar:
        "https://s3-alpha-sig.figma.com/img/be47/616a/4ce30b5d2f2773c5785f9dc061ceff73?Expires=1699228800&Signature=XSehIevlIr5OB25JAqdvMuompAvrEmZ0QwvxDdj~TvT1hFP2N3mOoZ2FFmXpRghZkgimaCJ0rIcgabgZwCu9vE6syYu8mvgzmV3eptn6G5yCE56LB7fyd4l3TYtG2vZVxoeC1XVrUIn023TOc7gMW4tv3ZgZikdH2WAwcKTd9ac5dbjiIgs-oaBibOE0aPaR6uaDYALyLeNYZuoQ9ZXOMF6dyq2VW6t1-gBswEUYQA6WQZ6XTvrzMvchVROVixA081DQqvQPDthLilYKjQxDEy9RLRvhM7oC-XaKlHtW69ao0hp1X0Jas8FpTd-9zCNeZrN9eTdtVaDCnheb~Xdq~Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      name: "Cesforila",
      cases: 470,
    },
    {
      avatar:
        "https://s3-alpha-sig.figma.com/img/3e7e/1346/9f9936fa68f41c17b224a071bea60ef2?Expires=1699228800&Signature=fL868IOz0uo~NZ3yaGCjby~oZFb~oqODu0HiKezLSvKRkD2LNrsvvBVQdCrSanyhpONj~lqhcJBnKAnlAoBApHpFsknaTtTRZAXOV8LEenDvf4NwbzsqgB8Oz~BCOwZjkfetoX3J10CvOWrkvWaPss6q1PJ338cNV67I~HO0HZ8zOxDI3TcdBi5oBS7XokqutnbSaJdfVFD7FBpXokvMDUbPcMAYUpg9maLKDSbU5Q155yPLyTpo6M6-325FWiIVtIKfRobA2oU9x0b9TKX3e0ji37Wbj8kFJK-uvtviLEcXmgd4Uz5h6VZnEKQlhGAWc-XTcWDnfmai-jgoSfXcRA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      name: "Colleen",
      cases: 180,
    },
    {
      avatar:
        "https://s3-alpha-sig.figma.com/img/7c39/0357/7eb6afb7619fa84a07e3dd6f32a0f3d2?Expires=1699228800&Signature=KuWGkxhgtuJxxER6WbTjxTxcfBpl~ItVDX3pBHtweKof~i~Eoaxr81pB3QgapVJJnXPqGydjDinx9SVNwMPXC68NT1-Q1C9SYL1Zuri9LDE15AYsaueqKlpiJWidz57vL9qhGfCo8o~PQQ-WdX0WiSRUHU3tkB1cLv5oIsKW8hBznyi9UeOWEcrLyykH2TtL7hwgiUagXrE85DS3CeA-Eezz2W5s5MgGm-Zrxh0FyGWOSSwYinNDpXbzOd-MLdiYrvJtAYi6jWL~uDmwIt5BGkhgtoe-tHU5cRNEAxl~VIBb8KLx0m6LAkrPjiIRhljaioJXuZ~2uQsAklzJgUc23g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      name: "Haldone",
      cases: 212,
    },
    {
      avatar:
        "https://s3-alpha-sig.figma.com/img/d049/c93c/f2e5d156c527337371de70eef0230a60?Expires=1699228800&Signature=lTV1ihxF4-ki062JZX~BITZK~GGensgfy~AIccWOvRXC7bn1bVlkeFwmF2Egz1xxLQ2LOgR7WgSk3KDNnL1~ha1tm1DueNzh4uEjlPL5lOgXUbtUIjAbTor85m6DDpdE22M0lImYHmJOTe6evndBg~epcmreQTuucuNWXibrwaTFJPtA2a6BtLLqd2yUeSYbsJJUd2IY0kLdazIyEzQVNwcqs3o~fMUuTCpxNNm3-~lEBjncBbb-ZNV-1maXU8BiNhDaLShrz9bnbCFosVMzvjYfZw-oGF~UcdOzulzjJIV~qnmdE3JPeBpJ9FeFs-z3nCbme8Ac30~y80L9H4-vdA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      name: "Nik Jeo",
      cases: 350,
    },
  ];
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.title}>
        <h1>Our Team</h1>
      </div>
      <div className={styles.wrapper}>
        {teamDetails.map((team, index) => (
          <RenderMemberProfile
            avatarUrl={team.avatar}
            name={team.name}
            cases={team.cases}
            isSelected={isSelected === index}
            onSelect={() => handleProfileClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default FifthSection;
