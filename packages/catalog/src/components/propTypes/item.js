import PropTypes from 'prop-types';


const pricePropType = () => PropTypes.shape({
  amount: PropTypes.number,
  currency: PropTypes.string,
  label: PropTypes.string,
});

const dimensionsPropType = () => PropTypes.shape({
  product: dimensionPropType(),
  packaging: dimensionPropType(),
});

const dimensionPropType = () => PropTypes.shape({
  depth: measurementPropType(),
  diameter: measurementPropType(),
  length: measurementPropType(),
  weight: measurementPropType(),
  width: measurementPropType(),
});

const measurementPropType = () => PropTypes.shape({
  value: PropTypes.string,
  units: unitOfMeasurementPropType(),
});

const unitOfMeasurementPropType = () => PropTypes.oneOf([
  'millimeter',
  'centimeter',
  'inch',
  'foot',
  'cubic_inch',
  'cubic_meter',
  'gram',
  'kilogram',
  'meter',
  'ounce',
  'pound',
]);

const imagePropType = () => PropTypes.shape({
  url: PropTypes.string,
  tags: PropTypes.arrayOf(imageTagPropType()),
});

const imageTagPropType = () => PropTypes.oneOf([
  'thumbnail',
  'checkout',
]);

const localPropType = () => PropTypes.shape({
  experience: experienceSummaryPropType(),
  prices: PropTypes.arrayOf(localizedPricePropType()),
  rates: PropTypes.arrayOf(ratePropType()),
  spot_rates: PropTypes.arrayOf(PropTypes.object),
  status: subcatalogItemStatusPropType(),
  attributes: PropTypes.objectOf(PropTypes.string),
  price_attributes: PropTypes.objectOf(priceWithBasePropType()),
});

const experienceSummaryPropType = () => PropTypes.shape({
  id: PropTypes.string,
  key: PropTypes.string,
  name: PropTypes.string,
  country: PropTypes.string,
  currency: PropTypes.string,
  language: PropTypes.string,
});

const localizedPricePropType = () => PropTypes.oneOfType([
  localizedItemPricePropType(),
  localizedItemVatPropType(),
  localizedItemDutyPropType(),
  localizedTotalPropType(),
]);

const localizedItemPricePropType = () => PropTypes.shape({
  currency: PropTypes.string,
  amount: PropTypes.number,
  label: PropTypes.string,
  base: pricePropType(),
  includes: includedLeviesPropType(),
});

const includedLeviesPropType = () => PropTypes.shape({
  key: includedLevyKeyPropType(),
  label: PropTypes.string,
});

const includedLevyKeyPropType = () => PropTypes.oneOf([
  'duty',
  'vat',
  'vat_and_duty',
  'none',
]);

const localizedItemVatPropType = () => PropTypes.shape({
  currency: PropTypes.string,
  amount: PropTypes.number,
  label: PropTypes.string,
  base: pricePropType(),
  name: PropTypes.string,
  adjustment: localizedAdjustmentPropType(),
});

const localizedAdjustmentPropType = () => PropTypes.shape({
  currency: PropTypes.string,
  amount: PropTypes.number,
  label: PropTypes.string,
  base: pricePropType(),
  reason: adjustmentReasonPropType(),
});

const adjustmentReasonPropType = () => PropTypes.shape({
  key: adjustmentReasonKeyPropType(),
  label: PropTypes.string,
});

const adjustmentReasonKeyPropType = () => PropTypes.oneOf([
  'duty_deminimis',
  'vat_deminimis',
]);

const localizedItemDutyPropType = () => PropTypes.shape({
  currency: PropTypes.string,
  amount: PropTypes.number,
  label: PropTypes.string,
  base: pricePropType(),
  adjustment: localizedAdjustmentPropType(),
});

const localizedTotalPropType = () => PropTypes.shape({
  currency: PropTypes.string,
  amount: PropTypes.number,
  label: PropTypes.string,
  base: pricePropType(),
});

const ratePropType = () => PropTypes.shape({
  id: PropTypes.string,
  base: PropTypes.string,
  target: PropTypes.string,
  effective_at: PropTypes.string,
  value: PropTypes.number,
});

const subcatalogItemStatusPropType = () => PropTypes.oneOf([
  'excluded',
  'included',
  'restricted',
]);

const priceWithBasePropType = () => PropTypes.shape({
  currency: PropTypes.string,
  amount: PropTypes.number,
  label: PropTypes.string,
  base: pricePropType(),
});

const generatedPropType = () => PropTypes.shape({
  id: PropTypes.string,
  number: PropTypes.string,
  locale: PropTypes.string,
  name: PropTypes.string,
  price: pricePropType(),
  categories: PropTypes.arrayOf(PropTypes.string),
  description: PropTypes.string,
  attributes: PropTypes.objectOf(PropTypes.string),
  dimensions: dimensionsPropType(),
  images: PropTypes.arrayOf(imagePropType()),
  local: localPropType(),
});

export default generatedPropType;
