import React from 'react';
import { shallow } from 'enzyme';
import DataTable from './DataTable';

describe('Component - Data Table', () => {
  const data = [];
  beforeEach(() => {
    data.push({
      id: 'id',
      target: {
        id: 'id',
        gene_info: {
          symbol: 'symbol',
          name: 'name'
        }
      },
      association_score: {
        overall: 0
      }
    });
  });

  it('must render component', () => {
    shallow(<DataTable data={data} />);
  });

  it('must render a table', () => {
    const wrapper = shallow(<DataTable data={data} />);
    expect(wrapper.find('table')).toHaveLength(1);
  });

});

