
//This is an demo for conditional rendering

function UserHourSpent(){
    return (
    <h5>Congratulations!! So far you have spent 60+ hours. 40 more hours to unlock premium membership benefits.</h5>
    );
}

function AllUserHourSpent(){
    return (
    <>
        <h5>Readers spent 600+ hours to read fictional books and 1300+ hours to read non-functional books</h5>
    </>
    );
}

function AppToDemoConditionalRendering(props) {
  return (
   <>
    {props.isAdmin?<AllUserHourSpent/> : <UserHourSpent/>}
   </>
  );
}

export default AppToDemoConditionalRendering;