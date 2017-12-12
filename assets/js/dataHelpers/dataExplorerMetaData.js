/*
name: name of the varialbe
text: text to display to user
type: number or category, etc. (to use to convert to correct tyep when parsing)
format: format to show to user (use d3.format to do this)
include: whether to include in the scatter or not
*/
export const varsMetaAllObj = {
  cagr01to15: {
    text: 'Annual Growth 2001–15 (%)',
    type: 'number',
    format: ',.1p',
    include: true,
  },
  cagr10to15: {
    text: 'Annual Growth 2010–15 (%)',
    type: 'number',
    format: ',.1p',
    include: true,
  },
  median_age: {
    text: 'Median age',
    type: 'number',
    format: ',.0f',
    include: true,
  },
  business_starts_2014_per10K: {
    text: 'Business starts in 2014 per 10K people',
    type: 'number',
    format: ',.0f',
    include: false,
  },
  gmp_billion_usd: {
    text: 'Gross Metro Product (Billion USD)',
    type: 'number',
    format: ',.0f',
    include: true,
  },
  per_capita_income: {
    text: 'Per capita income',
    type: 'number',
    format: ',.0f',
    include: true,
  },
  aggr_income_billion: {
    text: 'Aggregate income (billion USD)',
    type: 'number',
    format: ',.0f',
    include: true,
  },
  gini: {
    text: 'Inequality (Gini index)',
    type: 'number',
    format: '.2f',
    include: true,
  },
  income_above_poverty_line: {
    text: 'Income above poverty line (%)',
    format: ',.1p',
    type: 'number',
    include: true,
  },
  households_not_receiving_food_stamp_snap: {
    text: 'Households not receiving food stamps/SNAP (%)',
    type: 'number',
    format: ',.1p',
    include: true,
  },
  patents_count: {
    text: 'Total patents',
    type: 'number',
    format: ',.0f',
    include: true,
  },
  patents_per10K: {
    text: 'Patents per 10K people',
    type: 'number',
    format: ',.0f',
    include: true,
  },
  research_universities: {
    text: 'Number of research universities',
    type: 'number',
    format: ',.0f',
    include: true,
  },
  bachelors_degree_or_higher: {
    text: "Bachelor's degree or higher (%)",
    type: 'number',
    format: ',.1p',
    include: true,
  },
  'internet subscription': {
    text: 'Households with an internet subscription (%)',
    type: 'number',
    format: ',.1p',
    include: true,
  },
  broadband_subscription: {
    text: 'Households with broadband subscription (%)',
    type: 'number',
    format: ',.1p',
    include: true,
  },
  restaurants_per10K: {
    text: 'Restaurants per 10K people',
    type: 'number',
    format: ',.0f',
    include: true,
  },
  in_migration_from_diff_msa: {
    text: 'Moved in from different MSA (%)',
    type: 'number',
    format: ',.1p',
    include: true,
  },

  percent_in_labor_force: {
    text: 'In labor force (%)',
    type: 'number',
    format: ',.1p',
    include: true,
  },

  percent_employed: {
    text: 'employed (%)',
    type: 'number',
    format: ',.1p',
    include: true,
  },
  jobs_created_2014_per1K: {
    text: 'Jobs created in 2014 per 1K people',
    type: 'number',
    format: ',.0f',
    include: false,
  },
  fortune1000_count: {
    text: 'Fortune 1000 Companies',
    type: 'number',
    format: ',.0f',
    include: true,
  },
  fortune1000_per1M: {
    text: 'Fortune 1000 per 1M people',
    type: 'number',
    format: ',.0f',
    include: true,
  },
  inc5000_count: {
    text: 'Inc 5000 Companies',
    type: 'number',
    format: ',.0f',
    include: true,
  },
  inc5000_per1M: {
    text: 'Inc 5000 per 1M people',
    type: 'number',
    format: ',.0f',
    include: true,
  },
  unicorns_count: {
    text: 'Unicorns',
    type: 'number',
    format: ',.0f',
    include: true,
  },
  unicorns_per1M: {
    text: 'Unicorns per 1M people',
    type: 'number',
    format: ',.0f',
    include: true,
  },
  population14: {
    text: 'Population',
    type: 'number',
    format: ',.0f',
    include: false,
  },
  unemployed_count: {
    text: 'Unemployed population',
    type: 'number',
    format: ',.0f',
    include: false,
  },
  unemployment_percent: {
    text: 'Unemployment Rate (Feb 2017)',
    type: 'number',
    format: ',.1p',
    include: false,
  },
  women_in_workforce_percent: {
    text: 'Women in Workforce (%)',
    type: 'number',
    format: ',.1p',
    include: false,
  },
  pop_acs16: {
    text: 'Population (2016)',
    type: 'number',
    format: ',.0f',
    include: true,
  },

  male_female_ratio: {
    text: 'Male to female ratio',
    type: 'number',
    format: ',.2f',
    include: true,
  },
};
