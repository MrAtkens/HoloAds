import React from "react"
import Helmet from "react-helmet"


const Seo = ({description, lang, keywords, title, metaDescription}) => {

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={title}
            titleTemplate="Holograms"
            meta={[
                {
                    name: `description`,
                    content: description,
                },
                {
                    property: `og:title`,
                    content: title,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
                {
                    name: `twitter:creator`,
                    content: "MrAtkens",
                },
                {
                    name: `twitter:title`,
                    content: title,
                },
                {
                    name: `twitter:description`,
                    content: metaDescription,
                },
            ]
                .concat(
                    keywords.length > 0
                        ? {
                            name: `keywords`,
                            content: keywords.join(`, `),
                        }
                        : []
                )}
        >
            <meta name="author" content="MrAtkens. Github:https://github.com/MrAtkens"/>
            <meta name="Document-state" content="dynamic"/>
        </Helmet>)
}

Seo.defaultProps = {
    lang: `ru`,
    keywords: ["Голограммы", "Голограмма", "Реклама", "Бизнес", "Витрина", "Вывеска", "Купить", "Заказать", "Консультация"],
    description: ``,
}

export default Seo
