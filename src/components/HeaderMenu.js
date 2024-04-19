function HeaderMenu({ state }) {
  return (
    <>
      <progress max={15} value={state.index}></progress>
      <div className="HeaderMenu felx">
        <p>{state.index + 1} / 15</p>
        <p>{state.points} / 280 points</p>
      </div>
    </>
  );
}

export default HeaderMenu;
