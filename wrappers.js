(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{OYlG:function(I,w,n){"use strict";n.r(w);var $=n("k1fw"),On=n("q1tI"),z=n("RGYn"),h=n("qLMh"),b=n("9og8"),j=n("rlch"),Q=`import React from 'react';
import { Column, Search, withChart } from 'chart-render';
import { Card } from 'antd';

const schema = {
  type: 'object',
  properties: {
    os: {
      type: 'string',
      enum: ['Windows', 'MacOS', 'Android', 'iOS'],
      enumNames: ['Windows', 'MacOS', 'Android', 'iOS'],
      props: { placeholder: '\u64CD\u4F5C\u7CFB\u7EDF' },
    },
    location: {
      type: 'string',
      enum: ['\u676D\u5DDE', '\u5B81\u6CE2', '\u5609\u5174', '\u91D1\u534E'],
      enumNames: ['\u676D\u5DDE', '\u5B81\u6CE2', '\u5609\u5174', '\u91D1\u534E'],
      props: { placeholder: 'IP \u5C5E\u5730' },
    },
  },
};

const api = ({ filters }) => {
  console.log('filters >>> ', filters);
  return new Promise(resolve =>
    setTimeout(() => {
      const meta = [
        { id: 'ds', name: '\u65E5\u671F', isDim: true },
        { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
        { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
      ];
      const data = [...new Array(24)].map((_, index) => ({
        ds: \`2022-01-\${String(index + 1).padStart(2, 0)}\`,
        pv: Math.floor(Math.random() * 100) + 100,
        uv: Math.floor(Math.random() * 100),
      }));
      resolve({ meta, data });
    }, 1000)
  );
};

const App = () => {
  return (
    <Card
      title="\u8BBF\u95EE\u8D8B\u52BF"
      extra={<Search searchOnChange api={api} schema={schema} />}
    >
      <Column />
    </Card>
  );
};

export default withChart(App);`,G=`import React from 'react';
import { Column, Search, withChart, useChart } from 'chart-render';
import { Card, Button } from 'antd';

const api = ({ filters }) => {
  console.log('filters >>> ', filters);
  return new Promise(resolve =>
    setTimeout(() => {
      const meta = [
        { id: 'ds', name: '\u65E5\u671F', isDim: true },
        { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
        { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
      ];
      const data = [...new Array(24)].map((_, index) => ({
        ds: \`2022-01-\${String(index + 1).padStart(2, 0)}\`,
        pv: Math.floor(Math.random() * 100) + 100,
        uv: Math.floor(Math.random() * 100),
      }));
      resolve({ meta, data });
    }, 1000)
  );
};

const App = () => {
  const loading = useChart(state => state.loading);
  const refresh = useChart(state => state.refresh);

  return (
    <Card
      title={
        <Button loading={loading} onClick={refresh}>
          \u624B\u52A8\u5237\u65B0
        </Button>
      }
      extra={<Search hidden searchOnMount={false} api={api} />}
    >
      <Column />
    </Card>
  );
};

export default withChart(App);`,X=`import React, { useCallback, useState } from 'react';
import { Column, Search, withChart } from 'chart-render';
import { Card, Row, Col } from 'antd';

const schema = {
  type: 'object',
  properties: {
    os: {
      type: 'string',
      enum: ['Windows', 'MacOS', 'Android', 'iOS'],
      enumNames: ['Windows', 'MacOS', 'Android', 'iOS'],
      props: { placeholder: '\u64CD\u4F5C\u7CFB\u7EDF' },
    },
    location: {
      type: 'string',
      enum: ['\u676D\u5DDE', '\u5B81\u6CE2', '\u5609\u5174', '\u91D1\u534E'],
      enumNames: ['\u676D\u5DDE', '\u5B81\u6CE2', '\u5609\u5174', '\u91D1\u534E'],
      props: { placeholder: 'IP \u5C5E\u5730' },
    },
  },
};

const api = ({ filters }) => {
  console.log('filters >>> ', filters);
  return new Promise(resolve =>
    setTimeout(() => {
      const meta = [
        { id: 'ds', name: '\u65E5\u671F', isDim: true },
        { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
      ];
      const data = [...new Array(24)].map((_, index) => ({
        ds: \`2022-01-\${String(index + 1).padStart(2, 0)}\`,
        uv: Math.floor(Math.random() * 100),
      }));
      resolve({ meta, data });
    }, 1000)
  );
};

const App = () => {
  const [hoveredData, setHoveredData] = useState();

  const onEvent = useCallback((chart, event) => {
    if (event.type === 'plot:click' && event.data?.data) {
      setHoveredData(event?.data?.data);
    }
  }, []);

  return (
    <Card
      title="\u8BBF\u95EE\u8D8B\u52BF"
      extra={<Search searchOnChange api={api} schema={schema} />}
    >
      <Row gutter={12}>
        <Col span={8}>
          <h2>\u70B9\u51FB\u53F3\u8FB9\u7684\u67F1\u5B50\u{1F449}\u{1F3FB}</h2>
          <h2>\u5F53\u524D\u9009\u4E2D\uFF1A</h2>
          <p>ds: {hoveredData?.ds}</p>
          <p>uv: {hoveredData?.uv}</p>
        </Col>
        <Col span={16}>
          <Column onEvent={onEvent} />
        </Col>
      </Row>
    </Card>
  );
};

export default withChart(App);`,P=`import FormRender, { useForm } from 'form-render';
import React from 'react';

const Demo = props => {
  const form = useForm();
  return <FormRender form={form} {...props} />;
};

export default Demo;`,M=`export const delay = ms => new Promise(res => setTimeout(res, ms));

export const fakeApi = (url, data) => {
  console.group('request:', url);
  console.log('params:', data);
  console.groupEnd();
  return delay(500);
};`,V=`import FormRender, { useForm } from 'form-render';
import React from 'react';

const Demo = ({ schema }) => {
  const form = useForm();
  return (
    <div>
      <FormRender form={form} schema={schema} />
    </div>
  );
};

export default Demo;`,L=`export const basic = {
  labelWidth: 130,
  type: 'object',
  properties: {
    url: {
      title: 'url\u8F93\u5165\u6846',
      placeholder: '//www.taobao.com',
      type: 'string',
      format: 'url',
      required: true,
    },
    email: {
      title: 'email\u8F93\u5165\u6846',
      type: 'string',
      format: 'email',
    },
    string: {
      title: '\u6B63\u5219\u6821\u9A8C\u5B57\u7B26\u4E32',
      description: 'a-z',
      type: 'string',
      hidden: false,
      disabled: true,
    },
  },
};

export const expression = {
  type: 'object',
  properties: {
    input: {
      title: '{{formData.config.title || "\u8F93\u5165\u6846"}}',
      type: 'string',
      placeholder: '{{formData.config.placeholder}}',
      props: {
        size: '{{formData.config.size}}',
      },
      hidden: '{{formData.config.hidden === true}}',
      readOnly: '{{formData.config.readOnly === true}}',
      disabled: '{{formData.config.disabled === true}}',
    },
    rate: {
      title: 'rate',
      type: 'number',
      widget: 'rate',
    },
    config: {
      title: '\u914D\u7F6E',
      type: 'object',
      properties: {
        title: {
          title: 'title',
          type: 'string',
        },
        placeholder: {
          title: 'placeholder',
          type: 'string',
        },
        size: {
          title: 'input\u5927\u5C0F',
          type: 'string',
          enum: ['large', 'middle', 'small'],
          enumNames: ['\u5927', '\u4E2D', '\u5C0F'],
          widget: 'radio',
        },
        hidden: {
          title: '\u662F\u5426\u9690\u85CF',
          type: 'boolean',
        },
        readOnly: {
          title: '\u662F\u5426\u53EA\u8BFB',
          type: 'boolean',
        },
        disabled: {
          title: '\u662F\u5426\u7F6E\u7070',
          type: 'boolean',
        },
      },
    },
  },
  required: [],
};

export const titleTrick = {
  displayType: 'row',
  type: 'object',
  properties: {
    inputName1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      width: '50%',
    },
    desc: {
      type: 'html',
      bind: false,
      default: "\u8865\u5145\u8BF4\u660E <span style='color:red'>hello<span>",
      width: '50%',
    },
  },
};`,H=`import { Button, Input, message } from 'antd';
import FormRender, { useForm } from 'form-render';
import React from 'react';

const { TextArea } = Input;

const Demo = () => {
  const form = useForm();

  const schema = {
    type: 'object',
    displayType: 'row',
    properties: {
      select1: {
        title: '\u8F93\u5165\u6846',
        type: 'string',
        dependencies: ['useSelect'],
        widget: 'MyTextEditor',
        width: '60%',
      },
      useSelect: {
        title: '\u8F93\u5165\u6846\u9AD8\u5EA6',
        type: 'number',
        width: '60%',
      },
    },
  };

  const onFinish = (data, errors) => {
    if (errors.length > 0) {
      message.error(
        '\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A' + JSON.stringify(errors.map(item => item.name))
      );
    } else {
      message.success('\u63D0\u4EA4\u6210\u529F\uFF1A' + JSON.stringify(data));
    }
  };

  return (
    <div>
      <FormRender
        form={form}
        schema={schema}
        widgets={{ MyTextEditor }}
        onFinish={onFinish}
      />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4
      </Button>
    </div>
  );
};

const MyTextEditor = props => {
  const { addons } = props;
  console.log(addons.dependValues);
  let rows;
  if (addons && addons.dependValues) {
    rows = addons.dependValues[0] || 2;
  }
  return <TextArea rows={rows} />;
};

export default Demo;`,Y=`import { Button } from 'antd';
import FormRender, { useForm } from 'form-render';
import React from 'react';

const Demo = () => {
  const form = useForm();

  const schema = {
    displayType: 'column',
    type: 'object',
    properties: {
      listName: {
        title: '\u5BF9\u8C61\u6570\u7EC4',
        description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
        type: 'array',
        default: [
          { select1: false, input1: 'hello world' },
          { select1: true },
          { select1: false },
        ],
        items: {
          type: 'object',
          properties: {
            select1: {
              title: '\u9690\u85CF\u8F93\u5165\u6846',
              type: 'boolean',
            },
            input1: {
              title: '\u8F93\u5165\u6846',
              type: 'string',
              required: true,
              hidden: '{{rootValue.select1 === true}}',
            },
          },
        },
      },
    },
  };

  const onFinish = (data, errors) => {
    console.log(data, errors);
  };

  return (
    <div>
      <FormRender form={form} schema={schema} onFinish={onFinish} />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4\uFF08\u89C1console\uFF09
      </Button>
    </div>
  );
};

export default Demo;`,U=`import { Button, Checkbox } from 'antd';
import FormRender, { useForm } from 'form-render';
import React from 'react';

const MyCheckbox = ({ addons }) => {
  const { dependValues, setValueByPath } = addons;
  console.log(dependValues);
  const checked = dependValues[0] && dependValues[0].length === 4;
  const onChange = e => {
    const val = e.target.checked;
    console.log(val);
    if (val === false) {
      setValueByPath('boxes', []);
    } else if (val === true) {
      setValueByPath('boxes', [1, 2, 3, 4]);
    }
  };
  return <Checkbox checked={checked} onChange={onChange} />;
};

const Demo = () => {
  const form = useForm();

  const schema = {
    type: 'object',
    properties: {
      select1: {
        title: '\u662F\u5426\u5168\u9009',
        type: 'boolean',
        dependencies: ['boxes'],
        widget: 'MyCheckbox',
      },
      boxes: {
        title: '\u53EF\u7528\u64CD\u4F5C',
        description: '\u591A\u9009',
        type: 'array',
        items: {
          type: 'number',
        },
        enum: [1, 2, 3, 4],
        enumNames: ['\u589E', '\u5220', '\u6539', '\u67E5'],
        widget: 'checkboxes',
      },
    },
  };

  const onFinish = (data, errors) => {
    console.log(data, errors);
  };

  return (
    <div>
      <FormRender
        form={form}
        schema={schema}
        onFinish={onFinish}
        widgets={{ MyCheckbox }}
      />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4\uFF08\u89C1console\uFF09
      </Button>
    </div>
  );
};

export default Demo;`,Z=`import { Button } from 'antd';
import FormRender, { useForm } from 'form-render';
import React from 'react';

const Demo = () => {
  const form = useForm();

  const schema = {
    displayType: 'column',
    type: 'object',
    properties: {
      x: {
        title: '\u5BF9\u8C61\u6570\u7EC4',
        type: 'array',
        items: {
          type: 'object',
          properties: {
            a: {
              title: '\u8F93\u5165\u6846',
              type: 'string',
            },
            y: {
              title: '\u5BF9\u8C61',
              type: 'object',
              properties: {
                z: {
                  title: '\u9009\u62E9\u6846',
                  type: 'string',
                  widget: 'radio',
                  enum: [],
                },
              },
            },
          },
        },
      },
    },
  };

  const onMount = () => {
    form.setSchemaByPath('x[].y.z', { enum: [1, 2, 3] });
  };

  const onFinish = (data, errors) => {
    console.log(data, errors);
  };

  return (
    <div>
      <FormRender
        form={form}
        schema={schema}
        onFinish={onFinish}
        onMount={onMount}
      />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4\uFF08\u89C1console\uFF09
      </Button>
    </div>
  );
};

export default Demo;`,x=`import { Button } from 'antd';
import FormRender, { useForm } from 'form-render';
import React from 'react';

const Demo = () => {
  const form = useForm();

  const schema = {
    displayType: 'column',
    type: 'object',
    properties: {
      province: {
        type: 'string',
        placeholder: 'province',
        required: 'true',
        rules: [
          { required: true, message: "province can't be empty" },
          { pattern: '^[a-z]+$', message: 'incorrect province' },
        ],
        width: '20%',
      },
      city: {
        type: 'string',
        placeholder: 'city',
        required: 'true',
        rules: [
          { required: true, message: "city can't be empty" },
          { pattern: '^[a-z]+$', message: 'incorrect city' },
        ],
        width: '20%',
      },
    },
  };

  const onFinish = (data, errors) => {
    console.log(data, errors);
  };

  return (
    <div>
      <FormRender form={form} schema={schema} onFinish={onFinish} />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4\uFF08\u89C1console\uFF09
      </Button>
    </div>
  );
};

export default Demo;`,k=`import { Button, Input, Modal } from 'antd';
import Generator from 'fr-generator';
import React, { useRef, useState } from 'react';
const { TextArea } = Input;

const defaultValue = {
  type: 'object',
  properties: {
    inputName: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
    },
  },
};

const templates = [
  {
    text: '\u6A21\u677F1',
    name: 'something',
    schema: {
      title: '\u5BF9\u8C61',
      description: '\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B',
      type: 'object',
      properties: {
        inputName: {
          title: '\u7B80\u5355\u8F93\u5165\u6846',
          type: 'string',
        },
        selectName: {
          title: '\u5355\u9009',
          type: 'string',
          enum: ['a', 'b', 'c'],
          enumNames: ['\u65E9', '\u4E2D', '\u665A'],
        },
        dateName: {
          title: '\u65F6\u95F4\u9009\u62E9',
          type: 'string',
          format: 'date',
        },
      },
    },
  },
];

const Demo = () => {
  const [show, setShow] = useState(false);
  const [schema, setSchema] = useState(() => defaultValue);
  const genRef = useRef(); // class\u7EC4\u4EF6\u7528 React.createRef()

  const toggle = () => setShow(o => !o);

  const handleOk = () => {
    const value = genRef.current && genRef.current.getValue();
    setSchema(value);
    toggle();
  };

  return (
    <div>
      <Button type="primary" onClick={toggle} style={{ marginBottom: 12 }}>
        \u914D\u7F6Eschema
      </Button>
      <Modal
        visible={show}
        onCancel={toggle}
        onOk={handleOk}
        okText="\u4FDD\u5B58"
        cancelText="\u5173\u95ED"
        width="90%"
        bodyStyle={{ height: '70vh' }}
      >
        <Generator ref={genRef} defaultValue={schema} templates={templates} />
      </Modal>
      <TextArea
        autoSize
        value={JSON.stringify(schema, null, 2)}
        onChange={() => {}}
      />
    </div>
  );
};

export default Demo;`,q=`import Generator, {
  defaultCommonSettings,
  defaultGlobalSettings,
  defaultSettings,
} from 'fr-generator';
import React from 'react';

const NewWidget = ({ value = 0, onChange }) => (
  <button onClick={() => onChange(value + 1)}>{value}</button>
);

const Demo = () => {
  console.log(defaultSettings, defaultCommonSettings, defaultGlobalSettings);

  return (
    <div style={{ height: '50vh' }}>
      <Generator
        widgets={{ NewWidget }}
        settings={[
          {
            title: '\u4E2A\u4EBA\u4FE1\u606F',
            widgets: [
              {
                text: '\u8BA1\u6570\u5668',
                name: 'asyncSelect',
                schema: {
                  title: '\u8BA1\u6570\u5668',
                  type: 'number',
                  widget: 'NewWidget',
                },
                setting: {
                  api: { title: 'api', type: 'string' },
                },
              },
              {
                text: '\u59D3\u540D',
                name: 'name',
                schema: {
                  title: '\u8F93\u5165\u6846',
                  type: 'string',
                },
                setting: {
                  maxLength: { title: '\u6700\u957F\u5B57\u6570', type: 'number' },
                },
              },
              {
                text: 'object',
                name: 'object',
                schema: {
                  title: '\u5BF9\u8C61',
                  type: 'object',
                  properties: {},
                },
                setting: {},
              },
              {
                text: 'array',
                name: 'array',
                schema: {
                  title: '\u6570\u7EC4',
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {},
                  },
                },
                setting: {},
              },
            ],
          },
        ]}
        commonSettings={{
          description: {
            title: '\u81EA\u5B9A\u4E49\u5171\u901A\u7528\u7684\u5165\u53C2',
            type: 'string',
          },
        }}
      />
    </div>
  );
};

export default Demo;`,_=`import Generator from 'fr-generator';
import React from 'react';
import './index.less';

const { Provider, Sidebar, Canvas, Settings } = Generator;

const Demo = () => {
  return (
    <div className="fr-generator-playground" style={{ height: '40vh' }}>
      <Provider
        onChange={data => console.log('data:change', data)}
        onSchemaChange={schema => console.log('schema:change', schema)}
      >
        <div className="fr-generator-container">
          <Settings />
          <Canvas />
          <Sidebar fixedName />
        </div>
      </Provider>
    </div>
  );
};

export default Demo;`,W=`.fr-generator-playground {
  margin: 0 -24px;

  .hide-demo {
    display: none;
  }
}`,nn=`import { Button, Input, Modal } from 'antd';
import Generator from 'fr-generator';
import React, { useRef, useState } from 'react';
const { TextArea } = Input;

const defaultValue = {
  type: 'object',
  properties: {
    array: {
      key: 'array',
      type: 'array',
      name: 'array',
      title: 'Name',
      'x-component': 'arraytable',
      items: {
        type: 'object',
        properties: {
          aa: {
            key: 'aa',
            type: 'string',
            name: 'aa',
            title: '\u63A7\u5236\u76F8\u90BB\u5B57\u6BB5\u663E\u793A\u9690\u85CF',
            enum: [
              {
                label: '\u663E\u793A',
                value: true,
              },
              {
                label: '\u9690\u85CF',
                value: false,
              },
            ],
            'x-component': 'input',
          },
          bb: {
            key: 'bb',
            type: 'string',
            name: 'bb',
            title: 'BB',
            'x-component': 'input',
          },
        },
      },
    },
    cc: {
      key: 'cc',
      type: 'string',
      name: 'cc',
      title: 'CC',
      'x-component': 'input',
      'x-component-props': { min: 1 },
    },
  },
};

const stringContains = (str, text) => {
  return str.indexOf(text) > -1;
};

const isObject = a =>
  stringContains(Object.prototype.toString.call(a), 'Object');

// \u83B7\u5F97 propsSchema \u7684 children
const getChildren2 = schema => {
  if (!schema) return [];
  const {
    // object
    properties,
    // array
    items,
    type,
  } = schema;
  if (!properties && !items) {
    return [];
  }
  let schemaSubs = {};
  if (type === 'object') {
    schemaSubs = properties;
  }
  if (type === 'array') {
    schemaSubs = items.properties;
  }
  return Object.keys(schemaSubs).map(name => ({
    schema: schemaSubs[name],
    name,
  }));
};

// formily Schema => FRG schema
const transformFrom = (mySchema, parent = null) => {
  const isObj = mySchema.type === 'object' && mySchema.properties;
  const isList =
    mySchema.type === 'array' && mySchema.items && mySchema.items.properties;
  const hasChildren = isObj || isList;
  // debugger;
  if (!hasChildren) {
    if (mySchema.enum && Array.isArray(mySchema.enum)) {
      const list = mySchema.enum;
      if (
        isObject(list[0]) &&
        list[0].label !== undefined &&
        list[0].value !== undefined
      ) {
        const _enumNames = list.map(i => i.label);
        const _enum = list.map(i => i.value);
        mySchema.enum = _enum;
        mySchema.enumNames = _enumNames;
      }
    }
  } else {
    const childrenList = getChildren2(mySchema);
    childrenList.map(item => {
      if (isObj) {
        mySchema.properties[item.name] = transformFrom(item.schema, mySchema);
      }
      if (isList) {
        mySchema.items.properties[item.name] = transformFrom(
          item.schema,
          mySchema
        );
      }
    });
  }
  if (mySchema['x-component']) {
    mySchema['widget'] = mySchema['x-component'];
  }
  if (mySchema['x-component-props']) {
    mySchema['props'] = mySchema['x-component-props'];
  }
  if (parent && mySchema.required) {
    if (parent.required && Array.isArray(parent.required)) {
      parent.required.push(mySchema.name);
    } else {
      parent.required = [mySchema.name];
    }
  }
  delete mySchema.key;
  delete mySchema.name;
  delete mySchema.required;
  delete mySchema['x-component'];
  delete mySchema['x-component-props'];
  return mySchema;
};

// FRG schema => formily Schema
const transformTo = (frSchema, parent = null, key = null) => {
  const isObj = frSchema.type === 'object' && frSchema.properties;
  const isList =
    frSchema.type === 'array' && frSchema.items && frSchema.items.properties;
  const hasChildren = isObj || isList;
  // debugger;
  if (!hasChildren) {
    if (
      frSchema.enum &&
      Array.isArray(frSchema.enum) &&
      frSchema.enumNames &&
      Array.isArray(frSchema.enumNames)
    ) {
      const list = frSchema.enum.map((item, idx) => ({
        value: item,
        label: frSchema.enumNames[idx],
      }));
      frSchema.enum = list;
    }
  } else {
    const childrenList = getChildren2(frSchema);
    childrenList.map(item => {
      if (isObj) {
        frSchema.properties[item.name] = transformTo(
          item.schema,
          frSchema,
          item.name
        );
      }
      if (isList) {
        frSchema.items.properties[item.name] = transformTo(
          item.schema,
          frSchema,
          item.name
        );
      }
    });
  }
  if (frSchema['widget']) {
    frSchema['x-component'] = frSchema['widget'];
  }
  if (frSchema['props']) {
    frSchema['x-component-props'] = frSchema['props'];
  }
  delete frSchema['widget'];
  delete frSchema['props'];
  delete frSchema['enumNames'];
  if (key) {
    frSchema.name = key;
    frSchema.key = key;
  }
  if (parent && key && parent.required && Array.isArray(parent.required)) {
    if (parent.required.indexOf(key) > -1) {
      frSchema.required = true;
    }
  }
  return frSchema;
};

const fromFormily = schema => transformFrom(schema);
const toFormily = schema => transformTo(schema);

const Demo = () => {
  const [show, setShow] = useState(false);
  const [schema, setSchema] = useState(() => defaultValue);
  const genRef = useRef(); // class\u7EC4\u4EF6\u7528 React.createRef()

  const toggle = () => setShow(o => !o);

  const handleOk = () => {
    const value = genRef.current && genRef.current.getValue();
    setSchema(value);
    toggle();
  };

  return (
    <div>
      <Button type="primary" onClick={toggle} style={{ marginBottom: 12 }}>
        \u914D\u7F6Eschema
      </Button>
      <Modal
        visible={show}
        onCancel={toggle}
        onOk={handleOk}
        okText="\u4FDD\u5B58"
        cancelText="\u5173\u95ED"
        width="90%"
        bodyStyle={{ height: '70vh' }}
      >
        <Generator
          ref={genRef}
          defaultValue={schema}
          transformer={{
            from: fromFormily,
            to: toFormily,
          }}
        />
      </Modal>
      <TextArea
        autoSize
        value={JSON.stringify(schema, null, 2)}
        onChange={() => {}}
      />
    </div>
  );
};

export default Demo;`,en=`import Generator from 'fr-generator';
import React, { useEffect, useRef } from 'react';
import './index.less';

const Demo = () => {
  const ref = useRef();

  useEffect(() => {
    window.onbeforeunload = function (e) {
      e = e || window.event;
      // \u517C\u5BB9IE8\u548CFirefox 4\u4E4B\u524D\u7684\u7248\u672C
      if (e) {
        e.returnValue = '\u5173\u95ED\u63D0\u793A';
      }
      // Chrome, Safari, Firefox 4+, Opera 12+ , IE 9+
      return '\u5173\u95ED\u63D0\u793A';
    };
  }, []);

  const goToFrPlayground = () => {
    ref.current.copyValue();
    window.open('/playground');
  };

  return (
    <div className="fr-generator-playground" style={{ height: '80vh' }}>
      <Generator
        ref={ref}
        extraButtons={[{ text: '\u53BBplayground\u9A8C\u8BC1', onClick: goToFrPlayground }]}
        onChange={data => console.log('data:change', data)}
        onSchemaChange={schema => console.log('schema:change', schema)}
      />
    </div>
  );
};

export default Demo;`,tn=`import { Radio, Select, Slider, Switch } from 'antd';
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
          \u56DE\u4E3B\u9875
        </a> */}
        <div className="w-100 flex setting-container">
          <Radio.Group
            name="schemaName"
            defaultValue="simplest"
            className="w-50 flex items-center flex-wrap z-999"
            onChange={this.onSchemaChange}
          >
            <Radio value="simplest">\u6700\u7B80\u6837\u4F8B</Radio>
            <Radio value="basic">\u57FA\u7840\u63A7\u4EF6</Radio>
            <Radio value="format">\u6821\u9A8C</Radio>
            <Radio value="dynamic-function">\u52A8\u6001\u51FD\u6570</Radio>
            <Radio value="new-feature">\u65B0\u529F\u80FD</Radio>
            <Radio value="function">\u590D\u6742\u8054\u52A8</Radio>
            <Radio value="input">\u4E2A\u6027\u8F93\u5165\u6846</Radio>
            <Radio value="select">\u4E2A\u6027\u9009\u62E9\u6846</Radio>
            <Radio value="demo">\u5B8C\u6574\u4F8B\u5B50</Radio>
          </Radio.Group>
          <div className="w-50 flex items-center flex-wrap z-999">
            <Select
              style={{ marginRight: 8, marginLeft: 24 }}
              onChange={this.onColumnNumberChange}
              defaultValue="1"
            >
              <Option value="1">\u4E00\u884C\u4E00\u5217</Option>
              <Option value="2">\u4E00\u884C\u4E8C\u5217</Option>
              <Option value="3">\u4E00\u884C\u4E09\u5217</Option>
            </Select>
            <Select
              style={{ marginRight: 8 }}
              onChange={this.onDisplayChange}
              defaultValue="column"
            >
              <Option value="column">\u4E0A\u4E0B\u6392\u5217</Option>
              <Option value="row">\u5DE6\u53F3\u6392\u5217</Option>
            </Select>
            <Switch
              style={{ marginRight: 8 }}
              checkedChildren="\u7F16\u8F91"
              onChange={this.onReadOnlyChange}
              unCheckedChildren="\u53EA\u8BFB"
              checked={readOnly}
            />
            <div style={{ width: 70 }}>\u6807\u7B7E\u5BBD\u5EA6\uFF1A</div>
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

export default Root;`,rn=`.debug * {
  outline: 1px solid gold;
}

.markdown p {
  color: #454d64 !important;
  font-size: 15px !important;
  line-height: 1.60625 !important;
}

.markdown ol,
.markdown ul {
  list-style: initial !important;
}

.hidden {
  display: none;
}

.npm__react-simple-code-editor__textarea {
  outline: none;
}

.b {
  font-weight: bold;
}

.pa0 {
  padding: 0;
}
.pa1 {
  padding: 0.25rem;
}
.pa2 {
  padding: 0.5rem;
}
.pa3 {
  padding: 1rem;
}
.pa4 {
  padding: 2rem;
}
.pa5 {
  padding: 4rem;
}
.pl0 {
  padding-left: 0;
}
.pt1 {
  padding-top: 0.25rem;
}
.pt2 {
  padding-top: 0.5rem;
}
.pt3 {
  padding-top: 1rem;
}
.pt4 {
  padding-top: 2rem;
}
.pt5 {
  padding-top: 4rem;
}
.pl2 {
  padding-left: 0.5rem;
}
.pb2 {
  padding-bottom: 0.5rem;
}
.overflow-auto {
  overflow: auto;
}
.h-100 {
  height: 100%;
}
.vh-100 {
  height: 100vh;
}
.relative {
  position: relative;
}
.absolute {
  position: absolute;
}
.top-0 {
  top: 0;
}
.right-0 {
  right: 0;
}
.w-50 {
  width: 50%;
}
.w-100 {
  width: 100%;
}
.flex {
  display: flex;
}
.flex-auto {
  flex: 1 1 auto;
  min-width: 0; /* 1 */
  min-height: 0; /* 1 */
}
.flex-column {
  flex-direction: column;
}
.items-center {
  align-items: center;
}
.flex-wrap {
  flex-wrap: wrap;
}
.z-999 {
  z-index: 999;
}

.fr-playground {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 0;
  height: 100vh;
}

.fr-playground .setting-container {
  border-bottom: 1px solid #ccc;
  padding: 0 12px 12px;
}

.__dumi-default-previewer-demo {
  padding: 24px;
}`,an=`import { Tabs } from 'antd';
import FormRender, { useForm } from 'form-render';
import { deserialize, serializeToDraft } from "fr-generator"
import parseJson from 'json-parse-better-errors';
import { useEffect, useState } from 'react';
import AsyncSelect from './customized/AsyncSelect';
import DefaultSchema from './json/simplest.json';
import CodeBlock from './monaco';

const { TabPane } = Tabs;

// help functions
const schema2str = obj => JSON.stringify(obj, null, 2) || '';

const Demo = ({ schemaName, theme, ...formProps }) => {
  const [schemaStr, set1] = useState(() => schema2str(DefaultSchema.schema));
  const [error, set2] = useState('');
  const [isJs, setIsJs] = useState(false);

  const updateSchemaStr = () => {
    let schema = {};
    try {
      schema = require(\`./json/\${schemaName}.json\`);
      set1(schema2str(schema.schema));
      setIsJs(false);
    } catch (error) {
      // \u4E0D\u5B58\u5728\uFF0C\u9ED8\u8BA4\u5B58\u50A8\u7684\u662F\u52A8\u6001\u51FD\u6570\uFF0C\u53D6js\u6587\u4EF6
      schema = require(\`./json/\${schemaName}.js\`);
      set1(serializeToDraft(schema.schema));
      setIsJs(true);
    }
  };

  useEffect(() => {
    updateSchemaStr();
  }, [schemaName]);

  const parseSchema = str => {
    return isJs ? deserialize(str) : parseJson(str);
  };

  const tryParse = schemaStr => {
    let schema = {};
    try {
      schema = parseSchema(schemaStr);
      if (typeof schema !== 'object') {
        set2('schema\u975E\u6B63\u786Ejson');
        return;
      }
      set2('');
      return schema;
    } catch (error) {
      set2(String(error));
    }
  };

  const handleCodeChange = schemaStr => {
    set1(schemaStr);
    tryParse(schemaStr);
  };

  let schema = {};
  try {
    schema = parseSchema(schemaStr);
  } catch (error) {
    console.log(error);
  }

  const form = useForm();

  return (
    <div className="flex-auto flex">
      <div className="w-50 h-100 pl2 flex flex-column">
        <Tabs
          defaultActiveKey="1"
          onChange={() => {}}
          className="flex flex-column"
          style={{ overflow: 'auto' }}
        >
          <TabPane tab="Schema" key="1">
            <CodeBlock value={schemaStr} onChange={handleCodeChange} />
          </TabPane>
          <TabPane tab="Data" key="2">
            <CodeBlock value={schema2str(form.getValues())} readOnly />
          </TabPane>
        </Tabs>
      </div>
      <div className="w-50 h-100 flex flex-column pa2">
        <div
          className="h-100 overflow-auto pa3 pt4 flex-auto"
          style={{ borderLeft: '1px solid #ddd' }}
        >
          {error ? (
            <div>{error}</div>
          ) : (
            <FormRender
              form={form}
              schema={schema}
              {...formProps}
              widgets={{ asyncSelect: AsyncSelect }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Demo;`,sn=`import React from 'react';
import { Select } from 'antd';
import jsonp from 'fetch-jsonp';
import querystring from 'querystring';
const { Option } = Select;

let timeout;
let currentValue;

function fetch(value, callback) {
  if (timeout) {
    clearTimeout(timeout);
    timeout = null;
  }
  currentValue = value;

  function fake() {
    const str = querystring.encode({
      code: 'utf-8',
      q: value,
    });
    jsonp(\`https://suggest.taobao.com/sug?\${str}\`)
      .then(response => response.json())
      .then(d => {
        if (currentValue === value) {
          const { result } = d;
          const data = [];
          result.forEach(r => {
            data.push({
              value: r[0],
              text: r[0],
            });
          });
          callback(data);
        }
      });
  }

  timeout = setTimeout(fake, 300);
}

class SearchInput extends React.Component {
  state = {
    data: [],
  };

  handleSearch = value => {
    if (value) {
      fetch(value, data => this.setState({ data }));
    } else {
      this.setState({ data: [] });
    }
  };

  handleChange = value => {
    const { onChange } = this.props;
    onChange(value);
  };

  render() {
    const { value, ...rest } = this.props;
    const options = this.state.data.map(d => (
      <Option key={d.value}>{d.text}</Option>
    ));
    return (
      <Select
        {...rest}
        style={{ width: '100%' }}
        showSearch
        value={value || undefined}
        defaultActiveFirstOption={false}
        showArrow={false}
        filterOption={false}
        onSearch={this.handleSearch}
        onChange={this.handleChange}
        notFoundContent={null}
      >
        {options}
      </Select>
    );
  }
}

export default SearchInput;`,on=`{
  "schema": {
    "type": "object",
    "properties": {
      "input": {
        "title": "\u7B80\u5355\u8F93\u5165\u6846",
        "type": "string",
        "min": 6,
        "rules": [
          {
            "pattern": "^[A-Za-z0-9]+$",
            "message": "\u53EA\u5141\u8BB8\u586B\u5199\u82F1\u6587\u5B57\u6BCD\u548C\u6570\u5B57"
          }
        ]
      },
      "select": {
        "title": "\u5355\u9009",
        "type": "string",
        "enum": ["a", "b", "c"],
        "enumNames": ["\u9009\u98791", "\u9009\u98792", "\u9009\u98793"],
        "widget": "radio"
      },
      "listName2": {
        "title": "\u5BF9\u8C61\u6570\u7EC4",
        "description": "\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",
        "type": "array",
        "min": 1,
        "max": 3,
        "items": {
          "type": "object",
          "properties": {
            "input1": {
              "title": "\u7B80\u5355\u8F93\u5165\u6846",
              "type": "string"
            },
            "select1": {
              "title": "\u5355\u9009",
              "type": "string",
              "enum": ["a", "b", "c"],
              "enumNames": ["\u65E9", "\u4E2D", "\u665A"]
            }
          }
        }
      }
    }
  }
}`,ln=`import React from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';

import './theme.css';

const Demo = ({ value, onChange }) => {
  return (
    <Editor
      value={value}
      onValueChange={onChange}
      highlight={code => highlight(code, languages.js)}
      padding={10}
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: 16,
      }}
    />
  );
};

export default Demo;`,dn=`/* PrismJS 1.16.0
https://prismjs.com/download.html#themes=prism&languages=markup+css+clike+javascript+graphql+jsx+regex */
/**
 * prism.js default theme for JavaScript, CSS and HTML
 * Based on dabblet (http://dabblet.com)
 * @author Lea Verou
 */

code[class*='language-'],
pre[class*='language-'] {
  color: black;
  background: none;
  text-shadow: 0 1px white;
  font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  font-size: 1em;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  line-height: 1.5;

  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;

  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
}

pre[class*='language-']::-moz-selection,
pre[class*='language-'] ::-moz-selection,
code[class*='language-']::-moz-selection,
code[class*='language-'] ::-moz-selection {
  text-shadow: none;
  background: #b3d4fc;
}

pre[class*='language-']::selection,
pre[class*='language-'] ::selection,
code[class*='language-']::selection,
code[class*='language-'] ::selection {
  text-shadow: none;
  background: #b3d4fc;
}

@media print {
  code[class*='language-'],
  pre[class*='language-'] {
    text-shadow: none;
  }
}

/* Code blocks */
pre[class*='language-'] {
  padding: 1em;
  margin: 0.5em 0;
  overflow: auto;
}

:not(pre) > code[class*='language-'],
pre[class*='language-'] {
  background: #f5f2f0;
}

/* Inline code */
:not(pre) > code[class*='language-'] {
  padding: 0.1em;
  border-radius: 0.3em;
  white-space: normal;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
  color: slategray;
}

.token.punctuation {
  color: #999;
}

.namespace {
  opacity: 0.7;
}

.token.property,
.token.tag,
.token.boolean,
.token.number,
.token.constant,
.token.symbol,
.token.deleted {
  color: #905;
}

.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.builtin,
.token.inserted {
  color: #690;
}

.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string {
  color: #9a6e3a;
  background: hsla(0, 0%, 100%, 0.5);
}

.token.atrule,
.token.attr-value,
.token.keyword {
  color: #07a;
}

.token.function,
.token.class-name {
  color: #dd4a68;
}

.token.regex,
.token.important,
.token.variable {
  color: #e90;
}

.token.important,
.token.bold {
  font-weight: bold;
}
.token.italic {
  font-style: italic;
}

.token.entity {
  cursor: help;
}`,mn=`import { InfoCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, message, Space, Tag, Tooltip } from 'antd';
import React from 'react';
import { Search, Table, useTable, withTable } from 'table-render';
import request from 'umi-request';

const schema = {
  type: 'object',
  properties: {
    state: {
      title: '\u9152\u5E97\u72B6\u6001',
      type: 'string',
      enum: ['open', 'closed'],
      enumNames: ['\u8425\u4E1A\u4E2D', '\u5DF2\u6253\u70CA'],
      width: '25%',
      widget: 'select',
    },
    labels: {
      title: '\u9152\u5E97\u661F\u7EA7',
      type: 'string',
      width: '25%',
    },
    created_at: {
      title: '\u6210\u7ACB\u65F6\u95F4',
      type: 'string',
      format: 'date',
      width: '25%',
    },
  },
  labelWidth: 80,
};

const Demo = () => {
  const { refresh } = useTable();

  const searchApi = (params, sorter) => {
    console.group(sorter);
    return request
      .get(
        'https://www.fastmock.site/mock/62ab96ff94bc013592db1f67667e9c76/getTableList/api/basic',
        { params }
      )
      .then(res => {
        if (res && res.data) {
          return {
            rows: [...res.data, { money: null }],
            total: res.data.length,
          };
        }
      })
      .catch(e => {
        console.log('Oops, error', e);

        // \u6CE8\u610F\u4E00\u5B9A\u8981\u8FD4\u56DE rows \u548C total
        return {
          rows: [],
          total: 0,
        };
      });
  };

  const searchApi2 = params => {
    return request
      .get(
        'https://www.fastmock.site/mock/62ab96ff94bc013592db1f67667e9c76/getTableList/api/basic',
        { params }
      )
      .then(res => {
        if (res && res.data) {
          return {
            rows: res.data.slice(1),
            total: res.data.length - 1,
          };
        }
      })
      .catch(e => {
        console.log('Oops, error', e);
        return {
          rows: [],
          total: 0,
        };
      });
  };

  // \u914D\u7F6E\u5B8C\u5168\u900F\u4F20antd table
  const columns = [
    {
      title: '\u9152\u5E97\u540D\u79F0',
      dataIndex: 'title',
      valueType: 'text',
      width: '20%',
    },
    {
      title: '\u9152\u5E97\u5730\u5740',
      dataIndex: 'address',
      ellipsis: true,
      copyable: true,
      valueType: 'text',
      width: '25%',
    },
    {
      title: (
        <>
          \u9152\u5E97\u72B6\u6001
          <Tooltip placement="top" title="\u4F7F\u7528valueType">
            <InfoCircleOutlined style={{ marginLeft: 6 }} />
          </Tooltip>
        </>
      ),
      enum: {
        open: '\u8425\u4E1A\u4E2D',
        closed: '\u5DF2\u6253\u70CA',
      },
      dataIndex: 'state',
    },
    {
      title: '\u9152\u5E97\u661F\u7EA7',
      dataIndex: 'labels',
      render: (_, row) => (
        <Space>
          {row?.labels?.map(({ name, color }) => (
            <Tag color={color} key={name}>
              {name}
            </Tag>
          ))}
        </Space>
      ),
    },

    {
      title: '\u9152\u5E97GMV',
      key: 'money',
      sorter: true,
      dataIndex: 'money',
      valueType: 'money',
    },
    {
      title: '\u6210\u7ACB\u65F6\u95F4',
      key: 'created_at',
      dataIndex: 'created_at',
      valueType: 'date',
    },
    {
      title: '\u64CD\u4F5C',
      render: () => (
        <Space>
          <a target="_blank" key="1">
            <div
              onClick={() => {
                message.success('\u9884\u8BA2\u6210\u529F');
              }}
            >
              \u9884\u8BA2
            </div>
          </a>
        </Space>
      ),
    },
  ];

  const showData = () => {
    refresh(null, { extra: 1 });
  };

  return (
    <div>
      <Search
        schema={schema}
        displayType="row"
        api={[
          {
            name: '\u5168\u90E8\u6570\u636E',
            api: searchApi,
          },
          {
            name: '\u6211\u7684\u6570\u636E',
            api: searchApi2,
          },
        ]}
      />
      <Table
        pagination={{ pageSize: 4 }}
        columns={columns}
        rowKey="id"
        toolbarRender={() => [
          <Button key="show" onClick={showData}>
            \u67E5\u770B\u65E5\u5FD7
          </Button>,
          <Button key="out" onClick={showData}>
            \u5BFC\u51FA\u6570\u636E
          </Button>,
          <Button
            key="primary"
            type="primary"
            onClick={() => alert('table-render\uFF01')}
          >
            <PlusOutlined />
            \u521B\u5EFA
          </Button>,
        ]}
        toolbarAction
      />
    </div>
  );
};

export default withTable(Demo);`,un=`import { InfoCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, message, Space, Tag, Tooltip } from 'antd';
import React from 'react';
import { Search, Table, useTable, withTable } from 'table-render';
import request from 'umi-request';

const schema = {
  type: 'object',
  properties: {
    state: {
      title: '\u9152\u5E97\u72B6\u6001',
      type: 'string',
      enum: ['open', 'closed'],
      enumNames: ['\u8425\u4E1A\u4E2D', '\u5DF2\u6253\u70CA'],
      width: '25%',
      widget: 'select',
    },
    labels: {
      title: '\u9152\u5E97\u661F\u7EA7',
      type: 'string',
      width: '25%',
    },
  },
  labelWidth: 80,
};

const Demo = () => {
  const { refresh } = useTable();

  const searchApi = params => {
    console.log('params >>> ', params);
    return request
      .get(
        'https://www.fastmock.site/mock/62ab96ff94bc013592db1f67667e9c76/getTableList/api/basic',
        { params }
      )
      .then(res => {
        if (res && res.data) {
          return {
            rows: res.data,
            total: res.data.length,
            extraData: res.status,
          };
        }
      })
      .catch(e => {
        console.log('Oops, error', e);
        // \u6CE8\u610F\u4E00\u5B9A\u8981\u8FD4\u56DE rows \u548C total
        return {
          rows: [],
          total: 0,
        };
      });
  };

  // \u914D\u7F6E\u5B8C\u5168\u900F\u4F20antd table
  const columns = [
    {
      title: '\u9152\u5E97\u540D\u79F0',
      dataIndex: 'title',
      valueType: 'text',
      width: '20%',
    },
    {
      title: '\u9152\u5E97\u5730\u5740',
      dataIndex: 'address',
      ellipsis: true,
      copyable: true,
      valueType: 'text',
      width: '25%',
    },
    {
      title: (
        <>
          \u9152\u5E97\u72B6\u6001
          <Tooltip placement="top" title="\u4F7F\u7528valueType">
            <InfoCircleOutlined style={{ marginLeft: 6 }} />
          </Tooltip>
        </>
      ),
      enum: {
        open: '\u8425\u4E1A\u4E2D',
        closed: '\u5DF2\u6253\u70CA',
      },
      dataIndex: 'state',
    },
    {
      title: '\u9152\u5E97\u661F\u7EA7',
      dataIndex: 'labels',
      render: (_, row) => (
        <Space>
          {row.labels.map(({ name, color }) => (
            <Tag color={color} key={name}>
              {name}
            </Tag>
          ))}
        </Space>
      ),
    },

    {
      title: '\u9152\u5E97GMV',
      key: 'money',
      dataIndex: 'money',
      valueType: 'money',
    },
    {
      title: '\u64CD\u4F5C',
      render: row => (
        <Space>
          <a target="_blank" key="1">
            <div
              onClick={() => {
                message.success('\u9884\u8BA2\u6210\u529F');
              }}
            >
              \u9884\u8BA2
            </div>
          </a>
        </Space>
      ),
    },
  ];

  const showData = () => {
    refresh(null, { extra: 1 });
  };

  return (
    <div>
      <Search
        hidden
        schema={schema}
        displayType="row"
        onSearch={search => console.log('onSearch', search)}
        afterSearch={params => console.log('afterSearch', params)}
        api={searchApi}
      />
      <Table
        debug
        columns={columns}
        headerTitle="\u9AD8\u7EA7\u8868\u5355"
        rowKey="id"
        toolbarRender={() => [
          <Button key="show" onClick={showData}>
            \u67E5\u770B\u65E5\u5FD7
          </Button>,
          <Button key="out" onClick={showData}>
            \u5BFC\u51FA\u6570\u636E
          </Button>,
          <Button
            key="primary"
            type="primary"
            onClick={() => alert('table-render\uFF01')}
          >
            <PlusOutlined />
            \u521B\u5EFA
          </Button>,
        ]}
        toolbarAction
      />
    </div>
  );
};

export default withTable(Demo);`,cn=`import { InfoCircleOutlined } from '@ant-design/icons';
import { message, Space, Tag, Tooltip } from 'antd';
import React from 'react';
import { Search, Table, useTable, withTable } from 'table-render';
import request from 'umi-request';

const schema = {
  type: 'object',
  properties: {
    state: {
      title: '\u9152\u5E97\u72B6\u6001',
      type: 'string',
      enum: ['open', 'closed'],
      enumNames: ['\u8425\u4E1A\u4E2D', '\u5DF2\u6253\u70CA'],
      width: '25%',
      widget: 'select',
    },
    labels: {
      title: '\u9152\u5E97\u661F\u7EA7',
      type: 'string',
      width: '25%',
    },
  },
  labelWidth: 80,
};

const Demo = () => {
  const { refresh } = useTable();

  const searchApi = params => {
    console.log('params >>> ', params);
    return request
      .get(
        'https://www.fastmock.site/mock/62ab96ff94bc013592db1f67667e9c76/getTableList/api/basic',
        { params }
      )
      .then(res => {
        if (res && res.data) {
          return {
            rows: res.data,
            total: res.data.length,
            extraData: res.status,
          };
        }
      })
      .catch(e => {
        console.log('Oops, error', e);
        // \u6CE8\u610F\u4E00\u5B9A\u8981\u8FD4\u56DE rows \u548C total
        return {
          rows: [],
          total: 0,
        };
      });
  };

  // \u914D\u7F6E\u5B8C\u5168\u900F\u4F20antd table
  const columns = [
    {
      title: '\u9152\u5E97\u540D\u79F0',
      dataIndex: 'title',
      valueType: 'text',
      width: '20%',
    },
    {
      title: '\u9152\u5E97\u5730\u5740',
      dataIndex: 'address',
      ellipsis: true,
      copyable: true,
      valueType: 'text',
      width: '25%',
    },
    {
      title: (
        <>
          \u9152\u5E97\u72B6\u6001
          <Tooltip placement="top" title="\u4F7F\u7528valueType">
            <InfoCircleOutlined style={{ marginLeft: 6 }} />
          </Tooltip>
        </>
      ),
      enum: {
        open: '\u8425\u4E1A\u4E2D',
        closed: '\u5DF2\u6253\u70CA',
      },
      dataIndex: 'state',
    },
    {
      title: '\u9152\u5E97\u661F\u7EA7',
      dataIndex: 'labels',
      render: (_, row) => (
        <Space>
          {row.labels.map(({ name, color }) => (
            <Tag color={color} key={name}>
              {name}
            </Tag>
          ))}
        </Space>
      ),
    },

    {
      title: '\u9152\u5E97GMV',
      key: 'money',
      dataIndex: 'money',
      valueType: 'money',
    },
    {
      title: '\u64CD\u4F5C',
      render: row => (
        <Space>
          <a target="_blank" key="1">
            <div
              onClick={() => {
                message.success('\u9884\u8BA2\u6210\u529F');
              }}
            >
              \u9884\u8BA2
            </div>
          </a>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Search
        hidden
        schema={schema}
        displayType="row"
        onSearch={search => console.log('onSearch', search)}
        afterSearch={params => console.log('afterSearch', params)}
        api={searchApi}
      />
      <Table columns={columns} rowKey="id" />
    </div>
  );
};

export default withTable(Demo);`,pn=`import { InfoCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, message, Space, Tag, Tooltip } from 'antd';
import React, { useEffect } from 'react';
import { Search, Table, useTable, withTable } from 'table-render';
import { history } from 'umi';
import request from 'umi-request';

const schema = {
  type: 'object',
  properties: {
    state: {
      title: '\u9152\u5E97\u72B6\u6001',
      type: 'string',
      enum: ['open', 'closed'],
      enumNames: ['\u8425\u4E1A\u4E2D', '\u5DF2\u6253\u70CA'],
      width: '25%',
      widget: 'select',
    },
    labels: {
      title: '\u9152\u5E97\u661F\u7EA7',
      type: 'string',
      width: '25%',
    },
    created_at: {
      title: '\u6210\u7ACB\u65F6\u95F4',
      type: 'string',
      format: 'date',
      width: '25%',
    },
  },
  labelWidth: 80,
};

const Demo = () => {
  const { form } = useTable();
  useEffect(() => {
    // \u5B9E\u9645\u4F7F\u7528\u65F6queryParam\u4E3Aurl\u4E0A\u53D6\u4E0B\u6765\u7684\u6709\u6548\u53C2\u6570
    // const queryParam = { state: 'open' };
    const queryParam = history.location.query;
    if (queryParam) {
      // form\u5177\u4F53api\u53C2\u8003form-render\u6587\u6863
      form.setValues(queryParam);
    }
  }, []);

  // \u914D\u7F6E\u5B8C\u5168\u900F\u4F20antd table
  const columns = [
    {
      title: '\u9152\u5E97\u540D\u79F0',
      dataIndex: 'title',
      valueType: 'text',
      width: '20%',
    },
    {
      title: '\u9152\u5E97\u5730\u5740',
      dataIndex: 'address',
      ellipsis: true,
      copyable: true,
      valueType: 'text',
      width: '25%',
    },
    {
      title: (
        <>
          \u9152\u5E97\u72B6\u6001
          <Tooltip placement="top" title="\u4F7F\u7528valueType">
            <InfoCircleOutlined style={{ marginLeft: 6 }} />
          </Tooltip>
        </>
      ),
      enum: {
        open: '\u8425\u4E1A\u4E2D',
        closed: '\u5DF2\u6253\u70CA',
      },
      dataIndex: 'state',
    },
    {
      title: '\u9152\u5E97\u661F\u7EA7',
      dataIndex: 'labels',
      render: (_, row) => (
        <Space>
          {row.labels.map(({ name, color }) => (
            <Tag color={color} key={name}>
              {name}
            </Tag>
          ))}
        </Space>
      ),
    },
    {
      title: '\u9152\u5E97GMV',
      key: 'money',
      dataIndex: 'money',
      valueType: 'money',
    },
    {
      title: '\u6210\u7ACB\u65F6\u95F4',
      key: 'created_at',
      dataIndex: 'created_at',
      valueType: 'date',
    },
    {
      title: '\u64CD\u4F5C',
      render: () => (
        <Space>
          <a target="_blank" key="1">
            <div
              onClick={() => {
                message.success('\u9884\u8BA2\u6210\u529F');
              }}
            >
              \u9884\u8BA2
            </div>
          </a>
        </Space>
      ),
    },
  ];

  const searchApi = params => {
    console.log('params >>> ', params);
    return request
      .get(
        'https://www.fastmock.site/mock/62ab96ff94bc013592db1f67667e9c76/getTableList/api/basic',
        { params }
      )
      .then(res => {
        if (res && res.data) {
          return {
            rows: res.data,
            total: res.data.length,
            extraData: res.status,
          };
        }
      })
      .catch(e => {
        console.log('Oops, error', e);
        // \u6CE8\u610F\u4E00\u5B9A\u8981\u8FD4\u56DE rows \u548C total
        return {
          rows: [],
          total: 0,
        };
      });
  };

  const onSearch = search => {
    console.log('onSearch', search);
  };

  const afterSearch = params => {
    const formData = form.getValues();
    history.replace({
      pathname: '/table-render/demo',
      query: formData,
    });
  };

  return (
    <div>
      <Search
        schema={schema}
        displayType="row"
        onSearch={onSearch}
        afterSearch={afterSearch}
        api={searchApi}
      />
      <Table
        columns={columns}
        headerTitle="url\u5E26\u53C2\u67E5\u8BE2"
        rowKey="id"
        toolbarRender={() => [
          <Button
            key="primary"
            type="primary"
            onClick={() => alert('table-render\uFF01')}
          >
            <PlusOutlined />
            \u521B\u5EFA
          </Button>,
        ]}
        toolbarAction
      />
    </div>
  );
};

export default withTable(Demo);`,fn=`import { InfoCircleOutlined } from '@ant-design/icons';
import { message, Space, Tag, Tooltip } from 'antd';
import React from 'react';
import { Search, Table, useTable, withTable } from 'table-render';
import { ProColumnsType } from 'table-render/src/interface';
import request from 'umi-request';

const schema = {
  type: 'object',
  labelWidth: 80,
  properties: {
    state: {
      title: '\u9152\u5E97\u72B6\u6001',
      type: 'string',
      enum: ['open', 'closed'],
      enumNames: ['\u8425\u4E1A\u4E2D', '\u5DF2\u6253\u70CA'],
      width: '33%',
      widget: 'select',
    },
    labels: {
      title: '\u9152\u5E97\u661F\u7EA7',
      type: 'string',
      width: '33%',
    },
  },
};

interface RecordType {
  id: number;
  number: number;
  address: string;
  title: string;
  room: number;
  money: number;
  state: string;
  created_at: string;
  labels: Array<{ name: string; color: string }>;
}

const Demo = () => {
  // \u6B64\u5904\u8868\u793AtableState.dataSource\u7B26\u5408Array<RecordType>
  const { tableState, refresh } = useTable<RecordType>();

  const searchApi = (params, sorter) => {
    console.group(sorter);
    return request
      .get(
        'https://www.fastmock.site/mock/62ab96ff94bc013592db1f67667e9c76/getTableList/api/basic',
        { params }
      )
      .then(res => {
        if (res && res.data) {
          return {
            rows: res.data,
            total: res.data.length,
          };
        }
      })
      .catch(e => {
        return {
          rows: [],
          total: 0,
        };
      });
  };

  // ProColumnsType\u7684\u4F7F\u7528\u4E0Eantd\u7C7B\u4F3C
  const columns: ProColumnsType<RecordType> = [
    {
      title: '\u9152\u5E97\u540D\u79F0',
      dataIndex: 'title',
      valueType: 'code',
      width: '20%',
    },
    {
      title: '\u9152\u5E97\u5730\u5740',
      dataIndex: 'address',
      ellipsis: true,
      copyable: true,
      valueType: 'text',
      width: '25%',
    },
    {
      title: (
        <>
          \u9152\u5E97\u72B6\u6001
          <Tooltip placement="top" title="\u4F7F\u7528valueType">
            <InfoCircleOutlined style={{ marginLeft: 6 }} />
          </Tooltip>
        </>
      ),
      enum: {
        open: '\u8425\u4E1A\u4E2D',
        closed: '\u5DF2\u6253\u70CA',
      },
      dataIndex: 'state',
    },
    {
      title: '\u9152\u5E97\u661F\u7EA7',
      dataIndex: 'labels',
      render: (_, row) => (
        <Space>
          {row.labels.map(({ name, color }) => (
            <Tag color={color} key={name}>
              {name}
            </Tag>
          ))}
        </Space>
      ),
    },
    {
      title: '\u9152\u5E97GMV',
      key: 'money',
      sorter: true,
      dataIndex: 'money',
      valueType: 'money',
    },
    {
      title: '\u6210\u7ACB\u65F6\u95F4',
      key: 'created_at',
      dataIndex: 'created_at',
      valueType: 'date',
    },
    {
      title: '\u64CD\u4F5C',
      render: () => (
        <a
          onClick={() => {
            message.success('\u9884\u8BA2\u6210\u529F');
          }}
        >
          \u9884\u8BA2
        </a>
      ),
    },
  ];

  return (
    <div>
      {/* \u6B64\u5904\u8868\u793Aapi\u7684\u7684\u8FD4\u56DE\u503C\u9700\u8981\u7B26\u5408RecordType */}
      <Search<RecordType> schema={schema} displayType="row" api={searchApi} />
      {/* \u548Cantd\u7C7B\u4F3C\uFF0C\u4E0EProColumnsType\u914D\u5408\u4F7F\u7528 */}
      <Table<RecordType>
        pagination={{ pageSize: 4 }}
        columns={columns}
        rowKey="id"
      />
    </div>
  );
};

export default withTable(Demo);`,hn=`import React from 'react';
import { Search, Table, withTable } from 'table-render';

const Demo = () => {
  const searchApi = params => {
    return {
      rows: [],
      total: 0,
    };
  };

  // ProColumnsType\u7684\u4F7F\u7528\u4E0Eantd\u7C7B\u4F3C
  const columns = [];

  return (
    <div>
      <Search hidden displayType="row" api={searchApi} />
      {/* \u548Cantd\u7C7B\u4F3C\uFF0C\u4E0EProColumnsType\u914D\u5408\u4F7F\u7528 */}
      <Table
        style={false}
        pagination={{ pageSize: 4 }}
        columns={columns}
        rowKey="id"
      />
    </div>
  );
};

export default withTable(Demo);`,yn={"chart-render-demo1":{component:Object(j.c)({loader:function(){var f=Object(b.a)(Object(h.a)().mark(function g(){return Object(h.a)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(22)]).then(n.bind(null,"w5Ib"));case 2:return t.abrupt("return",t.sent.default);case 3:case"end":return t.stop()}},g)}));function y(){return f.apply(this,arguments)}return y}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:Q}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"chart-render":{version:"1.0.0-alpha.3"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!1,background:"rgb(245,245,245)",identifier:"chart-render-demo1"}},"chart-render-demo2":{component:Object(j.c)({loader:function(){var f=Object(b.a)(Object(h.a)().mark(function g(){return Object(h.a)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(22)]).then(n.bind(null,"DSb1"));case 2:return t.abrupt("return",t.sent.default);case 3:case"end":return t.stop()}},g)}));function y(){return f.apply(this,arguments)}return y}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:G}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"chart-render":{version:"1.0.0-alpha.3"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!1,background:"rgb(245,245,245)",identifier:"chart-render-demo2"}},"chart-render-demo3":{component:Object(j.c)({loader:function(){var f=Object(b.a)(Object(h.a)().mark(function g(){return Object(h.a)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(22)]).then(n.bind(null,"aFWt"));case 2:return t.abrupt("return",t.sent.default);case 3:case"end":return t.stop()}},g)}));function y(){return f.apply(this,arguments)}return y}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:X}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"chart-render":{version:"1.0.0-alpha.3"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!1,background:"rgb(245,245,245)",identifier:"chart-render-demo3"}},"chart-render-demo":{component:Object(j.c)({loader:function(){var f=Object(b.a)(Object(h.a)().mark(function g(){var o,t,u,i,d,c,a,e,l;return Object(h.a)().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,n.e(5).then(n.t.bind(null,"K+nK",7));case 2:return o=m.sent.default,m.next=5,n.e(16).then(n.t.bind(null,"mN36",7));case 5:return m.t0=o,m.next=8,Promise.all([n.e(0),n.e(1),n.e(15)]).then(n.t.bind(null,"N9UN",7));case 8:return m.t1=m.sent,t=(0,m.t0)(m.t1),m.t2=o,m.next=13,n.e(21).then(n.bind(null,"oBTY"));case 13:return m.t3=m.sent,u=(0,m.t2)(m.t3),m.t4=o,m.next=18,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 18:return m.t5=m.sent,i=(0,m.t4)(m.t5),m.next=22,Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(13)]).then(n.bind(null,"36SN"));case 22:return d=m.sent,c={type:"object",properties:{os:{type:"string",enum:["Windows","MacOS","Android","iOS"],enumNames:["Windows","MacOS","Android","iOS"],props:{placeholder:"\u64CD\u4F5C\u7CFB\u7EDF"},required:!0},location:{type:"string",enum:["\u676D\u5DDE","\u5B81\u6CE2","\u5609\u5174","\u91D1\u534E"],enumNames:["\u676D\u5DDE","\u5B81\u6CE2","\u5609\u5174","\u91D1\u534E"],props:{placeholder:"IP \u5C5E\u5730"}}}},a=function(r){var p=r.filters;return console.log("filters >>> ",p),new Promise(function(S){return setTimeout(function(){var O=[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],C=(0,u.default)(new Array(24)).map(function(D,F){return{ds:"2022-01-".concat(String(F+1).padStart(2,0)),pv:Math.floor(Math.random()*100)+100,uv:Math.floor(Math.random()*100)}});S({meta:O,data:C})},1e3)})},e=function(){return i.default.createElement(t.default,{title:"\u8BBF\u95EE\u8D8B\u52BF",extra:i.default.createElement(d.Search,{searchOnChange:!0,api:a,schema:c})},i.default.createElement(d.Column,null))},l=(0,d.withChart)(e),m.abrupt("return",l);case 28:case"end":return m.stop()}},g)}));function y(){return f.apply(this,arguments)}return y}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column, Search, withChart } from 'chart-render';
import { Card } from 'antd';

const schema = {
  type: 'object',
  properties: {
    os: {
      type: 'string',
      enum: ['Windows', 'MacOS', 'Android', 'iOS'],
      enumNames: ['Windows', 'MacOS', 'Android', 'iOS'],
      props: { placeholder: '\u64CD\u4F5C\u7CFB\u7EDF' },
      required: true,
    },
    location: {
      type: 'string',
      enum: ['\u676D\u5DDE', '\u5B81\u6CE2', '\u5609\u5174', '\u91D1\u534E'],
      enumNames: ['\u676D\u5DDE', '\u5B81\u6CE2', '\u5609\u5174', '\u91D1\u534E'],
      props: { placeholder: 'IP \u5C5E\u5730' },
    },
  },
};

const api = ({ filters }) => {
  console.log('filters >>> ', filters);
  return new Promise((resolve) => setTimeout(() => {
    const meta = [
      { id: 'ds', name: '\u65E5\u671F', isDim: true },
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ];
    const data = [...new Array(24)].map((_, index) => ({
      ds: \`2022-01-\${String(index + 1).padStart(2, 0)}\`,
      pv: Math.floor(Math.random() * 100) + 100,
      uv: Math.floor(Math.random() * 100),
    }));
    resolve({ meta, data });
  }, 1000));
};

const App = () => {
  return (
    <Card title="\u8BBF\u95EE\u8D8B\u52BF" extra={<Search searchOnChange api={api} schema={schema} />}>
      <Column />
    </Card>
  );
};

export default withChart(App);`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"chart-render":{version:"1.0.0-alpha.3"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!1,background:"rgb(245,245,245)",identifier:"chart-render-demo"}},"custom-demo":{component:Object(j.c)({loader:function(){var f=Object(b.a)(Object(h.a)().mark(function g(){var o,t,u,i,d,c,a,e,l;return Object(h.a)().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,n.e(5).then(n.t.bind(null,"K+nK",7));case 2:return o=m.sent.default,m.next=5,n.e(16).then(n.t.bind(null,"mN36",7));case 5:return m.t0=o,m.next=8,Promise.all([n.e(0),n.e(1),n.e(15)]).then(n.t.bind(null,"N9UN",7));case 8:return m.t1=m.sent,t=(0,m.t0)(m.t1),m.t2=o,m.next=13,n.e(21).then(n.bind(null,"oBTY"));case 13:return m.t3=m.sent,u=(0,m.t2)(m.t3),m.t4=o,m.next=18,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 18:return m.t5=m.sent,i=(0,m.t4)(m.t5),m.next=22,Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(13)]).then(n.bind(null,"36SN"));case 22:return d=m.sent,c=function(r){var p=r.filters;return console.log("filters >>> ",p),new Promise(function(S){return setTimeout(function(){var O=[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],C=(0,u.default)(new Array(24)).map(function(D,F){return{ds:"2022-01-".concat(String(F+1).padStart(2,0)),pv:Math.floor(Math.random()*100)+100,uv:Math.floor(Math.random()*100)}});S({meta:O,data:C})},1e3)})},a=function(){var r=(0,d.useChart)(function(O){return O.refresh}),p=(0,d.useChart)(function(O){return O.loading}),S=(0,d.useChart)(function(O){return O.dataSource});return i.default.createElement("div",{style:{background:"#ccc",height:300,overflow:"auto",whiteSpace:"pre-wrap"}},i.default.createElement("p",null,"\u8FD9\u91CC\u662F\u81EA\u5B9A\u4E49\u6E32\u67D3\u7EC4\u4EF6\u533A\u5757\uFF0C\u53EF\u4EE5\u4F7F\u7528 `useChart` \u83B7\u5F97 ChartRender \u7684\u72B6\u6001\u548C\u65B9\u6CD5\uFF0C",i.default.createElement("a",{href:"javascript:;",onClick:r},"\u70B9\u6B64\u5237\u65B0")),i.default.createElement("p",null,"\u8FD9\u91CC\u4F7F\u7528\u5230\u4E86 loading \u72B6\u6001\uFF1A",i.default.createElement("span",{style:{color:p?"blue":"green"}},p?"loading...":"loaded!")),i.default.createElement("p",null,"\u8FD9\u91CC\u4F7F\u7528\u5230\u4E86 dataSource\uFF1A",JSON.stringify(S,null,2)))},e=function(){return i.default.createElement(t.default,{title:"\u8BBF\u95EE\u8D8B\u52BF",extra:i.default.createElement(d.Search,{searchOnChange:!0,api:c})},i.default.createElement(a,null))},l=(0,d.withChart)(e),m.abrupt("return",l);case 28:case"end":return m.stop()}},g)}));function y(){return f.apply(this,arguments)}return y}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column, Search, withChart, useChart } from 'chart-render';
import { Card } from 'antd';

const api = ({ filters }) => {
  console.log('filters >>> ', filters);
  return new Promise(resolve =>
    setTimeout(() => {
      const meta = [
        { id: 'ds', name: '\u65E5\u671F', isDim: true },
        { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
        { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
      ];
      const data = [...new Array(24)].map((_, index) => ({
        ds: \`2022-01-\${String(index + 1).padStart(2, 0)}\`,
        pv: Math.floor(Math.random() * 100) + 100,
        uv: Math.floor(Math.random() * 100),
      }));
      resolve({ meta, data });
    }, 1000)
  );
};

const CustomChart = () => {
  const refresh = useChart(state => state.refresh);
  const loading = useChart(state => state.loading);
  const dataSource = useChart(state => state.dataSource);
  return (
    <div
      style={{
        background: '#ccc',
        height: 300,
        overflow: 'auto',
        whiteSpace: 'pre-wrap',
      }}
    >
      <p>
        \u8FD9\u91CC\u662F\u81EA\u5B9A\u4E49\u6E32\u67D3\u7EC4\u4EF6\u533A\u5757\uFF0C\u53EF\u4EE5\u4F7F\u7528 \`useChart\` \u83B7\u5F97 ChartRender
        \u7684\u72B6\u6001\u548C\u65B9\u6CD5\uFF0C
        <a href="javascript:;" onClick={refresh}>
          \u70B9\u6B64\u5237\u65B0
        </a>
      </p>
      <p>
        \u8FD9\u91CC\u4F7F\u7528\u5230\u4E86 loading \u72B6\u6001\uFF1A
        <span style={{ color: loading ? 'blue' : 'green' }}>
          {loading ? 'loading...' : 'loaded!'}
        </span>
      </p>
      <p>\u8FD9\u91CC\u4F7F\u7528\u5230\u4E86 dataSource\uFF1A{JSON.stringify(dataSource, null, 2)}</p>
    </div>
  );
};

const App = () => (
  <Card title="\u8BBF\u95EE\u8D8B\u52BF" extra={<Search searchOnChange api={api} />}>
    <CustomChart />
  </Card>
);

export default withChart(App);`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"chart-render":{version:"1.0.0-alpha.3"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!1,background:"rgb(245,245,245)",identifier:"custom-demo"}},"form-render-demo":{component:Object(j.c)({loader:function(){var f=Object(b.a)(Object(h.a)().mark(function g(){var o,t,u,i,d,c,a,e;return Object(h.a)().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,n.e(7).then(n.t.bind(null,"3PQu",7));case 2:return o=s.sent.default,s.next=5,n.e(5).then(n.t.bind(null,"K+nK",7));case 5:return t=s.sent.default,s.next=8,n.e(2).then(n.t.bind(null,"MaXC",7));case 8:return s.t0=t,s.next=11,n.e(10).then(n.t.bind(null,"4IMT",7));case 11:return s.t1=s.sent,u=(0,s.t0)(s.t1),s.t2=t,s.next=16,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 16:return s.t3=s.sent,i=(0,s.t2)(s.t3),s.t4=o,s.next=21,Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(8)]).then(n.bind(null,"refC"));case 21:return s.t5=s.sent,d=(0,s.t4)(s.t5),c={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},a=function(){var v=(0,d.useForm)(),r=function(S,O){console.log("formData:",S,"errors",O)};return i.default.createElement("div",null,i.default.createElement(d.default,{form:v,schema:c,onFinish:r}),i.default.createElement(u.default,{type:"primary",onClick:v.submit},"\u63D0\u4EA4"))},e=a,s.abrupt("return",e);case 27:case"end":return s.stop()}},g)}));function y(){return f.apply(this,arguments)}return y}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Button } from 'antd';
import FormRender, { useForm } from 'form-render';

const schema = {
  type: 'object',
  properties: {
    input1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      required: true,
    },
    select1: {
      title: '\u5355\u9009',
      type: 'string',
      enum: ['a', 'b', 'c'],
      enumNames: ['\u65E9', '\u4E2D', '\u665A'],
    },
  },
};

const Demo = () => {
  const form = useForm();
  const onFinish = (formData, errors) => {
    console.log('formData:', formData, 'errors', errors);
  };
  return (
    <div>
      <FormRender form={form} schema={schema} onFinish={onFinish} />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4
      </Button>
    </div>
  );
};

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.13.14-beta.5"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo"}},"form-render-demo-1":{component:Object(j.c)({loader:function(){var f=Object(b.a)(Object(h.a)().mark(function g(){var o,t,u,i,d,c,a,e,l,s,m,v;return Object(h.a)().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,n.e(7).then(n.t.bind(null,"3PQu",7));case 2:return o=p.sent.default,p.next=5,n.e(5).then(n.t.bind(null,"K+nK",7));case 5:return t=p.sent.default,p.next=8,n.e(2).then(n.t.bind(null,"MaXC",7));case 8:return p.t0=t,p.next=11,n.e(10).then(n.t.bind(null,"4IMT",7));case 11:return p.t1=p.sent,u=(0,p.t0)(p.t1),p.t2=t,p.next=16,n.e(73).then(n.bind(null,"fWQN"));case 16:return p.t3=p.sent,i=(0,p.t2)(p.t3),p.t4=t,p.next=21,n.e(74).then(n.bind(null,"mtLc"));case 21:return p.t5=p.sent,d=(0,p.t4)(p.t5),p.t6=t,p.next=26,n.e(77).then(n.bind(null,"yKVA"));case 26:return p.t7=p.sent,c=(0,p.t6)(p.t7),p.t8=t,p.next=31,n.e(75).then(n.bind(null,"879j"));case 31:return p.t9=p.sent,a=(0,p.t8)(p.t9),p.t10=t,p.next=36,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 36:return p.t11=p.sent,e=(0,p.t10)(p.t11),p.t12=o,p.next=41,Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(8)]).then(n.bind(null,"refC"));case 41:return p.t13=p.sent,l=(0,p.t12)(p.t13),s={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},m=function(S){(0,c.default)(C,S);var O=(0,a.default)(C);function C(){var D;(0,i.default)(this,C);for(var F=arguments.length,R=new Array(F),N=0;N<F;N++)R[N]=arguments[N];return D=O.call.apply(O,[this].concat(R)),D.onFinish=function(T,E){console.log("formData:",T,"errors",E)},D}return(0,d.default)(C,[{key:"render",value:function(){var F=this.props.form;return e.default.createElement("div",null,e.default.createElement(l.default,{form:F,schema:s,onFinish:this.onFinish}),e.default.createElement(u.default,{type:"primary",onClick:F.submit},"\u63D0\u4EA4"))}}]),C}(e.default.Component),v=(0,l.connectForm)(m),p.abrupt("return",v);case 47:case"end":return p.stop()}},g)}));function y(){return f.apply(this,arguments)}return y}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Button } from 'antd';
import FormRender, { connectForm } from 'form-render';
// import 'antd/dist/antd.css';    \u5982\u679C\u9879\u76EE\u6CA1\u6709\u5BF9antd\u3001less\u505A\u4EFB\u4F55\u914D\u7F6E\u7684\u8BDD\uFF0C\u9700\u8981\u52A0\u4E0A

const schema = {
  type: 'object',
  properties: {
    input1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      required: true,
    },
    select1: {
      title: '\u5355\u9009',
      type: 'string',
      enum: ['a', 'b', 'c'],
      enumNames: ['\u65E9', '\u4E2D', '\u665A'],
    },
  },
};

class Demo extends React.Component {
  onFinish = (formData, errors) => {
    console.log('formData:', formData, 'errors', errors);
  };

  render() {
    const { form } = this.props;
    return (
      <div>
        <FormRender form={form} schema={schema} onFinish={this.onFinish} />
        <Button type="primary" onClick={form.submit}>
          \u63D0\u4EA4
        </Button>
      </div>
    );
  }
}

export default connectForm(Demo);`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.13.14-beta.5"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo-1"}},"migrate-demo":{component:Object(j.c)({loader:function(){var f=Object(b.a)(Object(h.a)().mark(function g(){var o,t,u,i,d,c,a;return Object(h.a)().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return c=function(){var m=(0,i.useForm)(),v=function(p,S){S.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(S))):alert(JSON.stringify(p))};return u.default.createElement("div",null,u.default.createElement(i.default,{form:m,schema:d,onFinish:v}),u.default.createElement("button",{onClick:m.submit},"\u63D0\u4EA4"))},l.next=3,n.e(7).then(n.t.bind(null,"3PQu",7));case 3:return o=l.sent.default,l.next=6,n.e(5).then(n.t.bind(null,"K+nK",7));case 6:return t=l.sent.default,l.t0=t,l.next=10,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 10:return l.t1=l.sent,u=(0,l.t0)(l.t1),l.t2=o,l.next=15,Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(8)]).then(n.bind(null,"refC"));case 15:return l.t3=l.sent,i=(0,l.t2)(l.t3),d={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}},a=c,l.abrupt("return",a);case 20:case"end":return l.stop()}},g)}));function y(){return f.apply(this,arguments)}return y}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FormRender, { useForm } from 'form-render'; // 1. \u6539 import

const schema = {
  type: 'object',
  properties: {
    string: {
      title: '\u5B57\u7B26\u4E32',
      type: 'string',
      required: true,
    },
  },
};

function Demo() {
  const form = useForm(); // 2. \u83B7\u53D6 form \u5B9E\u4F8B\uFF0C\u73B0\u5728\u6240\u6709\u8868\u5355\u65B9\u6CD5\u90FD\u6302\u5728\u4E0A\u9762
  // 3 onSubmit \u7684\u5165\u53C2
  const onSubmit = (formData, valid) => {
    if (valid.length > 0) {
      alert(\`\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A\${JSON.stringify(valid)}\`);
    } else {
      alert(JSON.stringify(formData));
    }
  };
  return (
    <div>
      <FormRender
        form={form} // 4 \u8865\u4E0A
        schema={schema}
        onFinish={onSubmit} // 5. \u8865\u4E0A
        // formData={formData} // 6. \u5E72\u6389
        // onChange={setData}
        // onValidate={setValid}
      />
      <button onClick={form.submit}>\u63D0\u4EA4</button>
    </div>
  );
}
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.13.14-beta.5"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate-demo"}},"migrate-demo-1":{component:Object(j.c)({loader:function(){var f=Object(b.a)(Object(h.a)().mark(function g(){var o,t,u,i,d,c,a,e,l,s,m;return Object(h.a)().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.e(7).then(n.t.bind(null,"3PQu",7));case 2:return o=r.sent.default,r.next=5,n.e(5).then(n.t.bind(null,"K+nK",7));case 5:return t=r.sent.default,r.next=8,n.e(2).then(n.t.bind(null,"MaXC",7));case 8:return r.t0=t,r.next=11,n.e(10).then(n.t.bind(null,"4IMT",7));case 11:return r.t1=r.sent,u=(0,r.t0)(r.t1),r.t2=t,r.next=16,Promise.resolve().then(n.bind(null,"tJVT"));case 16:return r.t3=r.sent,i=(0,r.t2)(r.t3),r.next=20,Promise.all([n.e(2),n.e(18)]).then(n.t.bind(null,"cUip",7));case 20:return r.t4=t,r.next=23,Promise.all([n.e(0),n.e(4)]).then(n.t.bind(null,"iJl9",7));case 23:return r.t5=r.sent,d=(0,r.t4)(r.t5),r.t6=o,r.next=28,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 28:return r.t7=r.sent,c=(0,r.t6)(r.t7),r.next=32,Promise.all([n.e(71),n.e(72)]).then(n.bind(null,"DvhF"));case 32:return a=r.sent,e=d.default.TextArea,l={type:"object",properties:{number:{title:"\u6570\u5B57\u8F93\u5165\u6846",type:"number","ui:disabled":!0},checkbox:{title:"\u662F\u5426\u9009\u62E9",type:"boolean","ui:widget":"switch"}},required:["number"]},s=function(){var S=(0,c.useState)(JSON.stringify(l)),O=(0,i.default)(S,2),C=O[0],D=O[1],F=(0,c.useState)({}),R=(0,i.default)(F,2),N=R[0],T=R[1],E=function(){try{var K=(0,a.updateSchemaToNewVersion)(JSON.parse(C));T(K)}catch(Sn){console.log(Sn)}},A=function(K){D(K.target.value)},B=function(){D(JSON.stringify(JSON.parse(C),null,2))};return c.default.createElement("div",null,c.default.createElement("div",null,"\u586B\u5165\u65E7\u7248schema\uFF1A"),c.default.createElement(e,{style:{minHeight:400,marginTop:12,marginBottom:12},value:C,onChange:A}),c.default.createElement(u.default,{style:{marginRight:12},onClick:B},"\u683C\u5F0F\u5316\u65E7schema"),c.default.createElement(u.default,{type:"primary",onClick:E},"\u751F\u6210\u65B0\u7248schema"),c.default.createElement(e,{style:{minHeight:400,marginTop:12},value:JSON.stringify(N,null,2)}))},m=s,r.abrupt("return",m);case 38:case"end":return r.stop()}},g)}));function y(){return f.apply(this,arguments)}return y}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
import { Input, Button } from 'antd';
import { updateSchemaToNewVersion } from 'form-render/src/form-render-core/src/utils.js';

const TextArea = Input.TextArea;

const old = {
  type: 'object',
  properties: {
    number: {
      title: '\u6570\u5B57\u8F93\u5165\u6846',
      type: 'number',
      'ui:disabled': true,
    },
    checkbox: {
      title: '\u662F\u5426\u9009\u62E9',
      type: 'boolean',
      'ui:widget': 'switch',
    },
  },
  required: ['number'],
};

const Translator = () => {
  const [oldSchema, setOld] = useState(JSON.stringify(old));
  const [newSchema, setNew] = useState({});

  const handleClick = () => {
    try {
      const _newSchema = updateSchemaToNewVersion(JSON.parse(oldSchema));
      setNew(_newSchema);
    } catch (err) {
      console.log(err);
    }
  };

  const onOldChange = e => {
    setOld(e.target.value);
  };

  const formatOld = () => {
    setOld(JSON.stringify(JSON.parse(oldSchema), null, 2));
  };

  return (
    <div>
      <div>\u586B\u5165\u65E7\u7248schema\uFF1A</div>
      <TextArea
        style={{ minHeight: 400, marginTop: 12, marginBottom: 12 }}
        value={oldSchema}
        onChange={onOldChange}
      />
      <Button style={{ marginRight: 12 }} onClick={formatOld}>
        \u683C\u5F0F\u5316\u65E7schema
      </Button>
      <Button type="primary" onClick={handleClick}>
        \u751F\u6210\u65B0\u7248schema
      </Button>
      <TextArea
        style={{ minHeight: 400, marginTop: 12 }}
        value={JSON.stringify(newSchema, null, 2)}
      />
    </div>
  );
};

export default Translator;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.13.14-beta.5"},"react-dom":{version:">=16.8.0"}},identifier:"migrate-demo-1"}},"tutorial-demo":{component:Object(j.c)({loader:function(){var f=Object(b.a)(Object(h.a)().mark(function g(){var o,t,u,i,d,c,a;return Object(h.a)().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,n.e(7).then(n.t.bind(null,"3PQu",7));case 2:return o=l.sent.default,l.next=5,n.e(5).then(n.t.bind(null,"K+nK",7));case 5:return t=l.sent.default,l.t0=t,l.next=9,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 9:return l.t1=l.sent,u=(0,l.t0)(l.t1),l.t2=o,l.next=14,Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(8)]).then(n.bind(null,"refC"));case 14:return l.t3=l.sent,i=(0,l.t2)(l.t3),d={type:"object",properties:{address:{title:"\u5730\u5740",type:"string",placeholder:"\u8BF7\u8F93\u5165\u60A8\u7684\u5730\u5740",required:!0}}},c=function(){var m=(0,i.useForm)();return u.default.createElement(i.default,{schema:d,form:m})},a=c,l.abrupt("return",a);case 20:case"end":return l.stop()}},g)}));function y(){return f.apply(this,arguments)}return y}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FormRender, { useForm } from 'form-render';

const schema = {
  type: 'object',             
  properties: {                    
    address: {                    
      title: '\u5730\u5740',               
      type: 'string',              
      placeholder: '\u8BF7\u8F93\u5165\u60A8\u7684\u5730\u5740', 
      required: true,              
    },
  },
};

const Demo = () => {
  const form = useForm();
 
  return (
      <FormRender schema={schema} form={form}  />
  );
};

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.13.14-beta.5"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"tutorial-demo"}},"tutorial-demo-1":{component:Object(j.c)({loader:function(){var f=Object(b.a)(Object(h.a)().mark(function g(){var o,t,u,i,d,c,a;return Object(h.a)().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,n.e(7).then(n.t.bind(null,"3PQu",7));case 2:return o=l.sent.default,l.next=5,n.e(5).then(n.t.bind(null,"K+nK",7));case 5:return t=l.sent.default,l.t0=t,l.next=9,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 9:return l.t1=l.sent,u=(0,l.t0)(l.t1),l.t2=o,l.next=14,Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(8)]).then(n.bind(null,"refC"));case 14:return l.t3=l.sent,i=(0,l.t2)(l.t3),d={type:"object",properties:{address:{title:"\u5730\u5740",type:"string",placeholder:"\u8BF7\u8F93\u5165\u60A8\u7684\u5730\u5740",required:!0},date:{title:"\u65E5\u671F",type:"range",format:"date",placeholder:["\u8BF7\u9009\u62E9\u5F00\u59CB\u65E5\u671F","\u8BF7\u9009\u62E9\u7ED3\u675F\u65E5\u671F"]},location:{title:"\u5730\u533A",type:"string",enum:["0","1"],enumNames:["\u56FD\u5185","\u56FD\u5916"]}}},c=function(){var m=(0,i.useForm)();return u.default.createElement(i.default,{schema:d,form:m})},a=c,l.abrupt("return",a);case 20:case"end":return l.stop()}},g)}));function y(){return f.apply(this,arguments)}return y}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FormRender, { useForm } from 'form-render';

const schema = {
  type: 'object',             
  properties: {                    
   address: {                    
      title: '\u5730\u5740',               
      type: 'string',              
      placeholder: '\u8BF7\u8F93\u5165\u60A8\u7684\u5730\u5740', 
      required: true,              
    },
    // \u6DFB\u52A0\u65E5\u671F\u9009\u9879
    date: {
      title: '\u65E5\u671F',
      // range \u4EE3\u8868\u5F53\u524D\u9879\u7684\u6570\u636E\u662F\u4E00\u4E2A\u6570\u636E\uFF0C\u4E14\u957F\u5EA6\u4E3A2
      type: 'range',
      // format \u4EE3\u8868\u5F53\u524D\u9879\u7684\u683C\u5F0F\uFF0C\u8FD9\u91CC\u8BBE\u7F6E\u4E3A date\uFF0C\u5373\u65E5\u671F
      format: 'date', 
      placeholder: ['\u8BF7\u9009\u62E9\u5F00\u59CB\u65E5\u671F', '\u8BF7\u9009\u62E9\u7ED3\u675F\u65E5\u671F'],
    },
    // \u6DFB\u52A0\u5730\u533A\u9009\u9879
    location: {
      title: '\u5730\u533A',
      type: 'string',
      // enum \u548C enumNames \u4EE3\u8868\u6B64\u9879\u6709\u591A\u4E2A\u9009\u9879
      enum: ['0', '1'],
      enumNames: ['\u56FD\u5185', '\u56FD\u5916']
    },
  },
};

const Demo = () => {
  const form = useForm();
 
  return (
      <FormRender schema={schema} form={form}  />
  );
};

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.13.14-beta.5"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"tutorial-demo-1"}},"tutorial-demo-2":{component:Object(j.c)({loader:function(){var f=Object(b.a)(Object(h.a)().mark(function g(){var o,t,u,i,d,c,a,e;return Object(h.a)().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,n.e(7).then(n.t.bind(null,"3PQu",7));case 2:return o=s.sent.default,s.next=5,n.e(5).then(n.t.bind(null,"K+nK",7));case 5:return t=s.sent.default,s.next=8,n.e(2).then(n.t.bind(null,"MaXC",7));case 8:return s.t0=t,s.next=11,n.e(10).then(n.t.bind(null,"4IMT",7));case 11:return s.t1=s.sent,u=(0,s.t0)(s.t1),s.t2=t,s.next=16,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 16:return s.t3=s.sent,i=(0,s.t2)(s.t3),s.t4=o,s.next=21,Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(8)]).then(n.bind(null,"refC"));case 21:return s.t5=s.sent,d=(0,s.t4)(s.t5),c={type:"object",properties:{address:{title:"\u5730\u5740",type:"string",placeholder:"\u8BF7\u8F93\u5165\u60A8\u7684\u5730\u5740",required:!0},date:{title:"\u65E5\u671F",type:"range",format:"date",placeholder:["\u8BF7\u9009\u62E9\u5F00\u59CB\u65E5\u671F","\u8BF7\u9009\u62E9\u7ED3\u675F\u65E5\u671F"]},location:{title:"\u5730\u533A",type:"string",enum:["0","1"],enumNames:["\u56FD\u5185","\u56FD\u5916"],widget:"select"}}},a=function(){var v=(0,d.useForm)(),r=function(S){console.log("formData",S)};return i.default.createElement(i.default.Fragment,null,i.default.createElement(d.default,{schema:c,form:v,onFinish:r}),i.default.createElement(u.default,{onClick:v.submit,type:"primary"},"\u63D0\u4EA4"))},e=a,s.abrupt("return",e);case 27:case"end":return s.stop()}},g)}));function y(){return f.apply(this,arguments)}return y}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Button } from 'antd';
import FormRender, { useForm } from 'form-render';

const schema = {
  type: 'object',             
  properties: {                    
   address: {                    
      title: '\u5730\u5740',               
      type: 'string',              
      placeholder: '\u8BF7\u8F93\u5165\u60A8\u7684\u5730\u5740', 
      required: true,              
    },
    date: {
      title: '\u65E5\u671F',
      type: 'range',
      format: 'date',
      placeholder: ['\u8BF7\u9009\u62E9\u5F00\u59CB\u65E5\u671F', '\u8BF7\u9009\u62E9\u7ED3\u675F\u65E5\u671F'],
    },
    location: {
      title: '\u5730\u533A',
      type: 'string',
      enum: ['0', '1'],
      enumNames: ['\u56FD\u5185', '\u56FD\u5916'],
      widget: 'select',
    },
  },
};

const Demo = () => {
  const form = useForm();

  const onFinish = (formData) => {
    console.log('formData', formData);
  }
 
  return (
    <>
      <FormRender schema={schema} form={form} onFinish={onFinish} />
      <Button onClick={form.submit} type="primary">\u63D0\u4EA4</Button>
    </>
  );
};

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.13.14-beta.5"},"react-dom":{version:">=16.8.0"}},identifier:"tutorial-demo-2"}},"tutorial-demo-3":{component:Object(j.c)({loader:function(){var f=Object(b.a)(Object(h.a)().mark(function g(){var o,t,u,i,d,c,a,e;return Object(h.a)().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,n.e(7).then(n.t.bind(null,"3PQu",7));case 2:return o=s.sent.default,s.next=5,n.e(5).then(n.t.bind(null,"K+nK",7));case 5:return t=s.sent.default,s.next=8,n.e(2).then(n.t.bind(null,"MaXC",7));case 8:return s.t0=t,s.next=11,n.e(10).then(n.t.bind(null,"4IMT",7));case 11:return s.t1=s.sent,u=(0,s.t0)(s.t1),s.t2=t,s.next=16,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 16:return s.t3=s.sent,i=(0,s.t2)(s.t3),s.t4=o,s.next=21,Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(8)]).then(n.bind(null,"refC"));case 21:return s.t5=s.sent,d=(0,s.t4)(s.t5),c={type:"object",properties:{address:{title:"\u5730\u5740",type:"string",placeholder:"\u8BF7\u8F93\u5165\u60A8\u7684\u5730\u5740",required:!0},date:{title:"\u65E5\u671F",type:"range",format:"date",placeholder:["\u8BF7\u9009\u62E9\u5F00\u59CB\u65E5\u671F","\u8BF7\u9009\u62E9\u7ED3\u675F\u65E5\u671F"]},location:{title:"\u5730\u533A",type:"string",enum:["0","1"],enumNames:["\u56FD\u5185","\u56FD\u5916"],widget:"select"}}},a=function(){var v=(0,d.useForm)();i.default.useEffect(function(){v.setValues({address:"\u5730\u5740",date:["2022-12-31","2022-12-31"],location:"0"})},[]);var r=function(S){console.log("formData",S)};return i.default.createElement(i.default.Fragment,null,i.default.createElement(d.default,{schema:c,form:v,onFinish:r}),i.default.createElement(u.default,{onClick:v.submit,type:"primary"},"\u63D0\u4EA4"))},e=a,s.abrupt("return",e);case 27:case"end":return s.stop()}},g)}));function y(){return f.apply(this,arguments)}return y}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Button } from 'antd';
import FormRender, { useForm } from 'form-render';

const schema = {
  type: 'object',             
  properties: {                    
   address: {                    
      title: '\u5730\u5740',               
      type: 'string',              
      placeholder: '\u8BF7\u8F93\u5165\u60A8\u7684\u5730\u5740', 
      required: true,              
    },
    date: {
      title: '\u65E5\u671F',
      type: 'range',
      format: 'date',
      placeholder: ['\u8BF7\u9009\u62E9\u5F00\u59CB\u65E5\u671F', '\u8BF7\u9009\u62E9\u7ED3\u675F\u65E5\u671F'],
    },
    location: {
      title: '\u5730\u533A',
      type: 'string',
      enum: ['0', '1'],
      enumNames: ['\u56FD\u5185', '\u56FD\u5916'],
      widget: 'select',
    },
  },
};

const Demo = () => {
  const form = useForm();

  React.useEffect(() => {
    form.setValues({
      address: '\u5730\u5740',
      date: ['2022-12-31', '2022-12-31'],
      location: '0'
    })
  }, [])

  const onFinish = (formData) => {
    console.log('formData', formData);
  }
 
  return (
    <>
      <FormRender schema={schema} form={form} onFinish={onFinish} />
      <Button onClick={form.submit} type="primary">\u63D0\u4EA4</Button>
    </>
  );
};

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.13.14-beta.5"},"react-dom":{version:">=16.8.0"}},identifier:"tutorial-demo-3"}},"display-demo":{component:Object(j.c)({loader:function(){var f=Object(b.a)(Object(h.a)().mark(function g(){var o,t,u,i,d;return Object(h.a)().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,n.e(5).then(n.t.bind(null,"K+nK",7));case 2:return o=a.sent.default,a.t0=o,a.next=6,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 6:return a.t1=a.sent,t=(0,a.t0)(a.t1),a.t2=o,a.next=11,Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(9)]).then(n.bind(null,"bQjt"));case 11:return a.t3=a.sent,u=(0,a.t2)(a.t3),i=function(l){return{type:"object",displayType:l,properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date",description:"<a>123</a>"},objectName:{title:"\u5BF9\u8C61",bind:"obj",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",collapsed:!1,properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},d=function(){return t.default.createElement("div",null,t.default.createElement("h2",null,"display: row"),t.default.createElement(u.default,{schema:i("row")}),t.default.createElement("h2",null,"display: column"),t.default.createElement(u.default,{schema:i("column")}))},a.abrupt("return",d);case 16:case"end":return a.stop()}},g)}));function y(){return f.apply(this,arguments)}return y}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = displayType => ({
  type: 'object',
  displayType: displayType,
  properties: {
    range1: {
      title: '\u65E5\u671F',
      type: 'range',
      format: 'date',
      description: '<a>123</a>',
    },
    objectName: {
      title: '\u5BF9\u8C61',
      bind: 'obj',
      description: '\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B',
      type: 'object',
      collapsed: false,
      properties: {
        input1: {
          title: '\u7B80\u5355\u8F93\u5165\u6846',
          type: 'string',
          required: true,
        },
        select1: {
          title: '\u5355\u9009',
          type: 'string',
          enum: ['a', 'b', 'c'],
          enumNames: ['\u65E9', '\u4E2D', '\u665A'],
        },
      },
    },
  },
});

export default () => (
  <div>
    <h2>display: row</h2>
    <Form schema={schema('row')} />
    <h2>display: column</h2>
    <Form schema={schema('column')} />
  </div>
);`},"demo/display.js":{import:"../demo/display",content:P}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.13.14-beta.5"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo"}},"display-demo-1":{component:Object(j.c)({loader:function(){var f=Object(b.a)(Object(h.a)().mark(function g(){var o,t,u,i,d;return Object(h.a)().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,n.e(5).then(n.t.bind(null,"K+nK",7));case 2:return o=a.sent.default,a.t0=o,a.next=6,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 6:return a.t1=a.sent,t=(0,a.t0)(a.t1),a.t2=o,a.next=11,Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(9)]).then(n.bind(null,"bQjt"));case 11:return a.t3=a.sent,u=(0,a.t2)(a.t3),i={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0},check:{title:"box",type:"boolean",default:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},d=function(){return t.default.createElement(u.default,{readOnly:!0,schema:i})},a.abrupt("return",d);case 16:case"end":return a.stop()}},g)}));function y(){return f.apply(this,arguments)}return y}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  displayType: 'row',
  properties: {
    aa: {
      title: '\u5BF9\u8C61',
      type: 'object',
      properties: {
        input1: {
          title: '\u7B80\u5355\u8F93\u5165\u6846',
          type: 'string',
          default: 'hello world',
          required: true,
        },
        check: {
          title: 'box',
          type: 'boolean',
          default: true,
        },
        select1: {
          title: '\u5355\u9009',
          type: 'string',
          enum: ['a', 'b', 'c'],
          enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          default: 'a',
        },
      },
    },
  },
};

export default () => <Form readOnly schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:P}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.13.14-beta.5"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-1"}},"display-demo-2":{component:Object(j.c)({loader:function(){var f=Object(b.a)(Object(h.a)().mark(function g(){var o,t,u,i,d;return Object(h.a)().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,n.e(5).then(n.t.bind(null,"K+nK",7));case 2:return o=a.sent.default,a.t0=o,a.next=6,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 6:return a.t1=a.sent,t=(0,a.t0)(a.t1),a.t2=o,a.next=11,Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(9)]).then(n.bind(null,"bQjt"));case 11:return a.t3=a.sent,u=(0,a.t2)(a.t3),i={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0,width:"50%"},check:{title:"box",type:"boolean",default:!0,width:"50%",labelWidth:6},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},d=function(){return t.default.createElement(u.default,{labelWidth:"200",schema:i})},a.abrupt("return",d);case 16:case"end":return a.stop()}},g)}));function y(){return f.apply(this,arguments)}return y}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  displayType: 'row',
  properties: {
    aa: {
      title: '\u5BF9\u8C61',
      type: 'object',
      properties: {
        input1: {
          title: '\u7B80\u5355\u8F93\u5165\u6846',
          type: 'string',
          default: 'hello world',
          required: true,
          width: '50%',
        },
        check: {
          title: 'box',
          type: 'boolean',
          default: true,
          width: '50%',
          labelWidth: 6,
        },
        select1: {
          title: '\u5355\u9009',
          type: 'string',
          enum: ['a', 'b', 'c'],
          enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          default: 'a',
        },
      },
    },
  },
};

export default () => <Form labelWidth="200" schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:P}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.13.14-beta.5"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-2"}},"display-demo-3":{component:Object(j.c)({loader:function(){var f=Object(b.a)(Object(h.a)().mark(function g(){var o,t,u,i,d,c;return Object(h.a)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(5).then(n.t.bind(null,"K+nK",7));case 2:return o=e.sent.default,e.t0=o,e.next=6,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 6:return e.t1=e.sent,t=(0,e.t0)(e.t1),e.t2=o,e.next=11,Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(9)]).then(n.bind(null,"bQjt"));case 11:return e.t3=e.sent,u=(0,e.t2)(e.t3),i={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},d=function(){return t.default.createElement(u.default,{schema:i})},c=d,e.abrupt("return",c);case 17:case"end":return e.stop()}},g)}));function y(){return f.apply(this,arguments)}return y}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      // widget: 'cardList',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          },
          obj: {
            title: '\u5BF9\u8C61',
            type: 'object',
            properties: {
              input1: {
                title: '\u7B80\u5355\u8F93\u5165\u6846',
                type: 'string',
                required: true,
              },
              select1: {
                title: '\u5355\u9009',
                type: 'string',
                enum: ['a', 'b', 'c'],
                enumNames: ['\u65E9', '\u4E2D', '\u665A'],
              },
            },
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:P}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.13.14-beta.5"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-3"}},"display-demo-4":{component:Object(j.c)({loader:function(){var f=Object(b.a)(Object(h.a)().mark(function g(){var o,t,u,i,d,c;return Object(h.a)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(5).then(n.t.bind(null,"K+nK",7));case 2:return o=e.sent.default,e.t0=o,e.next=6,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 6:return e.t1=e.sent,t=(0,e.t0)(e.t1),e.t2=o,e.next=11,Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(9)]).then(n.bind(null,"bQjt"));case 11:return e.t3=e.sent,u=(0,e.t2)(e.t3),i={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"simpleList",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},d=function(){return t.default.createElement(u.default,{schema:i})},c=d,e.abrupt("return",c);case 17:case"end":return e.stop()}},g)}));function y(){return f.apply(this,arguments)}return y}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      widget: 'simpleList',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:P}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.13.14-beta.5"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-4"}},"display-demo-5":{component:Object(j.c)({loader:function(){var f=Object(b.a)(Object(h.a)().mark(function g(){var o,t,u,i,d,c;return Object(h.a)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(5).then(n.t.bind(null,"K+nK",7));case 2:return o=e.sent.default,e.t0=o,e.next=6,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 6:return e.t1=e.sent,t=(0,e.t0)(e.t1),e.t2=o,e.next=11,Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(9)]).then(n.bind(null,"bQjt"));case 11:return e.t3=e.sent,u=(0,e.t2)(e.t3),i={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"tableList",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},d=function(){return t.default.createElement(u.default,{schema:i})},c=d,e.abrupt("return",c);case 17:case"end":return e.stop()}},g)}));function y(){return f.apply(this,arguments)}return y}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      widget: 'tableList',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          input2: {
            title: '\u7B80\u5355\u8F93\u5165\u68462',
            type: 'string',
          },
          input3: {
            title: '\u7B80\u5355\u8F93\u5165\u68463',
            type: 'string',
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
            widget: 'select',
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:P}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.13.14-beta.5"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-5"}},"display-demo-6":{component:Object(j.c)({loader:function(){var f=Object(b.a)(Object(h.a)().mark(function g(){var o,t,u,i,d,c;return Object(h.a)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(5).then(n.t.bind(null,"K+nK",7));case 2:return o=e.sent.default,e.t0=o,e.next=6,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 6:return e.t1=e.sent,t=(0,e.t0)(e.t1),e.t2=o,e.next=11,Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(9)]).then(n.bind(null,"bQjt"));case 11:return e.t3=e.sent,u=(0,e.t2)(e.t3),i={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"drawerList",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"simpleList",props:{hideMove:!0},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},d=function(){return t.default.createElement(u.default,{schema:i})},c=d,e.abrupt("return",c);case 17:case"end":return e.stop()}},g)}));function y(){return f.apply(this,arguments)}return y}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      widget: 'drawerList',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          },
          listName2: {
            title: '\u5BF9\u8C61\u6570\u7EC4',
            description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
            type: 'array',
            widget: 'simpleList',
            props: {
              hideMove: true,
            },
            items: {
              type: 'object',
              properties: {
                input1: {
                  title: '\u7B80\u5355\u8F93\u5165\u6846',
                  type: 'string',
                  required: true,
                },
                select1: {
                  title: '\u5355\u9009',
                  type: 'string',
                  enum: ['a', 'b', 'c'],
                  enumNames: ['\u65E9', '\u4E2D', '\u665A'],
                },
              },
            },
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:P}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.13.14-beta.5"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-6"}},"display-demo-7":{component:Object(j.c)({loader:function(){var f=Object(b.a)(Object(h.a)().mark(function g(){var o,t,u,i,d,c;return Object(h.a)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(5).then(n.t.bind(null,"K+nK",7));case 2:return o=e.sent.default,e.t0=o,e.next=6,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 6:return e.t1=e.sent,t=(0,e.t0)(e.t1),e.t2=o,e.next=11,Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(9)]).then(n.bind(null,"bQjt"));case 11:return e.t3=e.sent,u=(0,e.t2)(e.t3),i={type:"object",displayType:"row",properties:{objectName:{title:"\u9ED8\u8BA4\u6837\u5F0F",bind:"obj",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",collapsed:!0,properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},objectName2:{title:"\u65E0\u8FB9\u6846\u6837\u5F0F",bind:"obj",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",collapsed:!0,theme:"collapse:pure",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},objectName3:{title:"\u5E7D\u7075\u6A21\u5F0F",bind:"obj",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",collapsed:!0,theme:"collapse:ghost",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}},d=function(){return t.default.createElement(u.default,{schema:i})},c=d,e.abrupt("return",c);case 17:case"end":return e.stop()}},g)}));function y(){return f.apply(this,arguments)}return y}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  displayType: 'row',
  properties: {
    objectName: {
      title: '\u9ED8\u8BA4\u6837\u5F0F',
      bind: 'obj',
      description: '\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B',
      type: 'object',
      collapsed: true,
      properties: {
        input1: {
          title: '\u7B80\u5355\u8F93\u5165\u6846',
          type: 'string',
          required: true,
        },
        select1: {
          title: '\u5355\u9009',
          type: 'string',
          enum: ['a', 'b', 'c'],
          enumNames: ['\u65E9', '\u4E2D', '\u665A'],
        },
      },
    },
    objectName2: {
      title: '\u65E0\u8FB9\u6846\u6837\u5F0F',
      bind: 'obj',
      description: '\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B',
      type: 'object',
      collapsed: true,
      theme: 'collapse:pure',
      properties: {
        input1: {
          title: '\u7B80\u5355\u8F93\u5165\u6846',
          type: 'string',
          required: true,
        },
        select1: {
          title: '\u5355\u9009',
          type: 'string',
          enum: ['a', 'b', 'c'],
          enumNames: ['\u65E9', '\u4E2D', '\u665A'],
        },
      },
    },
    objectName3: {
      title: '\u5E7D\u7075\u6A21\u5F0F',
      bind: 'obj',
      description: '\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B',
      type: 'object',
      collapsed: true,
      theme: 'collapse:ghost',
      properties: {
        input1: {
          title: '\u7B80\u5355\u8F93\u5165\u6846',
          type: 'string',
          required: true,
        },
        select1: {
          title: '\u5355\u9009',
          type: 'string',
          enum: ['a', 'b', 'c'],
          enumNames: ['\u65E9', '\u4E2D', '\u665A'],
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:P}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.13.14-beta.5"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-7"}},"display-demo-8":{component:Object(j.c)({loader:function(){var f=Object(b.a)(Object(h.a)().mark(function g(){var o,t,u,i,d,c;return Object(h.a)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(5).then(n.t.bind(null,"K+nK",7));case 2:return o=e.sent.default,e.t0=o,e.next=6,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 6:return e.t1=e.sent,t=(0,e.t0)(e.t1),e.t2=o,e.next=11,Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(9)]).then(n.bind(null,"bQjt"));case 11:return e.t3=e.sent,u=(0,e.t2)(e.t3),i={type:"object",displayType:"row",properties:{objectName:{title:"\u5361\u7247\u4E3B\u9898",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",theme:"card",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,width:"30%"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],width:"30%"},date:{title:"\u65F6\u95F4\u9009\u62E9",type:"string",format:"date",width:"30%"}}},objectName2:{title:"\u5361\u7247\u4E3B\u9898",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",theme:"card",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,width:"30%"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],width:"30%"},date:{title:"\u65F6\u95F4\u9009\u62E9",type:"string",format:"date",width:"30%"}}}}},d=function(){return t.default.createElement("div",null,t.default.createElement(u.default,{schema:i}))},c=d,e.abrupt("return",c);case 17:case"end":return e.stop()}},g)}));function y(){return f.apply(this,arguments)}return y}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  displayType: 'row',
  properties: {
    objectName: {
      title: '\u5361\u7247\u4E3B\u9898',
      description: '\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B',
      type: 'object',
      theme: 'card',
      properties: {
        input1: {
          title: '\u7B80\u5355\u8F93\u5165\u6846',
          type: 'string',
          required: true,
          width: '30%',
        },
        select1: {
          title: '\u5355\u9009',
          type: 'string',
          enum: ['a', 'b', 'c'],
          enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          width: '30%',
        },
        date: {
          title: '\u65F6\u95F4\u9009\u62E9',
          type: 'string',
          format: 'date',
          width: '30%',
        },
      },
    },
    objectName2: {
      title: '\u5361\u7247\u4E3B\u9898',
      description: '\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B',
      type: 'object',
      theme: 'card',
      properties: {
        input1: {
          title: '\u7B80\u5355\u8F93\u5165\u6846',
          type: 'string',
          required: true,
          width: '30%',
        },
        select1: {
          title: '\u5355\u9009',
          type: 'string',
          enum: ['a', 'b', 'c'],
          enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          width: '30%',
        },
        date: {
          title: '\u65F6\u95F4\u9009\u62E9',
          type: 'string',
          format: 'date',
          width: '30%',
        },
      },
    },
  },
};

const Demo = () => {
  return (
    <div>
      <Form schema={schema} />
    </div>
  );
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:P}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.13.14-beta.5"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-8"}},"display-demo-9":{component:Object(j.c)({loader:function(){var f=Object(b.a)(Object(h.a)().mark(function g(){var o,t,u,i,d,c;return Object(h.a)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(5).then(n.t.bind(null,"K+nK",7));case 2:return o=e.sent.default,e.t0=o,e.next=6,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 6:return e.t1=e.sent,t=(0,e.t0)(e.t1),e.t2=o,e.next=11,Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(9)]).then(n.bind(null,"bQjt"));case 11:return e.t3=e.sent,u=(0,e.t2)(e.t3),i={type:"object",displayType:"row",properties:{objectName:{title:"\u5E73\u94FA\u4E3B\u9898",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",theme:"tile",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,width:"30%"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],width:"30%"},date:{title:"\u65F6\u95F4\u9009\u62E9",type:"string",format:"date",width:"30%"}}},objectName2:{title:"\u5E73\u94FA\u4E3B\u9898",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",theme:"tile",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,width:"30%"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],width:"30%"},date:{title:"\u65F6\u95F4\u9009\u62E9",type:"string",format:"date",width:"30%"}}}}},d=function(){return t.default.createElement("div",null,t.default.createElement(u.default,{schema:i}))},c=d,e.abrupt("return",c);case 17:case"end":return e.stop()}},g)}));function y(){return f.apply(this,arguments)}return y}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  displayType: 'row',
  properties: {
    objectName: {
      title: '\u5E73\u94FA\u4E3B\u9898',
      description: '\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B',
      type: 'object',
      theme: 'tile',
      properties: {
        input1: {
          title: '\u7B80\u5355\u8F93\u5165\u6846',
          type: 'string',
          required: true,
          width: '30%',
        },
        select1: {
          title: '\u5355\u9009',
          type: 'string',
          enum: ['a', 'b', 'c'],
          enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          width: '30%',
        },
        date: {
          title: '\u65F6\u95F4\u9009\u62E9',
          type: 'string',
          format: 'date',
          width: '30%',
        },
      },
    },
    objectName2: {
      title: '\u5E73\u94FA\u4E3B\u9898',
      description: '\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B',
      type: 'object',
      theme: 'tile',
      properties: {
        input1: {
          title: '\u7B80\u5355\u8F93\u5165\u6846',
          type: 'string',
          required: true,
          width: '30%',
        },
        select1: {
          title: '\u5355\u9009',
          type: 'string',
          enum: ['a', 'b', 'c'],
          enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          width: '30%',
        },
        date: {
          title: '\u65F6\u95F4\u9009\u62E9',
          type: 'string',
          format: 'date',
          width: '30%',
        },
      },
    },
  },
};

const Demo = () => {
  return (
    <div>
      <Form schema={schema} />
    </div>
  );
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:P}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.13.14-beta.5"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-9"}},"form-methods-demo":{component:Object(j.c)({loader:function(){var f=Object(b.a)(Object(h.a)().mark(function g(){var o,t,u,i,d,c,a,e,l,s,m;return Object(h.a)().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.e(7).then(n.t.bind(null,"3PQu",7));case 2:return o=r.sent.default,r.next=5,n.e(5).then(n.t.bind(null,"K+nK",7));case 5:return t=r.sent.default,r.next=8,n.e(19).then(n.t.bind(null,"lfLe",7));case 8:return r.t0=t,r.next=11,n.e(17).then(n.t.bind(null,"Cp9S",7));case 11:return r.t1=r.sent,u=(0,r.t0)(r.t1),r.next=15,n.e(2).then(n.t.bind(null,"MaXC",7));case 15:return r.t2=t,r.next=18,n.e(10).then(n.t.bind(null,"4IMT",7));case 18:return r.t3=r.sent,i=(0,r.t2)(r.t3),r.next=22,n.e(11).then(n.t.bind(null,"tL+A",7));case 22:return r.t4=t,r.next=25,Promise.resolve().then(n.t.bind(null,"QpBz",7));case 25:return r.t5=r.sent,d=(0,r.t4)(r.t5),r.t6=t,r.next=30,Promise.resolve().then(n.bind(null,"tJVT"));case 30:return r.t7=r.sent,c=(0,r.t6)(r.t7),r.t8=o,r.next=35,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 35:return r.t9=r.sent,a=(0,r.t8)(r.t9),r.t10=o,r.next=40,Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(8)]).then(n.bind(null,"refC"));case 40:return r.t11=r.sent,e=(0,r.t10)(r.t11),r.next=44,n.e(12).then(n.bind(null,"OH0R"));case 44:return l=r.sent,s=function(){var S=(0,e.useForm)(),O=(0,a.useState)({}),C=(0,c.default)(O,2),D=C[0],F=C[1],R=function(){(0,l.fakeApi)("xxx/getForm").then(function(E){S.setValues({input1:"hello world",select1:"c"})})};(0,a.useEffect)(function(){(0,l.delay)(1e3).then(function(T){F({type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}})})},[]);var N=function(E,A){A.length>0?d.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(A.map(function(B){return B.name}))):(0,l.fakeApi)("xxx/submit",E).then(function(B){return d.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})};return a.default.createElement("div",{style:{width:"400px"}},a.default.createElement(e.default,{form:S,schema:D,onFinish:N}),a.default.createElement(u.default,null,a.default.createElement(i.default,{onClick:R},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),a.default.createElement(i.default,{type:"primary",onClick:S.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},m=s,r.abrupt("return",m);case 48:case"end":return r.stop()}},g)}));function y(){return f.apply(this,arguments)}return y}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
import { Button, Space, message } from 'antd';
import FormRender, { useForm } from 'form-render';
import { fakeApi, delay } from './utils';

const Demo = () => {
  const form = useForm();
  const [schema, setSchema] = useState({});

  const getRemoteData = () => {
    fakeApi('xxx/getForm').then(_ => {
      form.setValues({ input1: 'hello world', select1: 'c' });
    });
  };

  useEffect(() => {
    // \u5F02\u6B65\u52A0\u8F7D\u8868\u5355
    delay(1000).then(_ => {
      setSchema({
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          },
        },
      });
    });
  }, []);

  const onFinish = (data, errors) => {
    if (errors.length > 0) {
      message.error(
        '\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A' + JSON.stringify(errors.map(item => item.name))
      );
    } else {
      fakeApi('xxx/submit', data).then(_ => message.success('\u63D0\u4EA4\u6210\u529F\uFF01'));
    }
  };

  return (
    <div style={{ width: '400px' }}>
      <FormRender form={form} schema={schema} onFinish={onFinish} />
      <Space>
        <Button onClick={getRemoteData}>\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E</Button>
        <Button type="primary" onClick={form.submit}>
          \u63D0\u4EA4\uFF08\u89C1console\uFF09
        </Button>
      </Space>
    </div>
  );
};

export default Demo;`},"utils/index.js":{import:"./utils",content:M}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.13.14-beta.5"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo"}},"form-methods-demo-1":{component:Object(j.c)({loader:function(){var f=Object(b.a)(Object(h.a)().mark(function g(){var o,t,u,i,d,c,a,e,l,s,m,v;return Object(h.a)().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,n.e(5).then(n.t.bind(null,"K+nK",7));case 2:return o=p.sent.default,p.next=5,n.e(7).then(n.t.bind(null,"3PQu",7));case 5:return t=p.sent.default,p.next=8,n.e(2).then(n.t.bind(null,"MaXC",7));case 8:return p.t0=o,p.next=11,n.e(10).then(n.t.bind(null,"4IMT",7));case 11:return p.t1=p.sent,u=(0,p.t0)(p.t1),p.t2=o,p.next=16,Promise.resolve().then(n.bind(null,"PpiC"));case 16:return p.t3=p.sent,i=(0,p.t2)(p.t3),p.next=20,n.e(11).then(n.t.bind(null,"tL+A",7));case 20:return p.t4=o,p.next=23,Promise.resolve().then(n.t.bind(null,"QpBz",7));case 23:return p.t5=p.sent,d=(0,p.t4)(p.t5),p.t6=o,p.next=28,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 28:return p.t7=p.sent,c=(0,p.t6)(p.t7),p.t8=t,p.next=33,Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(8)]).then(n.bind(null,"refC"));case 33:return p.t9=p.sent,a=(0,p.t8)(p.t9),p.next=37,n.e(12).then(n.bind(null,"OH0R"));case 37:return e=p.sent,l=["data","errors","schema"],s={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},m=function(){var O=(0,a.useForm)(),C=function(R,N){N.length>0?d.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(N.map(function(T){return T.name}))):(0,e.fakeApi)("xxx/submit",R).then(function(T){return d.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},D=function(R){var N=R.data,T=R.errors,E=R.schema,A=(0,i.default)(R,l);return(0,e.fakeApi)("xxx/validation").then(function(B){return{name:"select1",error:["\u5916\u90E8\u6821\u9A8C\u9519\u8BEF"]}})};return c.default.createElement("div",{style:{width:"400px"}},c.default.createElement(a.default,{form:O,schema:s,beforeFinish:D,onFinish:C}),c.default.createElement(u.default,{type:"primary",onClick:O.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},v=m,p.abrupt("return",v);case 43:case"end":return p.stop()}},g)}));function y(){return f.apply(this,arguments)}return y}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Button, message } from 'antd';
import FormRender, { useForm } from 'form-render';
import { fakeApi } from './utils';

const schema = {
  type: 'object',
  properties: {
    input1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      required: true,
    },
    select1: {
      title: '\u5355\u9009',
      type: 'string',
      enum: ['a', 'b', 'c'],
      enumNames: ['\u65E9', '\u4E2D', '\u665A'],
    },
  },
};

const Demo = () => {
  const form = useForm();

  const onFinish = (data, errors) => {
    if (errors.length > 0) {
      message.error(
        '\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A' + JSON.stringify(errors.map(item => item.name))
      );
    } else {
      fakeApi('xxx/submit', data).then(_ => message.success('\u63D0\u4EA4\u6210\u529F\uFF01'));
    }
  };

  // \u670D\u52A1\u7AEF\u6821\u9A8C\u5728\u8FD9\u91CC\u505A
  const beforeFinish = ({ data, errors, schema, ...rest }) => {
    return fakeApi('xxx/validation').then(_ => {
      return { name: 'select1', error: ['\u5916\u90E8\u6821\u9A8C\u9519\u8BEF'] };
    });
  };

  return (
    <div style={{ width: '400px' }}>
      <FormRender
        form={form}
        schema={schema}
        beforeFinish={beforeFinish}
        onFinish={onFinish}
      />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4\uFF08\u89C1console\uFF09
      </Button>
    </div>
  );
};

export default Demo;`},"utils/index.js":{import:"./utils",content:M}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.13.14-beta.5"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-1"}},"form-methods-demo-2":{component:Object(j.c)({loader:function(){var f=Object(b.a)(Object(h.a)().mark(function g(){var o,t,u,i,d,c,a,e,l,s,m;return Object(h.a)().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.e(7).then(n.t.bind(null,"3PQu",7));case 2:return o=r.sent.default,r.next=5,n.e(5).then(n.t.bind(null,"K+nK",7));case 5:return t=r.sent.default,r.next=8,n.e(19).then(n.t.bind(null,"lfLe",7));case 8:return r.t0=t,r.next=11,n.e(17).then(n.t.bind(null,"Cp9S",7));case 11:return r.t1=r.sent,u=(0,r.t0)(r.t1),r.next=15,n.e(2).then(n.t.bind(null,"MaXC",7));case 15:return r.t2=t,r.next=18,n.e(10).then(n.t.bind(null,"4IMT",7));case 18:return r.t3=r.sent,i=(0,r.t2)(r.t3),r.next=22,n.e(11).then(n.t.bind(null,"tL+A",7));case 22:return r.t4=t,r.next=25,Promise.resolve().then(n.t.bind(null,"QpBz",7));case 25:return r.t5=r.sent,d=(0,r.t4)(r.t5),r.t6=t,r.next=30,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 30:return r.t7=r.sent,c=(0,r.t6)(r.t7),r.t8=o,r.next=35,Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(8)]).then(n.bind(null,"refC"));case 35:return r.t9=r.sent,a=(0,r.t8)(r.t9),r.next=39,n.e(12).then(n.bind(null,"OH0R"));case 39:return e=r.sent,l={type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F\u8303\u56F4",type:"range",format:"date"}}},s=function(){var S=(0,a.useForm)(),O=function(F,R){R.length>0?d.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(R.map(function(N){return N.name}))):(0,e.fakeApi)("xxx/submit",F).then(function(N){return d.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},C=function(){(0,e.fakeApi)("xxx/getForm").then(function(F){S.setValues({startDate:"2020-04-04",endDate:"2020-04-24"})})};return c.default.createElement("div",{style:{width:"400px"}},c.default.createElement(a.default,{form:S,schema:l,onFinish:O}),c.default.createElement(u.default,null,c.default.createElement(i.default,{onClick:C},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),c.default.createElement(i.default,{type:"primary",onClick:S.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},m=s,r.abrupt("return",m);case 44:case"end":return r.stop()}},g)}));function y(){return f.apply(this,arguments)}return y}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Button, message, Space } from 'antd';
import FormRender, { useForm } from 'form-render';
import { fakeApi } from './utils';

const schema = {
  type: 'object',
  properties: {
    dateRange: {
      bind: ['startDate', 'endDate'],
      title: '\u65E5\u671F\u8303\u56F4',
      type: 'range',
      format: 'date',
    },
  },
};

const Demo = () => {
  const form = useForm();

  const onFinish = (data, errors) => {
    if (errors.length > 0) {
      message.error(
        '\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A' + JSON.stringify(errors.map(item => item.name))
      );
    } else {
      fakeApi('xxx/submit', data).then(_ => message.success('\u63D0\u4EA4\u6210\u529F\uFF01'));
    }
  };

  const getRemoteData = () => {
    fakeApi('xxx/getForm').then(_ => {
      form.setValues({ startDate: '2020-04-04', endDate: '2020-04-24' });
    });
  };

  return (
    <div style={{ width: '400px' }}>
      <FormRender form={form} schema={schema} onFinish={onFinish} />
      <Space>
        <Button onClick={getRemoteData}>\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E</Button>
        <Button type="primary" onClick={form.submit}>
          \u63D0\u4EA4\uFF08\u89C1console\uFF09
        </Button>
      </Space>
    </div>
  );
};

export default Demo;`},"utils/index.js":{import:"./utils",content:M}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.13.14-beta.5"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-2"}},"form-methods-demo-3":{component:Object(j.c)({loader:function(){var f=Object(b.a)(Object(h.a)().mark(function g(){var o,t,u,i,d,c,a,e,l,s;return Object(h.a)().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,n.e(7).then(n.t.bind(null,"3PQu",7));case 2:return o=v.sent.default,v.next=5,n.e(5).then(n.t.bind(null,"K+nK",7));case 5:return t=v.sent.default,v.next=8,n.e(2).then(n.t.bind(null,"MaXC",7));case 8:return v.t0=t,v.next=11,n.e(10).then(n.t.bind(null,"4IMT",7));case 11:return v.t1=v.sent,u=(0,v.t0)(v.t1),v.next=15,n.e(11).then(n.t.bind(null,"tL+A",7));case 15:return v.t2=t,v.next=18,Promise.resolve().then(n.t.bind(null,"QpBz",7));case 18:return v.t3=v.sent,i=(0,v.t2)(v.t3),v.t4=o,v.next=23,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 23:return v.t5=v.sent,d=(0,v.t4)(v.t5),v.t6=o,v.next=28,Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(8)]).then(n.bind(null,"refC"));case 28:return v.t7=v.sent,c=(0,v.t6)(v.t7),v.next=32,n.e(12).then(n.bind(null,"OH0R"));case 32:return a=v.sent,e={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select1:{title:"\u5355\u9009",type:"string",widget:"select"}}}}},l=function(){var p=(0,c.useForm)(),S=function(){p.setSchemaByPath("obj1.select1",{enum:["east","south","west","north"],enumNames:["\u4E1C","\u5357","\u897F","\u5317"]})},O=function(D,F){F.length>0?i.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(F.map(function(R){return R.name}))):i.default.info(JSON.stringify(D))};return d.default.createElement("div",{style:{width:"400px"}},d.default.createElement(c.default,{form:p,schema:e,onMount:S,onFinish:O}),d.default.createElement(u.default,{type:"primary",onClick:p.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},s=l,v.abrupt("return",s);case 37:case"end":return v.stop()}},g)}));function y(){return f.apply(this,arguments)}return y}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
import { Button, message } from 'antd';
import FormRender, { useForm } from 'form-render';
import { fakeApi } from './utils';

const schema = {
  type: 'object',
  properties: {
    input1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      required: true,
    },
    obj1: {
      title: '\u5BF9\u8C61',
      description: '\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B',
      type: 'object',
      properties: {
        select1: {
          title: '\u5355\u9009',
          type: 'string',
          widget: 'select',
        },
      },
    },
  },
};

const Demo = () => {
  const form = useForm();

  const onMount = () => {
    form.setSchemaByPath('obj1.select1', {
      enum: ['east', 'south', 'west', 'north'],
      enumNames: ['\u4E1C', '\u5357', '\u897F', '\u5317'],
    });
  };

  const onFinish = (data, errors) => {
    if (errors.length > 0) {
      message.error(
        '\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A' + JSON.stringify(errors.map(item => item.name))
      );
    } else {
      message.info(JSON.stringify(data));
    }
  };

  return (
    <div style={{ width: '400px' }}>
      <FormRender
        form={form}
        schema={schema}
        onMount={onMount}
        onFinish={onFinish}
      />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4\uFF08\u89C1console\uFF09
      </Button>
    </div>
  );
};

export default Demo;`},"utils/index.js":{import:"./utils",content:M}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.13.14-beta.5"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-3"}},"function-demo":{component:Object(j.c)({loader:function(){var f=Object(b.a)(Object(h.a)().mark(function g(){var o,t,u,i,d,c,a;return Object(h.a)().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,n.e(7).then(n.t.bind(null,"3PQu",7));case 2:return o=l.sent.default,l.next=5,n.e(5).then(n.t.bind(null,"K+nK",7));case 5:return t=l.sent.default,l.t0=t,l.next=9,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 9:return l.t1=l.sent,u=(0,l.t0)(l.t1),l.t2=o,l.next=14,Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(8)]).then(n.bind(null,"refC"));case 14:return l.t3=l.sent,i=(0,l.t2)(l.t3),d={type:"object",properties:{checkbox1:{title:"\u5C55\u793A\u66F4\u591A\u5185\u5BB9",type:"boolean"},select1:{title:"\u8BF7\u5047\u539F\u56E0",type:"string",enum:["a","b","c"],enumNames:["\u75C5\u5047","\u6709\u4E8B","\u5176\u5B83 (\u9700\u6CE8\u660E\u5177\u4F53\u539F\u56E0)"],hidden:"{{formData.checkbox1 !== true}}",widget:"radio"},input1:{title:"\u5177\u4F53\u539F\u56E0",type:"string",format:"textarea",hidden:'{{rootValue.checkbox1 !== true || formData.select1 !== "c"}}'}}},c=function(){var m=(0,i.useForm)();return u.default.createElement(i.default,{form:m,schema:d})},a=c,l.abrupt("return",a);case 20:case"end":return l.stop()}},g)}));function y(){return f.apply(this,arguments)}return y}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FormRender, { useForm } from 'form-render';

const schema = {
  type: 'object',
  properties: {
    checkbox1: {
      title: '\u5C55\u793A\u66F4\u591A\u5185\u5BB9',
      type: 'boolean',
    },
    select1: {
      title: '\u8BF7\u5047\u539F\u56E0',
      type: 'string',
      enum: ['a', 'b', 'c'],
      enumNames: ['\u75C5\u5047', '\u6709\u4E8B', '\u5176\u5B83 (\u9700\u6CE8\u660E\u5177\u4F53\u539F\u56E0)'],
      hidden: '{{formData.checkbox1 !== true}}',
      widget: 'radio',
    },
    input1: {
      title: '\u5177\u4F53\u539F\u56E0',
      type: 'string',
      format: 'textarea',
      hidden: '{{rootValue.checkbox1 !== true || formData.select1 !== "c"}}',
    },
  },
};

const Demo1 = () => {
  const form = useForm();
  return <FormRender form={form} schema={schema} />;
};

export default Demo1;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.13.14-beta.5"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo"}},"function-demo-1":{component:Object(j.c)({loader:function(){var f=Object(b.a)(Object(h.a)().mark(function g(){var o,t,u,i,d;return Object(h.a)().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,n.e(5).then(n.t.bind(null,"K+nK",7));case 2:return o=a.sent.default,a.t0=o,a.next=6,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 6:return a.t1=a.sent,t=(0,a.t0)(a.t1),a.t2=o,a.next=11,Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(14)]).then(n.bind(null,"c2mQ"));case 11:return a.t3=a.sent,u=(0,a.t2)(a.t3),a.next=15,n.e(20).then(n.bind(null,"8iYR"));case 15:return i=a.sent,d=function(){return t.default.createElement(u.default,{schema:i.expression})},a.abrupt("return",d);case 18:case"end":return a.stop()}},g)}));function y(){return f.apply(this,arguments)}return y}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { expression } from '../json/schema';

export default () => <FR schema={expression} />;`},"demo/FR.jsx":{import:"../demo/FR",content:V},"json/schema.js":{import:"../json/schema",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.13.14-beta.5"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo-1"}},"lifeCycle-demo":{component:Object(j.c)({loader:function(){var f=Object(b.a)(Object(h.a)().mark(function g(){var o,t,u,i,d,c,a;return Object(h.a)().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,n.e(7).then(n.t.bind(null,"3PQu",7));case 2:return o=l.sent.default,l.t0=o,l.next=6,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 6:return l.t1=l.sent,t=(0,l.t0)(l.t1),l.t2=o,l.next=11,Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(8)]).then(n.bind(null,"refC"));case 11:return l.t3=l.sent,u=(0,l.t2)(l.t3),i=function(m){return new Promise(function(v){return setTimeout(v,m)})},d={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u9009\u62E9\u6846",description:"\u52A0\u8F7D\u4E2D...",type:"string",enum:[],widget:"radio"}}},c=function(){var m=(0,u.useForm)(),v=function(){m.setValues({input1:"hello world"}),i(3e3).then(function(p){m.setSchemaByPath("select1",{description:"",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]})})};return t.default.createElement(u.default,{form:m,schema:d,onMount:v})},a=c,l.abrupt("return",a);case 18:case"end":return l.stop()}},g)}));function y(){return f.apply(this,arguments)}return y}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
import { Button } from 'antd';
import FormRender, { useForm } from 'form-render';

const delay = ms => new Promise(res => setTimeout(res, ms));

const schema = {
  type: 'object',
  properties: {
    input1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      required: true,
    },
    select1: {
      title: '\u9009\u62E9\u6846',
      description: '\u52A0\u8F7D\u4E2D...',
      type: 'string',
      enum: [],
      widget: 'radio',
    },
  },
};

const Demo = () => {
  const form = useForm();

  const onMount = () => {
    form.setValues({ input1: 'hello world' });

    delay(3000).then(_ => {
      form.setSchemaByPath('select1', {
        description: '',
        enum: ['a', 'b', 'c'],
        enumNames: ['\u65E9', '\u4E2D', '\u665A'],
      });
    });
  };

  return <FormRender form={form} schema={schema} onMount={onMount} />;
};

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.13.14-beta.5"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"lifeCycle-demo"}},"listDisplay-demo":{component:Object(j.c)({loader:function(){var f=Object(b.a)(Object(h.a)().mark(function g(){var o,t,u,i,d,c;return Object(h.a)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(5).then(n.t.bind(null,"K+nK",7));case 2:return o=e.sent.default,e.t0=o,e.next=6,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 6:return e.t1=e.sent,t=(0,e.t0)(e.t1),e.t2=o,e.next=11,Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(9)]).then(n.bind(null,"bQjt"));case 11:return e.t3=e.sent,u=(0,e.t2)(e.t3),i={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,default:"\u5361\u7247\u5217\u8868"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},d=function(){return t.default.createElement(u.default,{schema:i})},c=d,e.abrupt("return",c);case 17:case"end":return e.stop()}},g)}));function y(){return f.apply(this,arguments)}return y}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      // widget: 'cardList',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
            default: 'a',
          },
          obj: {
            title: '\u5BF9\u8C61',
            type: 'object',
            properties: {
              input1: {
                title: '\u7B80\u5355\u8F93\u5165\u6846',
                type: 'string',
                required: true,
                default: '\u5361\u7247\u5217\u8868',
              },
              select1: {
                title: '\u5355\u9009',
                type: 'string',
                enum: ['a', 'b', 'c'],
                enumNames: ['\u65E9', '\u4E2D', '\u665A'],
              },
            },
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:P}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.13.14-beta.5"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo"}},"listDisplay-demo-1":{component:Object(j.c)({loader:function(){var f=Object(b.a)(Object(h.a)().mark(function g(){var o,t,u,i,d,c;return Object(h.a)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(5).then(n.t.bind(null,"K+nK",7));case 2:return o=e.sent.default,e.t0=o,e.next=6,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 6:return e.t1=e.sent,t=(0,e.t0)(e.t1),e.t2=o,e.next=11,Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(9)]).then(n.bind(null,"bQjt"));case 11:return e.t3=e.sent,u=(0,e.t2)(e.t3),i={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"simpleList",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},d=function(){return t.default.createElement(u.default,{schema:i})},c=d,e.abrupt("return",c);case 17:case"end":return e.stop()}},g)}));function y(){return f.apply(this,arguments)}return y}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      widget: 'simpleList',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:P}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.13.14-beta.5"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-1"}},"listDisplay-demo-2":{component:Object(j.c)({loader:function(){var f=Object(b.a)(Object(h.a)().mark(function g(){var o,t,u,i,d,c;return Object(h.a)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(5).then(n.t.bind(null,"K+nK",7));case 2:return o=e.sent.default,e.t0=o,e.next=6,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 6:return e.t1=e.sent,t=(0,e.t0)(e.t1),e.t2=o,e.next=11,Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(9)]).then(n.bind(null,"bQjt"));case 11:return e.t3=e.sent,u=(0,e.t2)(e.t3),i={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"tableList",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},d=function(){return t.default.createElement(u.default,{schema:i})},c=d,e.abrupt("return",c);case 17:case"end":return e.stop()}},g)}));function y(){return f.apply(this,arguments)}return y}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      widget: 'tableList',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          input2: {
            title: '\u7B80\u5355\u8F93\u5165\u68462',
            type: 'string',
          },
          input3: {
            title: '\u7B80\u5355\u8F93\u5165\u68463',
            type: 'string',
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
            widget: 'select',
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:P}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.13.14-beta.5"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-2"}},"listDisplay-demo-3":{component:Object(j.c)({loader:function(){var f=Object(b.a)(Object(h.a)().mark(function g(){var o,t,u,i,d,c;return Object(h.a)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(5).then(n.t.bind(null,"K+nK",7));case 2:return o=e.sent.default,e.t0=o,e.next=6,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 6:return e.t1=e.sent,t=(0,e.t0)(e.t1),e.t2=o,e.next=11,Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(9)]).then(n.bind(null,"bQjt"));case 11:return e.t3=e.sent,u=(0,e.t2)(e.t3),i={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"drawerList",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"simpleList",props:{hideMove:!0},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},d=function(){return t.default.createElement(u.default,{schema:i})},c=d,e.abrupt("return",c);case 17:case"end":return e.stop()}},g)}));function y(){return f.apply(this,arguments)}return y}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      widget: 'drawerList',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          },
          listName2: {
            title: '\u5BF9\u8C61\u6570\u7EC4',
            description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
            type: 'array',
            widget: 'simpleList',
            props: {
              hideMove: true,
            },
            items: {
              type: 'object',
              properties: {
                input1: {
                  title: '\u7B80\u5355\u8F93\u5165\u6846',
                  type: 'string',
                  required: true,
                },
                select1: {
                  title: '\u5355\u9009',
                  type: 'string',
                  enum: ['a', 'b', 'c'],
                  enumNames: ['\u65E9', '\u4E2D', '\u665A'],
                },
              },
            },
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:P}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.13.14-beta.5"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-3"}},"listDisplay-demo-4":{component:Object(j.c)({loader:function(){var f=Object(b.a)(Object(h.a)().mark(function g(){var o,t,u,i,d,c;return Object(h.a)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(5).then(n.t.bind(null,"K+nK",7));case 2:return o=e.sent.default,e.t0=o,e.next=6,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 6:return e.t1=e.sent,t=(0,e.t0)(e.t1),e.t2=o,e.next=11,Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(9)]).then(n.bind(null,"bQjt"));case 11:return e.t3=e.sent,u=(0,e.t2)(e.t3),i={type:"object",properties:{tabsName1:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"tabList",props:{type:"editable-card",tabName:"\u9879\u76EE",draggable:!0},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName1:{title:"\u5BF9\u8C61\u6570\u7EC4",type:"array",widget:"list1",props:{hideMove:!0},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},d=function(){return t.default.createElement(u.default,{schema:i})},c=d,e.abrupt("return",c);case 17:case"end":return e.stop()}},g)}));function y(){return f.apply(this,arguments)}return y}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    tabsName1: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      widget: 'tabList',
      props: {
        type: 'editable-card',
        tabName: '\u9879\u76EE', // \u9009\u9879\u5361\u663E\u793A\u6587\u5B57\uFF0C\u5BF9\u5E94antd\u4E2DTabs\u7684tab\u5C5E\u6027\u3002 \u8FD9\u91CC\u4E5F\u53EF\u4EE5\u662F\u6570\u7EC4
        draggable: true, //  \u662F\u5426\u53EF\u62D6\u62FD
      },
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          },
          listName1: {
            title: '\u5BF9\u8C61\u6570\u7EC4',
            type: 'array',
            widget: 'list1',
            props: {
              hideMove: true,
            },
            items: {
              type: 'object',
              properties: {
                input1: {
                  title: '\u7B80\u5355\u8F93\u5165\u6846',
                  type: 'string',
                  required: true,
                },
                select1: {
                  title: '\u5355\u9009',
                  type: 'string',
                  enum: ['a', 'b', 'c'],
                  enumNames: ['\u65E9', '\u4E2D', '\u665A'],
                },
              },
            },
          },
        },
      },
    },
  },
};

const Demo = () => <Form schema={schema} />;
export default Demo;`},"demo/display.js":{import:"../demo/display",content:P}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.13.14-beta.5"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-4"}},"listDisplay-demo-5":{component:Object(j.c)({loader:function(){var f=Object(b.a)(Object(h.a)().mark(function g(){var o,t,u,i,d,c;return Object(h.a)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(5).then(n.t.bind(null,"K+nK",7));case 2:return o=e.sent.default,e.t0=o,e.next=6,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 6:return e.t1=e.sent,t=(0,e.t0)(e.t1),e.t2=o,e.next=11,Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(9)]).then(n.bind(null,"bQjt"));case 11:return e.t3=e.sent,u=(0,e.t2)(e.t3),i={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"virtualList",itemProps:{buttons:[{callback:"hello",text:"\u590D\u5236"}]},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},d=function(){return t.default.createElement(u.default,{schema:i})},c=d,e.abrupt("return",c);case 17:case"end":return e.stop()}},g)}));function y(){return f.apply(this,arguments)}return y}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      widget: 'virtualList',
      itemProps: {
        buttons: [
          {
            callback: 'hello',
            text: '\u590D\u5236',
          },
        ],
      },
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          input2: {
            title: '\u7B80\u5355\u8F93\u5165\u68462',
            type: 'string',
          },
          input3: {
            title: '\u7B80\u5355\u8F93\u5165\u68463',
            type: 'string',
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
            widget: 'select',
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:P}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.13.14-beta.5"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-5"}},"mapping-demo":{component:Object(j.c)({loader:function(){var f=Object(b.a)(Object(h.a)().mark(function g(){var o,t,u,i,d,c,a,e,l;return Object(h.a)().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,n.e(7).then(n.t.bind(null,"3PQu",7));case 2:return o=m.sent.default,m.next=5,n.e(5).then(n.t.bind(null,"K+nK",7));case 5:return t=m.sent.default,m.next=8,n.e(2).then(n.t.bind(null,"MaXC",7));case 8:return m.t0=t,m.next=11,n.e(10).then(n.t.bind(null,"4IMT",7));case 11:return m.t1=m.sent,u=(0,m.t0)(m.t1),m.t2=t,m.next=16,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 16:return m.t3=m.sent,i=(0,m.t2)(m.t3),m.t4=o,m.next=21,Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(8)]).then(n.bind(null,"refC"));case 21:return m.t5=m.sent,d=(0,m.t4)(m.t5),c=function(r){var p=r.schema;return p.$id==="#"?i.default.createElement("div",null,r.children):i.default.createElement("div",null,"my custom object:",r.children)},a={type:"object",properties:{object2:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u8F93\u5165\u6846",type:"string"}}}},labelWidth:120,displayType:"row"},e=function(){var r=(0,d.useForm)(),p=function(O,C){console.log("formData:",O,"errors",C)};return i.default.createElement("div",null,i.default.createElement(d.default,{form:r,schema:a,onFinish:p,mapping:{object:"CustomComA"},widgets:{CustomComA:c}}),i.default.createElement(u.default,{type:"primary",onClick:r.submit},"\u63D0\u4EA4"))},l=e,m.abrupt("return",l);case 28:case"end":return m.stop()}},g)}));function y(){return f.apply(this,arguments)}return y}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Button } from 'antd';
import FormRender, { useForm } from 'form-render';

const CustomComA = props => {
  const { schema } = props;
  if (schema.$id === '#') {
    return <div>{props.children}</div>;
  }
  return (
    <div>
      my custom object:
      {props.children}
    </div>
  );
};

const schema = {
  type: 'object',
  properties: {
    object2: {
      title: '\u5BF9\u8C61',
      type: 'object',
      properties: {
        input1: {
          title: '\u8F93\u5165\u6846',
          type: 'string',
        },
      },
    },
  },
  labelWidth: 120,
  displayType: 'row',
};

const Demo = () => {
  const form = useForm();
  const onFinish = (formData, errors) => {
    console.log('formData:', formData, 'errors', errors);
  };
  return (
    <div>
      <FormRender
        form={form}
        schema={schema}
        onFinish={onFinish}
        mapping={{ object: 'CustomComA' }}
        widgets={{ CustomComA }}
      />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4
      </Button>
    </div>
  );
};

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.13.14-beta.5"},"react-dom":{version:">=16.8.0"}},identifier:"mapping-demo"}},"measure-demo":{component:Object(j.c)({loader:function(){var f=Object(b.a)(Object(h.a)().mark(function g(){var o,t,u,i,d,c,a,e;return Object(h.a)().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,n.e(7).then(n.t.bind(null,"3PQu",7));case 2:return o=s.sent.default,s.next=5,n.e(5).then(n.t.bind(null,"K+nK",7));case 5:return t=s.sent.default,s.next=8,n.e(2).then(n.t.bind(null,"MaXC",7));case 8:return s.t0=t,s.next=11,n.e(10).then(n.t.bind(null,"4IMT",7));case 11:return s.t1=s.sent,u=(0,s.t0)(s.t1),s.next=15,n.e(11).then(n.t.bind(null,"tL+A",7));case 15:return s.t2=t,s.next=18,Promise.resolve().then(n.t.bind(null,"QpBz",7));case 18:return s.t3=s.sent,i=(0,s.t2)(s.t3),s.t4=o,s.next=23,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 23:return s.t5=s.sent,d=(0,s.t4)(s.t5),s.t6=o,s.next=28,Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(8)]).then(n.bind(null,"refC"));case 28:return s.t7=s.sent,c=(0,s.t6)(s.t7),a=function(){var v=(0,c.useForm)({logOnMount:function(O){console.log("onMount",O)},logOnSubmit:function(O){console.log("onSubmit",O)}}),r={type:"object",properties:{input1:{title:"\u8F93\u5165\u6846",required:!0,type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u5DE6","\u4E2D","\u53F3"],widget:"radio"}}},p=function(O,C){C.length>0?i.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(C.map(function(D){return D.name}))):i.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")};return d.default.createElement("div",null,d.default.createElement(c.default,{id:"my-demo-form",form:v,schema:r,onFinish:p}),d.default.createElement(u.default,{type:"primary",onClick:v.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},e=a,s.abrupt("return",e);case 33:case"end":return s.stop()}},g)}));function y(){return f.apply(this,arguments)}return y}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
import { Button, Space, message } from 'antd';
import FormRender, { useForm } from 'form-render';

const Demo = () => {
  const form = useForm({
    logOnMount: info => {
      console.log('onMount', info);
    },
    logOnSubmit: info => {
      console.log('onSubmit', info);
    },
  });

  const schema = {
    type: 'object',
    properties: {
      input1: {
        title: '\u8F93\u5165\u6846',
        required: true,
        type: 'string',
      },
      select1: {
        title: '\u5355\u9009',
        type: 'string',
        enum: ['a', 'b', 'c'],
        enumNames: ['\u5DE6', '\u4E2D', '\u53F3'],
        widget: 'radio',
      },
    },
  };

  const onFinish = (data, errors) => {
    if (errors.length > 0) {
      message.error(
        '\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A' + JSON.stringify(errors.map(item => item.name))
      );
    } else {
      message.success('\u63D0\u4EA4\u6210\u529F\uFF01');
    }
  };

  return (
    <div>
      <FormRender
        id="my-demo-form"
        form={form}
        schema={schema}
        onFinish={onFinish}
      />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4\uFF08\u89C1console\uFF09
      </Button>
    </div>
  );
};

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.13.14-beta.5"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"measure-demo"}},"watch-demo":{component:Object(j.c)({loader:function(){var f=Object(b.a)(Object(h.a)().mark(function g(){var o,t,u,i,d,c;return Object(h.a)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(7).then(n.t.bind(null,"3PQu",7));case 2:return o=e.sent.default,e.t0=o,e.next=6,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 6:return e.t1=e.sent,t=(0,e.t0)(e.t1),e.t2=o,e.next=11,Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(8)]).then(n.bind(null,"refC"));case 11:return e.t3=e.sent,u=(0,e.t2)(e.t3),i={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"}}},d=function(){var s=(0,u.useForm)(),m={"#":function(r){console.log("\u8868\u5355\u7684\u5B9E\u65F6\u6570\u636E\u4E3A\uFF1A",r)},input1:function(r){s.setValueByPath("input2",r)}};return t.default.createElement(u.default,{form:s,schema:i,watch:m})},c=d,e.abrupt("return",c);case 17:case"end":return e.stop()}},g)}));function y(){return f.apply(this,arguments)}return y}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
import { Button } from 'antd';
import FormRender, { useForm } from 'form-render';

const schema = {
  type: 'object',
  properties: {
    input1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      required: true,
      placeholder: '\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165',
    },
    input2: {
      title: '\u7B80\u5355\u8F93\u5165\u68462',
      type: 'string',
    },
  },
};

const Demo = () => {
  const form = useForm();

  const watch = {
    // # \u4E3A\u5168\u5C40
    '#': val => {
      console.log('\u8868\u5355\u7684\u5B9E\u65F6\u6570\u636E\u4E3A\uFF1A', val);
    },
    input1: val => {
      form.setValueByPath('input2', val);
    },
  };

  return <FormRender form={form} schema={schema} watch={watch} />;
};

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.13.14-beta.5"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo"}},"watch-demo-1":{component:Object(j.c)({loader:function(){var f=Object(b.a)(Object(h.a)().mark(function g(){var o,t,u,i,d,c,a,e;return Object(h.a)().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,n.e(7).then(n.t.bind(null,"3PQu",7));case 2:return o=s.sent.default,s.next=5,n.e(5).then(n.t.bind(null,"K+nK",7));case 5:return t=s.sent.default,s.next=8,n.e(2).then(n.t.bind(null,"MaXC",7));case 8:return s.t0=t,s.next=11,n.e(10).then(n.t.bind(null,"4IMT",7));case 11:return s.t1=s.sent,u=(0,s.t0)(s.t1),s.t2=o,s.next=16,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 16:return s.t3=s.sent,i=(0,s.t2)(s.t3),s.t4=o,s.next=21,Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(8)]).then(n.bind(null,"refC"));case 21:return s.t5=s.sent,d=(0,s.t4)(s.t5),c={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"radio"}}}}},a=function(){var v=(0,d.useForm)(),r=function(O,C){C.length>0?alert("errorFields:"+JSON.stringify(C)):alert("formData:"+JSON.stringify(O,null,2))},p={input1:function(O){O&&O.length>2?v.setSchemaByPath("obj1.select",function(C){var D=C.enumNames;return{enumNames:D.map(function(F){return F+"a"})}}):v.setSchemaByPath("obj1.select",{enumNames:["\u65E9","\u4E2D","\u665A"]})}};return i.default.createElement("div",null,i.default.createElement(d.default,{form:v,schema:c,onFinish:r,watch:p}),i.default.createElement(u.default,{type:"",style:{marginRight:8},onClick:function(){return v.setSchemaByPath("input2",{title:"\u7F16\u8F91\u6846",format:"textarea"})}},"\u5C06 input \u6539\u4E3A textarea"),i.default.createElement(u.default,{type:"primary",onClick:v.submit},"\u63D0\u4EA4"))},e=a,s.abrupt("return",e);case 27:case"end":return s.stop()}},g)}));function y(){return f.apply(this,arguments)}return y}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
import { Button } from 'antd';
import FormRender, { useForm } from 'form-render';

const schema = {
  type: 'object',
  properties: {
    input1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      required: true,
      placeholder: '\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165',
    },
    input2: {
      title: '\u7B80\u5355\u8F93\u5165\u68462',
      type: 'string',
    },
    obj1: {
      title: '\u5BF9\u8C61',
      description: '\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B',
      type: 'object',
      properties: {
        select: {
          title: '\u5355\u9009',
          type: 'string',
          enum: ['a', 'b', 'c'],
          enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          widget: 'radio',
        },
      },
    },
  },
};

const Demo = () => {
  const form = useForm();
  const onFinish = (formData, errorFields) => {
    if (errorFields.length > 0) {
      alert('errorFields:' + JSON.stringify(errorFields));
    } else {
      alert('formData:' + JSON.stringify(formData, null, 2));
    }
  };

  const watch = {
    input1: val => {
      if (val && val.length > 2) {
        form.setSchemaByPath('obj1.select', ({ enumNames }) => {
          return {
            enumNames: enumNames.map(item => item + 'a'),
          };
        });
      } else {
        form.setSchemaByPath('obj1.select', { enumNames: ['\u65E9', '\u4E2D', '\u665A'] });
      }
    },
  };

  return (
    <div>
      <FormRender
        form={form}
        schema={schema}
        onFinish={onFinish}
        watch={watch}
      />
      <Button
        type=""
        style={{ marginRight: 8 }}
        onClick={() =>
          form.setSchemaByPath('input2', {
            title: '\u7F16\u8F91\u6846',
            format: 'textarea',
          })
        }
      >
        \u5C06 input \u6539\u4E3A textarea
      </Button>
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4
      </Button>
    </div>
  );
};

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.13.14-beta.5"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo-1"}},"widget-demo":{component:Object(j.c)({loader:function(){var f=Object(b.a)(Object(h.a)().mark(function g(){var o,t,u,i,d,c,a,e,l,s,m;return Object(h.a)().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.e(7).then(n.t.bind(null,"3PQu",7));case 2:return o=r.sent.default,r.next=5,n.e(5).then(n.t.bind(null,"K+nK",7));case 5:return t=r.sent.default,r.next=8,n.e(2).then(n.t.bind(null,"MaXC",7));case 8:return r.t0=t,r.next=11,n.e(10).then(n.t.bind(null,"4IMT",7));case 11:return r.t1=r.sent,u=(0,r.t0)(r.t1),r.next=15,Promise.all([n.e(2),n.e(18)]).then(n.t.bind(null,"cUip",7));case 15:return r.t2=t,r.next=18,Promise.all([n.e(0),n.e(4)]).then(n.t.bind(null,"iJl9",7));case 18:return r.t3=r.sent,i=(0,r.t2)(r.t3),r.t4=t,r.next=23,n.e(76).then(n.bind(null,"0Owb"));case 23:return r.t5=r.sent,d=(0,r.t4)(r.t5),r.t6=t,r.next=28,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 28:return r.t7=r.sent,c=(0,r.t6)(r.t7),r.t8=o,r.next=33,Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(8)]).then(n.bind(null,"refC"));case 33:return r.t9=r.sent,a=(0,r.t8)(r.t9),e={type:"object",properties:{string:{title:"\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6",type:"string",widget:"site"},select:{title:"\u5355\u9009",type:"number",enum:[1,2,3],enumNames:["\u9009\u98791","\u9009\u98792","\u9009\u98793"]}}},l=function(S){return console.log("widget props:",S),c.default.createElement(i.default,(0,d.default)({addonBefore:"https://",addonAfter:".com"},S))},s=function(){var S=(0,a.useForm)();return c.default.createElement("div",null,c.default.createElement(a.default,{form:S,schema:e,widgets:{site:l},onFinish:function(C){return alert(JSON.stringify(C,null,2))}}),c.default.createElement(u.default,{type:"primary",onClick:S.submit},"\u63D0\u4EA4"))},m=s,r.abrupt("return",m);case 40:case"end":return r.stop()}},g)}));function y(){return f.apply(this,arguments)}return y}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Input, Button } from 'antd';
import Form, { useForm } from 'form-render';

const schema = {
  type: 'object',
  properties: {
    string: {
      title: '\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6',
      type: 'string',
      widget: 'site',
    },
    select: {
      title: '\u5355\u9009',
      type: 'number',
      enum: [1, 2, 3],
      enumNames: ['\u9009\u98791', '\u9009\u98792', '\u9009\u98793'],
    },
  },
};

const SiteInput = props => {
  console.log('widget props:', props);
  return <Input addonBefore="https://" addonAfter=".com" {...props} />;
};

const Demo = () => {
  const form = useForm();
  return (
    <div>
      <Form
        form={form}
        schema={schema}
        widgets={{ site: SiteInput }}
        onFinish={formData => alert(JSON.stringify(formData, null, 2))}
      />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4
      </Button>
    </div>
  );
};

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.13.14-beta.5"},"react-dom":{version:">=16.8.0"}},identifier:"widget-demo"}},"schema-demo":{component:Object(j.c)({loader:function(){var f=Object(b.a)(Object(h.a)().mark(function g(){var o,t,u,i,d;return Object(h.a)().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,n.e(5).then(n.t.bind(null,"K+nK",7));case 2:return o=a.sent.default,a.t0=o,a.next=6,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 6:return a.t1=a.sent,t=(0,a.t0)(a.t1),a.t2=o,a.next=11,Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(14)]).then(n.bind(null,"c2mQ"));case 11:return a.t3=a.sent,u=(0,a.t2)(a.t3),a.next=15,n.e(20).then(n.bind(null,"8iYR"));case 15:return i=a.sent,d=function(){return t.default.createElement(u.default,{schema:i.titleTrick})},a.abrupt("return",d);case 18:case"end":return a.stop()}},g)}));function y(){return f.apply(this,arguments)}return y}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { titleTrick } from '../json/schema';

export default () => <FR schema={titleTrick} />;`},"demo/FR.jsx":{import:"../demo/FR",content:V},"json/schema.js":{import:"../json/schema",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.13.14-beta.5"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo"}},"form-render-dependencies":{component:Object(j.c)({loader:function(){var f=Object(b.a)(Object(h.a)().mark(function g(){return Object(h.a)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(22)]).then(n.bind(null,"ODQR"));case 2:return t.abrupt("return",t.sent.default);case 3:case"end":return t.stop()}},g)}));function y(){return f.apply(this,arguments)}return y}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:H}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.13.14-beta.5"},react:{version:">=16.8.0"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-dependencies"}},"form-render-listexpression":{component:Object(j.c)({loader:function(){var f=Object(b.a)(Object(h.a)().mark(function g(){return Object(h.a)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(22)]).then(n.bind(null,"5OWw"));case 2:return t.abrupt("return",t.sent.default);case 3:case"end":return t.stop()}},g)}));function y(){return f.apply(this,arguments)}return y}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:Y}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.13.14-beta.5"},react:{version:">=16.8.0"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-listexpression"}},"form-render-doublebind":{component:Object(j.c)({loader:function(){var f=Object(b.a)(Object(h.a)().mark(function g(){return Object(h.a)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(22)]).then(n.bind(null,"Xjjr"));case 2:return t.abrupt("return",t.sent.default);case 3:case"end":return t.stop()}},g)}));function y(){return f.apply(this,arguments)}return y}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:U}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.13.14-beta.5"},react:{version:">=16.8.0"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-doublebind"}},"form-render-rightpath":{component:Object(j.c)({loader:function(){var f=Object(b.a)(Object(h.a)().mark(function g(){return Object(h.a)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(22)]).then(n.bind(null,"bD0a"));case 2:return t.abrupt("return",t.sent.default);case 3:case"end":return t.stop()}},g)}));function y(){return f.apply(this,arguments)}return y}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:Z}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.13.14-beta.5"},react:{version:">=16.8.0"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-rightpath"}},"form-render-custommessage":{component:Object(j.c)({loader:function(){var f=Object(b.a)(Object(h.a)().mark(function g(){return Object(h.a)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(22)]).then(n.bind(null,"yBrT"));case 2:return t.abrupt("return",t.sent.default);case 3:case"end":return t.stop()}},g)}));function y(){return f.apply(this,arguments)}return y}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:x}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.13.14-beta.5"},react:{version:">=16.8.0"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-custommessage"}},"generator-modal":{component:Object(j.c)({loader:function(){var f=Object(b.a)(Object(h.a)().mark(function g(){return Object(h.a)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(22)]).then(n.bind(null,"Xmwd"));case 2:return t.abrupt("return",t.sent.default);case 3:case"end":return t.stop()}},g)}));function y(){return f.apply(this,arguments)}return y}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:k}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},"fr-generator":{version:"2.8.0-beta.0"},react:{version:">=16.14.0"},"react-dom":{version:">=16.14.0"}},identifier:"generator-modal"}},"generator-settings":{component:Object(j.c)({loader:function(){var f=Object(b.a)(Object(h.a)().mark(function g(){return Object(h.a)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(22)]).then(n.bind(null,"CpJK"));case 2:return t.abrupt("return",t.sent.default);case 3:case"end":return t.stop()}},g)}));function y(){return f.apply(this,arguments)}return y}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:q}},dependencies:{"fr-generator":{version:"2.8.0-beta.0"},react:{version:">=16.14.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.14.0"}},identifier:"generator-settings"}},"generator-layout":{component:Object(j.c)({loader:function(){var f=Object(b.a)(Object(h.a)().mark(function g(){return Object(h.a)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(22)]).then(n.bind(null,"YELL"));case 2:return t.abrupt("return",t.sent.default);case 3:case"end":return t.stop()}},g)}));function y(){return f.apply(this,arguments)}return y}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:_},"index.less":{import:"./index.less",content:W}},dependencies:{"fr-generator":{version:"2.8.0-beta.0"},react:{version:">=16.14.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.14.0"}},identifier:"generator-layout"}},"generator-transformer":{component:Object(j.c)({loader:function(){var f=Object(b.a)(Object(h.a)().mark(function g(){return Object(h.a)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(22)]).then(n.bind(null,"zDh9"));case 2:return t.abrupt("return",t.sent.default);case 3:case"end":return t.stop()}},g)}));function y(){return f.apply(this,arguments)}return y}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:nn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},"fr-generator":{version:"2.8.0-beta.0"},react:{version:">=16.14.0"},"react-dom":{version:">=16.14.0"}},identifier:"generator-transformer"}},"generator-demo":{component:Object(j.c)({loader:function(){var f=Object(b.a)(Object(h.a)().mark(function g(){var o,t,u,i,d,c;return Object(h.a)().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(5).then(n.t.bind(null,"K+nK",7));case 2:return o=e.sent.default,e.t0=o,e.next=6,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 6:return e.t1=e.sent,t=(0,e.t0)(e.t1),e.t2=o,e.next=11,Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(70)]).then(n.bind(null,"nYSz"));case 11:return e.t3=e.sent,u=(0,e.t2)(e.t3),i={type:"object",properties:{inputName:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string"}}},d=function(){return t.default.createElement("div",{style:{height:"80vh"}},t.default.createElement(u.default,{defaultValue:i}))},c=d,e.abrupt("return",c);case 17:case"end":return e.stop()}},g)}));function y(){return f.apply(this,arguments)}return y}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Generator from 'fr-generator';

const defaultValue = {
  type: 'object',
  properties: {
    inputName: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
    },
  },
};

const Demo = () => {
  return (
    <div style={{ height: '80vh' }}>
      <Generator defaultValue={defaultValue} />
    </div>
  );
};

export default Demo;`}},dependencies:{react:{version:">=16.14.0"},"fr-generator":{version:"2.8.0-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.14.0"}},transform:!0,defaultShowCode:!0,identifier:"generator-demo"}},"generator-playground":{component:Object(j.c)({loader:function(){var f=Object(b.a)(Object(h.a)().mark(function g(){return Object(h.a)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(22)]).then(n.bind(null,"taff"));case 2:return t.abrupt("return",t.sent.default);case 3:case"end":return t.stop()}},g)}));function y(){return f.apply(this,arguments)}return y}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:en},"index.less":{import:"./index.less",content:W}},dependencies:{"fr-generator":{version:"2.8.0-beta.0"},react:{version:">=16.14.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.14.0"}},identifier:"generator-playground"}},"docs-playground":{component:Object(j.c)({loader:function(){var f=Object(b.a)(Object(h.a)().mark(function g(){return Object(h.a)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(22)]).then(n.bind(null,"BASV"));case 2:return t.abrupt("return",t.sent.default);case 3:case"end":return t.stop()}},g)}));function y(){return f.apply(this,arguments)}return y}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:tn},"index.css":{import:"./index.css",content:rn},"main.js":{import:"./main",content:an},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:sn},"json/simplest.json":{import:"./json/simplest.json",content:on},"monaco/index.js":{import:"./monaco",content:ln},"monaco/theme.css":{import:"./theme.css",content:dn}},dependencies:{antd:{version:"4.22.8",css:"antd/dist/antd.css"},react:{version:"*"},"react-dom":{version:"*"},"form-render":{version:"1.13.14-beta.5"},"fr-generator":{version:"2.8.0-beta.0"},"json-parse-better-errors":{version:"1.0.2"},"fetch-jsonp":{version:"1.2.2"},querystring:{version:"0.2.0"},"react-simple-code-editor":{version:"0.11.3"},prismjs:{version:"1.29.0"}},identifier:"docs-playground"}},"table-render-advanced":{component:Object(j.c)({loader:function(){var f=Object(b.a)(Object(h.a)().mark(function g(){return Object(h.a)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(22)]).then(n.bind(null,"7ZP+"));case 2:return t.abrupt("return",t.sent.default);case 3:case"end":return t.stop()}},g)}));function y(){return f.apply(this,arguments)}return y}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:mn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},"@ant-design/icons":{version:"4.7.0"},react:{version:">=16.8.0"},"table-render":{version:"1.3.7"},"umi-request":{version:"1.4.0"},"react-dom":{version:">=16.0.0"}},transform:!0,defaultShowCode:!1,background:"rgb(245,245,245)",identifier:"table-render-advanced"}},"table-render-nosearch":{component:Object(j.c)({loader:function(){var f=Object(b.a)(Object(h.a)().mark(function g(){return Object(h.a)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(22)]).then(n.bind(null,"CfUQ"));case 2:return t.abrupt("return",t.sent.default);case 3:case"end":return t.stop()}},g)}));function y(){return f.apply(this,arguments)}return y}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:un}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},"@ant-design/icons":{version:"4.7.0"},react:{version:">=16.8.0"},"table-render":{version:"1.3.7"},"umi-request":{version:"1.4.0"},"react-dom":{version:">=16.0.0"}},transform:!0,defaultShowCode:!1,background:"rgb(245,245,245)",identifier:"table-render-nosearch"}},"table-render-notitle":{component:Object(j.c)({loader:function(){var f=Object(b.a)(Object(h.a)().mark(function g(){return Object(h.a)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(22)]).then(n.bind(null,"/usH"));case 2:return t.abrupt("return",t.sent.default);case 3:case"end":return t.stop()}},g)}));function y(){return f.apply(this,arguments)}return y}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:cn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},"@ant-design/icons":{version:"4.7.0"},react:{version:">=16.8.0"},"table-render":{version:"1.3.7"},"umi-request":{version:"1.4.0"},"react-dom":{version:">=16.0.0"}},transform:!0,defaultShowCode:!1,background:"rgb(245,245,245)",identifier:"table-render-notitle"}},"table-render-paramtable":{component:Object(j.c)({loader:function(){var f=Object(b.a)(Object(h.a)().mark(function g(){return Object(h.a)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(22)]).then(n.bind(null,"48jF"));case 2:return t.abrupt("return",t.sent.default);case 3:case"end":return t.stop()}},g)}));function y(){return f.apply(this,arguments)}return y}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:pn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},"@ant-design/icons":{version:"4.7.0"},react:{version:">=16.8.0"},"table-render":{version:"1.3.7"},umi:{version:"3.5.33"},"umi-request":{version:"1.4.0"},"react-dom":{version:">=16.0.0"}},transform:!0,defaultShowCode:!1,background:"rgb(245,245,245)",identifier:"table-render-paramtable"}},"table-render-usets":{component:Object(j.c)({loader:function(){var f=Object(b.a)(Object(h.a)().mark(function g(){return Object(h.a)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(22)]).then(n.bind(null,"rnjr"));case 2:return t.abrupt("return",t.sent.default);case 3:case"end":return t.stop()}},g)}));function y(){return f.apply(this,arguments)}return y}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:fn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},"@ant-design/icons":{version:"4.7.0"},react:{version:">=16.8.0"},"table-render":{version:"1.3.7"},"umi-request":{version:"1.4.0"},"react-dom":{version:">=16.0.0"}},transform:!0,defaultShowCode:!1,background:"rgb(245,245,245)",identifier:"table-render-usets"}},"table-render-error":{component:Object(j.c)({loader:function(){var f=Object(b.a)(Object(h.a)().mark(function g(){return Object(h.a)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(22)]).then(n.bind(null,"WeJr"));case 2:return t.abrupt("return",t.sent.default);case 3:case"end":return t.stop()}},g)}));function y(){return f.apply(this,arguments)}return y}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:hn}},dependencies:{react:{version:">=16.8.0"},"table-render":{version:"1.3.7"},antd:{version:"4.x",css:"antd/dist/antd.css"}},transform:!0,defaultShowCode:!1,background:"rgb(245,245,245)",identifier:"table-render-error"}},"table-render-demo":{component:Object(j.c)({loader:function(){var f=Object(b.a)(Object(h.a)().mark(function g(){var o,t,u,i,d,c,a,e,l;return Object(h.a)().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,n.e(5).then(n.t.bind(null,"K+nK",7));case 2:return o=m.sent.default,m.t0=o,m.next=6,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 6:return m.t1=m.sent,t=(0,m.t0)(m.t1),m.next=10,Promise.all([n.e(0),n.e(1),n.e(2),n.e(4),n.e(69)]).then(n.bind(null,"osAV"));case 10:for(u=m.sent,i=[],d=0;d<6;d++)i.push({id:d.toString(),title:"\u6807\u9898".concat(d+1),created_at:new Date().getTime()});return c={type:"object",properties:{title:{title:"\u6807\u9898",type:"string",width:"30%",labelWidth:45},created_at:{title:"\u521B\u5EFA\u65F6\u95F4",type:"string",format:"date",width:"30%"}}},a=[{title:"\u6807\u9898",dataIndex:"title"},{title:"\u521B\u5EFA\u65F6\u95F4",key:"since",dataIndex:"created_at",valueType:"date"},{title:"\u64CD\u4F5C",render:function(r,p){return t.default.createElement("a",{onClick:function(){return alert(r.title)}},"\u7F16\u8F91")}}],e=function(){var r=function(){return{rows:i,total:i.length}};return t.default.createElement(t.default.Fragment,null,t.default.createElement(u.Search,{schema:c,api:r}),t.default.createElement(u.Table,{headerTitle:"\u6700\u7B80\u8868\u683C",columns:a,rowKey:"id"}))},l=(0,u.withTable)(e),m.abrupt("return",l);case 18:case"end":return m.stop()}},g)}));function y(){return f.apply(this,arguments)}return y}(),loading:()=>null}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Table, Search, withTable } from 'table-render';

const dataSource = [];
for (let i = 0; i < 6; i++) {
  dataSource.push({
    id: i.toString(),
    title: \`\u6807\u9898\${i + 1}\`,
    created_at: new Date().getTime(),
  });
}

// \u8BE6\u7EC6\u53EF\u89C1 form-render \u7684\u4F7F\u7528
const schema = {
  type: 'object',
  properties: {
    title: {
      title: '\u6807\u9898',
      type: 'string',
      width: '30%',
      labelWidth: 45,
    },
    created_at: {
      title: '\u521B\u5EFA\u65F6\u95F4',
      type: 'string',
      format: 'date',
      width: '30%',
    },
  },
};

// \u914D\u7F6E\u5B8C\u5168\u900F\u4F20 antd table
const columns = [
  {
    title: '\u6807\u9898',
    dataIndex: 'title',
  },
  {
    title: '\u521B\u5EFA\u65F6\u95F4',
    key: 'since',
    dataIndex: 'created_at',
    valueType: 'date',
  },
  {
    title: '\u64CD\u4F5C',
    render: (row, record) => <a onClick={() => alert(row.title)}>\u7F16\u8F91</a>,
  },
];

const Wrapper = () => {
  const searchApi = () => {
    return {
      rows: dataSource,
      total: dataSource.length,
    };
  };
  return (
    <>
      <Search schema={schema} api={searchApi} />
      <Table headerTitle="\u6700\u7B80\u8868\u683C" columns={columns} rowKey="id" />
    </>
  );
};

export default withTable(Wrapper);`}},dependencies:{react:{version:">=16.8.0"},"table-render":{version:"1.3.7"},antd:{version:"4.x",css:"antd/dist/antd.css"}},transform:!0,defaultShowCode:!1,background:"rgb(245,245,245)",identifier:"table-render-demo"}}},gn=n("Zs1V"),vn=n("KcUY"),bn=n.n(vn),jn=n("nKUr"),Cn=w.default=f=>Object(jn.jsx)(bn.a,Object($.a)(Object($.a)({},f),{},{config:z,demos:yn,apis:gn}))},RGYn:function(I){I.exports=JSON.parse('{"menus":{"zh-CN":{"*":[{"path":"/","title":"\u9996\u9875","meta":{}}],"/chart-render":[{"path":"/chart-render","title":"\u4F7F\u7528\u6559\u7A0B","meta":{"order":1}},{"path":"/chart-render/demo","title":"\u6848\u4F8B\u5C55\u793A","meta":{"order":2}},{"title":"\u6E32\u67D3\u533A\u7EC4\u4EF6","meta":{"order":3,"__fallback":true},"children":[{"path":"/chart-render/widget/custom","title":"\u81EA\u5B9A\u4E49\u7EC4\u4EF6","meta":{"order":999}}]},{"path":"/chart-render/faq","title":"\u5E38\u89C1\u95EE\u9898","meta":{"order":4}},{"title":"\u3010\u5F52\u6863\u30110.1.X \u7248\u672C\u6587\u6863","meta":{"__fallback":true,"order":999},"children":[{"path":"/chart-render/0.1.x","title":"\u4F7F\u7528\u6559\u7A0B","meta":{"order":1}},{"path":"/chart-render/0.1.x/demo/line","title":"\u6848\u4F8B\u5C55\u793A - \u6298\u7EBF\u56FE","meta":{"order":2}},{"path":"/chart-render/0.1.x/demo/column","title":"\u6848\u4F8B\u5C55\u793A - \u67F1\u72B6\u56FE","meta":{"order":3}},{"path":"/chart-render/0.1.x/demo/pivot-table","title":"\u6848\u4F8B\u5C55\u793A - \u4EA4\u53C9\u8868","meta":{"order":4}},{"path":"/chart-render/0.1.x/faq","title":"\u5E38\u89C1\u95EE\u9898","meta":{"order":5}}]}],"/form-render":[{"path":"/form-render","title":"\u5F00\u59CB\u4F7F\u7528","meta":{"order":1}},{"path":"/form-render/tutorial","title":"\u6559\u7A0B","meta":{"order":1}},{"title":"\u9AD8\u7EA7\u7528\u6CD5","meta":{"order":3,"__fallback":true},"children":[{"path":"/form-render/advanced/function","title":"\u8868\u5355\u8054\u52A8","meta":{"order":1}},{"path":"/form-render/advanced/widget","title":"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\uFF08widget\uFF09","meta":{"order":2}},{"path":"/form-render/advanced/mapping","title":"\u8986\u76D6\u9ED8\u8BA4\u7EC4\u4EF6\uFF08mapping\uFF09","meta":{"order":3}},{"path":"/form-render/advanced/form-methods","title":"\u8868\u5355\u65B9\u6CD5\uFF08form\uFF09","meta":{"order":4}},{"path":"/form-render/advanced/watch","title":"\u8868\u5355\u76D1\u542C\uFF08watch\uFF09","meta":{"order":5}},{"path":"/form-render/advanced/life-cycle","title":"\u751F\u547D\u5468\u671F (\u52A0\u8F7D - \u63D0\u4EA4)","meta":{"order":6}},{"path":"/form-render/advanced/list-display","title":"\u5217\u8868\u7684\u5C55\u793A","meta":{"order":7}},{"path":"/form-render/advanced/display","title":"\u5C55\u793A\u7684\u6700\u4F73\u5B9E\u8DF5","meta":{"order":8}},{"path":"/form-render/advanced/measure","title":"\u8868\u5355\u5065\u5EB7\u5EA6 & \u63D0\u6548","meta":{"order":9}}]},{"title":"\u793A\u4F8B","meta":{"order":4,"__fallback":true},"children":[{"path":"/form-render/demos","title":"\u7528\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u5B8C\u6210\u590D\u6742\u8054\u52A8","meta":{"order":1}},{"path":"/form-render/demos/index1","title":"\u5217\u8868\u8054\u52A8","meta":{"order":2}},{"path":"/form-render/demos/index2","title":"\u53CC\u5411\u7ED1\u5B9A","meta":{"order":3}},{"path":"/form-render/demos/index3","title":"\u5982\u4F55\u6B63\u786E\u4E66\u5199 path","meta":{"order":4}},{"path":"/form-render/demos/index4","title":"\u5B9A\u5236\u5C55\u793A\u6821\u9A8C\u4FE1\u606F","meta":{"order":4}},{"path":"/form-render/demos/testing","title":"\u9519\u8BEF\u6392\u67E5\u6280\u5DE7","meta":{"order":9}}]},{"title":"API","meta":{"order":6,"__fallback":true},"children":[{"path":"/form-render/api/props","title":"Props","meta":{"order":1}},{"path":"/form-render/api/schema","title":"Schema","meta":{"order":2}},{"path":"/form-render/api/inner-widget","title":"\u5185\u7F6E\u7EC4\u4EF6","meta":{"order":3}}]},{"path":"/form-render/faq","title":"\u5E38\u89C1\u95EE\u9898","meta":{"order":7}}],"/generator":[{"path":"/generator","title":"\u5982\u4F55\u4F7F\u7528","meta":{"order":1}},{"path":"/generator/playground","title":"Playground","meta":{"order":2}},{"path":"/generator/demo","title":"\u6848\u4F8B\u6F14\u793A","meta":{"order":3}},{"path":"/generator/faq","title":"\u5E38\u89C1\u95EE\u9898","meta":{"order":4}}],"/playground":[{"path":"/playground","title":"Playground","meta":{"order":1}}],"/table-render":[{"path":"/table-render","title":"\u4F7F\u7528\u6559\u7A0B","meta":{"order":1}},{"path":"/table-render/demo","title":"\u6848\u4F8B\u5C55\u793A","meta":{"order":2}},{"path":"/table-render/faq","title":"\u5E38\u89C1\u95EE\u9898","meta":{"order":4}}],"/tools":[{"title":"PropToSchema","meta":{"__fallback":true},"children":[],"path":"/tools/proptypes"},{"title":"VSCode \u63D2\u4EF6","meta":{"__fallback":true},"children":[],"path":"/tools/vscode"}]}},"locales":[{"name":"zh-CN","label":"\u4E2D\u6587"}],"navs":{"zh-CN":[{"title":"FormRender","path":"/form-render"},{"title":"TableRender","path":"/table-render"},{"title":"ChartRender","path":"/chart-render"},{"title":"\u8868\u5355\u8BBE\u8BA1\u5668","path":"/generator"},{"title":"Playground","path":"/playground"},{"title":"\u5468\u8FB9\u5DE5\u5177","path":"/tools","children":[{"title":"PropToSchema","path":"/tools/proptypes"},{"title":"VSCode \u63D2\u4EF6","path":"/tools/vscode"},{"title":"\u65E7\u7248\u6587\u6863","path":"https://x-components.gitee.io/form-render/"}]},{"title":"\u66F4\u65B0\u65E5\u5FD7","children":[{"title":"FormRender","path":"https://github.com/alibaba/x-render/blob/master/packages/form-render/CHANGELOG.md"},{"title":"TableRender","path":"https://github.com/alibaba/x-render/blob/master/packages/table-render/CHANGELOG.md"},{"title":"ChartRender","path":"https://github.com/alibaba/x-render/blob/master/packages/chart-render/CHANGELOG.md"}]},{"title":"GitHub","path":"https://github.com/alibaba/x-render"}]},"title":"XRender","logo":"https://img.alicdn.com/tfs/TB17UtINiLaK1RjSZFxXXamPFXa-606-643.png","mode":"site","repository":{"url":"https://github.com/alibaba/x-render","branch":"master","platform":"github"},"theme":{},"exportStatic":{}}')},Zs1V:function(I){I.exports=JSON.parse("{}")}}]);
