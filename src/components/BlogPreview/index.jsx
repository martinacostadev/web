import Styles from "./styles.module.scss";

function BlogPreview({ blog }) {
  const { frontmatter } = blog;
  return (
    <article className={Styles.card}>
      <div
        className={Styles.titleCard}
      // style={`background-image:url(${frontmatter.img})`}
      >
        <h1 className={Styles.title}>{frontmatter.title}</h1>
      </div>
      <p className={`${Styles.desc} mt0 mb2`}>{frontmatter.description}</p>
      <div className={Styles.tags}>
        Categorías:
        {frontmatter.tags.map((t) => (
          <div className={Styles.tag} data-tag={t}>
            {t}
          </div>
        ))}
      </div>
      <a className={Styles.link} href={blog.url}>
        <span className={Styles.linkInner}>Leer</span>
      </a>
    </article>
  );
}

export default BlogPreview;
