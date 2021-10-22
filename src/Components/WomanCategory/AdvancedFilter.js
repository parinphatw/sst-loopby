import React from 'react';
import styled from 'styled-components';

import { Button, Collapse, Checkbox } from 'antd';

const { Panel } = Collapse;

const { Group } = Checkbox;

const AdvancedFilterContainer = styled(({ className, children }) => (
  <div className={className}>{children}</div>
))`
  display: flex;
  flex-direction: column;
  width: 160px;
`;

const AdvancedFilterHeader = styled(({ className }) => (
  <div className={className}>
    <div>ตั้งค่า</div>
    <Button type="link" style={{ color: '#C53735', padding: 0 }}>
      ล้างตัวเลือก
    </Button>
  </div>
))`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AdvancedFilterContent = styled(() => {
  return (
    <Collapse expandIconPosition="right" bordered={false} style={{ backgroundColor: 'inherit' }}>
      <Panel header="ประเภท" key="ประเภท">
        <Group options={['สินค้าใหม่', 'เสื้อ', 'เสื้อคลุม']} />
      </Panel>
      <Panel header="ไซส์" key="ไซส์">
        <Group
          options={['โอเวอร์ไซส์', 'XS', 'S', 'M', 'L']}
          style={{ display: 'flex', flexDirection: 'column' }}
        />
      </Panel>
      <Panel header="ราคา" key="ราคา">
        <div>hello</div>
      </Panel>
      <Panel header="สี" key="สี">
        <div>hello</div>
      </Panel>
      <Panel header="เนื้อผ้า" key="เนื้อผ้า">
        <div>hello</div>
      </Panel>
      <Panel header="แบรนด์" key="แบรนด์">
        <div>hello</div>
      </Panel>
      <Panel header="ผู้จำหน่าย" key="ผู้จำหน่าย">
        <div>hello</div>
      </Panel>
    </Collapse>
  );
})`
  * {
    border: none;
  }
`;

const AdvancedFilter = () => {
  return (
    <AdvancedFilterContainer>
      <AdvancedFilterHeader />
      <div style={{ width: '100%', height: 0, borderBottom: '.5px solid #BDBDBD' }} />
      <AdvancedFilterContent />
    </AdvancedFilterContainer>
  );
};

export default AdvancedFilter;
