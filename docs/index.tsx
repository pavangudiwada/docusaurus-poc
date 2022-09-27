import React, {useState, useMemo, useEffect} from 'react';
import clsx from 'clsx';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import Translate, {translate} from '@docusaurus/Translate';
import {useHistory, useLocation} from '@docusaurus/router';
import {usePluralForm} from '@docusaurus/theme-common';

import Layout from '@theme/Layout';
import FavoriteIcon from '@site/src/components/svgIcons/FavoriteIcon';
import {
  sortedUsers,
  Tags,
  TagList,
  type User,
  type TagType,
} from '@site/src/data/users';
import ShowcaseTagSelect, {
  readSearchTags,
} from './_components/ShowcaseTagSelect';
import ShowcaseFilterToggle, {
  type Operator,
  readOperator,
} from './_components/ShowcaseFilterToggle';
import ShowcaseCard from './_components/ShowcaseCard';
import ShowcaseTooltip from './_components/ShowcaseTooltip';

import styles from './styles.module.css';
import Card from './_components/displaycards';
// import styles from './styles.module.css';
import data from "./datafile.js"



function SearchBar() {
    const history = useHistory();
    const location = useLocation();
    const [value, setValue] = useState<string | null>(null);
    useEffect(() => {
      setValue(readSearchName(location.search));
    }, [location]);
    return (
      <div className={styles.searchContainer}>
        <input
          id="searchbar"
          placeholder={translate({
            message: 'Search for site name...',
            id: 'showcase.searchBar.placeholder',
          })}
          value={value ?? undefined}
          onInput={(e) => {
            setValue(e.currentTarget.value);
            const newSearch = new URLSearchParams(location.search);
            newSearch.delete(SearchNameQueryKey);
            if (e.currentTarget.value) {
              newSearch.set(SearchNameQueryKey, e.currentTarget.value);
            }
            history.push({
              ...location,
              search: newSearch.toString(),
              state: prepareUserState(),
            });
            setTimeout(() => {
              document.getElementById('searchbar')?.focus();
            }, 0);
          }}
        />
        {data.map((card, index) => (
          <Card
            img={card.img}
            title={card.title}
            description={card.description}
          />))}
      </div>
    );
  }
  