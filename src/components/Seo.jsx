import React from "react"
import Helmet from "react-helmet"
import logo from "images/logo.svg"

const Seo = ({description, lang, keywords, title}) => {

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords}/>
            <meta name="author" content="MrAtkens. Github:https://github.com/MrAtkens"/>
            <meta name="Document-state" content="dynamic"/>
            <meta name='twitter:card' content='summary' />
            <meta name='twitter:url' content='https://holo-ads.kz' />
            <meta name='twitter:title' content='Holo-Ads' />
            <meta name='twitter:description' content='Купить качественные голографические вентиляторы в Нур-Султан | Holo-Ads' />
            <meta name='twitter:image' content={logo} />
            <meta name='twitter:creator' content='@Raiymbek' />
            <meta property='og:type' content='website' />
            <meta property='og:title' content='Holo-Ads' />
            <meta property='og:description' content='Купить качественные голографические вентиляторы в Нур-Султан | Holo-Ads' />
            <meta property='og:site_name' content='holo-ads' />
            <meta property='og:url' content='https://holo-ads.kz' />
            <meta property='og:image' content={logo} />
        </Helmet>)
}

Seo.defaultProps = {
    lang: `ru`,
    keywords: ["Голограммы", "Голограмма", "Реклама", "Бизнес", "Витрина", "Вывеска", "Купить", "Заказать", "Консультация"],
    description: ``,
}

export default Seo
