import './App.css';

const singers = [
  { name: 'Dr. Mahfuz', job: 'Singer' },
  { name: 'Eva Rahman', job: 'Singer2' },
  { name: 'Agun', job: 'sopno' },
  { name: 'Shuvro', job: 'pathor' },
];

function App() {
  const nayoks = [
    'Rubel',
    'BappaDa',
    'Kuber',
    'Jashim',
    'Salman Shah',
    'Riyaz',
    'Razzak',
    'Anwar',
  ];
  console.log(singers);
  return (
    <div className='App'>
      {nayoks.map((nayok) => (
        <li>Name: {nayok}</li>
      ))}
      {/* {nayoks.map((nayok) => (
        <Person name={nayok} />
      ))} */}

      {singers.map((singer) => (
        <Person name={singer.name} />
      ))}

      {/* <Person name={nayoks[0]} nayika='moushumi' />
      <Person name='BappaRaz' nayika='cheka' />
      <Person name='Kuber' nayika='Kopila' />
      <Person /> */}

      <h5>New component....</h5>
      <p>rock mama React mama.</p>
      <Friend movie='Shingam' phone='01777777' />
      <Friend phone='019999999999' />
      <Friend />
    </div>
  );
}
function Person(props) {
  //console.log(props);
  return (
    <div className='person'>
      <h1>{props.name}</h1>
      {/* <p>Nayika: {props.nayika}</p> */}
    </div>
  );
}

function Friend(props) {
  // console.log(props);
  return (
    <div className='container'>
      <h3>Name: {props.movie}</h3>
      <p>Phone: {props.phone}</p>
    </div>
  );
}

export default App;
