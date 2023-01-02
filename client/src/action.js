export const login = (memberId) => {
  return {
    type: 'LOG_IN',
    payload: {
      memberId,
    },
  };
};

export const logout = () => {
  return { type: 'LOG_IN' };
};
