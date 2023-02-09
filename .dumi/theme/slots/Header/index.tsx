import React from 'react';
import DumiLogo from 'dumi/theme-default/slots/Logo';
import DumiSearch from 'dumi/theme-default/slots/SearchBar';

import './index.less';

const prefix = 'xr-doc-header';

const navs = [
  {
    title: 'FormRender',
    link: '/formRender',
  },
  {
    title: 'TableRender',
    link: '/tableRender',
  },
  {
    title: 'ChartRender',
    link: '/chartRender',
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
          <ul className={`${prefix}-nav`}>
            {navs.map(i => (
              <li key={i.title} onClick={() => { }}>{i.title}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header;