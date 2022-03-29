const Reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return {
        TotQuan: action.payload,
        total: state.TotQuan * 125,
      };
  }
};

export default Reducer;
