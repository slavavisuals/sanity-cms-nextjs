const FilteringMenu = ({ onChange }) => {
  return (
    <div
      className='text-2xl'
      onClick={() => {
        onChange();
      }}
    >
      Change View
    </div>
  );
};

export default FilteringMenu;
