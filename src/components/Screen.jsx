import "../styles/Screen.css"
function Screen({ screenResult }) {
  return (
    <form>
      <input value={screenResult}/>
    </form>
  );
}

export default Screen;
