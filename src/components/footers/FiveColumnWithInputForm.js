import React from "react";
import tw from "twin.macro";
import styled from "styled-components";

import LogoImage from "images/logo.svg";
import { ReactComponent as FacebookIcon } from "images/facebook-icon.svg";
import { ReactComponent as InstagramIcon } from "images/instagram.svg";
import { ReactComponent as WhatsAppIcon } from "images/whatsapp-glyph-black.svg";

const Container = tw.div`relative bg-gray-200 text-gray-700 -mb-8 -mx-8 px-8 py-20 lg:py-24`;
const Content = tw.div`max-w-screen-xl mx-auto relative z-10`;
const SixColumns = tw.div`flex flex-wrap text-center sm:text-left justify-center sm:justify-start md:justify-between -mt-12`;

const Column = tw.div`px-4 sm:px-0 sm:w-1/4 md:w-auto mt-12`;

const ColumnHeading = tw.h5`uppercase font-bold`;

const LinkList = tw.ul`mt-6 text-sm font-medium`;
const LinkListItem = tw.li`mt-3`;
const Link = tw.a`border-b-2 border-transparent hocus:border-gray-700 pb-1 transition duration-300`;

const Divider = tw.div`my-16 border-b-2 border-gray-300 w-full`;

const ThreeColRow = tw.div`flex flex-col md:flex-row items-center justify-between`;

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-8`;
const LogoText = tw.h5`ml-2 text-xl font-black tracking-wider text-gray-800`;

const CopyrightNotice = tw.p`text-center text-sm sm:text-base mt-8 md:mt-0 font-medium text-gray-500`;

const SocialLinksContainer = tw.div`mt-8 md:mt-0 flex`;
const SocialLink = styled.a`
  ${tw`cursor-pointer p-3 rounded-full bg-gray-900 text-gray-100 hover:bg-gray-700 transition duration-300 mr-4 last:mr-0`}
  svg {
    ${tw`w-8 h-8`}
  }
`;

export default () => {
  return (
    <Container>
      <Content>
        <SixColumns>
          <Column>
            <ColumnHeading>Главная</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <Link href="#">Видео</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">FAQs</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Рекомендаций</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Магазин</Link>
              </LinkListItem>
            </LinkList>
          </Column>
          <Column>
            <ColumnHeading>Магазин</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <Link href="#">Голограммы 40см</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Голограммы 50см</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Голограммы 60см</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Прочее</Link>
              </LinkListItem>
            </LinkList>
          </Column>
          <Column>
            <ColumnHeading>Контакты</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <Link href="#">Телефон: +7-707-722-75-89</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Почта: r.kaliaskar@mail.ru</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Адресс: Сакен Сейфулинна 40</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Связаться с нами</Link>
              </LinkListItem>
            </LinkList>
          </Column>
        </SixColumns>
        <Divider />
        <ThreeColRow>
          <LogoContainer>
            <LogoImg src={LogoImage} />
            <LogoText>Holo Ads.</LogoText>
          </LogoContainer>
          <CopyrightNotice >&copy; 2018 Holo Ads. Все права сохранены.</CopyrightNotice>
          <SocialLinksContainer>
            <SocialLink href="https://facebook.com">
              <InstagramIcon />
            </SocialLink>
            <SocialLink href="https://twitter.com">
              <WhatsAppIcon />
            </SocialLink>
            <SocialLink href="https://youtube.com">
              <FacebookIcon />
            </SocialLink>
          </SocialLinksContainer>
        </ThreeColRow>
      </Content>
    </Container>
  );
};
