import { Radio, Select, Slider, Switch } from 'antd';
import React, { Component } from 'react';
import './index.css';
// import GithubCorner from 'react-github-corner';
import Demo from './main';

const Option = Select.Option;
class Root extends Component {
  state = {
    schemaName: 'simplest',
    column: 1,
    displayType: 'column',
    readOnly: false,
    labelWidth: 110,
  };

  onColumnNumberChange = value => {
    this.setState({ column: value });
  };

  onDisplayChange = value => {
    this.setState({
      displayType: value,
      showDescIcon: value === 'row',
    });
  };

  onReadOnlyChange = value => this.setState({ readOnly: value });

  onSchemaChange = e => {
    this.setState({ schemaName: e.target.value });
  };

  onLabelWidthChange = value => {
    this.setState({ labelWidth: value });
  };

  render() {
    const { showDescIcon, readOnly, labelWidth } = this.state;
    return (
      <div className="fr-playground">
        {/* <GithubCorner
          href="https://github.com/alibaba/form-render"
          bannerColor="#F6C14F"
          className="absolute top-0 right-0 z-999"
        /> */}
        {/* <a href="/" className="f6 absolute top-1 right-1 z-999">
          Come back home page
        </a> */}
        <div className="w-100 flex setting-container">
          <Radio.Group
            name="schemaName"
            defaultValue="simplest"
            className="w-50 flex items-center flex-wrap z-999"
            onChange={this.onSchemaChange}
          >
            <Radio value="simplest">Simple Case</Radio>
            <Radio value="basic">Basic Controls</Radio>
            <Radio value="format">Format</Radio>
            <Radio value="dynamic-function">Dynamic Function</Radio>
            <Radio value="new-feature">New Feature</Radio>
            <Radio value="function">Complex linkage</Radio>
            <Radio value="input">Personalized Input</Radio>
            <Radio value="select">Personalized Select</Radio>
            <Radio value="demo">Complete Example</Radio>
          </Radio.Group>
          <div className="w-50 flex items-center flex-wrap z-999">
            <Select
              style={{ marginRight: 8, marginLeft: 24 }}
              onChange={this.onColumnNumberChange}
              defaultValue="1"
            >
              <Option value="1">One row and one column</Option>
              <Option value="2">One row and two columns</Option>
              <Option value="3">One row and three columns</Option>
            </Select>
            <Select
              style={{ marginRight: 8 }}
              onChange={this.onDisplayChange}
              defaultValue="column"
            >
              <Option value="column">Top and bottom arrangement</Option>
              <Option value="row">Left and right arrangement</Option>
            </Select>
            <Switch
              style={{ marginRight: 8 }}
              checkedChildren="Edit"
              onChange={this.onReadOnlyChange}
              unCheckedChildren="ReadOnly"
              checked={readOnly}
            />
            <div style={{ width: 70 }}>Label Width：</div>
            <Slider
              style={{ width: 80 }}
              max={200}
              min={20}
              value={labelWidth}
              onChange={this.onLabelWidthChange}
            />
          </div>
        </div>
        <Demo {...this.state} />
      </div>
    );
  }
}

export default Root;
