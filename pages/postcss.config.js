module.exports = {
  plugins: {
    'postcss-sorting': {
      order: [
        [
          'dollar-variables',
          'at-rules',
          {
            type: 'at-rule',
            name: 'include',
            parameter: 'breakpoints\\.'
          },
          'custom-properties',
          'declarations',
          {
            type: 'rule',
            selector: /^&:\w/
          },
          {
            type: 'rule',
            selector: /^&/
          },
          'rules'
        ],
        {
          unspecified: 'bottom'
        }
      ]
    }
  }
};
