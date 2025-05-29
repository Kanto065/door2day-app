const Stats = () => {
  const stats = [
    {
      id: 1,
      value: '270+',
      label: 'Appointments booked On Sofa Upholstery'
    },
    {
      id: 2,
      value: '100+',
      label: 'Partner Businesses'
    },
    {
      id: 3,
      value: '5+ Countries',
      label: 'Using Sofa Upholstery'
    },
    {
      id: 4,
      value: '100+',
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
