import React from "react";
import styles from "./ThirdSection.module.css";
import GridBox from "../../GridBox/GridBox";

const imgSource = [
  "https://s3-alpha-sig.figma.com/img/c5e0/6b00/7c0b32a7459f3f93e948c826fb8285fa?Expires=1699228800&Signature=c9i9S~zzDVMNYe~W~UiaNCQd0FyZrb-sxslh-lP~9FiUwSV6SPCi6LKxQ6YqZ7D2ugosYzi5YnT3xxREjHKpyUJVZVTR23CS6mZ2wuGHTlE30uzhmZfZtJf-NZ7b396UL1qGDhnLD~oxGkVzhiEexuypJxMX2tj0~jlCR-qLiez~Laqun1DATtHcpH-jH56--OomIaiU9aNStNj0fHkkdzc6ZO7LF1Rb4SHs4UzkZHnUDJMy0JxShCNwBy8h-wp7ep9pOlF9Bv6r7wmesxcchLj5k-xLn26AXMl-ZtrLh7RigtrIniom4-jPltd63Iq493BSgtG9sRrynsWOJrO1Ig__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  "https://s3-alpha-sig.figma.com/img/a84e/eb93/e84ba9f312f91841a004e8392d9027e5?Expires=1699228800&Signature=EcfAuMqj0u9mMrKbX9ECCFuWa9FV6tS8gdwLOxszzSSkHQP0UftHFgEbBT~Jve-sPAvQGYyevQDTVLFuVZXUJkN66-4kb39hkQ27gzclXM-CBHZiEfOkJjq6CPEq-ucAeNEB-XYE8BbllBdZspi4ep4TchQ74EIZN88~x4o9kfLBM7xib0aoTJI7RyRIWTncWNwTjTSY69dCwIiq5GIhjbrT2T1xLIikFaPm8p7ynbV35LvBrwgIGHLvHeUaNVnUWXCzaLXHA-KjOOpHbc4Qz3IQFMVodrN9ePpRu2pbh2FAHAzCZZsY~y30pXA2J5xGuaTYgM431CPwb2nwC-4LnQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  "https://s3-alpha-sig.figma.com/img/0134/94ae/20fe77e2ba4511c0eac9a6a8e2e442e9?Expires=1699228800&Signature=IYm8tbZvZOB7sSq2Z7bjWYMJmNi5BN-KEJLkh6vwypYRRguuMrssRtEahWYwwNagWTpRX0QyPTLPWhmhNuRzgA~ZSbw0RiY5802H~EAaY5H2jEhFrNyNdpUuLo4dPYRlpVx90cRNjr1O4bfrb-NG2llRTUUagrHr7z7vTDq0Fw0otSApEn1ckttSBR6oJqOdnmIhdtqrNUDLXt2BwXrJNh~vCBCPgJPZHzwQ7cDRfdstC9Sn7u3kbzlzGkYzzzR-BI7mdAXA06pOaq1wDlr5Su5aLB1twXRsVhIfQiQdnXmSNV4S47L3MVIUgvrN6y8ZVBlln5N19a3JwjvoMEc6Yw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  "https://s3-alpha-sig.figma.com/img/967e/a809/6e48ac723c88ed39751352f5c9436c2a?Expires=1699228800&Signature=ZYmcEgm~lsIFRmPFqZMkvrNicBGR76GgOXEhm4Vhl~xeDQg1OolutJQOGNRWgtqr-BagBzU6ibyBxf0AbjlAjDEaS3~I9VPe4zLCV9EbROGpgqOG104O11a2LUOeMaYk9mn0mu0uD7O8cVzbcw7KJVQ8g7M2PnFsZ1Jo7c9M5kGZIZVEgELFg-4ot3wZr9cLsC~oZyluYLSyMUXUtlJe8lFKQBDKCAYofGF70syx2QBAW2XGK6bdhMSsJiMlFRyaGC9Q4u2nN7xKDE~Arzox6Mtj6iBY4A5uwUq2djvXWoNzg4KKlmqkDKGDa0cDVnd91VTMsWRav1Arn8eWDzEA9w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  "https://s3-alpha-sig.figma.com/img/67f6/5c6c/48e8eefdf399cab04f83a10d965770f1?Expires=1699228800&Signature=aYqbmYMap1EgUOew-OWYBbzEWE-N44M2vbFqr~AyOIVLeTwgOGtWZ5gXwsIbZAgjk76Rc-E5Vau2XdaHLIs4v8-8cDuE9v3O5mt9~RVtnRL6S0JJal-8HS7Tx9N1c66q53rpJsox1-JeQg5jydQoBKnct8kJOkV60omhiy4rJGwfYuLTeRZAfFzcRVsfQz406oZpo2SXpB~H5O6A2ZhvU69VzaXBHEsZOqsirH1ttUtF3HlKkVcW0uJuB6at11SuSykQZBp~OxdK01ko~mfTZt4nHYh-6e42gGyJnq5gkPkA5D3qZ2xIJVT2OwLublsIn53qwzYcBpacHNFRg0qg~Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  "https://s3-alpha-sig.figma.com/img/68d0/8df3/8947e8d751a269f4d5965ea6d3152054?Expires=1699228800&Signature=AgwbzssBHK7gWYx18VXHsQvzIo0LpXb0Z1qL1CpNR2IXZ2t6ewWz4TQVn3TtWivIYR5YC9xfACRxE0-Mg6V9LsjQwZuyb7njAslDIdRHkBcvHKi3Ba5dU0Mx3LbGl8-wdXok2nmUlAfUIfhX~jazAKpi9ZCA8lZW46Wbep1yjBYnNT8Rml8sUSVuookbDUPkXLCuG7mfqo57eGGbX97bp-FHDCaOZ2nvRL51HHB7D2E4TSTaH9iUyUyl02IXneFdku8nSWw2ytIkuOl7RUEK0dCXyLVEl7cenpaW1Nt5n4eFnCfLQrtj8umLfg~j7LNmhCDRFiQyNVHELMYlg9iIVA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
];

const imgTitle = [
  "Business Law",
  "Partnership Law",
  "Real Estate Law",
  "Business Law",
  "Landlord Disputes",
  "Elderly Abuse",
];

function ThirdSection() {
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.title}>
        <h1>Areas of Practices</h1>
      </div>
      <div className={styles.wrapper}>
        <GridBox
          alter={false}
          imgSource1={imgSource[0]}
          imgSource2={imgSource[1]}
          title1={imgTitle[0]}
          title2={imgTitle[1]}
        />
        <GridBox
          alter={true}
          imgSource1={imgSource[3]}
          imgSource2={imgSource[2]}
          title1={imgTitle[3]}
          title2={imgTitle[2]}
        />
        <GridBox
          alter={false}
          imgSource1={imgSource[4]}
          imgSource2={imgSource[5]}
          title1={imgTitle[4]}
          title2={imgTitle[5]}
        />
      </div>
    </div>
  );
}

export default ThirdSection;
