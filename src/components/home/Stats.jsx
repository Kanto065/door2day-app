const Stats = () => {
  const stats = [
    {
      id: 1,
      value: '1 Billion +',
      label: 'Appointments booked On Door2day'
    },
    {
      id: 2,
      value: '110,00+',
      label: 'Partner Businesses'
    },
    {
      id: 3,
      value: '120+ Countries',
      label: 'Using Door2day'
    },
    {
      id: 4,
      value: '450,000+',
      label: 'Stylists And Professionals'
    }
  ];

  return (
    <div className="bg-secondary py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.id} className="text-white">
              <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-white/80 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
