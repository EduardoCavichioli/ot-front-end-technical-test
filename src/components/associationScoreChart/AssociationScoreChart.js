import React from 'react';
import { datatypesType } from '../../helpers/types';

function AssociationScoreChart(props) {
  const {
    literature,
    rna_expression,
    genetic_association,
    somatic_mutation,
    known_drug,
    animal_model,
    affected_pathway
  } = props.datatypes;
  
  return (
    <div>
      <span>{literature}</span><br/>
      <span>{rna_expression}</span><br/>
      <span>{genetic_association}</span><br/>
      <span>{somatic_mutation}</span><br/>
      <span>{known_drug}</span><br/>
      <span>{animal_model}</span><br/>
      <span>{affected_pathway}</span>
    </div>
  );
}

AssociationScoreChart.propTypes = {
  datatypes: datatypesType
}


export default AssociationScoreChart;
