import React from 'react';
import clsx from 'clsx';
import {ThemeClassNames, useWindowSize} from '@docusaurus/theme-common';
import {isActiveSidebarItem, useDoc} from '@docusaurus/theme-common/internal';
import Link from '@docusaurus/Link';
import isInternalUrl from '@docusaurus/isInternalUrl';
import IconExternalLink from '@theme/Icon/ExternalLink';
import styles from './styles.module.css';

function useDocTOC() {
    const {frontMatter, toc} = useDoc();
    const windowSize = useWindowSize();
    const hidden = frontMatter.hide_table_of_contents;
    const canRender = !hidden && toc.length > 0;
    const desktop =
        canRender && (windowSize === 'desktop' || windowSize === 'ssr') ? (
            // <DocItemTOCDesktop />
            <div>toc</div>
        ) : undefined;
    return {
        hidden,
        desktop,
    };
}

export default function DocSidebarItemLink({
                                               item,
                                               onItemClick,
                                               activePath,
                                               level,
                                               index,
                                               ...props
                                           }) {
    const {href, label, className, autoAddBaseUrl} = item;
    const isActive = isActiveSidebarItem(item, activePath);
    const isInternalLink = isInternalUrl(href);
    const docTOC = useDocTOC();

    return (
        <>
            <li
                className={clsx(
                    ThemeClassNames.docs.docSidebarItemLink,
                    ThemeClassNames.docs.docSidebarItemLinkLevel(level),
                    'menu__list-item',
                    className,
                )}
                key={label}>
                <Link
                    className={clsx(
                        'menu__link',
                        !isInternalLink && styles.menuExternalLink,
                        {
                            'menu__link--active': isActive,
                        },
                    )}
                    autoAddBaseUrl={autoAddBaseUrl}
                    aria-current={isActive ? 'page' : undefined}
                    to={href}
                    {...(isInternalLink && {
                        onClick: onItemClick ? () => onItemClick(item) : undefined,
                    })}
                    {...props}>
                    {label} AASsSSa
                    {!isInternalLink && <IconExternalLink />}
                </Link>
            </li>
            {/*{isActive && docTOC.desktop}*/}
        </>
    );
}
