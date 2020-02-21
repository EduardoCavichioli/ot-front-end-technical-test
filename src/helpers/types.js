import PropTypes from 'prop-types';

export const targetType = PropTypes.shape({
  id: PropTypes.string,
  gene_info: PropTypes.shape({
    symbol: PropTypes.string,
    name: PropTypes.string
  }),
  tractability: PropTypes.object
});

export const datatypesType = PropTypes.shape({
  literature: PropTypes.number,
  rna_expression: PropTypes.number,
  genetic_association: PropTypes.number,
  somatic_mutation: PropTypes.number,
  known_drug: PropTypes.number,
  animal_model: PropTypes.number,
  affected_pathway: PropTypes.number
});

export const associationScoreType = PropTypes.shape({
  overall: PropTypes.number,
  datatypes: datatypesType,
  datasources: PropTypes.object
});

export const geneDataType = PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.string,
    is_direct: PropTypes.bool,
    target: targetType,
    association_score: associationScoreType,
    disease: PropTypes.object,
    evidence_count: PropTypes.object
  })
);
