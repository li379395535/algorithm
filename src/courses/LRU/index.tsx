import React, { FunctionComponent, useState } from 'react';
import { Select, Table, Tabs } from 'antd';

import LRUCache from './model/LRUCache';
import { JobInfos, Cities } from './config';
import { TabType } from './constants';
import Palindrom from './Palindrome';

const { Option } = Select;
const Cache = new LRUCache<Object[]>(10);
const LRU: FunctionComponent = () => {
  const [city, setCity] = useState<string>();
  const [data, setData] = useState<Object[]>();
  const handleCitySelect = (value: string) => {
    const jobInfo = Cache.findByKey(value);
    if (jobInfo) {
      setData(jobInfo.Value);
    } else {
      const jobInfos = JobInfos.filter((j) => j.city === value);
      Cache.setCache(value, jobInfos);
      setData(jobInfos);
    }
    setCity(value);
  };

  return (
    <div className="lru-cache-wapper">
      <Tabs defaultActiveKey={TabType.LRUCache}>
        <Tabs.TabPane key={TabType.LRUCache} tab={TabType.LRUCache}>
          <div>
            <Select style={{ width: 200 }} onSelect={handleCitySelect} value={city}>
              {
                Cities.map((c) => (
                  <Option value={c} key={c}>
                    {c}
                  </Option>
                ))
              }
            </Select>
          </div>
          <div>
            <Table
              dataSource={data}
              rowKey="id"
              columns={[
                {
                  dataIndex: 'city',
                  title: '城市',
                }, {
                  dataIndex: 'position',
                  title: '职位',
                }, {
                  dataIndex: 'salary',
                  title: '薪水',
                }, {
                  dataIndex: 'skill',
                  title: '技能要求',
                },
              ]}
            />
          </div>
        </Tabs.TabPane>
        <Tabs.TabPane key={TabType.Palindrome} tab={TabType.Palindrome}>
          <Palindrom />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

export default LRU;
