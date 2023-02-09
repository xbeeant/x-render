import React from 'react';
import DumiLogo from 'dumi/theme-default/slots/Logo';
import DumiSearch from 'dumi/theme-default/slots/SearchBar';
import { Link } from 'dumi';

import './index.less';

const prefix = 'xr-doc-header';

const navs = [
  {
    title: 'FormRender',
    link: '/form-render',
  },
  {
    title: 'TableRender',
    link: '/table-render',
  },
  {
    title: 'ChartRender',
    link: '/chart-render',
  },
]

const Header: React.FC = () => {
  return (
    <div className={prefix}>
      <div className={`${prefix}-content`}>
        <div className={`${prefix}-left`}>
          <DumiLogo />
          <DumiSearch />
        </div>
        <div className={`${prefix}-right`}>
          <div className={`${prefix}-nav`}>
            {navs.map(i => (
              <Link key={i.title} to={i.link}>{i.title}</Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;