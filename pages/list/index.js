import styles from '../../styles/List.module.css';
import Link from 'next/link';

export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();

  return {
    props: {
      listOfData: data
    }
  }
}

const List = ({ listOfData }) => {
  return (
    <div>
      <h1>List</h1>
      {listOfData.map(list => (
        <Link href={`/list/${list.id}`} key={list.id}>
          <a className={styles.single}>
            <h3>{list.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
}

export default List;
