import React from 'react'
import PropTypes from 'prop-types'
import { HomePageTemplate } from '../../templates/home-page'

const HomePagePreview = ({ entry }) => {
  return (
    <HomePageTemplate
      title={entry.getIn(['data', 'title'])}
      subTitle={entry.getIn(['data', 'subTitle'])}
      description={entry.getIn(['data', 'description'])}
      email={entry.getIn(['data', 'email'])}
    />
  )
}

HomePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default HomePagePreview
