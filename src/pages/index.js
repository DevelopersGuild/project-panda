import React from "react"
import { StyleSheet, css } from "aphrodite"
import Navigation from "../components/navigation"
import CodeDemo from "../components/code-demo"

export default function Home() {
  return (
    <>
      <Navigation />
      <div className="container">
        <br />
        <div>
          <div className={css(styles.headerSection)}>
            <h2>De Anza</h2>
            <h2>Developers Guild</h2>
            <h1>
              The largest programming club on campus. contribution based. open
              minded. fun.
            </h1>
          </div>
          <div className={css(styles.secondSection)}>
            <h1>
              Meetings usually happen Fridays from <strong>1:30pm</strong> to
              <strong> 4:00pm</strong> in <strong>AT311</strong> but{" "}
              <a
                href="https://twitter.com/search?q=COVID19"
                rel="noreferrer"
                target="_blank"
              >
                #COVID19
              </a>{" "}
            </h1>
            <h1>
              means all of our meetings are done through interactive online
              sessions and events.
            </h1>
          </div>
          <br />
          <div className={css(styles.discordCallToAction)}>
            <button
              onClick={() => window.open("https://discord.com/invite/BpaFS4h")}
              className="zendo-pink-link-button"
            >
              Join Our Discord
            </button>
          </div>
        </div>
        <br />
        <CodeDemo />
        <br />
      </div>
    </>
  )
}

const styles = StyleSheet.create({
  headerSection: {
    margin: "12px auto 0px",
    padding: "0px 28px",
  },
  secondSection: {
    marginTop: "40px",
    padding: "0px 28px",
  },
  discordCallToAction: {
    width: "500px",
    marginRight: "auto",
    marginLeft: "auto",
    "@media (max-width: 420px)": {
      width: "100%",
    },
  },
})
