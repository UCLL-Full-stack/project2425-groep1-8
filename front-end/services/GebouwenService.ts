
const getAllGebouwen = async () => {
  return await fetch(process.env.NEXT_PUBLIC_API_URL + '/gebouwen', {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

const GebouwenService = {
  getAllGebouwen
}
export default GebouwenService;

