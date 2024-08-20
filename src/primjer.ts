interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}
const fetchData: () => IPost = () => {
  return {
    userId: 1,
    id: 2,
    title: "Mile",
    body: "jdsakljds",
  };
  // catching data
};
