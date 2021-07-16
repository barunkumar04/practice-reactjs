
//This is an demo for conditional rendering

function UserHourSpent(){
    return (
    <h5>Congratulations!! So far you have spent 60+ hours. 40 more hours to unlock premium membership benefits.</h5>
    );
}

function AllUserHourSpent(){
    return (
    <>
        <h5>Users spent 600+ hours to read fictional books.</h5>
        <h5>Users spent 1300+ hours to read non-fictional books.</h5>
    </>
    );
}

function App3(props) {
  return (
   <>
    {props.isUser?<UserHourSpent/> : <AllUserHourSpent/>};
   </>
  );
}

export default App3;