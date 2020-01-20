/* eslint-disable no-unused-vars */
const fetch = require('node-fetch');

module.exports = {
  Query: {
    recogniseByLyrics: async (parent, { lyrics }, context, info) => {
      const responce = await fetch(
        `${process.env.AUDD_LYRICS}?api_token=${process.env.API_TOKEN}&q=${lyrics}`,
        { method: 'POST' }
      ).then(res => res.json());
      return responce;
    },
    recogniseByHumming: async (parent, { humming }, context, info) => {
      const responce = await fetch(
        process.env.AUDD_HUMMING, 
        { method: 'POST', body: { humming } }
      ).then(res => res.json());
      return responce;
    },
  },
};