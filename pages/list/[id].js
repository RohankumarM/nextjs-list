export const getStaticPaths = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();

  const paths = data.map(list => {
    return {
      params: {
        id: list.id.toString()
      }
    }
  })

  return {
    paths: paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await response.json();

  return {
    props: {
      listOfData : data
    }
  }
}

const Details = ({listOfData}) => {
  return (  
    <div>
      <h1>{listOfData.name}</h1>
      <p>{listOfData.email}</p>
      <p>{listOfData.website}</p>
    </div>
  );
}
 
export default Details;