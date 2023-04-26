function Card(props) {
  const { theme, infos: infoProps } = props;

  const infos = infoProps.data.map((prop, i) => {
    return (
      <div key={i} className={`${theme === 'light' ? 'text-neutral-800' : 'text-neutral-200'} w-full flex justify-between`}>
        <span className="font-bold">{prop.label}</span>
        <span>{prop.value}</span>
      </div>
    );
  });

  return (
    <div className={`${theme === 'light' ? 'bg-neutral-200 text-neutral-800' : 'bg-neutral-800 text-neutral-200'} w-full p-10 rounded-lg mt-5`}>
      <h3 className="font-bold mb-5">{infoProps.title || infoProps.name}</h3>
      {infos}
    </div>
  );
}

export default Card;
