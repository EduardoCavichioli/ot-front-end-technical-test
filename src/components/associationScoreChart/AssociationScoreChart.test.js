import React from 'react';
import { shallow } from 'enzyme';
import AssoctiationScoreChart from './AssociationScoreChart';

describe('Component - Association Score Chart', () => {
  const data = {
    datatypes: {
      literature: 0.19517772984514156,
      rna_expression: 0.07211524912501942,
      genetic_association: 0.22628011248337543,
      somatic_mutation: 0.0,
      known_drug: 0.0,
      animal_model: 0.0,
      affected_pathway: 0.5
    }
  }
  
  it('must render component', () => {
    shallow(<AssoctiationScoreChart datatypes={data} />);
  });

});

