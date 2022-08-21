const constants = {
  apiUrl: "https://api.thegraph.com/subgraphs/name/andyvargtz1/stitch",
  queries: {
    getEarnings: `{
      streamers {
        id
        earnings
      }
    } `,
  },
};

export default constants;
