import { useEffect, useRef, useState, useCallback } from 'react';
import Link from 'next/link';

import useSite from 'hooks/use-site';
import useSearch, { SEARCH_STATE_LOADED } from 'hooks/use-search';
import { findMenuByLocation, MENU_LOCATION_NAVIGATION_DEFAULT } from 'lib/menus';

import Section from 'components/Section';

import styles from './Nav.module.scss';
import NavListItem from 'components/NavListItem';

const Nav = () => {
  const { metadata = {}, menus } = useSite();
  const { title } = metadata;

  const [isMenuVisible, setMenuVisibility] = useState(false);

  const navigationLocation = process.env.WORDPRESS_MENU_LOCATION_NAVIGATION || MENU_LOCATION_NAVIGATION_DEFAULT;
  const navigation = findMenuByLocation(menus, navigationLocation);

  return (
    <nav className={styles.nav}>
      <Section className={styles.navSection}>
        <p className={styles.navName}>
          <Link href="/">
            <a>{title}</a>
          </Link>
        </p>
        <div className="absolute inset-y-0 right-0 flex items-center">
          <button
            onClick={() => setMenuVisibility(!isMenuVisible)}
            type="button"
            className="flex flex-col gap-1.5 items-end relative menu-open"
            aria-controls="header-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <span className="h-0.5 w-[30px] bg-gold top menu-bar"></span>
            <span className="h-0.5 w-[60px] bg-gold middle menu-bar"></span>
            <span className="h-0.5 w-10 bg-gold bottom menu-bar"></span>
          </button>
        </div>

        <ul className={`${isMenuVisible ? 'max-h-full' : 'h-0'} styles.navMenu`}>
          {navigation?.map((listItem) => {
            return <NavListItem key={listItem.id} className={styles.navSubMenu} item={listItem} />;
          })}
        </ul>
      </Section>
    </nav>
  );
};

export default Nav;
