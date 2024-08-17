

const StatCard = ({ title, value, icon: Icon, iconStyle }) => {
  return (
    <article className=" bg-white flex-1 gap-2 shadow-md rounded-lg p-4 flex items-center">
      <div className={`p-3 rounded-full  text-white mr-4 ${iconStyle}`}>
        <Icon className="text-2xl" />
      </div>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-xl font-bold">{value}</p>
      </div>
    </article>
  );
};

export default StatCard;