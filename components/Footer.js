import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
          <h1>Find me at:</h1>
          <div id={"img"}>
                <a href={"https://www.linkedin.com/in/israel-brach-846689189/"}><img src={"linkedin.png"} id="logo"/></a>    <a href={"https://github.com/srulybrach"}><img src="github.png" id="logo" class="logo"/></a>
          </div>
      </footer>
    </>
  )
}