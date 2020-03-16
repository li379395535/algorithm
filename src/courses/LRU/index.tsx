import React, { FunctionComponent, useState } from 'react';
import { Select, Table } from 'antd';

import LRUCache from './model/LRUCache';
interface LRUProps {
}

const Cities = [
  '上海',
  '杭州',
  '广州',
];

const JobInfos = [
  {
    id: 1,
    city: '上海',
    position: '开发',
    salary: 20000,
    skill: 'c',
  }, {
    id: 2,
    city: '杭州',
    position: '开发',
    salary: 20000,
    skill: 'c',
  }, {
    id: 3,
    city: '上海',
    position: '开发',
    salary: 20000,
    skill: 'c',
  }, {
    id: 4,
    city: '杭州',
    position: '开发',
    salary: 20000,
    skill: 'c',
  }, {
    id: 5,
    city: '杭州',
    position: '开发',
    salary: 20000,
    skill: 'c',
  }, {
    id: 6,
    city: '杭州',
    position: '开发',
    salary: 20000,
    skill: 'c',
  }, {
    id: 7,
    city: '广州',
    position: '开发',
    salary: 20000,
    skill: 'c',
  },
];

const { Option } = Select;
const Cache = new LRUCache<Object[]>(10);
const LRU: FunctionComponent<LRUProps> = () => {
  const [city, setCity] = useState<string>();
  const [data, setData] = useState<Object[]>();
  const handleCitySelect = (value: string) => {
    const jobInfo = Cache.findByKey(value);
    if (jobInfo) {
      setData(jobInfo.Value);
    } else {
      const jobInfos = JobInfos.filter(j => j.city === value);
      Cache.setCache(value, jobInfos);
      setData(jobInfos);
    }
    setCity(value);
  }

  return (
    <div className="lru-cache-wapper">
      <div>
        <Select style={{ width: 200 }} onSelect={handleCitySelect} value={city}>
          {
            Cities.map(c => (
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
    </div>
  );
}

export default LRU;